import React from "react";
import Head from "next/head";
import BannerExercise from "./component/ExerciseComponents/BannerExercise";
import ContentExercise from "./component/ExerciseComponents/ContentExercise";
import Header from "./component/header"

export default function Exercise() {
    return (
      <div>
        <Head>
          <title>EXERCISE | PIPTEK IME FTUI</title>
          <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <Header/>
        <BannerExercise/>
        <ContentExercise/>
      </div>
    );
  }