import { Mail, Phone, MapPin, Building2, CreditCard, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Contact & Support
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Whether you want to partner with us, volunteer your expertise, or support our mission financially, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side: Contact Form */}
            <div>
              <div className="border-t-4 border-blue-600 w-16 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                    <input type="text" id="firstName" className="w-full border border-slate-300 p-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50 hover:bg-white" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                    <input type="text" id="lastName" className="w-full border border-slate-300 p-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50 hover:bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" className="w-full border border-slate-300 p-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50 hover:bg-white" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject of Inquiry</label>
                  <select id="subject" className="w-full border border-slate-300 p-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50 hover:bg-white text-slate-700">
                    <option>General Inquiry</option>
                    <option>Partner With Us</option>
                    <option>Volunteer Opportunities</option>
                    <option>Media & Press</option>
                    <option>Donations & Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea id="message" rows={6} className="w-full border border-slate-300 p-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50 hover:bg-white resize-y" placeholder="How can we collaborate?"></textarea>
                </div>

                <button type="button" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold transition-colors w-full sm:w-auto justify-center">
                  Submit Message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Side: Contact Info & Support */}
            <div className="space-y-12">
              
              {/* Direct Contact Block */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-sm shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:info@tyfq.org" className="text-slate-600 hover:text-blue-600 transition-colors">info@tyfq.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-sm shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-slate-600">+234 (0) 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-sm shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="text-slate-600 leading-relaxed">
                        123 Colloquium Way<br />
                        Ibadan, Oyo State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support / Donation Block */}
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-slate-900" />
                  <h3 className="text-xl font-bold text-slate-900">Support Our Mission</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Your financial contributions will help sustain our activities, support research initiatives, and empower communities through education and advocacy.
                </p>
                
                <div className="bg-white border border-slate-200 p-5 rounded-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Official Bank Details</span>
                  </div>
                  <div className="space-y-2 text-slate-700 font-mono text-sm bg-slate-50 p-4 border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Bank:</span>
                      <span className="font-bold text-slate-900">Zenith Bank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Acct No:</span>
                      <span className="font-bold text-slate-900">1310140840</span>
                    </div>
                    <div className="flex flex-col mt-2 pt-2 border-t border-slate-200">
                      <span className="text-slate-500 mb-1">Account Name:</span>
                      <span className="font-bold text-slate-900">The Yemi Farounbi Colloquium</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}