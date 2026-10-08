import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import PageBanner from '../../Components/PageBanner';
import BookButton from '../../Components/BookButton';
import Newsletter from '../../Components/Newsletter';
import { ShareBar, Comments } from '../../Components/PostExtras';
import { posts, getPost } from '../../../data/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).sort((a, b) => (b.category === post.category) - (a.category === post.category)).slice(0, 3);

  return (
    <>
      <PageBanner title="Our" accent="Blog" eyebrow={post.category} image={post.image} />

      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
          <article className="w-full lg:w-2/3">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-slate-800 mb-6">
              <ArrowLeft size={16} /> Back to blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-1.5"><User size={15} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={15} /> {fmt(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime} min read</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="w-full h-[280px] md:h-[420px] object-cover shadow-xl mb-10" />

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              {post.content.map((b, i) => {
                if (b.type === 'h2') return <h2 key={i} className="text-2xl font-black text-slate-800 pt-4">{b.text}</h2>;
                if (b.type === 'ul')
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-3"><span className="mt-2.5 w-2 h-2 bg-orange-500 shrink-0" />{it}</li>
                      ))}
                    </ul>
                  );
                return <p key={i}>{b.text}</p>;
              })}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-widest bg-orange-50 text-orange-500 px-3 py-1.5">{post.category}</span>
              <ShareBar title={post.title} slug={post.slug} />
            </div>

            <Comments slug={post.slug} />
          </article>

          <aside className="w-full lg:w-1/3 space-y-8">
            <div className="bg-orange-500 text-white p-8">
              <h4 className="text-xl font-bold mb-2">Need an electrician?</h4>
              <p className="text-sm text-orange-50 mb-5">Book a free site visit with a certified expert.</p>
              <BookButton prefill={{ service: 'Free Estimate / Quote' }} className="w-full bg-[#2A2C38] hover:bg-black font-bold py-3.5 text-xs uppercase tracking-widest transition-colors">
                Book appointment
              </BookButton>
            </div>
            <div className="bg-slate-50 p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-5">Related articles</h4>
              <ul className="space-y-5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="group flex gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.image} alt="" className="w-20 h-20 object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-slate-800 group-hover:text-orange-500 transition-colors leading-snug">{r.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{fmt(r.date)}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Newsletter />
          </aside>
        </div>
      </section>
    </>
  );
}
