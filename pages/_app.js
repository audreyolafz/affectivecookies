import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { CounterProvider } from "../context/state";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <CounterProvider>
          <Component {...pageProps} />
          <Analytics />
        </CounterProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
