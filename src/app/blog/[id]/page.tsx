import { notFound } from "next/navigation";

// Example blog data (replace this with actual data fetching logic)
const blogPosts = [
  { id: "1", title: "The Majesty of Lions", content: "Explore the life of lions in the wild." },
  { id: "2", title: "Secrets of the Ocean: Dolphins", content: "Discover the intelligence of dolphins." },
  { id: "3", title: "The Playful World of Otters", content: "Learn about otters and their habitats." },
];

// Define the type for a blog post
type BlogPost = {
  id: string;
  title: string;
  content: string;
};

// Define the PageProps with params as an object containing the id of the blog post
interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  // Find the blog post by the id parameter
  const post = blogPosts.find((blog) => blog.id === params.id);

  // If the post isn't found, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-700">{post?.content}</p>
    </div>
  );
}
