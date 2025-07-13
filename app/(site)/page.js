import AchivementCounter from "../componnent/AfterHero/AchivementCounter";
import AfterHero from "../componnent/AfterHero/AfterHero";
import Footer from "../componnent/Footer/Footer";
import Hero from "../componnent/Herosection/Hero";
import LetsTalk from "../componnent/LetsTalks/LetsTalk";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />


      {/* will be 50vh in extra large screen */}
      <div style={{ position: "absolute", top: "60vh" }}>
        <AfterHero />
        <div className={styles.hhhh}>
          <AchivementCounter />
        </div>



        <div style={{ height: "600px" }}>
          <div>
            {/* <h1>hello this is hello bangladesh</h1> */}
          </div>
          <LetsTalk />
          <Footer />
        </div>


      </div>
    </main>
  );
}
