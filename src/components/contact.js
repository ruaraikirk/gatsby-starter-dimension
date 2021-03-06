import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h2 className="major">Contact</h2>
        <form
          name="contact"
          method="post"
          action="/page-2/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p className="field half first">
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p className="field half">
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p className="field">
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
            </ul>
          {/*<p>
            <button type="submit">Send</button>
          </p>*/}
        </form>
      </div>
    );
  }
}