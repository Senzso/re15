import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Award, ChevronRight } from "lucide-react"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export default function Page() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#1E0B32] to-[#2A1245] text-white ${spaceGrotesk.variable} font-sans`}
    >
      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between sticky top-0 z-50 bg-[#1E0B32]/80 backdrop-blur-sm">
        <div className="flex items-center">
          <Image
            src="https://academy.ictcortex.me/wp-content/uploads/2021/09/cortex-svg-jodzi.svg"
            alt="ICT Cortex Kosovo"
            width={120}
            height={40}
          />
        </div>
        <Button
          className="bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90 rounded-full text-sm font-bold transition-colors duration-200"
          onClick={() =>
            window.open(
              "https://wa.me/386000000000?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Cortex%20Graphic%20Design%20program.",
              "_blank",
            )
          }
        >
          Contact Us
        </Button>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
        <div className="bg-gradient-to-r from-[#c276f4] to-[#9f4fd8] p-3 rounded-full mb-8 inline-block font-bold animate-pulse">
          Limited Time Offer: Save 450€ Today
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Launch Your Career in Graphic Design</h1>
        <p className="text-lg mb-10 text-gray-300 leading-relaxed">
          Master visual communication in just 3 months. Get hands-on training, build a stunning portfolio, and kickstart
          your creative career. <span className="font-bold text-[#FFD60A]">97% of our graduates are employed.</span>{" "}
          Will you be next?
        </p>
        <Button
          className="bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90 rounded-full px-8 py-6 text-lg font-bold transition-transform duration-200 hover:scale-105"
          onClick={() =>
            window.open(
              "https://wa.me/386000000000?text=Hello%2C%20I%20would%20like%20to%20register%20for%20the%20Cortex%20Graphic%20Design%20program.%20I%20have%20received%20the%20information%20and%20would%20like%20to%20proceed%20with%20the%20registration.%20Please%20guide%20me%20through%20the%20next%20steps.",
              "_blank",
            )
          }
        >
          START YOUR DEV JOURNEY
        </Button>

        {/* Course Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-16">
          {[
            { label: "Experience", value: "Beginner" },
            { label: "Length", value: "3 months" },
            { label: "Projects", value: "5+" },
            { label: "Format", value: "Online" },
          ].map((detail, index) => (
            <div
              key={index}
              className="bg-[#2A1245] p-6 first:rounded-l-lg last:rounded-r-lg border-r border-[#c276f4] last:border-r-0 transition-all duration-200 hover:bg-[#3A1D55]"
            >
              <div className="text-sm text-gray-400">{detail.label}</div>
              <div className="font-bold text-[#FFD60A]">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">What You'll Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Professional Portfolio",
              description:
                "Create 5+ industry-standard design projects. Stand out to employers with a diverse and impressive portfolio.",
            },
            {
              icon: Trophy,
              title: "1-on-1 Career Coaching",
              description:
                "Personal guidance from industry experts to fast-track your career growth and land your dream graphic design job.",
            },
            {
              icon: Award,
              title: "ICT Cortex Certification",
              description:
                "Earn a recognized qualification that validates your graphic design skills and opens doors to top creative opportunities.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-[#2A1245] rounded-lg p-8 text-center transition-all duration-200 hover:bg-[#3A1D55] hover:shadow-lg hover:shadow-[#c276f4]/20"
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-6 text-[#FFD60A]" />
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#2A1245] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Why ICT Cortex Kosovo?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "400+", label: "Designers trained" },
              { value: "97%", label: "Employment rate" },
              { value: "30+", label: "Creative partners" },
              { value: "5+", label: "Projects per student" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#FFD60A] text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "DESIGN FUNDAMENTALS",
            "COLOR THEORY",
            "TYPOGRAPHY",
            "LAYOUT & COMPOSITION",
            "ADOBE CREATIVE SUITE",
            "BRANDING & IDENTITY",
            "DIGITAL ILLUSTRATION",
            "UX/UI DESIGN BASICS",
            "PRINT PRODUCTION",
            "PORTFOLIO DEVELOPMENT",
            "DESIGN THINKING",
            "CLIENT COMMUNICATION",
          ].map((module, i) => (
            <div
              key={i}
              className="bg-[#2A1245] rounded-lg p-6 hover:bg-[#3A1D55] transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-[#c276f4]/20"
            >
              <h3 className="text-xl font-bold mb-3 text-[#FFD60A] group-hover:text-white transition-colors duration-300">
                {module}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Master key concepts and techniques in {module.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lecturers Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">Meet the Lecturers</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              name: "Tarik Zaimi",
              role: "CEO, Co-founder",
              company: "ICT Cortex",
              image: "https://academy.ictcortex.me/wp-content/uploads/2023/01/Tarik-Zaimovic.png",
            },
            {
              name: "Iva Malesi",
              role: "People Development Officer, NLP trener",
              company: "Bild studio",
              image: "https://academy.ictcortex.me/wp-content/uploads/2023/01/Iva-Malesevic-1.png",
            },
          ].map((lecturer, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-[#2A1245] p-6 rounded-lg transition-all duration-200 hover:bg-[#3A1D55] hover:shadow-lg hover:shadow-[#c276f4]/20"
            >
              <Image
                src={lecturer.image || "/placeholder.svg"}
                alt={lecturer.name}
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-xl mb-2">{lecturer.name}</h3>
                <p className="text-sm text-[#FFD60A]">{lecturer.company}</p>
                <p className="text-sm text-gray-400">{lecturer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#2A1245] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Don't just take our word for it!</h2>
            <p className="text-[#FFD60A] mb-12 font-bold text-center">90% of our students are employed</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "The graphic design course at Cortex Academy was exactly what I needed to transition into a creative career. The curriculum covered everything from design basics to advanced digital tools. The hands-on projects were particularly valuable, and the mentors were always there to provide constructive feedback.",
                  name: "Marina Vojinovic",
                  role: "Junior Graphic Designer",
                  image: "https://academy.ictcortex.me/wp-content/uploads/2023/01/Marina-Vojinovic.jpg",
                },
                {
                  text: "As a participant of the Cortex Academy graphic design course, I mastered practical skills that are essential for today's design industry. The mentors helped me build a strong foundation in visual communication and digital tools. Thanks to this program, I'm now working as a graphic designer at a leading agency.",
                  name: "Jelena R.",
                  role: "Graphic Designer",
                  image: "https://academy.ictcortex.me/wp-content/uploads/2023/01/Jelena-Rajkovic-scaled.jpg",
                },
                {
                  text: "The graphic design program gave me a clear understanding of design principles and industry-standard software. The practical experience I gained through creating real-world projects helped me secure a position at one of the partner creative agencies.",
                  name: "Gjovan P.",
                  role: "Design Intern",
                  image: "https://academy.ictcortex.me/wp-content/uploads/2021/10/Jovan-Popovic-1.jpg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1E0B32] rounded-lg p-6 transition-all duration-200 hover:bg-[#2A1245] hover:shadow-lg hover:shadow-[#c276f4]/20"
                >
                  <p className="mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-[#FFD60A]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guaranteed Internship Placement Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Guaranteed Internship Placement with Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {[
            { name: "Bild", src: "bild.png" },
            { name: "Model Slovenia", src: "ms.png" },
            { name: "Data Design", src: "datadesign.png" },
            { name: "Codeus", src: "codeus.png" },
            { name: "Coinis", src: "coinis.png" },
            { name: "Bagolina", src: "bagolina.png" },
            { name: "DayToDay", src: "daytoday.png" },
            { name: "Liridoni", src: "liridoni.png" },
            { name: "Agusholli", src: "agusholli.png" },
            { name: "Concordia", src: "concordia.png" },
            { name: "Duo Cosmetics", src: "duo.png" },
            { name: "CodePixel", src: "codepixel.png" },
          ].map((partner, index) => (
            <Image
              key={index}
              src={partner.src || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain transition-transform duration-200 hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#FFD60A] to-[#FFA500] py-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="text-black mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Unleash Your Creativity?</h2>
              <p className="mb-8">
                Don't miss this opportunity. Book a free consultation now and take the first step towards a rewarding
                career in graphic design.
              </p>
              <Button
                variant="outline"
                className="rounded-full font-bold bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
                onClick={() =>
                  window.open(
                    "https://wa.me/386000000000?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20the%20Cortex%20Graphic%20Design%20program.",
                    "_blank",
                  )
                }
              >
                Schedule Your Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <Image
              src="https://academy.ictcortex.me/wp-content/uploads/2021/11/znanje-je-izbor-1.png"
              alt="Knowledge is a choice"
              width={400}
              height={400}
              className="w-full md:w-auto max-w-[300px] mx-auto md:mx-0 mb-8 md:mb-0 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-16 text-center">Choose Your Start Date</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { month: "February", status: "SOLD OUT" },
            { month: "March 1st", status: "REGISTER NOW" },
            { month: "April 1st", status: "REGISTER NOW" },
          ].map((group, i) => (
            <div
              key={i}
              className="relative bg-white rounded-lg p-8 text-black transition-all duration-200 hover:shadow-xl hover:shadow-[#c276f4]/20 hover:transform hover:scale-105"
            >
              {i > 0 && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#c276f4] to-[#9f4fd8] text-white px-4 py-1 rounded-full transform rotate-12 font-bold">
                  Early Bird
                </div>
              )}
              <div className="text-center mb-8">
                <div className="text-sm mb-2 text-gray-600 font-bold">Starting from</div>
                <div className="text-4xl font-bold">
                  <span className="text-gray-400 line-through">€600</span> <span className="text-red-600">€150</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                {[
                  "3 Month Program",
                  "5+ Portfolio Projects",
                  "Industry Certification",
                  "Career Coaching",
                  "Job Search Support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-[#FFD60A]">✓</span> <span className="font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full font-bold transition-colors duration-200 ${
                  group.status === "SOLD OUT"
                    ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    : "bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90"
                }`}
                onClick={() => {
                  if (group.status !== "SOLD OUT") {
                    window.open(
                      "https://wa.me/386000000000?text=Hello%2C%20I%20would%20like%20to%20register%20for%20the%20Cortex%20Graphic%20Design%20program.%20I%20have%20received%20the%20information%20and%20would%20like%20to%20proceed%20with%20the%20registration.%20Please%20guide%20me%20through%20the%20next%20steps.",
                      "_blank",
                    )
                  }
                }}
              >
                {group.status}
              </Button>
              <div className="text-center mt-4 text-gray-600 font-bold">{group.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#c276f4] bg-[#1E0B32]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ICT Cortex Kosovo</div>
              <Button
                variant="link"
                className="text-[#FFD60A] p-0 font-bold hover:text-[#FFD60A]/80 transition-colors duration-200"
              >
                Become a Partner
              </Button>
            </div>
            <div>
              <h3 className="font-bold mb-4">Academies</h3>
              <ul className="space-y-2">
                {["Graphic Design", "UX/UI Design"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#FFD60A] font-bold transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@ictcortex.com</li>
                <li>+383 44 222 222</li>
              </ul>
            </div>
            <div className="flex gap-4">
              {["FB", "IN", "IG", "YT"].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#FFD60A] font-bold transition-colors duration-200"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

