import { Trophy, Star, Users, Lightbulb, Scale, ShieldCheck, Newspaper, HeartHandshake } from "lucide-react";

export default function AwardsPage() {
  const awards = [
    {
      title: "Yemi Farounbi Lifetime Achievement Award",
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      description: "Recognizes individuals who have demonstrated a longstanding commitment to excellence in broadcasting, public service, and civic engagement. Recipients are individuals whose work has significantly influenced public discourse and contributed to the betterment of society.",
      eligibility: "Open to media professionals, policymakers, educators, and civil society leaders."
    },
    {
      title: "Excellence in Media Award",
      icon: <Newspaper className="w-8 h-8 text-blue-600" />,
      description: "Honors outstanding journalists and media practitioners who have demonstrated integrity, courage, and innovation in their reporting. It emphasizes the role of media in promoting transparency, accountability, and informed public discourse.",
      eligibility: "Open to journalists, editors, and media organizations that have produced impactful work in the past year."
    },
    {
      title: "Community Engagement Award",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Recognizing organizations or individuals who have made significant contributions to community development through advocacy, education, or public service initiatives. Highlights the importance of grassroots involvement.",
      eligibility: "Open to non-profits, NGOs, community leaders, and activists."
    },
    {
      title: "Emerging Leader Award",
      icon: <Star className="w-8 h-8 text-blue-600" />,
      description: "Celebrates young professionals and activists under 35 who are making waves in their fields, particularly in media, politics, or social activism. Aims to encourage and empower the next generation of leaders.",
      eligibility: "Open to individuals aged 35 and younger who have demonstrated leadership and impact in their communities."
    },
    {
      title: "Innovative Policy Award",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      description: "Recognizes policymakers or organizations that have successfully implemented innovative policies or programs that address pressing societal issues. Encourages creativity and effectiveness in governance.",
      eligibility: "Open to government officials, think tanks, and policy advocacy groups."
    },
    {
      title: "Civic Engagement Award",
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
      description: "Given to individuals or organizations that have successfully mobilized communities to participate in civic activities, such as voting, public consultations, or community development projects.",
      eligibility: "Open to civil society organizations, community groups, and individuals."
    },
    {
      title: "Media Literacy Champion Award",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      description: "Recognizes individuals or organizations that have made significant strides in promoting media literacy and critical thinking skills among the public. Emphasizes navigating information in a digital age.",
      eligibility: "Open to educators, non-profits, and media organizations involved in media literacy initiatives."
    },
    {
      title: "Social Justice Award",
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      description: "Honors individuals or organizations that have demonstrated a strong commitment to advocating for social justice, equality, and human rights. Recognizes efforts to address systemic issues and promote fairness.",
      eligibility: "Open to activists, NGOs, and individuals committed to social justice causes."
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Honoring Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Awards of Recognition
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              The Yemi Farounbi Colloquium aims to honor individuals and organizations who have made significant contributions to public discourse, governance, and social development in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-sm group-hover:bg-blue-50 transition-colors">
                  {award.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{award.title}</h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6 grow">
                  {award.description}
                </p>
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                    Eligibility
                  </span>
                  <p className="text-sm font-medium text-slate-700">
                    {award.eligibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremony Details */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-8">
              <Trophy className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              The Annual Award Ceremony
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The awards are presented annually during a significant event, such as the celebration of UNESCO World Microphone Day or another prominent gathering of stakeholders in media and governance. Each award is accompanied by a certificate and a trophy or plaque, along with a public acknowledgment of the recipient&apos;s contributions.
            </p>
            <p className="text-base font-medium text-slate-700 leading-relaxed max-w-3xl mx-auto border-l-4 border-blue-600 pl-6 text-left">
              By honoring those who exemplify the values of the Yemi Farounbi Colloquium, these awards reinforce the importance of civic engagement, transparency, and accountability in Nigeria&apos;s democratic journey.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}