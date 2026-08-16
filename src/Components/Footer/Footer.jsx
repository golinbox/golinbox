import React from "react";

function Footer() {
  return (
    <section>
      <footer className="container-last">
        <section className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Start a Project with us?</h3>
            <a href="/contact">Contact Us</a>
            <p>You get 3 email templates for free on your first project</p>
          </div>
        </section>
        <div className="top"></div>
        <div className="newsletter-txt">
          <p>
            <strong>SUBSCRIBE NEWSLETTER</strong> FOR CREATIVE EMAIL MARKETING
            IDEAS
          </p>
        </div>
        <div className="newsletter">
          <input
            type="email"
            className="subscribe"
            placeholder="⊠ Email Address"
            required
          />
          <a href="/" type="submit" className="submit">
            SUBSCRIBE
          </a>
        </div>
        <div className="footer-main">
          <div className="footer-col">
            <h2>SERVICES</h2>
            <hr />
            <ul>
              <li>
                <a href="/">Email & Newsletter</a>
              </li>
              <li>
                <a href="/">Campaign Management</a>
              </li>
              <li>
                <a href="/">Vendor Selection</a>
              </li>
              <li>
                <a href="/">Landing Page</a>
              </li>
              <li>
                <a href="/">Email Automation</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>SERVICES</h2>
            <hr />
            <ul>
              <li>
                <a href="/">Email & Newsletter</a>
              </li>
              <li>
                <a href="/">Campaign Management</a>
              </li>
              <li>
                <a href="/">Vendor Selection</a>
              </li>
              <li>
                <a href="/">Landing Page</a>
              </li>
              <li>
                <a href="/">Email Automation</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>SERVICES</h2>
            <hr />
            <ul>
              <li>
                <a href="/">Email & Newsletter</a>
              </li>
              <li>
                <a href="/">Campaign Management</a>
              </li>
              <li>
                <a href="/">Vendor Selection</a>
              </li>
              <li>
                <a href="/">Landing Page</a>
              </li>
              <li>
                <a href="/">Email Automation</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>SERVICES</h2>
            <hr />
            <ul>
              <li>
                <a href="/">Email & Newsletter</a>
              </li>
              <li>
                <a href="/">Campaign Management</a>
              </li>
              <li>
                <a href="/">Vendor Selection</a>
              </li>
              <li>
                <a href="/">Landing Page</a>
              </li>
              <li>
                <a href="/">Email Automation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <div className="dec">
            <hr />
            <hr />
          </div>
          <div className="social-icons">
            <a title="Facebook" href="/">
              <i class="fa fa-facebook"></i>
            </a>
            <a title="Instagram" href="/">
              <i class="fa fa-instagram"></i>
            </a>
            <a title="LinkedIn" href="/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a title="Twitter" href="/">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
          <div className="dec">
            <hr />
            <hr />
          </div>
        </div>
        <div className="copy">
          <p>Copyright © 2022 GoLinbox, LLC. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
