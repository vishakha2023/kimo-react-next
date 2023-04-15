import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import { CommonServices } from "./api/Common";
import highlights from "./api/highlights";
import categories from "./api/categories";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { default_img } from "../public/image/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ highlight, categori }: any) {
  const router = useRouter();
  const { arrowbutton, catearrow, Ellipse10 } = default_img;
  const handleClick = (data: any) => {
    const route = data.split(" ").join(" ");
    router.push(`/highlights/${route}`);
  };
  const handleCate = (name: any) => {
    const route = name;
    router.push(`/categories/${route}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
      <Header />
      <section className="highlights">
        <span className="highname">Highlights</span>
        {highlight.map((curElem: any) => {
          return (
            <div className={curElem.title}>
              <Image
                src={curElem.image}
                alt=""
                className="highimg1"
                layout="responsive"
                width={100}
                height={100}
              />
              <div className="details">
                <span className="head">{curElem.title}</span>
                <p className="desc">{curElem.description}</p>
              </div>
              <div className="arrowmain">
                <button>
                  <Image
                    src={arrowbutton}
                    alt=""
                    className="arrowbutton"
                    onClick={() => handleClick(curElem.title)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section className="catetravel">
        <div className="rectangle">
          <div className="category">
            <span className="catename">Catergories</span>
            <ul className="cateTypes">
              {categori.map((category: any) => {
                return (
                  <li className="types">
                    <span className="listname">{category.name}</span>
                    <button>
                      <Image
                        src={catearrow}
                        alt=""
                        className="catearrow"
                        onClick={() => handleCate(category.name)}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="travelguide">
            <span className="travelname">Travel Guide</span>
            <div className="travelcontainer">
              <div className="travelrectangle">
                <p className="hadwinname">Hadwin Malone</p>
                <p className="guide">Guide since 2012</p>
                <button className="contactbutton">
                  <span className="contact">Contact</span>
                </button>
              </div>
              <div className="imgGuide">
                <Image src={Ellipse10} alt="" className="guideimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
export async function getServerSideProps(context: any) {
  const response = await fetch("https://web-dev.dev.kimo.ai/v1/highlights", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseCate = await fetch(
    "https://web-dev.dev.kimo.ai/v1/categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const dataCate = await responseCate.json();

  return {
    props: {
      categori: dataCate,
      highlight: data,
    },
  };
}
