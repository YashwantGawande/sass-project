import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            labore veritatis tempora cumque, fuga nostrum itaque ab recusandae
            modi velit, quos odio fugit voluptates in animi laboriosam, quo
            provident exercitationem!
          </p>
          <div className="footer__container--about--logo">
            <img src="src/assets/img-2.svg" alt="alien" />
            <div>
              <h3>SPACE</h3>
              <span>TOURISM</span>
            </div>
          </div>
        </div>
        <div className="footer__container--contact">
          <h2>Contact Info</h2>
          <p>
            <span>Address:</span>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Amet ten
          </p>
          <p>
            <span>Phone:</span> 1234567890
          </p>
          <span>info@domain.com</span>
        </div>
        <div className="footer__container--links">
          <h2>Important Links</h2>
          <span>Products</span>
          <span>Services</span>
          <span>Sign Up</span>
        </div>
        <div className="footer__container--newsletter">
          <h2>Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
          <div className="footer__container--newsletter--input">
            <input placeholder="Email Address" />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
