import Image from "next/image";
import Card from "@/component/card";
import Maps from "@/component/maps";

export default function Home() {
  const amount = 5;

  return (
    <div className="main">
      <h1 className="capitalize text-center text-8xl text-yellow-500 font-light mb-15">Serving <b className="font-bold">Heart</b> <br /> Building <b className="font-bold">Lives</b></h1>

      {/* Vision & Mission */}
      <div className="vm border border-black p-20 py-10 mx-9 mb-20 text-center rounded-lg">
        <div className="mission">
          <h1 className="text-5xl mb-3">Mission</h1>
          <p className="px-[10%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat nisi laborum exercitationem optio, voluptate cum laudantium tenetur explicabo! Dolorem dignissimos esse quibusdam voluptate omnis nostrum dolores. Iusto minus dolorem atque eius ullam magni?</p>
        </div>
        <div className="h-[2px] w-[40%] bg-black my-6 block mx-auto"></div>
        <div className="vision">
          <h1 className="text-5xl mb-3">Vision</h1>
          <p className="px-[10%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem placeat, ab quos voluptates exercitationem sed quae, possimus nobis deserunt, error impedit porro ipsam dolorum voluptatem nemo ipsa quas recusandae voluptas. Animi, recusandae? Voluptatem!</p>
        </div>
      </div>

      {/* Warta & Berita Jemaat */}
      <div className="bg-yellow-500 p-10 px-20">
        <div className="oneLine grid grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold text-white mb-8">Warta & Berita Jemaat</h1>
          </div>
          <div className="arrow flex ml-auto items-start space-x-3">
            <div className="border-2 border-white p-2 rounded-full">
              <img className="invert w-5 h-5 scale-x-[-1]" src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
            </div>
            <div className="border-2 border-white p-2 rounded-full">
              <img className="invert w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto">
          {Array.from({ length: amount }, (_, index) => (
            <Card key={index}></Card>
          ))}
        </div>
      </div>

      {/* Kata pengantar pendeta */}
      <div className="inline-flex space-x-6 p-22">
        <div>
          <img className="rounded-xl w-250 h-100" src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww" alt="" />
        </div>
        <div className="pl-10">
          <h1 className="uppercase text-yellow-500 text-center text-5xl mb-8">shalom</h1>
          <p className="text-center text-lg text-yellow-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex inventore commodi deleniti aut reiciendis molestiae debitis adipisci aliquid non dolor delectus blanditiis consequuntur voluptate ab ipsum neque quaerat alias quas dolorem doloribus, quis aperiam? Omnis quas quis ducimus, odit ipsum nemo rem? Quae, aperiam hic!</p>
          <div className="flex items-center justify-center w-full my-8">
            <div className="h-1 w-full bg-yellow-500"></div>
            <h1 className="mx-1 capitalize text-center italic text-yellow-500 w-full">Widhi Laksana - Pastor</h1>
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
            <h1 className="uppercase text-6xl font-semibold text-white mb-8">prbk</h1>
            <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam illo placeat omnis provident illum et reiciendis at maxime consequuntur? Est vero dolorem itaque eveniet dicta? Similique neque natus saepe excepturi reprehenderit? Est, animi sed. Tempore nihil laudantium eos quibusdam laboriosam dignissimos omnis, distinctio ducimus quo saepe inventore numquam veritatis aperiam, ipsa autem dolores, odio nemo voluptatibus? Ad, hic, provident a vel eius autem, assumenda delectus in reiciendis minima facere repellendus sint. Expedita, amet! Voluptatum exercitationem </p>
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
      <footer>
        <div className="grid grid-cols-2 p-15 px-10">
          <div>
            <Maps></Maps>
          </div>
          <div className="pl-13">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <h1 className="capitalize text-2xl mb-3 font-bold text-yellow-500">alamat</h1>
                  <p className="text-sm text-yellow-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dicta? Accusantium cum voluptatem nihil fugit non hic, eligendi excepturi molestias laboriosam. Natus dolorum cupiditate vitae.</p>
                </div>
                <div>
                  <h1 className="capitalize text-2xl mb-3 font-bold text-yellow-500">kantor pusat</h1>
                  <p className="text-sm text-yellow-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, dicta? Accusantium cum voluptatem nihil fugit non hic, eligendi excepturi molestias laboriosam. Natus dolorum cupiditate vitae.</p>
                </div>
              </div>
              <div className="social inline-flex space-x-6">
                <img className="w-10 h-10" src="/asset/yt_footer.png" alt="" />
                <img className="w-10 h-10" src="/asset/ig_footer.png" alt="" />
                <img className="w-10 h-10" src="/asset/wa_footer.png" alt="" />
                <img className="w-10 h-10" src="/asset/more_footer.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="capitalize text-center text-yellow-500 pb-5">© hak cipta dilindungi undang-undang 2024 GSJA kalibanteng</h1>
      </footer>
    </div>
  );
}
