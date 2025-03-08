import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
    <div class="footer-content">
        <div class="about-us">
            <h4>ABOUT US</h4>
            <p>StudX: The ultimate online marketplace for students, offering engineering tools, gadgets,
                clothing, and rental rooms, all in one convenient platform.</p>
        </div>
        <p>&copy; 2024 StudX. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@moviefiesta.com">support@studx.com</a></p>
        <div class="social-icons">
            <a href="https://twitter.com" target="_blank"><i class="bx bxl-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="bx bxl-instagram"></i></a>
            <a href="https://discord.com" target="_blank"><i class="bx bxl-discord"></i></a>
        </div>
    </div>

</footer>
  );
};

export default Footer;
