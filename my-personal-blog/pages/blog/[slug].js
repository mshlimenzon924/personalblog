import fs from "fs";
import matter from "gray-matter";
import { useRouter } from "next/router";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import Header from "../../components/Header";
import { getPosts } from "../../utils/getPosts";

export default function BlogPost({ post }) {
    const router = useRouter();
    if (router.isFallback) return <p>Loading...</p>;

    return (
        <div className="bg-[#f8e6d1] min-h-screen text-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-[#861845]">{post.title}</h1>
            <p className="blog-date">{post.date}</p>
            <div className="blog-content mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    const posts = getPosts();
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const filePath = path.join("content", `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);

    return { props: { post: { ...data, content: processedContent.toString() } } };
}
