import "../styles/globals.css";
import { ProductWrapper } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductWrapper>
      <Component {...pageProps} />
    </ProductWrapper>
  );
}

export default MyApp;
