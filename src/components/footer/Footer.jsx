import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about__container">
        <h2 className="footer--headings">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          labore veritatis tempora cumque, fuga nostrum itaque ab recusandae
          modi velit, quos odio fugit voluptates in animi laboriosam, quo
          provident exercitationem!
        </p>
        <div className="about__container--logo">
          <img src="src/assets/img-2.svg" alt="alien" className="about--logo" />
          <h1>SPACE</h1>
          <span>TOURISM</span>
        </div>
      </div>
      <div className="contact-info__container">
        <h2 className="footer--headings">Contact Info</h2>
        <p>
          <span>Address:</span>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Amet ten
        </p>
        <p>
          <span>Phone:</span> 1234567890
        </p>
        <span>info@domain.com</span>
      </div>
      <div className="important-link__container">
        <h2 className="footer--headings">Important Links</h2>
        <span>Products</span>
        <span>Services</span>
        <span>Sign Up</span>
      </div>
      <div className="newsletter__container">
        <h2 className="footer--headings">Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          saepe modi corrupti, libero, deserunt omnis necessitatibus ex quas
          dolores assumenda similique. Incidunt porro officiis accusantium ab
          repellendus, laborum ullam quidem.
        </p>
        <div className="newsletter__container--input">
          <input placeholder="Email Address" />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
