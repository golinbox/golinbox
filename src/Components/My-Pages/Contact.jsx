import CtFooter from "../Footer/Contact-Footer";
import Navigation from "../Navigation/nav";

function Contact() {
  return (
    <section className="container">
      <section className="navigation">
        <Navigation />
      </section>
      <section class="abt-head">
        <div class="abt-margin">
            <div class="abt-h1">
                <h1>Contact Handyman 24x7 Through Form, Chat, Email or Call</h1>
            </div>
            <div class="abtus-img">
                <img src="/Project Image/contact-01.svg" alt="" width="100%" />
            </div>
        </div>

    </section>

    <section class="form-field">
        <form action="text" class="info" onsubmit="sendEmail(); reset(); return false">
            <input type="text" id="Name" placeholder="Your Name" required/>
            <input type="email" id="Email" placeholder="Email Id" required/>
            <input type="text" id="Phone" placeholder="Phone No" required/>
            <textarea id="Message" rows="4" placeholder="Type your Message"></textarea>
            <button href="mailto:jrmholawale@gmail.com" type="submit" title="Submit">Send Message</button>
        </form>
        
        <div class="form-info">
            <h4>GoLinbox is a strong team of passionate email marketing handyman helping marketing agencies as well individual business
            meet their marketing objectives through highly visual email templates created adhering to strict coding practices for a
            choice of your ESP. Creative designers and tech integrators are highly motivated to deliver every single job after
            rigorous test on Litmus.com that too in committed turn around time. <br/><br/>
            
            The landscape of email marketing is vast and ever-changing. And we invite you to participate in this interesting
            journey. <br/><br/>
            
            We love hearing from you, please drop us a note anytime. Got any questions or suggestions, or just want to know what we
            can do to improve your campaign? </h4>
            <hr/>
            <p>21900 Burbank Blvd., 3rd Floor Woodland Hills, CA 91367</p>
            <ul>
                <li><a href="tel:09033644307"><i class="fa fa-phone-square"></i> 09033644307</a></li>
                <li><a href="mailto:jrmholawale@gmail.com"><i class="fa fa-envelope"></i> jrmholawale@gmail.com</a></li>
            </ul>
        </div>
      </section>
      <CtFooter />
    </section>
  );
}

export default Contact;
