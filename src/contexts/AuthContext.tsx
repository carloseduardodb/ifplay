import React, { useState, useCallback, createContext, ReactNode } from "react";
import api from "../services/api";

type Teacher = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type AuthState = {
  token: string;
  teacher: Teacher;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  teacher: Teacher;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateTeacher(teacher: Teacher): void;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState<AuthState | any>(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("@IfPlay:token");
      const teacher = localStorage.getItem("@IfPlay:teacher");
      if (token && teacher) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, teacher: JSON.parse(teacher) };
      }
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("teacher/login", { email, password });
    const { token, teacher } = response.data;
    const sanitizeToken = token.token;
    localStorage.setItem("@IfPlay:token", sanitizeToken);
    localStorage.setItem("@IfPlay:teacher", JSON.stringify(teacher));

    api.defaults.headers.authorization = `Bearer ${sanitizeToken}`;

    setData({ sanitizeToken, teacher });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@IfPlay:token");
    localStorage.removeItem("@IfPlay:teacher");

    setData({} as AuthState);
  }, []);

  const updateTeacher = useCallback(
    (teacher: Teacher) => {
      localStorage.setItem("@IfPlay:teacher", JSON.stringify(teacher));
      setData({
        token: data.token,
        teacher,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ teacher: data.teacher, signIn, signOut, updateTeacher }}
    >
      {children}
    </AuthContext.Provider>
  );
}
