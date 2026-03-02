import { HeartHandshake, Building2, CreditCard, Users, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const waysToSupport = [
    {
      title: "Corporate Partnerships",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description: "Collaborate with TYFQ to sponsor research, host joint events, and drive policy initiatives. We work with organizations that share our commitment to democratic governance and public accountability.",
      action: "Partner With Us",
      link: "/contact"
    },
    {
      title: "Individual Membership",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Join a network of policy makers, academics, and civic leaders. Members receive exclusive access to early research papers, priority event registration, and networking opportunities.",
      action: "Become a Member",
      link: "/contact"
    },
    {
      title: "Volunteer Program",
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
      description: "Lend your expertise to our mission. We are constantly looking for passionate individuals to assist with event coordination, community outreach, and research data collection.",
      action: "Apply to Volunteer",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Support the Colloquium
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Your involvement helps sustain our activities, support vital research initiatives, and empower communities through education and advocacy. 
            </p>
          </div>
        </div>
      </section>

      {/* Direct Donation Section (The primary Call to Action) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white border border-slate-200 shadow-sm p-8 md:p-12">
            
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-blue-50 p-4 rounded-full mb-2">
                <ShieldCheck className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Make a Financial Contribution
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As an independent think tank, TYFQ relies on the generosity of individuals and organizations. Your financial contributions directly fund our public lectures, policy briefs, and community workshops.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md bg-slate-900 text-white p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                <CreditCard className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold uppercase tracking-wide">Official Bank Details</h3>
              </div>
              
              <div className="space-y-4 font-mono text-lg">
                <div>
                  <span className="block text-sm text-slate-400 mb-1 font-sans">Bank Institution</span>
                  <span className="font-bold">Zenith Bank</span>
                </div>
                <div>
                  <span className="block text-sm text-slate-400 mb-1 font-sans">Account Number</span>
                  <span className="font-bold text-blue-400 text-2xl tracking-widest">1310140840</span>
                </div>
                <div>
                  <span className="block text-sm text-slate-400 mb-1 font-sans">Account Name</span>
                  <span className="font-bold">The Yemi Farounbi Colloquium</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Ways to Get Involved Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Other Ways to Get Involved
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Financial support is just one way to help. We are always looking for partners and individuals who want to contribute their time, voice, and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waysToSupport.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col h-full group">
                <div className="mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-sm border border-slate-200 group-hover:border-blue-300 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-8 grow">
                  {item.description}
                </p>
                <Link href={item.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors mt-auto">
                  {item.action} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}