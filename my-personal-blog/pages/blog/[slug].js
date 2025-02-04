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
        <div className="bg-creamMain min-h-screen text-gray-900">
            <Header />
            <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-5xl font-bold text-pink-800 mb-4">{post.title}</h1>
            <p className="blog-date">{post.date}</p>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
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
