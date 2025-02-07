import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Events({ posts }) {
    return (
        <div className="bg-creamMain min-h-screen text-gray-900">
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-5xl font-bold text-pink-800 mb-4">🎀 Planning My Special Moments</h1>
                <p className="text-lg text-gray-700 mb-6">My journey in organizing and enjoying events.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.length > 0 ? (
                        posts.map((post) => <BlogPreview key={post.slug} {...post} />)
                    ) : (
                        <p className="text-gray-600">No posts available in this category yet.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts().filter((post) => post.category?.toLowerCase() === "events"); // Case insensitive filtering
    return { props: { posts } };
}

