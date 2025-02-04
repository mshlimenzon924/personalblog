import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ title, slug, description, image}) {
    return (
    <Link href={`/blog/${slug}`} className="block">
        <div className="blog-card">
            <div className="relative w-full h-48">
                <Image
                    src={image || "/default.jpg"}
                    alt={title}
                    layout="fill" // Ensures consistent image size
                    objectFit="cover" // Crops images properly to fit
                    className="rounded-lg"
                />
            </div>
            <h3 className="text-xl font-semibold mt-3">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>
    </Link>
    );
}