import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getPosts() {
    const files = fs.readdirSync("content");

    return files.map((filename) => {
        const fileContent = fs.readFileSync(path.join("content", filename), "utf-8");
        const { data } = matter(fileContent);
        return {
            ...data,
            slug: filename.replace(".md", ""),
            image: data.image || "/default.jpg",
        };
    }).filter(post => post.category); /* Ensure posts have a category */
}