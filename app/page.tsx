"use client";
import { Navbar } from "@/components";
import { HomeBg } from "@/public";
import { Image as DefaultImage } from "antd";
import Image from "next/image";
import m1 from "@/public/menu/m1.jpg";
import m2 from "@/public/menu/m2.png";
import m3 from "@/public/menu/m3.png";
import m4 from "@/public/menu/m4.png";
import m5 from "@/public/menu/m5.png";
import m6 from "@/public/menu/m6.png";
import m7 from "@/public/menu/m7.png";
import m10 from "@/public/menu/m10.jpg";
import i1 from "@/public/menu/i1.jpg";
import i2 from "@/public/menu/i2.jpg";
import i3 from "@/public/menu/i3.jpg";
import i4 from "@/public/menu/i4.jpg";
import i5 from "@/public/menu/i5.jpg";
import i6 from "@/public/menu/i6.jpg";
import i7 from "@/public/menu/i7.jpg";
import i8 from "@/public/menu/i8.jpg";
import i9 from "@/public/menu/i9.jpg";
import qr from "@/public/menu/qr.png";
import news from "@/public/menu/news1.jpg";

export default function Home() {
  const images = [
    i1.src,
    i2.src,
    i3.src,
    i4.src,
    i5.src,
    i6.src,
    i7.src,
    i8.src,
    i9.src,
  ];
  return (
    <main className="relative w-screen">
      <Navbar />
      <div className="w-screen md:pt-[300px] pt-[120px]">
        <div className="" id="about-us">
          <div className="w-full aspect-[250/121] relative">
            <Image
              src={HomeBg.src}
              alt="reiizakaya-syd-home-bg"
              fill
              className="py-5 mx-auto"
              loading="lazy"
            />
          </div>
          <div className="mx-4 md:mx-40 my-5 md:my-10 flex flex-col gap-2 md:gap-4 text-[14px] md:text-xl text-justify">
            <p>
              Izakaya (居酒屋) is made up of three kanji with the meaning, in
              order, “stay-drink-place.”
            </p>
            <p>
              In Japan, Izakaya are places where people come to unwind with
              co-workers and friends. Especially after a long days work, it’s
              important for workers to find a place they can kick back and enjoy
              their hard-earned day over drinks and tasty snacks in the company
              of their friends and co workers.
            </p>
            <p>
              As a typical Izakaya in Sydney, we make it our priority to ensure
              you have a place to sit back, kick back and relax over our
              Yakitori, Oden and our Japanese beverages, including and not
              limited to Japanese tap beer, sake and whiskys.
            </p>
          </div>
        </div>
        <div
          className="w-screen justify-center sm:justify-start flex flex-row flex-wrap pb-5 gap-x-6 gap-y-10 overflow-hidden"
          id="menu"
        >
          <swiper-container
            class="menu-swiper"
            slides-per-view="auto"
            space-between="0"
            autoplay="true"
            grab-cursor="true"
            scrollbar="true"
            zoom="true"
          >
            <swiper-slide className="bg-transparent">
              <DefaultImage.PreviewGroup
                items={[m1.src, m2.src, m3.src, m4.src, m5.src, m6.src, m7.src]}
              >
                <DefaultImage className="w-[50%] p-3" src={m1.src} />
              </DefaultImage.PreviewGroup>
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <DefaultImage.PreviewGroup
                items={[m1.src, m2.src, m3.src, m4.src, m5.src, m6.src, m7.src]}
              >
                <DefaultImage className=" p-3" src={m10.src} />
              </DefaultImage.PreviewGroup>
            </swiper-slide>
          </swiper-container>
        </div>
        <div
          className="w-screen justify-center sm:justify-start flex flex-row flex-wrap pb-5 gap-x-6 gap-y-10 overflow-hidden"
          id="gallery"
        >
          <swiper-container
            class="photo-swiper"
            slides-per-view="auto"
            space-between="1"
            autoplay="true"
            grab-cursor="true"
            scrollbar="true"
            zoom="true"
          >
            {images.map((image, index) => (
              <swiper-slide className="bg-transparent" key={index}>
                <DefaultImage.PreviewGroup items={images}>
                  <DefaultImage
                    className="md:w-[480px] w-[200px] md:px-2 px-1"
                    src={image}
                    loading="lazy"
                  />
                </DefaultImage.PreviewGroup>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <div className="lg:max-w-2xl lg:mx-auto w-screen p-5" id="news">
          <div className="w-full aspect-square relative">
            <Image src={news.src} alt="news" fill loading="lazy" />
          </div>
        </div>
        <div className="w-screen my-5 md:my-20 py-20" id="contact-booking">
          {/* <div className="flex items-center justify-center">
            <InsModal />
          </div> */}
          <div className="flex justify-center items-center my-10  bg-white pb-4">
            <div className="relative w-[250px]">
              <Image
                src={qr.src}
                alt="instagram"
                width={500}
                height={500}
                className="w-full mt-5"
                loading="lazy"
              />
            </div>
          </div>
          <div className=" md:mx-40 mx-5 flex flex-col mb-4 md:p-4 p-2">
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              You can find us with @rei_izakaya on Instagram & Facebook
            </p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] mb-6">
              Your feedback also means the world to us.
            </p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              For bookins please contact{" "}
              <a
                className=" underline drop-shadow-[0_0_5px] drop-shadow-white"
                href="tel:0404517777"
              >
                0404 517 777
              </a>
            </p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              Reservations for groups of 4 and above only at the moment.
            </p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              Sorry for any inconvenience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
