import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <section className={styles.section_1}>
        <div className={styles.heading_container}>
          <div className={styles.text_wrapper}>
            <h1>
              <span>Twitch</span>
              <span>Moments</span>
              <span>Tracker</span>
            </h1>
            <p>Nulla in elit sapien. Donec euismod lacinia odio, ut rutrum tellus dictum eu. Vivamus sed pretium ligula. Nam et nisi fringilla, egestas nisi ac, rhoncus justo.</p>
            <button>Get Started</button>
          </div>

          <svg></svg>
        </div>
        <div className={styles.image_wrapper}>{/* <Image src="/pGWvsOVpAc0puLIr.png" layout="fill" /> */}</div>
      </section>
    </main>
  );
};

export default Home;
