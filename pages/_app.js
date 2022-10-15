import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { AppWrapper } from "../context/state";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component {...pageProps} />
        {/* <AppWrapper /> */}
      </ThemeProvider>
    </SessionProvider>
  );
}
