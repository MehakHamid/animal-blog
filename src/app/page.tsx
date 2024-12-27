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

export default function Home() {
  return (
    <div>
     

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 text-center p-6 rounded-lg">
          <h1 className="text-4xl font-bold text-white">Welcome to the Animal Blog</h1>
          <p className="text-lg text-gray-300 mt-4">
            Dive into the fascinating world of animals and learn something new every day.
          </p>
          <Link href="/blog" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>
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
          <Link href="/blog" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View All Blogs
          </Link>
        </div>
      </main>

      
    </div>
  );
}
