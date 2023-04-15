import React from "react";
import { default_img } from "../../public/image/image";
import Image from "next/image";
function Footer() {
  return (
    <footer className="footer">
      <div className="footermenu">
        <div className="footersub">
          <Image src={default_img.footeralpha} alt="" className="footeralpha" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
