// pages/_app.js
import '../styles/globals.css';
import '../lib/fontAwesomeSetup'; // Make sure to import the setup

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
