import React, { useEffect, useState } from "react";
import "./SideIcons.css";
import { FaWhatsapp } from "react-icons/fa";
import { GiEnvelope } from "react-icons/gi";
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const SideIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Using scrollTop for consistency
    if (document.documentElement.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="icon-container">
      <div className="iconwrapper">
        <a
          href="https://wa.me/+971542791548/?text=let me know more about the services provided by *Dimark Marketing Management*"
          target="_blank"
          rel="noreferrer"
          title="Whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="iconwrapper">
        <a href="mailto:info@dimark.ae" target="_blank" title="Email"   rel="noreferrer">
          <GiEnvelope />
        </a>
      </div>
      <div className="iconwrapper">
        <a href="tel:+971542791548" target="_blank" title="Call"   rel="noreferrer">
          <RiPhoneFill />
        </a>
      </div>
      {isVisible ? (
        <div className="iconwrapper">
          <MdOutlineKeyboardDoubleArrowUp
            onClick={scrollToTop}
            title="Scroll to Top"
          />
        </div>
      ) : null}
    </div>
  );
};

export default SideIcons;
