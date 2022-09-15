import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserWrapper } from "../context/UserContext";
import { ProductWrapper } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <ProductWrapper>
        <Component {...pageProps} />
        <Toaster />
      </ProductWrapper>
    </UserWrapper>
  );
}

export default MyApp;
