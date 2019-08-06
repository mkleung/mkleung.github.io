import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ContactImage from "../components/images/contact"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">

          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Contact Me</h1>
          </div>

          <div className="column is-6">
            <ContactImage />
          </div>


          <div className="column is-6">
          <form method="post" action="https://formspree.io/mpakleung@gmail.com">

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                  <input name="_replyto" className="input" type="email" placeholder="email@email.com"  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea name="message" className="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
              <button className="button is-primary" type="submit">Send Email</button>

            </form>
        </div>

          
        </div>
      </div>
    </div>
    <SEO title="Home" />




  </Layout>
)

export default ContactPage
