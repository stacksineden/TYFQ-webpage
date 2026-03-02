import { MessageSquare, FileText, Lightbulb, Handshake } from "lucide-react";

export default function HowWeWork() {
  const approaches = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Engagement through Dialogue",
      description: "Organizing public lectures, panel discussions, town hall meetings, and workshops to bring together diverse stakeholders for open discussions.",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Research and Analysis",
      description: "Collaborating with academic institutions and experts to produce research papers, policy briefs, and reports that provide valuable insights.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Capacity Building",
      description: "Empowering individuals and organizations through training sessions, workshops, and mentorship programs designed to enhance advocacy skills.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Collaborative Partnerships",
      description: "Actively seeking partnerships with civil society, media outlets, academic institutions, and government agencies to amplify our impact.",
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="border-t-4 border-blue-600 w-16 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At The Yemi Farounbi Colloquium, our approach is centered on fostering informed public discourse and promoting civic engagement through a structured, inclusive, and collaborative framework.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-slate-50 hover:bg-white"
            >
              <div className="mb-6 p-4 bg-white rounded-sm shadow-sm inline-block group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}