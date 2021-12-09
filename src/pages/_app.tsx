import "./../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../contexts/AuthContext";
import { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "../hooks/useAuth";
import { DispatchProvider } from "../contexts/DispatchEventContext";
import AdminLayout from "../layouts/AdminLayout";
import DefaultLayout from "../layouts/DefaultLayout";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { teacher } = useAuth();
  useEffect(() => {
    if (!teacher && router.pathname.includes("dashboard")) {
      Router.push("/login");
    }
  }),
    [teacher];
  //display dashboard
  return (
    <AuthProvider>
      <DispatchProvider>
        {router.pathname.includes("dashboard") ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </DispatchProvider>
    </AuthProvider>
  );
}

export default App;
