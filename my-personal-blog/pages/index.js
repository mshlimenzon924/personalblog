import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { getPosts } from "../utils/getPosts";

export default function Home({ posts }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fdf5e6] to-[#fbe2c6] text-gray-900">
            <Header />
            {/* Bio Section */}
            <section className="flex flex-col items-center py-10">
                <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full text-center">
                    <Image 
                        src="/profile.jpg"
                        width={150}
                        height={150}
                        alt="Mira's Profile Picture"
                        className="w-40 h-40 rounded-full mx-auto border-4 border-[#FA9DA6] p-1"
                    />
                    <h1 className="text-2xl font-bold text-[#C14469] mt-4">
                        Hi! I'm Mira 👋
                    </h1>
                    <p className="text-md text-gray-700 leading-relaxed mt-2">
                        I'm a soon-to-be software engineer, and let's just say I'm a unique blend of Type A
                        (don't ask to see my Google Calendar) and a "Yes Girl" at heart.
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed mt-2">
                        This is my little corner of the internet where I share my thoughts, travel adventures
                        , and my ever-changing list of hobbies.
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed mt-2">
                        I believe in finding joy in the unexpected while still embracing structure.
                        From meticulously planning elaborate events to impulsively booking a last-minute weekend
                        getaway with friends, I'm always up for trying new things and embracing the unexpected.
                        This is my blog on how I navigate life with a blend of planning and spontaneity – because a
                        "Yes Girl" needs a system! Let's dive in!
                    </p>
                </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="container mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold text-[#5C7359] border-b-2 border-[#8EB694] pb-2 inline-block flex items-center">
                    📌 Latest Blog Posts
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {posts.slice(0, 3).map((post) => (  // Only show 3 posts
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                            <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition transform hover:-translate-y-2">
                                <Image 
                                    src={post.image ? post.image : "/default.jpg"} 
                                    width={400} 
                                    height={250} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-3">{post.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps() {
    const posts = getPosts();
    return { props: { posts } };
}
