import Image from "next/image";
import { usePathname } from "next/navigation";
import { default_img } from "../../public/image/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import categories from "../api/categories";
import { useRouter } from "next/navigation";
function HightlightCat({ highlight }: any) {
  const router = useRouter();
  const { arrowbutton, catearrow, Ellipse10 } = default_img;
  const currentPage = usePathname();
  const orignalPath = currentPage?.split("/");
  let lastElement = orignalPath[orignalPath?.length - 1];
  const handleCate = (name: any) => {
    const route = name;
    router.push(`/categories/${route}`);
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
        <Header />
        <section className="highactivity">
          <div className="highdesc">
            <span className="namehigh">{highlight.name}</span>
            <Image
              src={highlight.image}
              alt=""
              width={100}
              height={100}
              className="imagehigh"
            />
            <div>
              <p>{highlight.description}</p>
            </div>
          </div>
          <div className="highnames">
            <ul className="listhighname">
              {highlight.activities.map((activityname: any) => {
                return (
                  <li>
                    <span>{activityname.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="catetravel">
          <div className="rectangle">
            <div className="category">
              <span className="catename">Catergories</span>
              <ul className="cateTypes">
                {categories.map((category) => {
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
    </>
  );
}

export default HightlightCat;
export const getStaticPaths = async () => {
  const res = await fetch("https://web-dev.dev.kimo.ai/v1/highlights");
  const highlights = await res.json();
  const paths = highlights.map((highlight: any) => {
    return {
      params: { hightlightCat: highlight.title.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: any) => {
  const response = await fetch(
    `https://web-dev.dev.kimo.ai/v1/activities/${context.params.hightlightCat}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return {
    props: {
      highlight: data,
    },
  };
};
