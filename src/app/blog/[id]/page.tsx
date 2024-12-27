import { notFound } from "next/navigation";

type BlogPost = {
  id: string;
  title: string;
  content: string;
};

// Example blog data (You should replace this with actual data fetching logic)
const blogPosts: BlogPost[] = [
  { id: "1", title: "The Majesty of Lions", content: "Explore the life of lions in the wild." },
  { id: "2", title: "Secrets of the Ocean: Dolphins", content: "Discover the intelligence of dolphins." },
  { id: "3", title: "The Playful World of Otters", content: "Learn about otters and their habitats." },
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  // Find the blog post by matching the id
  const post = blogPosts.find((blog) => blog.id === params.id);

  // Handle post not found
  if (!post) {
    notFound(); // Shows the 404 page if the post isn't found
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-700">{post?.content}</p>
    </div>
  );
}
