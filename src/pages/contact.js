import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactImage from "../components/img/contactImage"

const ContactPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <form method="post" action="https://formspree.io/mpakleung@gmail.com">
              <br />
              <h1 className="title is-bold is-spaced">Contact Me</h1>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="_replyto" className="input" type="email" placeholder="email@email.com" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea name="message" className="textarea" placeholder="Textarea" required></textarea>
                </div>
              </div>
              <br />
              <button className="button is-primary is-rounded" type="submit">Send Email</button>
            </form>
          </div>
          <div className="column is-6">
            <ContactImage />
          </div>
          <div className="column is-6"></div>
        </div>
      </div>
    </div>
    <SEO title="Contact" />
  </Layout>
)
export default ContactPage
