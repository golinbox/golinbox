import Footer from "../Footer/Footer";
import Navigation from "../Navigation/nav";
import User from "../Pagination/user";

function Resources() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
      </section>
      <section className="my-data">
        <User />
      </section>
      <Footer />
    </section>
  );
}

export default Resources;
