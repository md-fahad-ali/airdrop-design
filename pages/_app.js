import "@/styles/globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import manifestUrl from "./ton_config/tonconnect-manifest.json";

export default function App({ Component, pageProps }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <Component {...pageProps} />
    </TonConnectUIProvider>
  );
}
