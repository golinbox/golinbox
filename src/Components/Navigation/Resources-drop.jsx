import React from 'react'

function Resource() {
  return (
    <div>
      <div class="dropdown">
        <div class="dropdown1">
          <h2>What would you like to do?</h2>
          <p>
            GoLinbox provides every single thing an email marketer use like
            targeted and personalized design, hand-coded template, Optimization
            in terms of time and budget, Metrics and more
          </p>
        </div>

        <div class="dropdown2">
          <div class="down1">
            <div className="drop-imgtxt">
              <div class="drop-img">
                <img
                  src={"/Project Image/psd_to html_icon.svg"}
                  alt=""
                  width="20%"
                />
              </div>
              <div class="drop-txt">
                <h2>
                  <a href="/">PSD to HTML Email</a>
                </h2>
                <p>
                  Share your design and in return receive a fully hand-coded
                  responsive email template tested over 40+ email clients
                </p>
              </div>
            </div>

            <div className="drop-imgtxt">
              <div class="drop-img">
                <img
                  src={"/Project Image/email_template_audit_icon.svg"}
                  alt=""
                  width="20%"
                />
              </div>
              <div class="drop-txt">
                <h2>
                  <a href="/">PSD to HTML Email</a>
                </h2>
                <p>
                  Share your design and in return receive a fully hand-coded
                  responsive email template tested over 40+ email clients
                </p>
              </div>
            </div>
          </div>

          <div class="down2">
            <div className="drop-imgtxt">
              <div class="drop-img">
                <img
                  src={"/Project Image/email_list_verification.svg"}
                  alt=""
                  width="20%"
                />
              </div>
              <div class="drop-txt">
                <h2>
                  <a href="/">PSD to HTML Email</a>
                </h2>
                <p>
                  Share your design and in return receive a fully hand-coded
                  responsive email template tested over 40+ email clients
                </p>
              </div>
            </div>

            <div className="drop-imgtxt">
              <div class="drop-img">
                <img
                  src={"/Project Image/email_delivery_test_icon.svg"}
                  alt=""
                  width="20%"
                />
              </div>
              <div class="drop-txt">
                <h2>
                  <a href="/">PSD to HTML Email</a>
                </h2>
                <p>
                  Share your design and in return receive a fully hand-coded
                  responsive email template tested over 40+ email clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource