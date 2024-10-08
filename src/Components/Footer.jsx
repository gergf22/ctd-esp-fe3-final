import React from "react";
import FooterStyles from "../Styles/Footer.module.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContexGlobal } from "./utils/global.context";

const Footer = () => {
  const {state} = useContexGlobal()
  return (
    <footer className={state.theme? "dark" : ""}>
      <div className={FooterStyles.footerConteiner}>
        <p>Powered by</p>
        <img
          className={FooterStyles.footerImg}
          src="/images/DH.png"
          alt="DH-logo"
        />
      </div>
      <div className={FooterStyles.footerConteiner}>
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <WhatsAppIcon />


      </div>
    </footer>
  );
};

export default Footer;
