import Navigation from "../../Navigation/nav";
import Header from "../Home/Header"
import Footer from "../../Footer/Footer";
import Animy from "./Animy";

function Home() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
      </section>
      <section className="home-body">
        <Animy />
        <Header />
        <Footer />
      </section>
    </section>
  );
}

export default Home;
