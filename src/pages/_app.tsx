import "./../styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
