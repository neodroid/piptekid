import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./component/header";
import Footer from "./component/footer";
import { Global, css } from "@emotion/core";
import theme from "../theme";
import { motion } from "framer-motion";

const breakpoints = ["480px", "768px", "1125px", "1440px"];

function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Global
        styles={css`
          @font-face {
             {
              font-family: "Roboto";
              src: url("/fonts/Roboto-Regular.ttf");
            }
          }
          @font-face {
             {
              font-family: "Roboto-Black";
              src: url("/fonts/Roboto-Black.ttf");
            }
          }
          @font-face {
            {
             font-family: "Roboto-Thin";
             src: url("/fonts/Roboto-Thin.ttf");
           }
         }
         ::-webkit-scrollbar{
          width: 10px;
        }
        ::-webkit-scrollbar-track{
          background: #edebeb;
        }
        ::-webkit-scrollbar-thumb{
          background: rgba(158, 158, 158,0.4);
          border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:hover{
          background: rgba(158, 158, 158,0.8);
          border-radius: 8px;
        }
        `}
      />
      <Header/>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
