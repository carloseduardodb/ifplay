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
import { PlaylistProvider } from "../contexts/PlaylistContext";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { teacher } = useAuth();
  useEffect(() => {
    if (!teacher && router.pathname.includes("dashboard")) {
      Router.push("/login");
    }
  }, [teacher !== null]);
  //display dashboard
  return (
    <AuthProvider>
      <DispatchProvider>
        <PlaylistProvider>
          {router.pathname.includes("dashboard") ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : (
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          )}
        </PlaylistProvider>
      </DispatchProvider>
    </AuthProvider>
  );
}

export default App;
