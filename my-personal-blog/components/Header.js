import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="navbar">
        <nav className="navbar-container">
                {/* Logo on the Left */}
                <Link href="/" className="logo-container">
                    <Image src="/miralogo.png" width={120} height={120} alt="Method & Muse Logo" className="logo"/>
                    <Image src="/miralong.png" alt="Method & Muse Brand Name" width={150} height={40} className="brand-name" />
                </Link>

                {/* Navigation Links */}
                <div className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/travel" className="nav-link">Travel</Link>
                    <Link href="/events" className="nav-link">Events</Link>
                    <Link href="/lifestyle" className="nav-link">Lifestyle</Link>
                    <Link href="/about" className="nav-link">About</Link>
                </div>
            </nav>
        </header>
    );
    };

export default Header;