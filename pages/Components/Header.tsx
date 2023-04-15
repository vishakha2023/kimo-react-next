import React from "react";
import Image from "next/image";
import { default_img } from "../../public/image/image";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const { headerimg, alphaimg, menuitems, welcomehawai, close } = default_img;
  const handlefront = () => {
    router.push(`/`);
  };
  return (
    <header className="sticky-top">
      <div className="navbar-right">
        {/* <div className='closebutton'>
          <Image src={close} alt="" className="close" />
          </div> */}
        <div className="menu">
          <button>
            <Image
              src={alphaimg}
              alt=""
              className="top-alpha"
              onClick={() => handlefront()}
            />
          </button>
          <Image src={menuitems} alt="" className="menu-item" />
        </div>
        <button className="book-button" type="button">
          Book a trip
        </button>
      </div>
      <Image src={welcomehawai} alt="" className="welcome-hawai" />
      <Image src={headerimg} alt="" layout="responsive" className={"image"} />
    </header>
  );
}

export default Header;
