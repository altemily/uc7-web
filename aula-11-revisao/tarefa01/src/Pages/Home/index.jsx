import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
};


export default Home;
