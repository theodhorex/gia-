import Image from "next/image";
import Card from "@/component/card";

export default function Home() {
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
        <Card></Card>
      </div>
    </div>
  );
}
