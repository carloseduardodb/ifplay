import "./../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import FooterAdmin from "../components/Dashboard/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  //display dashboard
  if (router.pathname.indexOf("/dashboard") !== -1) {
    return (
      <div>
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
      </div>
    );
  }
  //landing page and login and logout page display
  else if (router.pathname !== "/dashboard") {
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
