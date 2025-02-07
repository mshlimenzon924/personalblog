import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Lifestyle({ posts }) {
    return (
        <div className="bg-creamMain min-h-screen text-gray-900">
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <h1 className="text-5xl font-bold text-[#861845] mb-4">🌿 Living My Best Life</h1>
                <p className="text-lg text-gray-700 mb-6">Sharing my lifestyle, hobbies, and inspiration.</p>
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
    const posts = getPosts().filter((post) => post.category?.toLowerCase() === "lifestyle");
    return { props: { posts } };
}