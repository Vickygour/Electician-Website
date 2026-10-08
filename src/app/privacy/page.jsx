import PageBanner from '../Components/PageBanner';

export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  const sections = [
    ['Information we collect', 'When you book an appointment, send a message, place an order or subscribe, we collect the details you enter such as your name, phone number, email and address.'],
    ['How we use it', 'We use your information only to respond to your enquiry, schedule and deliver services, process orders and send updates you asked for.'],
    ['Sharing', 'We do not sell your personal data. We may share it with trusted partners strictly to complete your service, for example delivery.'],
    ['Your choices', 'You can ask us to correct or delete your data at any time by contacting us. You can unsubscribe from emails whenever you like.'],
    ['Contact', 'For any privacy question please use the Contact page.'],
  ];
  return (
    <>
      <PageBanner title="Privacy" accent="Policy" />
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
