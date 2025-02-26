import Link from "next/link";

const Header = () => {
    return (
        <header className="navbar">
        <nav className="nav-container">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/travel" className="nav-link">Travel</Link>
                <Link href="/events" className="nav-link">Events</Link>
                <Link href="/lifestyle" className="nav-link">Lifestyle</Link>
            </nav>
        </header>
    );
    };

export default Header;