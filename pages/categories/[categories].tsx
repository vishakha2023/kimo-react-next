import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { default_img } from "../../public/image/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import categories from "../api/categories";

export default function Categories() {
  const router = useRouter();
  const lastSegment = router.query.categories;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
      <Header />
      <section className="cateDesc">
        <h1 className="nameCate">{lastSegment}</h1>
        {categories.map((activitytitle: any) => {
          if (activitytitle.name == lastSegment) {
            return (
              <div>
                <Image src={activitytitle.img} alt="" className="imgCate" />
                <p className="detailsCate">{activitytitle.desc}</p>
              </div>
            );
          }
        })}
      </section>
      <Footer />
    </main>
  );
}
