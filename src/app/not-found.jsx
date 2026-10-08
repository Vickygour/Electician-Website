import Link from 'next/link';
import { Zap } from 'lucide-react';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="py-32 px-6 text-center bg-white">
      <Zap size={64} className="mx-auto text-orange-500 mb-6" fill="currentColor" />
      <h1 className="text-7xl font-black text-slate-800 mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-10">Looks like this circuit is not connected. The page you want does not exist.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="bg-orange-500 hover:bg-[#2A2C38] text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors">Go home</Link>
        <Link href="/contact" className="border-2 border-[#2A2C38] text-[#2A2C38] hover:bg-[#2A2C38] hover:text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-colors">Contact us</Link>
      </div>
    </section>
  );
}
