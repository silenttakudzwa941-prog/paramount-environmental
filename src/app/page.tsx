"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X, FileText
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07120d] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="rounded-2xl border border-white/10 bg-[#07120d]/80 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a href="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="h-6 w-6 text-[#07120d]" />
                </div>

                <div>
                  <div className="text-sm font-black tracking-[0.18em]">
                    PARAMOUNT
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-400">
                    Environmental & Safety
                  </div>
                </div>
              </a>

              {/* DESKTOP NAV */}
              <div className="hidden items-center gap-8 lg:flex">
                <a
                  href="#home"
                  className="text-sm font-medium text-emerald-400 transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-sm font-medium text-white/70 transition hover:text-emerald-400"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="text-sm font-medium text-white/70 transition hover:text-emerald-400"
                >
                  Services
                </a>

                <a
                  href="#gallery"
                  className="text-sm font-medium text-white/70 transition hover:text-emerald-400"
                >
                  Gallery
                </a>

                <a
                  href="#testimonials"
                  className="text-sm font-medium text-white/70 transition hover:text-emerald-400"
                >
                  Testimonials
                </a>

                <a
                  href="#contact"
                  className="text-sm font-medium text-white/70 transition hover:text-emerald-400"
                >
                  Contact
                </a>
              </div>

              {/* DESKTOP CTA */}
              <a
                href="tel:+264857711803"
                className="hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-[#07120d] transition hover:bg-emerald-400 lg:flex"
              >
                <Phone className="h-4 w-4" />
                Call Paramount
              </a>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg border border-white/10 p-2 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 border-t border-white/10 pt-4 lg:hidden"
              >
                <div className="flex flex-col gap-2">
                  {["Home", "About", "Services", "Gallery", "Testimonials", "Contact"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-emerald-400"
                      >
                        {item}
                      </a>
                    )
                  )}

                  <a
                    href="tel:+264857711803"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-[#07120d]"
                  >
                    <Phone className="h-4 w-4" />
                    Call Paramount
                  </a>
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_30%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#07120d_0%,rgba(7,18,13,0.94)_42%,rgba(7,18,13,0.72)_70%,#07120d_100%)]" />

          <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

          <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-green-400/5 blur-[100px]" />
        </div>

        {/* DECORATIVE GRID */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* HERO CONTENT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300"
              >
                <Sparkles className="h-4 w-4" />
                Environmental & Safety Specialists
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Protecting
                <span className="block text-emerald-400">
                  People.
                </span>
                <span className="block">Property.</span>
                <span className="block text-white/60">
                  Environment.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
              >
                Paramount Environmental and Safety Services provides
                professional environmental, cleaning, pest control,
                landscaping, property maintenance and occupational safety
                solutions for businesses, properties and communities.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 font-bold text-[#07120d] shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-400"
                >
                  Request a Service
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+264857711803"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-emerald-400" />
                  +264 85 771 1803
                </a>
              </motion.div>

              {/* TRUST POINTS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
              >
                {[
                  "Professional Service",
                  "Safety Focused",
                  "Environmental Care",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/55"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* HERO VISUAL */}
<motion.div
  initial={{ opacity: 0, scale: 0.92, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="relative hidden min-h-[540px] lg:block"
>
  {/* MAIN HERO IMAGE */}
  <div className="absolute inset-4 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
    <img
      src="/hero.jpeg"
      alt="Paramount Environmental and Safety Services"
      className="h-full w-full object-cover transition duration-700 hover:scale-105"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#07120d]/30 via-[#07120d]/20 to-[#07120d]/80" />

    {/* Green atmospheric overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(52,211,153,0.18),transparent_40%)]" />

    {/* Image label */}
    <div className="absolute bottom-8 left-8 right-8">
      <div className="rounded-2xl border border-white/10 bg-[#07120d]/70 p-5 backdrop-blur-xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
          Paramount Environmental & Safety
        </p>

        <p className="mt-2 text-sm text-white/70">
          Professional environmental, property and safety services.
        </p>
      </div>
    </div>
  </div>

  {/* FLOATING CARD */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-5 top-24 rounded-2xl border border-white/10 bg-[#0b1c14]/90 p-5 shadow-2xl backdrop-blur-xl"
  >
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
      </div>

      <div>
        <p className="text-sm font-bold">Professional</p>
        <p className="text-xs text-white/40">
          Quality Service
        </p>
      </div>
    </div>
  </motion.div>

  {/* SECOND FLOATING CARD */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-3 -right-5 rounded-2xl border border-white/10 bg-[#0b1c14]/90 p-5 shadow-2xl backdrop-blur-xl"
  >
    <div>
      <p className="text-xs uppercase tracking-widest text-emerald-400">
        Serving
      </p>

      <p className="mt-1 text-lg font-black">
        Katima Mulilo
      </p>

      <p className="text-xs text-white/40">
        Namibia
      </p>
    </div>
  </motion.div>
</motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-emerald-400 to-transparent" />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
<section
  id="services"
  className="relative overflow-hidden bg-[#f5f8f6] px-6 py-28 text-[#07120d]"
>
  {/* Decorative background */}
  <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
  <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
        <Sparkles className="h-4 w-4" />
        What We Do
      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Complete solutions for
        <span className="text-emerald-600"> safer environments.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
        From environmental management and property care to occupational
        health and safety, Paramount provides professional services
        designed to protect people, properties and the environment.
      </p>
    </motion.div>

    {/* SERVICES GRID */}
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Pest Control & Fumigation",
          description:
            "Professional pest management and fumigation solutions for residential, commercial and industrial environments.",
          icon: "🛡️",
        },
        {
          number: "02",
          title: "Termite Treatment",
          description:
            "Targeted termite treatment designed to protect buildings, structures and valuable property from infestation.",
          icon: "🏠",
        },
        {
          number: "03",
          title: "Rodent Management",
          description:
            "Effective rodent control solutions helping maintain clean, safe and hygienic environments.",
          icon: "🔒",
        },
        {
          number: "04",
          title: "Landscaping & Gardening",
          description:
            "Professional landscaping and garden maintenance to create clean, attractive and well-maintained outdoor spaces.",
          icon: "🌿",
        },
        {
          number: "05",
          title: "Debushing & Land Clearing",
          description:
            "Reliable clearing of overgrown vegetation, bushes and unwanted growth from residential and commercial properties.",
          icon: "🌳",
        },
        {
          number: "06",
          title: "Cleaning Services",
          description:
            "Comprehensive cleaning services for offices, properties, facilities and surrounding environments.",
          icon: "✨",
        },
        {
          number: "07",
          title: "Occupational Health & Safety",
          description:
            "Professional OHS training and workplace safety solutions designed to promote safer working environments.",
          icon: "👷",
        },
        {
          number: "08",
          title: "First Aid Training",
          description:
            "Practical first aid training that equips employees and organisations with essential emergency response skills.",
          icon: "🩹",
        },
        {
          number: "09",
          title: "Fire Extinguisher Servicing",
          description:
            "Fire extinguisher inspection and servicing to help ensure equipment remains ready when it is needed.",
          icon: "🧯",
        },
        {
          number: "10",
          title: "Fire Safety Training",
          description:
            "Fire safety awareness and training focused on prevention, preparedness and emergency response.",
          icon: "🔥",
        },
        {
          number: "11",
          title: "Hygiene & Sanitation",
          description:
            "Professional hygiene and sanitation services supporting healthier and cleaner homes, workplaces and facilities.",
          icon: "🧼",
        },
        {
          number: "12",
          title: "Property Maintenance",
          description:
            "Reliable property maintenance services helping clients keep their buildings and surroundings in excellent condition.",
          icon: "🔧",
        },
        {
          number: "13",
          title: "Environmental Management",
          description:
            "Practical environmental management solutions supporting responsible property and environmental practices.",
          icon: "🌍",
        },
        {
          number: "14",
          title: "Inspection Services",
          description:
            "Professional inspection services to help identify environmental, safety and property-related concerns.",
          icon: "🔍",
        },
        {
          number: "15",
          title: "Consultancy & Training",
          description:
            "Specialised consultancy and training tailored to organisational environmental, health and safety needs.",
          icon: "📋",
        },
      ].map((service, index) => (
        <motion.div
          key={service.number}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: index * 0.04,
          }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-900/10"
        >
          {/* Number */}
          <div className="absolute right-6 top-5 text-xs font-black tracking-widest text-gray-200 transition-colors duration-300 group-hover:text-emerald-100">
            {service.number}
          </div>

          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
            {service.icon}
          </div>

          <h3 className="mt-7 text-xl font-black tracking-tight">
            {service.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            {service.description}
          </p>

          {/* Learn more */}
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-600 transition-all duration-300 group-hover:gap-3">
            Learn more
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Bottom hover line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 overflow-hidden rounded-[2rem] bg-[#07120d] p-8 text-white sm:p-10 lg:p-12"
    >
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            Need a professional service?
          </p>

          <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Let's take care of your environment.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
            Talk to Paramount about your environmental, property,
            cleaning or safety requirements.
          </p>
        </div>

        <a
          href="#contact"
          className="group flex shrink-0 items-center gap-3 rounded-full bg-emerald-500 px-7 py-4 font-bold text-[#07120d] transition hover:bg-emerald-400"
        >
          Request a Service
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  </div>
</section>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative overflow-hidden bg-white px-6 py-28 text-[#07120d]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT - VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#07120d]">
               {/* ABOUT IMAGE */}
<div className="absolute inset-0">
  <img
    src="/gallery/about-paramount.jpeg"
    alt="Paramount Environmental and Safety Services team at work"
    className="h-full w-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/50 to-[#07120d]/10" />

  {/* Green overlay */}
  <div className="absolute inset-0 bg-emerald-900/10" />
</div>

{/* ABOUT CONTENT */}
<div className="relative flex h-full min-h-[500px] flex-col justify-end p-8 sm:p-10">
  <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400">
    Paramount
  </p>

  <h3 className="mt-3 max-w-lg text-3xl font-black text-white sm:text-4xl">
    Safety. Environment.
    <span className="block text-emerald-400">
      Excellence.
    </span>
  </h3>

  <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
    Professional environmental and safety solutions for businesses,
    properties and communities.
  </p>
</div>

{/* FLOATING CARD */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-[#07120d]/75 p-4 backdrop-blur-xl"
>
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15">
      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
    </div>

    <div>
      <p className="text-xs font-bold text-white">
        Professional
      </p>

      <p className="text-[11px] text-white/40">
        Service Delivery
      </p>
    </div>
  </div>
</motion.div>
              </div>

              {/* Decorative number */}
              <div className="absolute -bottom-6 -right-5 hidden h-28 w-28 items-center justify-center rounded-3xl bg-emerald-500 shadow-2xl shadow-emerald-900/20 sm:flex">
                <div className="text-center text-[#07120d]">
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest">
                    Services
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                About Paramount
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                A safer, cleaner and better-managed environment starts here.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Paramount Environmental and Safety Services provides a
                comprehensive range of environmental, property maintenance,
                cleaning and occupational health and safety solutions.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                From protecting properties against pests and termites to
                maintaining outdoor spaces, supporting workplace safety and
                providing specialist training, our services are designed
                around the needs of our clients.
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Professional Approach",
                    text: "Reliable and organised service delivery.",
                  },
                  {
                    title: "Safety Focused",
                    text: "Solutions built around health and safety.",
                  },
                  {
                    title: "Environmental Care",
                    text: "Responsible environmental practices.",
                  },
                  {
                    title: "Client Focused",
                    text: "Services tailored to client requirements.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                      <div>
                        <h3 className="font-black">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#07120d] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                Talk to Paramount
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#07120d] px-6 py-28 text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
              Why Paramount
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              More than a service provider.
              <span className="block text-white/45">
                A partner in protection.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/50">
              We bring together environmental management, property care,
              cleaning and workplace safety services under one professional
              service platform.
            </p>
          </motion.div>

          {/* TRUST CARDS */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "15+",
                title: "Service Areas",
                text: "A broad range of environmental and safety services.",
              },
              {
                value: "24/7",
                title: "Safety Mindset",
                text: "Safety remains central to the way we approach our work.",
              },
              {
                value: "100%",
                title: "Client Focus",
                text: "Solutions designed around the client's requirements.",
              },
              {
                value: "1",
                title: "Trusted Partner",
                text: "One company for environmental, property and safety needs.",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                <div className="text-4xl font-black text-emerald-400">
                  {stat.value}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {stat.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* GALLERY / OUR WORK */}
<section
  id="gallery"
  className="relative overflow-hidden bg-[#f5f8f6] px-6 py-28 text-[#07120d]"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
    >
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
          Our Work
        </div>

        <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Work that makes a
          <span className="text-emerald-600">
            {" "}visible difference.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          Explore some of the services and projects delivered by
          Paramount Environmental and Safety Services.
        </p>
      </div>

      <a
        href="#contact"
        className="group inline-flex shrink-0 items-center gap-2 font-bold text-emerald-700"
      >
        Discuss your project
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </a>
    </motion.div>

    {/* GALLERY GRID */}
    <div className="mt-16 grid gap-5 lg:grid-cols-12">

      {/* YARD CLEANING */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#07120d] lg:col-span-7"
      >
        <img
          src="/gallery/yard-cleaning.jpeg"
          alt="Paramount yard cleaning project"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
          <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#07120d]">
            Featured Work
          </span>

          <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Yard Cleaning
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
            Professional cleaning and preparation of outdoor spaces,
            helping properties maintain a clean and organised appearance.
          </p>
        </div>
      </motion.div>

      {/* RIGHT COLUMN */}
      <div className="grid gap-5 lg:col-span-5">

        {/* PLOT CLEARING */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[2rem] bg-[#123c2b]"
        >
          <img
            src="/gallery/plot-clearing.jpeg"
            alt="Paramount plot clearing project"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Land Services
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Plot Clearing
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Clearing and preparing plots for use or development.
            </p>
          </div>
        </motion.div>

        {/* DEBUSHING */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[2rem] bg-[#0d2920]"
        >
          <img
            src="/gallery/debushing.jpeg"
            alt="Paramount debushing project"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/35 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Vegetation Management
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Debushing
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Removing unwanted vegetation and overgrown bush from
              properties.
            </p>
          </div>
        </motion.div>
      </div>

      {/* TREE CUTTING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#1a3229] lg:col-span-4"
      >
        <img
          src="/gallery/tree-cutting.jpeg"
          alt="Paramount tree cutting project"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Property Services
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Tree Cutting
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Professional tree and vegetation clearing services.
          </p>
        </div>
      </motion.div>

      {/* WASTE DISPOSAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#10241c] lg:col-span-4"
      >
        <img
          src="/gallery/waste-disposal.jpeg"
          alt="Paramount waste disposal project"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Environmental Services
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Waste Disposal
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Helping clients maintain clean and responsibly managed
            environments.
          </p>
        </div>
      </motion.div>

      {/* LANDSCAPING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="group relative min-h-[280px] overflow-hidden rounded-[2rem] lg:col-span-4"
      >
        <img
          src="/gallery/landscaping.jpeg"
          alt="Paramount landscaping and gardening project"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/35 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Outdoor Spaces
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            Landscaping & Gardening
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/65">
            Creating and maintaining attractive outdoor spaces.
          </p>
        </div>
      </motion.div>
    </div>

    {/* GALLERY NOTE */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-emerald-900/10 bg-white p-6 sm:flex-row sm:items-center"
    >
      <div>
        <p className="font-black">
          More project photos coming soon.
        </p>

        <p className="mt-1 text-sm text-gray-500">
          This gallery will showcase Paramount's completed work and
          project results.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#07120d] px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
      >
        Submit an Enquiry
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  </div>
</section>
   {/* CLIENT RECOMMENDATIONS */}
<section
  id="testimonials"
  className="relative overflow-hidden bg-white px-6 py-28 text-[#07120d]"
>
  {/* Background decoration */}
  <div className="absolute right-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-3xl" />
  <div className="absolute bottom-[-15%] left-[-10%] h-[450px] w-[450px] rounded-full bg-emerald-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
        Client Recommendations
      </div>

      <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
        Trusted by clients.
        <span className="block text-emerald-600">
          Recommended with confidence.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
        Paramount Environmental and Safety Services is trusted by
        businesses, hospitality organisations, financial institutions,
        healthcare facilities and other organisations across the region.
      </p>
    </motion.div>

    {/* RECOMMENDATION CARDS */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* PAMO TRADING */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f5f8f6] p-8"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-100">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Pamo Trading Enterprises
          </h3>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Pest management services since 2025
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            “Their team has consistently provided professional, reliable,
            and discreet service. We particularly appreciate their
            preventive approach and use of environmentally responsible
            methods.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* MILÁNS */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] bg-[#07120d] p-8 text-white"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-900">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Miláns Bed and Breakfast
          </h3>

          <p className="mt-2 text-sm font-semibold text-white/40">
            Client since 2024 · NS Naudé, Owner
          </p>

          <p className="mt-6 text-sm leading-7 text-white/60">
            “Their team has consistently provided professional, reliable,
            and discreet service, which is essential for maintaining our
            guest experience.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-400 transition hover:text-emerald-300"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* NAMIBIA BREWERIES */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-100">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
            <ShieldCheck className="h-6 w-6 text-emerald-700" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Namibia Breweries
          </h3>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Katima Mulilo Depot
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            “Their team has consistently demonstrated good communication,
            strong compliance with required standards, and quality service
            delivery.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* CHILDREN OF ZION VILLAGE */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f5f8f6] p-8"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-100">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Children of Zion Village
          </h3>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Pest management services since December 2024
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            “Their service has been exemplary—characterized by reliability,
            discretion, and a strong preventive focus.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* LETSHEGO BANK */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] bg-[#07120d] p-8 text-white"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-900">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Letshego Bank Namibia
          </h3>

          <p className="mt-2 text-sm font-semibold text-white/40">
            Katima Mulilo Branch · November 2025
          </p>

          <p className="mt-6 text-sm leading-7 text-white/60">
            “Paramount Pest Solutions has demonstrated a high level of
            professionalism, reliability, and technical competence.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-400 transition hover:text-emerald-300"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* SANGANA */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-100">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
            <ShieldCheck className="h-6 w-6 text-emerald-700" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Sangana Investment CC
          </h3>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Sangana Residence · Client for 3 years
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            “They've been our best control provider at Sangana Residence for
            3 years and we have been very satisfied with their service.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* SILVER REEDS */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f5f8f6] p-8"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-100">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Silver Reeds Boutique Guest House
          </h3>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Client since 2021 · Managing Owner
          </p>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            “The company has consistently provided professional, reliable,
            and discreet service, which is essential for maintaining our
            guest experience.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* NUTRIFOOD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -8 }}
        className="relative overflow-hidden rounded-[2rem] bg-[#07120d] p-8 text-white"
      >
        <div className="absolute right-7 top-5 text-6xl font-black leading-none text-emerald-900">
          "
        </div>

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
            <ShieldCheck className="h-6 w-6 text-[#07120d]" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
            Client Recommendation
          </p>

          <h3 className="mt-3 text-xl font-black">
            Nutrifood / Tradevest Holdings
          </h3>

          <p className="mt-2 text-sm font-semibold text-white/40">
            Katima State Hospital Kitchen
          </p>

          <p className="mt-6 text-sm leading-7 text-white/60">
            “They spray and do the fumigation after every two months. We are
            happy with their services and we proudly recommend it for other
            organizations and companies.”
          </p>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-black text-emerald-400 transition hover:text-emerald-300"
          >
            View Recommendation Letter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

    </div>

    {/* VERIFIED DOCUMENTATION */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-12 overflow-hidden rounded-[2rem] bg-[#07120d] text-white"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT */}
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500">
            <FileText className="h-7 w-7 text-[#07120d]" />
          </div>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
            Original Documentation
          </p>

          <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Read the original recommendation letters.
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
            These recommendations are supported by formal letters supplied
            by Paramount Pest Solutions' clients. Visitors can open the
            original document and review the letters directly.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            Original client documentation
          </div>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-black text-[#07120d] transition hover:bg-emerald-400"
          >
            Open Recommendation PDF
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

{/* RIGHT DOCUMENT PREVIEW */}
<div className="flex items-center justify-center bg-[#f5f8f6] p-8 sm:p-12">
  <div className="w-full max-w-md">
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

      {/* CARD HEADER */}
      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
            Recommendation Portfolio
          </p>

          <p className="mt-1 text-sm font-bold text-[#07120d]">
            Paramount Pest Solutions
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        </div>
      </div>

      {/* PDF PREVIEW */}
      <div className="bg-gray-100 p-4">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          <iframe
            src="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf#page=1&view=FitH"
            title="Paramount Pest Solutions Recommendation Letters"
            className="h-[420px] w-full"
          />

        </div>
      </div>

      {/* CARD FOOTER */}
      <div className="border-t border-gray-100 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Client Recommendations
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Original recommendation letters supplied by Paramount Pest
              Solutions' clients.
            </p>
          </div>

          <a
            href="/recommendations/Paramount%20Pest%20Solutions-recommendations%20latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-[#07120d] px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
          >
            View PDF
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
      </div>
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12 text-center"
    >
      <p className="text-sm text-gray-500">
        Looking for reliable environmental and safety services?
      </p>

      <a
        href="#contact"
        className="mt-4 inline-flex items-center gap-2 font-black text-emerald-600 transition hover:text-emerald-700"
      >
        Speak to our team
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>

  </div>
</section>

     {/* CONTACT / REQUEST A SERVICE */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#f5f8f5] py-24 text-[#07120d]"
>
  {/* Decorative background */}
  <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
        Request a Service
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Let&apos;s take care of your
        <span className="block text-emerald-600">environment.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Whether you need pest control, property maintenance, cleaning,
        environmental services or safety training, our team is ready to
        assist.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Contact information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-[#07120d] p-8 text-white shadow-2xl sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Paramount Environmental
        </p>

        <h3 className="mt-4 text-3xl font-bold">
          Speak directly with our team.
        </h3>

        <p className="mt-4 leading-7 text-white/65">
          Contact Paramount Environmental and Safety Services in Katima
          Mulilo, Namibia for professional environmental, cleaning,
          maintenance and occupational safety solutions.
        </p>

        <div className="mt-10 space-y-6">
          {/* Phone */}
          <a
            href="tel:+264857711803"
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-400/40 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Phone size={21} />
            </div>

            <div>
              <p className="text-sm text-white/45">Call us</p>
              <p className="mt-1 font-semibold">
                +264 85 771 1803
              </p>
              <p className="text-sm text-white/60">
                081 467 9410
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:paramountoperations01@gmail.com"
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-400/40 hover:bg-white/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Sparkles size={21} />
            </div>

            <div>
              <p className="text-sm text-white/45">Email us</p>
              <p className="mt-1 break-all font-semibold">
                paramountoperations01@gmail.com
              </p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="text-sm text-white/45">Office</p>
              <p className="mt-1 font-semibold">1942 Nambweza</p>
              <p className="text-sm text-white/60">
                Katima Mulilo, Namibia
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/264857711803"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 font-bold text-white transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
        >
          Chat with Paramount on WhatsApp
          <ArrowRight className="ml-2" size={19} />
        </a>
      </motion.div>

      {/* Enquiry form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
      >
        <h3 className="text-2xl font-bold">
          Request a service
        </h3>

        <p className="mt-2 text-slate-500">
          Tell us what you need and our team can get back to you.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;

            const name = (
              form.elements.namedItem("name") as HTMLInputElement
            ).value;

            const phone = (
              form.elements.namedItem("phone") as HTMLInputElement
            ).value;

            const service = (
              form.elements.namedItem("service") as HTMLSelectElement
            ).value;

            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;

            const whatsappMessage = encodeURIComponent(
              `Hello Paramount Environmental and Safety Services.

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`
            );

            window.open(
              `https://wa.me/264857711803?text=${whatsappMessage}`,
              "_blank"
            );
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-semibold"
            >
              Service Required
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Pest Control & Fumigation</option>
              <option>Termite Treatment</option>
              <option>Rodent Management</option>
              <option>Landscaping & Gardening</option>
              <option>Debushing & Land Clearing</option>
              <option>Cleaning Services</option>
              <option>Occupational Health & Safety Training</option>
              <option>First Aid Training</option>
              <option>Fire Extinguisher Servicing</option>
              <option>Fire Safety Training</option>
              <option>Hygiene & Sanitation</option>
              <option>Property Maintenance</option>
              <option>Environmental Management</option>
              <option>Inspection Services</option>
              <option>Consultancy & Training</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us a little about what you need..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-xl bg-[#07120d] px-6 py-4 font-bold text-white transition hover:bg-emerald-600 hover:shadow-lg"
          >
            Send Request on WhatsApp
            <ArrowRight className="ml-2" size={19} />
          </button>

          <p className="text-center text-xs leading-5 text-slate-400">
            Your request will open WhatsApp with the information you
            provide, ready to send to Paramount.
          </p>
        </form>
      </motion.div>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="border-t border-white/10 bg-[#07120d] text-white">
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
          </div>

          <div>
            <div className="text-sm font-black tracking-[0.2em]">
              PARAMOUNT
            </div>

            <div className="text-xs text-white/50">
              Environmental & Safety
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
          Professional environmental, safety, cleaning, property maintenance
          and training services in Katima Mulilo, Namibia.
        </p>

        <a
          href="https://wa.me/263775496377?text=I%20would%20like%20to%20request%20website%20development%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
        >
          Website by Silent Programs
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
          Quick Links
        </h3>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>

          <a href="#about" className="transition hover:text-white">
            About Us
          </a>

          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#gallery" className="transition hover:text-white">
            Gallery
          </a>

          <a href="#testimonials" className="transition hover:text-white">
            Testimonials
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* SERVICES */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
          Services
        </h3>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
          <span>Pest Control & Fumigation</span>
          <span>Termite Treatment</span>
          <span>Rodent Management</span>
          <span>Landscaping & Gardening</span>
          <span>Cleaning Services</span>
          <span>OHS & First Aid Training</span>
          <span>Fire Safety Services</span>
          <span>Environmental Management</span>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
          Contact
        </h3>

        <div className="mt-6 space-y-5 text-sm text-white/60">

          <a
            href="tel:+264857711803"
            className="block transition hover:text-white"
          >
            <span className="block text-xs uppercase tracking-wider text-white/30">
              Phone
            </span>
            +264 85 771 1803
          </a>

          <a
            href="tel:+264814679410"
            className="block transition hover:text-white"
          >
            <span className="block text-xs uppercase tracking-wider text-white/30">
              Alternative
            </span>
            081 467 9410
          </a>

          <a
            href="mailto:paramountoperations01@gmail.com"
            className="block break-all transition hover:text-white"
          >
            <span className="block text-xs uppercase tracking-wider text-white/30">
              Email
            </span>
            paramountoperations01@gmail.com
          </a>

          <div>
            <span className="block text-xs uppercase tracking-wider text-white/30">
              Office
            </span>

            1942 Nambweza
            <br />
            Katima Mulilo, Namibia
          </div>

        </div>
      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">

      <p>
        © {new Date().getFullYear()} Paramount Environmental and Safety Services.
        All rights reserved.
      </p>

      <a
        href="https://wa.me/263775496377?text=I%20would%20like%20to%20request%20website%20development%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white/60 transition hover:text-emerald-400"
      >
        Created by Silent Programs
      </a>

    </div>

  </div>
</footer>
</main>


  );
}

