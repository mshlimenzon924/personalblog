import Link from "next/link";

export default function Header() {
    return (
    <header className="bg-gradient-to-r from-pink-700 to-pink-900 py-5 shadow-lg">
        <nav className="flex justify-center gap-10 text-white text-lg font-semibold tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/travel">Travel</Link>
            <Link href="/events">Events</Link>
            <Link href="/lifestyle">Lifestyle</Link>
        </nav>
    </header>
    );
}