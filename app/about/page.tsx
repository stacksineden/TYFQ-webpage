import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Inclusivity",
      description: "Engage diverse voices and perspectives in discussions to ensure comprehensive dialogue.",
    },
    {
      title: "Integrity",
      description: "Uphold transparency and ethical standards in all activities and communications.",
    },
    {
      title: "Innovation",
      description: "Embrace new ideas and technologies to enhance the effectiveness of public engagement.",
    },
    {
      title: "Sustainability",
      description: "Establish long-term strategies that ensure the longevity and impact of the colloquium.",
    }
  ];

  const trustees = [
    "Dr. Yemi Farounbi",
    "Hon Justin M. Kunle Adeigbe",
    "Mrs Evelyn Farounbi",
    "Mrs Ifeoluwa Adeolu",
    "Chief Mrs Remi Olowu",
    "Hon. Femi Adebisi",
    "Barr. Tolu Ogundeji",
    "Pst. Awodele Oluseun"
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Enduring Focus & Structure
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Fostering informed public discourse on governance, public policy, and social issues in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Mission */}
            <div>
              <div className="border-t-4 border-blue-600 w-16 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Mission Statement</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The Yemi Farombi Colloquium is dedicated to fostering informed public discourse on governance, public policy, and social issues in Nigeria.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                It aims to bring together a diverse range of stakeholders, including policymakers, academics, civil society, and citizens, to engage in meaningful dialogue that promotes transparency, accountability, and civic engagement.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="border-t-4 border-slate-900 w-16 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                To be a premier platform for public discourse in Nigeria, shaping policies and practices that resonate with the aspirations of the Nigerian people and contributing to a well-informed and engaged citizenry.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Structure / Board of Trustees */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Administrative Structure</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Board of Trustees is composed of distinguished and eminent personalities from various sectors, including academia, media, civil society, judiciary, and politics. They are responsible for overall governance, strategic direction, and ensuring the mission and vision are upheld.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-10 md:p-16 rounded-sm">
            <h3 className="text-2xl font-bold mb-8 text-center border-b border-slate-700 pb-6">
              Registered Board of Trustees
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-lg font-medium text-slate-300">
              {trustees.map((name, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
}