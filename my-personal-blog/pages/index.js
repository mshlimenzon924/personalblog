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

            {/* Bio Section */}
            <section className="bio-section">
                {/* Profile Image */}
                <Image src="/profile.jpg" alt="Mira's Profile" width={120} height={120} className="bio-image" />

                {/* Bio Text */}
                <div className="bio-card">
                    <h1 className="bio-heading">Hi! I'm Mira 👋</h1>
                    <p className="bio-text">
                        A soon-to-be software engineer blending structure & spontaneity. From meticulously
                        planning events to impulsively booking trips, this is my space for fashion, travel, and creative living.
                    </p>
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts();
    return { props: { posts } };
}
