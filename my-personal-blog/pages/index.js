import Image from "next/image";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Home({ posts }) {
    // Get latest post from each category
    const categories = ["events", "lifestyle", "travel"];
    const latestPosts = categories.map(category =>
        posts.find(post => post.category.toLowerCase() === category)
    );

    return (
        <div className="body">
            <Header />

            <section className="bio-section_2">
                <Image src="/bio.png" alt="Bio Section" className="bio-image_2" width={700} height={100} quality={100} priority />
            </section>

            {/* Using an image for bio for now will later transfer details so I don't have to rely on an outside source */}
            {/* <section className="bio-section">
                <Image src="/profile.jpg" alt="Mira's Profile" width={120} height={120} className="bio-image" />

                <div className="bio-card">
                    <h1 className="bio-heading">Hi! I'm Mira 👋</h1>
                    <p className="bio-text"> Method & Muse is my space for those who love crave organized creativity and unforgettable experiences. Join me as I share my passion for crafting memorable events, creative living, and planning truly over-the-top trips. </p>
                </div>
            </section> */}

                <div className="vision-board-container">
                    <Image src="/vision_board/elements/vision_board.png" alt="Vision Board" className="vision-board" width={1200} height={1000} quality={100} priority />

                    {/* <Link href="/blog/spring-fashion" passHref>
                        <div className="polaroid-link" style={{ top: "30%", left: "40%" }}>
                            <div className="polaroid">
                                <Image src="/vision_board/elements/polaroid3.png" alt="Polaroid" width={200} height={250} className="polaroid-frame" />
                                <Image src="/vision_board/spring_fashion.jpg" alt="Spring Fashion" width={180} height={180} className="polaroid-image" />
                                <span className="caption">Spring Fashion Inspo</span>
                            </div>
                        </div>
                    </Link>

                    <Image src="/vision_board/elements/butterfly.png" width={100} height={100} className="decorative-element" style={{ top: "35%", left: "70%" }} alt="Butterfly"/>
                    <Image src="/vision_board/elements/rose.png" width={100} height={120} className="decorative-element" style={{ top: "75%", left: "45%" }} alt="Rose"/> */}
                </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts();
    return { props: { posts } };
}
