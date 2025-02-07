import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({ title, slug, description, image }) {
    return (
        <Link href={`/blog/${slug}`} className="block transition-transform transform hover:scale-105">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full h-48">
                    <Image
                        src={image || "/default.jpg"}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{description}</p>
                </div>
            </div>
        </Link>
    );
}