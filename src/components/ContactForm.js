import React from "react"
import "./contactUs.scss"

const ContactForm = () => {
  return (
    <div className="contact-us">
      <div className="container contact-main-container">
        <div className="form-main">
          <div className="main-heading">
            <h1 className="pb-2">Send Us A Message</h1>
            <p className="pb-3">
              We will get back to you within 24 hours, if not right away <br />
              We look forward to meeting you!
            </p>
          </div>
          <div className="form">
            {/* <form method="post" action="https://api.hsforms.com/submissions/v3/integration/submit/2739452/e59e6be5-b605-46ed-bded-31f99f7bb5f6"> */}
            <form
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="two-inputs pb-sm-3">
                <div className="each-input mr-sm-3 pt-3 pt-sm-0">
                  <label>First Name*</label>
                  <input type="text" name="first name" />
                </div>
                <div className="each-input pt-3 pt-sm-0">
                  <label>Last Name*</label>
                  <input type="text" name="last name" />
                </div>
              </div>
              <div className="two-inputs pb-sm-3">
                <div className="each-input mr-sm-3 pt-3 pt-sm-0">
                  <label>Email*</label>
                  <input type="text" name="email" />
                </div>
                <div className="each-input pt-3 pt-sm-0">
                  <label>Phone Number*</label>
                  <input type="text" name="number" />
                </div>
              </div>
              <div className="two-inputs pb-sm-3">
                <div className="each-input mr-sm-3 pt-3 pt-sm-0">
                  <label>Company*</label>
                  <input type="text" name="company" />
                </div>
                <div className="each-input pt-3 pt-sm-0">
                  <label>Website URL*</label>
                  <input type="text" name="website url" />
                </div>
              </div>
              <div className="text-area pb-3">
                <p>Message*</p>
                <textarea cols="10" rows="4" />
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
