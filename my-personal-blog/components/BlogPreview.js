import Link from "next/link";

export default function BlogPreview({ title, slug, description, image}) {
    return (
    <Link href={`/blog/${slug}`} className="block">
        <div className="blog-card">
            <img src={image ? image : "/default.jpg"} alt={title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>
    </Link>
    );
}