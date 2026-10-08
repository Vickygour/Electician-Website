import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import PageBanner from '../../Components/PageBanner';
import ProductImage from '../../Components/ProductImage';
import ProductActions from '../../Components/ProductActions';
import Stars from '../../Components/Stars';
import { products, getProduct } from '../../../data/products';
import { money } from '../../../data/site';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  return p ? { title: p.name, description: p.description } : {};
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  const related = products.filter((x) => x.id !== p.id && x.category === p.category).concat(products.filter((x) => x.category !== p.category)).slice(0, 4);

  return (
    <>
      <PageBanner title="Our" accent="Shop" eyebrow={p.category} />
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-slate-800 mb-8"><ArrowLeft size={16} /> Back to shop</Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage product={p} size={140} className="h-[340px] md:h-[480px] shadow-xl" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{p.category}</p>
              <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">{p.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <Stars rating={p.rating} />
                <span className="text-sm text-gray-500">{p.rating} ({p.reviews} reviews)</span>
              </div>
              <p className="text-4xl font-black text-slate-800 mb-6">
                {money(p.price)}
                {p.oldPrice && <span className="ml-3 text-lg font-medium text-gray-400 line-through">{money(p.oldPrice)}</span>}
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">{p.description}</p>
              <p className={`text-sm font-bold mb-8 ${p.stock > 10 ? 'text-green-600' : 'text-orange-500'}`}>
                {p.stock > 10 ? 'In stock' : `Only ${p.stock} left`}
              </p>
              <ProductActions product={p} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-200 text-sm text-gray-600">
                <p className="flex items-center gap-3"><Truck className="text-orange-500" size={22} /> Free shipping above $75</p>
                <p className="flex items-center gap-3"><ShieldCheck className="text-orange-500" size={22} /> Warranty: {p.warranty}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-slate-50 p-8 md:p-10">
            <h2 className="text-2xl font-black text-slate-800 mb-6">Specifications</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.specs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700"><Check size={18} strokeWidth={3} className="text-orange-500 mt-0.5 shrink-0" /> {s}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-black text-slate-800 mt-16 mb-8">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <Link key={r.id} href={`/shop/${r.id}`} className="group bg-white shadow-md hover:shadow-xl transition-shadow">
                <ProductImage product={r} size={44} className="h-36" />
                <div className="p-4">
                  <p className="font-bold text-sm text-slate-800 group-hover:text-orange-500 transition-colors leading-snug mb-1">{r.name}</p>
                  <p className="font-black text-slate-700">{money(r.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
