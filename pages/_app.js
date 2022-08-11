import "../styles/globals.css";
import { ProductWrapper } from "../context/ProductContext";
import { UserWrapper } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <ProductWrapper>
        <Component {...pageProps} />
      </ProductWrapper>
    </UserWrapper>
  );
}

export default MyApp;
