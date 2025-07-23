import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LearnIndex({ posts }: { posts: any[] }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-8">
        <img src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif" alt="Joey Chestnut" className="mx-auto mb-6 rounded shadow" style={{ maxWidth: 320 }} />
        <h1 className="text-3xl font-bold mb-6">Learn</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug} className="mb-4">
              <Link href={`/learn/${post.slug}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm">{post.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content/learn');
  const files = fs.readdirSync(postsDir);
  const posts = files.filter(f => f.endsWith('.mdx')).map(filename => {
    const filePath = path.join(postsDir, filename);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title || filename,
      description: data.description || '',
      date: data.date || '',
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { posts } };
} 