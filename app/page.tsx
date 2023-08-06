import { Navbar } from "@/components"
import { HomeBg, Menu1, Menu2, Menu3, Menu4 } from '@/public'

export default function Home() {
  return (
    <main className='relative w-screen'>
      <Navbar />
      <div className="w-screen md:pt-[300px] pt-[120px]">
        <div className="" id='about-us'>
          <div className="mx-4 md:mx-40 my-2 md:my-10 flex flex-col gap-2 md:gap-4 text-[14px] md:text-xl text-justify">
            <p>Izakaya (居酒屋) is made up of three kanji with the meaning, in order, “stay-drink-place.”</p>
            <p>
              In Japan, Izakaya are places where people come to unwind with co-workers and friends. Especially after a long days work, it’s important for workers to find a place they can kick back and enjoy their hard-earned day over drinks and tasty snacks in the company of their friends and co workers.
            </p>
            <p>As a typical Izakaya in Sydney, we make it our priority to ensure you have a place to sit back, kick back and relax over our Yakitori, Oden and our Japanese beverages, including and not limited to Japanese tap beer, sake and whiskys.</p>
          </div>
          <img src={HomeBg.src} alt='reiizakaya-syd-home-bg' className="pt-5" />
        </div>
        <div className="w-screen justify-center sm:justify-start flex flex-row flex-wrap pb-5 px-10 gap-x-6 gap-y-10 overflow-hidden" id='menu'>
          <swiper-container
            class="menu-swiper"
            slides-per-view="auto"
            space-between="10"
            autoplay='true'
            // loop='true'
            grab-cursor="true"
            scrollbar="true"
            zoom="true"
          >
            <swiper-slide className="bg-transparent">
              <img src={Menu1.src} alt="" className="md:w-[680px] w-[300px] p-3" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={Menu2.src} alt="" className="md:w-[680px] w-[300px] p-3" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={Menu3.src} alt="" className="md:w-[680px] w-[300px] p-3" />
            </swiper-slide>
            <swiper-slide className="bg-transparent">
              <img src={Menu4.src} alt="" className="md:w-[680px] w-[300px] p-3" />
            </swiper-slide>
          </swiper-container>

        </div>
        <div className="h-[100vh]" id='news'>news</div>
        <div className="h-[100vh]" id='pictures'>pictures</div>
        <div className="h-[100vh]" id='contact-booking'>booking</div>
      </div>
    </main>
  )
}
