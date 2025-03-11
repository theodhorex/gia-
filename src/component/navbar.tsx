export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg py-4 px-6 flex items-center">
            <h1 className="text-2xl font-light">
                <b className="text-yellow-500 font-bold">Gia</b> Kalibanteng
            </h1>
            <ul className="flex ml-auto space-x-10 font-semibold text-yellow-500">
                <li>Misi</li>
                <li>Pelayanan</li>
                <li>Berita</li>
                <li>Cerita</li>
                <li>Menabur</li>
            </ul>
        </nav>
    );
}
