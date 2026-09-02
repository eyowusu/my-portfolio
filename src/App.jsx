import { useState } from 'react'

const LINKEDIN = "https://www.linkedin.com/in/emmanuel-owusu-addo-67733821a"
const GITHUB = "https://github.com/eyowusu"
const EMAIL = "emmanuelowusuaddo44@gmail.com"
const PHONE = "+233 54 887 6089"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-bold text-xl tracking-tight">Emmanuel Owusu Addo</a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition">
                  {link.name}
                </a>
              ))}
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition">
                LinkedIn
              </a>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-300 hover:text-white">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-slate-300 hover:text-white">
                  {link.name}
                </a>
              ))}
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="block py-2 text-blue-400 hover:text-blue-300">
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold mb-4">Backend & Fintech Engineer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Emmanuel Owusu Addo
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Self-taught software engineer from Ghana with 5+ years of experience building live fintech, e-commerce, and automation platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              View Projects
            </a>
            <a href={`mailto:${EMAIL}`} className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg font-medium transition">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            I build production systems that handle real money, real users, and real business problems. My strongest work is in fintech backend engineering — designing secure payment flows, integrating payment providers, building wallet and transaction systems, and writing reliable APIs.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I specialize in Python for fintech backends and payment APIs, and TypeScript / Next.js / React for modern frontends and admin dashboards. I also integrate LLM APIs like OpenAI and Anthropic into backend systems and automation workflows. I work with Expo for mobile and Google Cloud Platform for deployment and DevOps. I am currently open to remote engineering roles and consulting opportunities.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-2xl font-bold mb-2">PayGlobe.net</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">Fintech & Payments Platform</p>
              <p className="text-slate-500 text-xs mb-4">Client: PayGlobe Limited, a wholly Ghanaian-owned fintech company</p>
              <p className="text-slate-300 mb-4">
                A live fintech payment platform enabling Mobile Money, card payments, QR payments, wallet-to-wallet transfers, and bank transfers.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>Django + Django REST Framework backend for secure payment processing and wallet management</li>
                <li>Multi-provider integrations and webhook handling</li>
                <li>TypeScript / Next.js / React frontend for marketing site and dashboards</li>
                <li>Transaction history, reporting, and admin dashboards</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://payglobe.net" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                  Live Site
                </a>
                <span className="text-slate-500">Private repo — source on request</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-2xl font-bold mb-2">AbessentiaGH.com</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">E-commerce & Online Shop</p>
              <p className="text-slate-300 mb-4">
                A full-stack e-commerce platform with product catalog, shopping cart, checkout, order management, inventory tracking, and integrated payments.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>Python backend API connected to PostgreSQL and Redis</li>
                <li>TypeScript / Next.js / React frontend with Tailwind CSS</li>
                <li>Cart, checkout, and payment integration</li>
                <li>Inventory tracking, sales reporting, and admin panel</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="https://abessentiagh.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                  Live Site
                </a>
                <span className="text-slate-500 text-sm">Private repo — source on request</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-2xl font-bold mb-2">Document Automation Platform</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">Automation & Document Generation</p>
              <p className="text-slate-300 mb-4">
                A system with editable inbuilt templates that accepts worksheet files, maps data to templates, and auto-generates contracts and documents in bulk or as single files.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>Editable document templates with dynamic field mapping</li>
                <li>Worksheet and CSV upload with data parsing</li>
                <li>Bulk and single document generation</li>
                <li>Automated contract and document output</li>
              </ul>
              <a href="https://github.com/eyowusu/document-automation-platform" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                View on GitHub
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition">
              <h3 className="text-2xl font-bold mb-2">School Feeding Program</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">Modern UI/UX Next.js Website</p>
              <p className="text-slate-300 mb-4">
                A modern UI/UX public website built with Next.js, featuring an inbuilt admin dashboard that lets non-technical users upload, update, and edit website content.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>Modern public-facing website with Next.js</li>
                <li>Inbuilt admin dashboard for content management</li>
                <li>Non-technical users can upload, edit, and update content</li>
                <li>Full-stack TypeScript and React application</li>
              </ul>
              <a href="https://github.com/eyowusu/School-Feeding-Program" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Backend', items: 'Python, FastAPI, Django, Flask, REST APIs, GraphQL, Webhooks' },
              { title: 'Payments', items: 'Mobile Money, Cards, QR Payments, Wallet Systems, Bank Transfers' },
              { title: 'Frontend', items: 'React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, HTML/CSS' },
              { title: 'Mobile', items: 'Expo, React Native (iOS & Android)' },
              { title: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Redis, SQLite' },
              { title: 'Cloud & DevOps', items: 'Google Cloud Platform, Docker, CI/CD, Linux, Nginx, Git/GitHub' },
              { title: 'AI / LLM Integration', items: 'OpenAI API, Anthropic API, AI-powered features, prompt engineering, automation with LLMs' },
            ].map((skill) => (
              <div key={skill.title} className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-400 mb-8">
            I am open to remote engineering roles and consulting projects in fintech, payments, e-commerce, and automation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href={`mailto:${EMAIL}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Email Me
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg font-medium transition">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg font-medium transition">
              GitHub
            </a>
          </div>
          <p className="text-slate-500 text-sm">{EMAIL} | {PHONE}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Emmanuel Owusu Addo. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
