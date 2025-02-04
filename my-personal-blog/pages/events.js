import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Events({ posts }) {
    return (
    <div className="bg-creamMain min-h-screen text-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-5xl font-bold text-pink-800 mb-4">🎀 Planning My Special Moments</h1>
        <p>My journey in organizing and enjoying events.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (<BlogPreview key={post.slug} {...post} />))}
        </div>
        </main>
    </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts().filter((post) => post.category === "events");
    return { props: { posts } };
}

