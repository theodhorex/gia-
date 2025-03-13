"use client"
import Image from "next/image";
import Card from "@/component/card";
import Maps from "@/component/maps";
import Navbar from "@/component/navbar";
import { useRef } from "react";

export default function Home() {
  const amount = 5;

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="main">
      <Navbar />

      <div className="relative flex justify-center items-center pt-[35%] sm:pt-[20%] pb-[13%] overflow-hidden">
        <img
          className="absolute top-10 lg:top-[-20px] left-[-35px] lg:left-[-70px] w-39 sm:w-40 md:w-48 lg:w-84 xl:w-64 max-w-full"
          src="/asset/wheat1.png"
          alt="Wheat Left"
        />

        <img
          className="absolute top-8 right-[-30px] w-39 sm:w-40 md:w-48 lg:w-64 xl:w-64 max-w-full"
          src="/asset/blob.png"
          alt="Blob Right"
        />

        <img
          className="absolute top-[58%] right-[-10px] w-20 sm:w-40 md:w-48 lg:w-44 xl:w-64 max-w-full"
          src="/asset/wheat2.png"
          alt="Wheat Right"
        />

        <h1 className="montserrat capitalize text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-yellow-500 font-light mb-10">
          Serving <b className="font-bold">Hearts</b> <br />
          Building <b className="font-bold">Lives</b>
        </h1>
      </div>

      {/* Vision & Mission */}
      <div className="vm border-2 border-yellow-500 p-20 py-10 mx-9 mb-20 text-center rounded-lg">
        <div className="mission">
          <h1 className="garamond text-5xl mb-3 text-yellow-500">Mission</h1>
          <p className="garamond px-[10%] text-2xl text-yellow-500">GIA Kalibanteng, we are devoted to transforming lives through the unwavering love of Christ. Guided by our commitment to faith, compassion, and community.</p>
        </div>
        <div className="h-[2px] w-[40%] bg-yellow-500 my-8 block mx-auto"></div>
        <div className="vision">
          <h1 className="garamond text-5xl mb-3 text-yellow-500">Vision</h1>
          <p className="garamond px-[10%] text-2xl text-yellow-500">GIA Kalibanteng, we are devoted to transforming lives through the unwavering love of Christ. Guided by our commitment to faith, compassion, and community.</p>
        </div>
      </div>

      {/* Warta & Berita Jemaat */}
      <div className="bg-yellow-500 p-4 sm:p-6 md:p-10">
        <div className="oneLine flex justify-between items-center grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <h1 className="montserrat text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-8">
              Warta & Berita Jemaat
            </h1>
          </div>
          <div className="arrow flex justify-end sm:ml-auto items-center space-x-3 hidden sm:flex">
            <div className="border-2 border-white p-2 rounded-full cursor-pointer">
              <img
                onClick={() => scroll("left")}
                className="invert w-5 h-5 scale-x-[-1]"
                src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                alt="Prev"
              />
            </div>
            <div className="border-2 border-white p-2 rounded-full cursor-pointer">
              <img
                onClick={() => scroll("right")}
                className="invert w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                alt="Next"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Card Container */}
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 sm:space-x-6 py-4 scrollbar-hide snap-x snap-mandatory">
          {Array.from({ length: amount }, (_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>




      {/* Kata pengantar pendeta */}
      <div className="inline-flex space-x-6 p-22">
        <div>
          <img className="rounded-xl w-400 h-100" src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww" alt="" />
        </div>
        <div className="pl-10">
          <h1 className="garamond uppercase text-yellow-500 text-center text-5xl mb-8">shalom</h1>
          <p className="montserrat text-center text-lg text-yellow-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex inventore commodi deleniti aut reiciendis molestiae debitis adipisci aliquid non dolor delectus blanditiis consequuntur voluptate ab ipsum neque quaerat alias quas dolorem doloribus, quis aperiam? Omnis quas quis ducimus, odit ipsum nemo rem? Quae, aperiam hic!</p>
          <div className="flex items-center justify-center w-full my-8">
            <div className="h-1 w-full bg-yellow-500"></div>
            <h1 className="garamond mx-1 capitalize text-center text-lg italic text-yellow-500 w-full">Widhi Laksana - Pastor</h1>
            <div className="h-1 w-full bg-yellow-500"></div>
          </div>

          <div className="grid grid-cols-3 socialMedia w-fit gap-7 block mx-auto">
            <div className="block mx-auto">
              <a href="#" target="__blank" className="inline-flex items-center border border-yellow-500 rounded-full p-2 px-5">
                <img src="/asset/insta.png" alt="" className="w-6 h-6 mr-3" />
                <span className="font-semibold text-yellow-500">Instagram</span>
              </a>
            </div>
            <div className="block mx-auto">
              <a href="#" target="__blank" className="inline-flex items-center border border-yellow-500 rounded-full p-2 px-5">
                <img src="/asset/fb.png" alt="" className="w-6 h-6 mr-3" />
                <span className="font-semibold text-yellow-500">Facebook</span>
              </a>
            </div>
            <div className="block mx-auto">
              <a href="#" target="__blank" className="inline-flex items-center border border-yellow-500 rounded-full p-2 px-5">
                <img src="/asset/wa.png" alt="" className="w-6 h-6 mr-3" />
                <span className="font-semibold text-yellow-500">Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRBK */}
      <div className="grid grid-cols-2 bg-yellow-500 p-10 px-15">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="montserrat uppercase text-6xl font-semibold text-white mb-4">prbk</h1>
            <p className="montserrat text-white text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam illo placeat omnis provident illum et reiciendis at maxime consequuntur? Est vero dolorem itaque eveniet dicta? Similique neque natus saepe excepturi reprehenderit? Est, animi sed. Tempore nihil laudantium eos quibusdam laboriosam dignissimos omnis, distinctio ducimus quo saepe inventore numquam veritatis aperiam, ipsa autem dolores, odio nemo voluptatibus? Ad, hic, provident a vel eius autem, assumenda delectus in reiciendis minima facere repellendus sint. Expedita, amet! Voluptatum exercitationem </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img className="rounded-xl" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="" />
            </div>
            <div>
              <img className="rounded-xl" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="" />
            </div>
            <div>
              <img className="rounded-xl" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="" />
            </div>
            <div>
              <img className="rounded-xl" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="pl-10">
          <img className="rounded-xl" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 px-4 max-w-full">
          {/* Maps Section */}
          <div className="mb-6 md:mb-0">
            <Maps />
          </div>

          {/* Alamat and Social Media Section */}
          <div className="pl-0 md:pl-10">
            <div className="flex flex-col justify-between h-full">
              {/* Alamat */}
              <div className="mb-6">
                <h1 className="montserrat capitalize text-2xl mb-3 font-bold text-yellow-500">Alamat</h1>
                <p className="montserrat text-sm text-yellow-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dicta? Accusantium cum voluptatem nihil fugit non hic, eligendi excepturi molestias laboriosam. Natus dolorum cupiditate vitae.
                </p>
              </div>

              {/* Kantor Pusat */}
              <div className="mb-6">
                <h1 className="montserrat capitalize text-2xl mb-3 font-bold text-yellow-500">Kantor Pusat</h1>
                <p className="montserrat text-sm text-yellow-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dicta? Accusantium cum voluptatem nihil fugit non hic, eligendi excepturi molestias laboriosam. Natus dolorum cupiditate vitae.
                </p>
              </div>

              {/* Social Media */}
              <div className="social inline-flex space-x-6">
                <img className="w-10 h-10" src="/asset/yt_footer.png" alt="Youtube" />
                <img className="w-10 h-10" src="/asset/ig_footer.png" alt="Instagram" />
                <img className="w-10 h-10" src="/asset/wa_footer.png" alt="Whatsapp" />
                <img className="w-10 h-10" src="/asset/more_footer.png" alt="More" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <h1 className="montserrat capitalize text-center text-yellow-500 py-5">© Hak Cipta Dilindungi Undang-Undang 2024 GSJA Kalibanteng</h1>
      </footer>

    </div>
  );
}
