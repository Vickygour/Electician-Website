import PageBanner from '../Components/PageBanner';

export const metadata = { title: 'Terms of Service' };

export default function Terms() {
  const sections = [
    ['Services', 'All work is carried out by licensed electricians. Quotes are fixed after a site inspection and valid for 30 days.'],
    ['Bookings', 'Online appointment requests are confirmed by phone. Please give at least 24 hours notice to reschedule or cancel.'],
    ['Payments', 'Payment is due on completion of work or delivery of products unless a written agreement says otherwise.'],
    ['Products & returns', 'Unused products in original packaging can be returned within 7 days. Warranty is as stated on each product page.'],
    ['Liability', 'We guarantee our workmanship. We are not liable for damage caused by pre-existing faults that were disclosed to the customer before work started.'],
  ];
  return (
    <>
      <PageBanner title="Terms of" accent="Service" />
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map(([h, t]) => (
            <div key={h}><h2 className="text-2xl font-black text-slate-800 mb-2">{h}</h2><p className="text-gray-600 leading-relaxed">{t}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
