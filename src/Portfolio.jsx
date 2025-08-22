import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, Briefcase, Layers, Rocket, Server, Wrench } from "lucide-react";

// Minimal, single-file React portfolio tailored to the agency role.
// Styling uses Tailwind CSS. All libraries are available in this environment.
// Export as default so it can be previewed. You can drop this into a Vite + React project.

const skills = [
  { cat: "Core", items: ["HTML5", "CSS/SCSS", "JavaScript", "TypeScript", "PHP"] },
  { cat: "WordPress", items: ["Bespoke themes", "ACF/Custom Post Types", "SEO-friendly builds", "Accessibility"] },
  { cat: "Ecosystem", items: ["Laravel (basics)", "Vue (basics)", "npm/composer", "REST", "Git/GitHub", "LAMP"] },
  { cat: "Commerce & CMS", items: ["Shopify (Liquid)", "HubSpot CMS"] },
  { cat: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { cat: "Ops", items: ["Linux/Ubuntu", "Apache", "Docker (basics)"] },
];

const projects = [
  {
    title: "Full Stack Movie DB",
    blurb: "Search, filter, and CRUD app using React + ASP.NET API + SQL; component-driven UI and REST integration.",
    links: [
      { href: "https://github.com/OliverDunnDev", label: "GitHub" },
    ],
    stack: ["React", "Vite", "Tailwind", ".NET Web API", "SQL", "REST"],
  },
  {
    title: "React Pizza Shop",
    blurb: "Responsive storefront with cart, validation, and stateful UX — showcases UI polish and accessibility.",
    links: [
      { href: "https://github.com/OliverDunnDev", label: "GitHub" },
    ],
    stack: ["React", "Tailwind", "Forms", "ARIA"],
  },
  {
    title: "Audio Visualiser (ML-driven)",
    blurb: "FastAPI backend extracts audio features; frontend animates generative visuals synced to beats/tempo.",
    links: [
      { href: "https://oliverdunndev.github.io/oliver-portfolio/", label: "Live" },
    ],
    stack: ["React", "FastAPI", "Python", "DSP/ML"],
  },
];

const experience = [
  {
    role: "Media Activator",
    company: "University of Hull Sport",
    period: "Sep 2024 – Jul 2025",
    bullets: [
      "Produced brand-consistent digital content and motion graphics.",
      "Collaborated with stakeholders on concepts and delivery timelines.",
    ],
  },
  {
    role: "Customer Service Assistant",
    company: "Sainsbury’s Local (Anlaby)",
    period: "Apr 2023 – Sep 2024",
    bullets: [
      "Owned point-of-sale, inventory, and day-to-day operations.",
    ],
  },
];

const Item = ({ children }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" />
    <span>{children}</span>
  </li>
);


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Header */}
      <header className="border-b border-neutral-800 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Oliver Dunn</p>
              <p className="text-xs text-neutral-500">Web Developer · Leeds (On-site)</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#fit" className="hover:text-white">Role Fit</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Building fast, accessible, design-forward websites.
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              I craft bespoke, standards-compliant web experiences across WordPress, Shopify, and modern JS stacks —
              balancing pixel-perfect UI with robust, maintainable code.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#work" className="rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-medium">See Work</a>
              <a href="#contact" className="rounded-2xl ring-1 ring-neutral-700 px-4 py-2 text-sm">Get in Touch</a>
            </div>
            <ul className="mt-6 text-neutral-400 text-sm flex flex-wrap gap-4">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/>Leeds · On-site</li>
              <li className="flex items-center gap-2"><Briefcase className="h-4 w-4"/>37.5 hrs/week</li>
              <li className="flex items-center gap-2"><Award className="h-4 w-4"/>1st Class BSc (Hull)</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.1}}>
            <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <Card icon={<Layers />} title="WordPress">
                  Bespoke themes · ACF · SEO · A11y
                </Card>
                <Card icon={<Server />} title="LAMP / DevOps">
                  Ubuntu · Apache · Git · CI basics
                </Card>
                <Card icon={<Wrench />} title="Tooling">
                  Tailwind · Bootstrap · npm/composer
                </Card>
                <Card icon={<Rocket />} title="Frameworks">
                  Laravel · Vue · REST principles
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Capabilities</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.cat} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-sm font-medium text-neutral-200">{s.cat}</p>
              <ul className="mt-3 text-sm text-neutral-300 space-y-1">
                {s.items.map((i) => <Item key={i}>{i}</Item>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="font-medium text-neutral-100">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border border-neutral-800 px-2 py-1">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3 text-sm">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    <ExternalLink className="h-4 w-4" /> {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Role Fit */}
      <section id="fit" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Role Alignment</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <p className="text-sm text-neutral-300">What you need</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <Item>Responsive, accessible sites (WordPress · HubSpot · Shopify · Laravel · Vue)</Item>
              <Item>Pixel-perfect UI + performant builds</Item>
              <Item>SEO-friendly, standards-compliant code</Item>
              <Item>Git workflows and LAMP familiarity</Item>
              <Item>Team collaboration with design/content/strategy</Item>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <p className="text-sm text-neutral-300">What I bring</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <Item>Bespoke WP theme development and component-driven UIs</Item>
              <Item>Hands-on Tailwind/Bootstrap and clean, scalable CSS</Item>
              <Item>RESTful integrations, accessibility-first approach</Item>
              <Item>Shopify Liquid and HubSpot templating (foundations)</Item>
              <Item>Linux/Apache basics, CI-friendly GitHub workflows</Item>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {experience.map((e) => (
            <div key={e.role} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">{e.role} · {e.company}</p>
                <p className="text-xs text-neutral-400">{e.period}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {e.bullets.map((b, i) => <Item key={i}>{b}</Item>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h2 className="text-xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 text-neutral-300 max-w-prose">Open to being a founding member of the Leeds office. Available full-time on-site. Reach out below.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
            <a href="mailto:oliverdunndev@gmail.com" className="flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium"><Mail className="h-4 w-4"/> oliverdunndev@gmail.com</a>
            <a href="tel:+447519976548" className="flex items-center gap-2 rounded-2xl ring-1 ring-neutral-700 px-4 py-2"><Phone className="h-4 w-4"/> +44 7519 976548</a>
            <a href="https://github.com/OliverDunnDev" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl ring-1 ring-neutral-700 px-4 py-2"><Github className="h-4 w-4"/> GitHub</a>
            <a href="https://www.linkedin.com/in/oliver-dunn-a404a4251/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl ring-1 ring-neutral-700 px-4 py-2"><Linkedin className="h-4 w-4"/> LinkedIn</a>
          </div>
          <p className="mt-6 text-xs text-neutral-500 flex items-center gap-2"><Globe className="h-4 w-4"/> oliverdunndev.com</p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-12 text-xs text-neutral-500">
        © {new Date().getFullYear()} Oliver Dunn · Built with React & Tailwind
      </footer>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 min-h-[116px]">
      <div className="flex items-center gap-2 text-neutral-200">
        <span className="h-8 w-8 grid place-items-center rounded-xl bg-neutral-900 ring-1 ring-neutral-800">{icon}</span>
        <p className="text-sm font-medium">{title}</p>
      </div>
      <p className="mt-2 text-sm text-neutral-300">{children}</p>
    </div>
  );
}


