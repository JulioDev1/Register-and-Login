import { GlobalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { FormContainer } from "./_styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormContainer>
        <GlobalStyles />
        <Component {...pageProps} />
      </FormContainer>
    </>
  );
}
export default MyApp;
