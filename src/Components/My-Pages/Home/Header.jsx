import React, { useEffect, useState } from "react";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "../../../config";
import AboutVideo from "../../AboutVideo";
import Video from "../../video";
import MyServices from "./MyServices";
import Review from "./Review";

function Header() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Handle Sign-In in firebase...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  //Background Image
  // const src = "..Video/Header-Background.mp4"

  //Handle sign out...
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      alert("Signed Out");
    });
  };

  // Get redirect result...
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        //Get result...
        if (result) {
          console.log(result.user);
          //Set result
          setSignedIn(true);
        } else {
          //...
        }
      })
      .catch((error) => {
        // Log error
        console.log(error);
      });
  }, []);

  //Get auth state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  return (
    <section className="main">
      {user ? (
        <div>
          <div className="Header">
            <div className="text">
              <div style={signedIn ? {} : { display: "none" }}>
                Welcome, <div>{user.displayName}. You are signed in!</div>
              </div>
              <h1>Worlds' Biggest Email Marketing Agency</h1>
              <p>
                Start a project with us today and get your first email coded for
                free
              </p>
              <button onClick={signOut} className="button">
                <div>Sign Out</div> <p>‣</p>
              </button>
            </div>
            <div className="img">
              <img src={"/Logo/Header Img.png"} alt="" title="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="Header">
          <div className="vid">
            {/* <iframe
              width="560"
              height="315"
              src={src}
              frameborder="0"
              title="Portfolio"
              allowFullScreen
            /> */}
            <Video />
          </div>
          <div className="text">
            <div style={signedIn ? {} : { display: "none" }}>
              Sign Out Success
            </div>
            <h1>
              GoLinbox Brings Your Technical & Marketing Concepts <br />
              to Fruition.
            </h1>
            <p>
              Start a project with us today and get your first email coded for
              free
            </p>
            <div className="Header-CTA">
              <button onClick={signIn} className="button">
                <div>Learn More about Us</div> <p>‣</p>
              </button>
              <button onClick={signIn} className="button">
                <div>Try For FREE</div> <p>‣</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/*Why choose us! */}
      <div className="main-choose">
        <section class="choose" id="About">
          <div className="Features">
            <h1>Experience with...</h1>
          </div>
          <div class="choose-container">
            <div class="choose-content">
              <img
                src={"/Project Image/Home Images/Klaviyo Logo.png"}
                alt=""
                width="50%"
                title="Klaviyo"
              />
            </div>
            <div class="choose-content">
              <img
                src={"/Project Image/Home Images/Hubspot Logo.png"}
                alt=""
                width="50%"
                title="Hubspot"
              />
            </div>
            <div class="choose-content">
              <img
                src={"/Project Image/Home Images/Mailchimp Logo.png"}
                alt=""
                width="50%"
                title="Mailchimp"
              />
            </div>
            <div class="choose-content">
              <img
                src="/Project Image/Home Images/Drip Logo.png"
                alt=""
                width="50%"
                title="Drip"
              />
            </div>
          </div>
          <div class="choose-big-content">
            <div class="big-content-text">
              <h1>why you should choose GoLinbox</h1>
              <p>
                We provide full email marketing strategy development to its
                implementation including account setup, segmenting contacts,
                spam check and more.
              </p>
              <a href="mailto:jrmholawale@gmail.com">Contact Us</a>
            </div>
            <div class="big-content-vid">
              <AboutVideo />
            </div>
          </div>
        </section>
      </div>

      <section class="convert">
        <div class="converter">
          <h1>What's Our Best Package?</h1>
          <p>
            A great marketing funnel incorporated with our Full Package Services
            from audit/strategy to its implementation
          </p>
        </div>

        <div class="convert-table">
          <div class="convert-table-content">
            <div class="convert-text">
              <h3>ESTIMATED MONTHLY EXPENSES:</h3>
              <h1>
                FULL Service Package <span>($1700)</span>
              </h1>
              <p>15% OFF on your first project for 1 month.</p>
              <div class="calc">
                <a href="https://www.upwork.com/workwith/jerryolawale">
                  Get Package
                </a>
              </div>
            </div>
            <div class="rate-convert">
              <img
                src={"/Project Image/Home Images/Profile.PNG"}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      {/*more services*/}
      <section class="services" id="Services">
        <div class="service-head">
          <h1>Work Better, Spend Wiser</h1>
        </div>

        <div class="main-services">
          <div class="service">
            <img
              src={"/Project Image/Home Images/support-01.PNG"}
              alt=""
              width="30%"
            />
            <h2>
              Support <span>CRM</span>
            </h2>
            <p>
              Great customer support starts with easy communication made
              possible by friendly handymen Team available 24 hours through
              chat, <br /> email or call.
            </p>
            <a href="https://www.upwork.com/workwith/jerryolawale">
              Start Work <span>‣</span>
            </a>
          </div>
          <div class="service">
            <img
              src={"/Project Image/Home Images/Services.PNG"}
              alt=""
              width="30%"
            />
            <h2>
              Steady <span>ESP</span>
            </h2>
            <p>
              Recurring targeted campaigns for a defined purpose is executed
              well covering all of the marketing campaign life cycle phases
              including data hygiene, creative design, etc
            </p>
            <a href="https://www.upwork.com/workwith/jerryolawale">
              Start Work <span>‣</span>
            </a>
          </div>
          <div class="service">
            <img
              src={"/Project Image/Home Images/Fidelity.PNG"}
              alt=""
              width="30%"
            />
            <h2>
              Fidelity <span>PKGs</span>
            </h2>
            <p>
              With no compromise on output qualify and support time, avail every
              service at a FLAT FEE giving full control on your marketing budget
              so you don’t need to look back on recurring campaign needs.
            </p>
            <a href="https://www.upwork.com/workwith/jerryolawale">
              Start Work <span>‣</span>
            </a>
          </div>
        </div>

        {/* My Services Route Links */}
        <MyServices />
      </section>
      <section>
        <Review />
      </section>
    </section>
  );
}

export default Header;
