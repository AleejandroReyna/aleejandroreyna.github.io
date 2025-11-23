import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            {`Let's Create Something Beautiful Together`}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {`Have an interesting project? Want to collaborate? I'm always open to discussing new opportunities
            and creative ideas. Let's turn your vision into reality.`}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-green-900/30 border-2 border-green-700 text-green-400 px-4 py-2 rounded-full">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-semibold">Open to Opportunities</span>
            </div>

            {/* Intro */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {`I'm currently seeking opportunities as a Full-Stack Engineer, Django Developer,
                or JavaScript/TypeScript Developer. Whether it's a remote position or based in Guatemala,
                I'd love to hear from you.`}
              </p>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Mail size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:me@alejandroreyna.com" className="text-lg font-semibold hover:text-primary transition-colors">
                    me@alejandroreyna.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                  <MapPin size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold">Guatemala, Guatemala</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/AleejandroReyna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost border-2 border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800 transition-all gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/aleejandroreyna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost border-2 border-gray-700 text-gray-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/aleejandroreyna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost border-2 border-gray-700 text-gray-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white transition-all gap-2"
                >
                  <Twitter size={20} />
                  Twitter
                </a>
                <a
                  href="https://calendly.com/aleejandroreyna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost border-2 border-gray-700 text-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all gap-2"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Collaboration Interests */}
            <div className="bg-gray-900 border-2 border-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-3">Interested In</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Full-Stack Engineer roles (Remote or Guatemala)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Open source collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Creative coding projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mentorship opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-900 border-2 border-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400 font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400 font-semibold">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-semibold">Message</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className="textarea textarea-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full text-white gap-2 text-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};