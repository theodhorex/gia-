export default function Card() {
    return (
        <div className="min-w-[300px]">
            <img className="w-full h-50 rounded-t-xl" src="https://www.sony.net/Products/di_photo-gallery/images/extralarge/2274.JPG" alt="" />
            <div className="bottom-body rounded-b-xl bg-white p-3 flex items-center w-full">
                <h1 className="montserrat text-xl text-yellow-500">Sekolah Minggu</h1>
                <div className="rounded-full w-fit bg-yellow-500 p-1 arrow-button ml-auto">
                    <a href="#">
                        <img className="h-5 invert" src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
