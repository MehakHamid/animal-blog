import Link from "next/link";

type BlogPost = {
    id: string;
    title: string;
    content: string;
  };
  
  const blogPosts: BlogPost[] = [
    { id: "1", title: "The Majesty of Lions", content: "Explore the life of lions in the wild." },
    { id: "2", title: "Secrets of the Ocean: Dolphins", content: "Discover the intelligence of dolphins." },
    { id: "3", title: "The Playful World of Otters", content: "Learn about otters and their habitats." },
  ];
  
  export default function AllBlogs() {
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">All Animal Blogs</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <li key={post.id} className="border p-4 rounded-md shadow hover:shadow-lg bg-white">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline text-lg font-semibold">
                {post.title}
              </Link>
              <p className="text-gray-600 mt-2">{post.content}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/" className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  