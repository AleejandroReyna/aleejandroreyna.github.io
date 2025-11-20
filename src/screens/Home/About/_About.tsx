import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const About = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
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
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Story Behind the Code
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a developer—a code poet crafting elegant solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Clean profile image with subtle styling */}
              <div className="w-80 h-80 rounded-full overflow-hidden ring-2 ring-gray-400 ring-offset-4 ring-offset-white shadow-2xl">
                <img
                  src="/images/about/me.jpg"
                  alt="Alejandro Reyna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-primary">🎨</span> The Philosophy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m Alejandro Reyna, a full-stack developer from Guatemala who believes that
                programming is more than just solving problems—it&apos;s an art form. For over 12 years,
                I&apos;ve been writing code that doesn&apos;t just work, but sings.
              </p>
            </div>

            {/* Journey */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-primary">🚀</span> The Journey
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                From Guatemala to the global tech community, my journey has been fueled by curiosity
                and a commitment to continuous learning. With expertise in Python, JavaScript, TypeScript,
                and Ruby, I&apos;ve built solutions across the full stack.
              </p>
            </div>

            {/* Human Side */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-primary">🎵</span> The Human Side
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I&apos;m not crafting code, you&apos;ll find me making music (a passion since I was 14) or
                spending time with cats. I believe in leaving the world better than we found it, championing
                teamwork, and ensuring everyone gets a fair chance to succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Muted, melancholic colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center hover:border-gray-500 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-gray-800 mb-2">12+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center hover:border-gray-500 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-gray-800 mb-2">86+</div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center hover:border-gray-500 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-gray-800 mb-2">4</div>
            <div className="text-gray-600 font-medium">Tech Stacks</div>
          </div>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center hover:border-gray-500 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-gray-800 mb-2">∞</div>
            <div className="text-gray-600 font-medium">Learning</div>
          </div>
        </div>

        {/* Vision & CTA */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-12 hover:border-primary hover:shadow-xl transition-all">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Fascinated by entrepreneurship 🚀 science 🔭 and education 📚
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            I&apos;m always looking for opportunities to blend technology with purpose.
            If you want to create a better version of the world, let&apos;s talk.
          </p>
          <Link href="/about" className="btn btn-primary btn-lg gap-2 text-white inline-flex items-center">
            Read My Full Story
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}