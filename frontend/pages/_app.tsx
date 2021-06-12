import React from "react";
import { AppProps } from "next/app";
import {
  createStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { printAA } from "../src/aa";

// from https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
      position: "relative",
      paddingBottom: "64px",
      boxSizing: "border-box",
    },
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  const styles = useStyles();

  React.useEffect(() => {
    printAA();

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className={styles.root}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
