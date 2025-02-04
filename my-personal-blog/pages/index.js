import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Home({ posts }) {
    return (
    <div className="bg-creamMain min-h-screen text-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto p-8">
            <section className="text-center mb-12">
                <h1 className="text-5xl font-bold text-pink-700">Mira's Blog</h1>
                <p className="text-xl text-gray-600 mt-3">Sharing my journey in food, lifestyle, event planning, and travel.</p>
            </section>
            <section>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">📌 Recent Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.slice(0, 3).map((post) => (
                <BlogPreview key={post.slug} {...post} />
                ))}
                </div>
            </section>
        </main>
    </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts();
    return { props: { posts } };
}
