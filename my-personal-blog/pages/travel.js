import Image from 'next/image';
import Header from "../components/Header";

export default function Travel() {
    return (
        <div className="body">
            <Header />
            <div className="photo-menu">
                <div className="top-section">
                    <Image src="/photo_menu/top.png" alt="Top Section" width={800} height={400} className="menu-image" />
                    <div className="title-container">
                        <Image src="/photo_menu/travel.png" alt="Travel Diaries Title" width={350} height={100} className="menu-title" />  
                    </div>
                </div>
                <div className="middle-section">
                    <Image src="/photo_menu/middle.png" alt="Middle Section" width={800} height={400} className="menu-image" />
                </div>
                <div className="bottom-section">
                    <Image src="/photo_menu/bottom.png" alt="Bottom Section" width={800} height={400} className="menu-image" />
                </div>
            </div>
        </div>
    )
};
