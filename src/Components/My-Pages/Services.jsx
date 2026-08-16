import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/nav";

function Services() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
      </section>
      <div className="message">
        <div className="page-content">
          <h1>You arrived here too soon!</h1>
          <p>Try checking back in few weeks.</p>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Services;
