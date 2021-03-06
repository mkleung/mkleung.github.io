import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      check: ""
    })
  }

  submit = (e) => {
    e.preventDefault();
    alert('it works!');
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="columns is-vcentered is-multiline main-feature">
            <div className="column is-6 landing-caption">
              <form method="post" action="https://formspree.io/mpakleung@gmail.com">
                <h1 className="title is-bold is-spaced">Contact Me</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input name="_replyto" className="input emailInput" type="email" placeholder="email@email.com" required />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea name="message" className="textarea" required></textarea>
                  </div>
                </div>
                <br />

                <button className="button is-rounded greenButton" type="submit">Send Email</button>

              </form>
            </div>
          </div>
        </div>
        <SEO title="Contact" />
      </Layout>
    )
  }
}
export default ContactPage
