import { notFound } from "next/navigation";

// Example blog data (you should replace this with actual data fetching logic)
const blogPosts = [
  { id: "1", title: "The Majesty of Lions", content: "Explore the life of lions in the wild." },
  { id: "2", title: "Secrets of the Ocean: Dolphins", content: "Discover the intelligence of dolphins." },
  { id: "3", title: "The Playful World of Otters", content: "Learn about otters and their habitats." },
];

// Define the expected type of the post object
type BlogPost = {
  id: string;
  title: string;
  content: string;
};

// Explicitly type the PageProps (params: { id: string })
interface BlogPostPageProps {
  params: { id: string }; // Define the id parameter
}

// Use the type BlogPostPageProps for the component's props
export default function BlogPost({ params }: BlogPostPageProps) {
  // Find the blog post based on the ID parameter
  const post = blogPosts.find((blog) => blog.id === params.id);

  // If no post is found, show a 404 page
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
