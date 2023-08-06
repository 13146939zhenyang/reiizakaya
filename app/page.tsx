'use client'
import { Navbar } from "@/components"
import { Logo, Name, Icon, HomeBg, Menu1, Menu2, Menu3, Menu4, P1, P2, P3, P4, P5, P6, P7, P8 } from '@/public'
import { Image } from 'antd'

export default function Home() {
  return (
    <main className='relative w-screen'>
      <Navbar />
      <div className="w-screen md:pt-[300px] pt-[120px]">
        <div className="" id='about-us'>
          <div className="mx-4 md:mx-40 my-5 md:my-10 flex flex-col gap-2 md:gap-4 text-[14px] md:text-xl text-justify">
            <p>Izakaya (居酒屋) is made up of three kanji with the meaning, in order, “stay-drink-place.”</p>
            <p>
              In Japan, Izakaya are places where people come to unwind with co-workers and friends. Especially after a long days work, it’s important for workers to find a place they can kick back and enjoy their hard-earned day over drinks and tasty snacks in the company of their friends and co workers.
            </p>
            <p>As a typical Izakaya in Sydney, we make it our priority to ensure you have a place to sit back, kick back and relax over our Yakitori, Oden and our Japanese beverages, including and not limited to Japanese tap beer, sake and whiskys.</p>
          </div>
          <img src={HomeBg.src} alt='reiizakaya-syd-home-bg' className="pt-5" />
        </div>
        <div className="w-screen justify-center sm:justify-start flex flex-row flex-wrap pb-5 gap-x-6 gap-y-10 overflow-hidden" id='menu'>
          <swiper-container
            class="menu-swiper"
            slides-per-view="auto"
            space-between="10"
            autoplay='true'
            grab-cursor="true"
            scrollbar="true"
            zoom="true"
          >
            <swiper-slide className="bg-transparent">
              <Image.PreviewGroup
                items={[
                  Menu1.src,
                  Menu2.src,
                  Menu3.src,
                  Menu4.src,
                ]}
              >
                <Image
                  className="md:w-[680px] w-[400px] p-3"
                  src={Menu1.src}
                />
              </Image.PreviewGroup>
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <Image.PreviewGroup
                items={[
                  Menu1.src,
                  Menu2.src,
                  Menu3.src,
                  Menu4.src,
                ]}
              >
                <Image
                  className="md:w-[680px] w-[400px] p-3"
                  src={Menu2.src}
                />
              </Image.PreviewGroup>
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <Image.PreviewGroup
                items={[
                  Menu1.src,
                  Menu2.src,
                  Menu3.src,
                  Menu4.src,
                ]}
              >
                <Image
                  className="md:w-[680px] w-[400px] p-3"
                  src={Menu3.src}
                />
              </Image.PreviewGroup>
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <Image.PreviewGroup
                items={[
                  Menu1.src,
                  Menu2.src,
                  Menu3.src,
                  Menu4.src,
                ]}
              >
                <Image
                  className="md:w-[680px] w-[400px] p-3"
                  src={Menu4.src}
                />
              </Image.PreviewGroup>
            </swiper-slide>
          </swiper-container>

        </div>
        <div className="w-screen my-5 md:my-20 py-5" id='news'>
          <div className="bg-white md:mx-40 mx-5 flex justify-center items-center mb-4 md:p-4 p-2">
            <div className="w-full bg-[#173448] md:px-[130px] px-5 md:py-[180px] py-7">
              <p className="uppercase md:tracking-widest tracking-tighter md:text-2xl text-xs md:mb-[50px] mb-[10px]">To dear valued customers</p>
              <p className="md:tracking-widest tracking-tighter md:text-2xl text-xs text-center md:mb-[20px] mb-[5px]">Please be informed that</p>
              <p className="capitalize md:text-6xl text-xl text-center"> we are <span className="text-[#B11F24]">colsed</span></p>
              <p className="md:tracking-widest tracking-tighter md:text-2xl text-xs text-center md:mb-[40px] mb-[12px]">for a private event</p>
              <p className="capitalize md:text-6xl text-lg text-center md:mb-[80px] mb-[20px]"> 04/08/2023 <span className="text-[#B11F24]">Friday</span></p>
              <p className="md:tracking-widest tracking-tighter md:text-2xl text-xs text-center">We apologize for any inconvenience</p>
              <p className="md:tracking-widest tracking-tighter md:text-2xl text-xs text-center">Thank you for your understanding</p>
              <p className="md:tracking-widest tracking-tighter md:text-2xl text-xs text-center md:mb-40 mb-10">and look forward to serving you soon</p>
              <div className='md:mx-40 mx-10 flex justify-center items-center mb-4'>
                <img src={Logo.src} alt="reiizakaya-logo" className='md:w-[161px] w-[60px] md:mr-6 mr-1 md:mt-1' />
                <img src={Icon.src} alt="reiizakaya-icon" className='md:w-[286px] w-[100px] md:mr-5 mr-1' />
                <img src={Name.src} alt="reiizakay-name" className='md:w-[224px] w-[70px] md:mt-5 mt-1' />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen justify-center sm:justify-start flex flex-row flex-wrap pb-5 gap-x-6 gap-y-10 overflow-hidden" id='pictures'>
          <swiper-container
            class="photo-swiper"
            slides-per-view="auto"
            space-between="1"
            autoplay='true'
            grab-cursor="true"
            scrollbar="true"
            zoom="true"
          >
            <swiper-slide className="bg-transparent">
              <Image.PreviewGroup
                items={[
                  P1.src,
                ]}
              >
                <Image
                  className="md:w-[480px] w-[200px] md:px-2 px-1"
                  src={P1.src}
                />
              </Image.PreviewGroup>
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P2.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P3.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P4.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P5.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P6.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P7.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={P8.src} alt="" className="md:w-[480px] w-[200px] md:px-2 px-1" />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="w-screen my-5 md:my-20 py-5" id='contact-booking'>
          <div className=" md:mx-40 mx-5 flex flex-col mb-4 md:p-4 p-2">
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">You can find us with @rei_izakaya on Instagram & Facebook</p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] mb-6">Your feedback also means the world to us.</p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">For bookins please contact <a href='tel:0404517777'>
              0404 517 777
            </a></p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">Reservations for groups of 4 and above only at the moment.</p>
            <p className="md:tracking-widest tracking-tighter md:text-2xl text-[14px] md:mb-1 mb-[2px]">Sorry for any inconvenience.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
