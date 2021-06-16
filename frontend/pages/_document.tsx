import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import theme from "../src/theme";
import Script from "next/script";

// from https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <Script
            src="https://www.youtube.com/iframe_api"
            strategy="beforeInteractive"
            charSet="utf-8"
          />

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                  `,
                }}
              />
            </>
          )}

          <meta property="og:url" content="https://www.gundoumi.reisen/sei/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="郡道美玲ファンサイト (非公式)" />
          <meta
            property="og:site_name"
            content="郡道美玲ファンサイト (非公式)"
          />
          <meta
            property="og:description"
            content="このサイトはにじさんじ所属バーチャルライバー郡道美玲さんの非公式ファンサイトです。"
          />
          <meta
            property="og:image"
            content="https://www.gundoumi.reisen/og.png"
          />
          <meta property="og:locale" content="ja_JP" />

          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@lambdasawa"></meta>
          <meta
            name="twitter:description"
            content="郡道美玲ファンサイト (非公式)"
          ></meta>
          <meta
            name="twitter:image:src"
            content="https://www.gundoumi.reisen/og.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
