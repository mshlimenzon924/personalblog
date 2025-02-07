import Link from "next/link";

const Header = () => {
    return (
        <nav className="bg-gradient-to-r from-[#bd185d] to-[#861845] p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
            <Link href="/" className="text-white text-lg font-medium hover:opacity-80 transition">Home</Link>
            <Link href="/travel" className="text-white text-lg font-medium hover:opacity-80 transition">Travel</Link>
            <Link href="/events" className="text-white text-lg font-medium hover:opacity-80 transition">Events</Link>
            <Link href="/lifestyle" className="text-white text-lg font-medium hover:opacity-80 transition">Lifestyle</Link>
        </div>
        </nav>
    );
    };

export default Header;