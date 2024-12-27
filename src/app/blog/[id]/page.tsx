import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPost = {
  id: string;
  title: string;
  content: string;
};

const blogPosts: Record<string, BlogPost> = {
  "1": { title: "The Majesty of Lions", content: "Lions are known as the kings of the jungle..." },
  "2": { title: "Secrets of the Ocean: Dolphins", content: "Dolphins are highly intelligent and social creatures..." },
  "3": { title: "The Playful World of Otters", content: "Otters are playful animals found in rivers and oceans..." },
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound(); // Displays 404 page if the post isn't found
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </div>
  );
}
