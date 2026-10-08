import PageBanner from '../../Components/PageBanner';
import AboutUsExtended from '../../Components/AboutUsExtended';
import BookButton from '../../Components/BookButton';

export const metadata = { title: 'Our Story' };

const timeline = [
  { year: '1999', title: 'A small workshop begins', text: 'Two electricians start the company from a rented garage, taking house-wiring jobs in the neighbourhood.' },
  { year: '2005', title: 'First commercial contract', text: 'We win our first office building project and grow the team to 15 certified electricians.' },
  { year: '2012', title: 'Industrial division launched', text: 'A dedicated engineering team starts serving factories with motor control and automation.' },
  { year: '2018', title: '24/7 emergency service', text: 'Round-the-clock dispatch begins, with an average response of under an hour.' },
  { year: '2022', title: 'Solar & smart homes', text: 'We add rooftop solar, battery storage and smart home installations.' },
  { year: '2026', title: '8,000+ projects delivered', text: 'Today we serve homes, businesses and industries with the same promise: safe, reliable work.' },
];

export default function StoryPage() {
  return (
    <>
      <PageBanner title="Our" accent="Story" eyebrow="Since 1999" />

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-4">How we started</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Over 25 years of <span className="text-orange-500">powering progress</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed">What began as a two-person workshop is now a full-service electrical contractor. Our approach has stayed the same: honest advice, clean work and safety first.</p>
          </div>

          <ol className="relative border-l-4 border-orange-500 ml-3 md:ml-6 space-y-12">
            {timeline.map((t) => (
              <li key={t.year} className="pl-8 md:pl-12 relative">
                <span className="absolute -left-[14px] top-1 w-6 h-6 bg-white border-4 border-orange-500 rounded-full" />
                <span className="text-orange-500 font-black text-2xl">{t.year}</span>
                <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{t.title}</h3>
                <p className="text-gray-500 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AboutUsExtended />

      <section className="bg-[#2A2C38] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let us power your next project</h2>
        <BookButton prefill={{ service: 'Free Estimate / Quote' }} className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 font-bold uppercase text-xs tracking-widest transition-colors">
          Book a free estimate
        </BookButton>
      </section>
    </>
  );
}
