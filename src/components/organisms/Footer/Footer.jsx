import React from "react";
import "./footer.css";
const Footer = ({
  logoSrc,
  description,
  facebookIcon,
  instagramIcon,
  youtubeIcon,
  linkedinIcon,
}) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <img src={logoSrc} alt="BigHaat Logo" className="footer__logo" />
          <p className="footer__description">{description}</p>
        </div>
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="footer__social-icon"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="footer__social-icon"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src={youtubeIcon}
              alt="Youtube"
              className="footer__social-icon"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src={linkedinIcon}
              alt="Linkedin"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="footer__navigation">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Reach Us</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Media Links</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Return & Refund Policy</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Terms of Service</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Careers</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Shipping/Delivery Policy</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">FAQ</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Sitemap</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Sell on BigHaat</a>
          </li>
          <li className="footer__nav-item">
            <a href="#">Bulk Order Inquiries</a>
          </li>
        </ul>
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="#">Contact Us</a>
          </li>
          <li className="footer__nav-item">
            <span className="footer__contact">
              Missed Call To Order: 1800 3000 2434
            </span>
          </li>
          <li className="footer__nav-item">
            <span className="footer__contact">Whatsapp: +91 8050 797979</span>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p className="copyright">
          Copyright © 2023 BigHaat Agro Private Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
