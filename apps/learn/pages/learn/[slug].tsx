import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LearnArticle({ source, frontMatter }: any) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>{frontMatter.title} | Bodega Learn</title>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
      </Head>
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-8 prose prose-neutral">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content/learn');
  const files = fs.readdirSync(postsDir);
  const paths = files.filter(f => f.endsWith('.mdx')).map(filename => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/learn', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
} 