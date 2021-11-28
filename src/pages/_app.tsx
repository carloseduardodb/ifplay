import "./../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import FooterAdmin from "../components/Dashboard/Footer";
import { AuthProvider } from "../contexts/AuthContext";
import { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { teacher } = useAuth();

  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname.includes("/dashboard") && !teacher) {
      Router.push("/login");
    }
  }, []);

  //display dashboard
  return (
    <AuthProvider>
      {router.pathname.indexOf("/dashboard") !== -1 ? (
        <>
          <Head>
            <title>IF (PLAY) - Dashboard</title>
          </Head>
          <Sidebar />
          <div className="relative md:ml-64 flex flex-col min-h-screen justify-between">
            <div className="flex flex-col">
              <Navbar />
              <Component {...pageProps} />
              <FooterAdmin />
            </div>
          </div>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
