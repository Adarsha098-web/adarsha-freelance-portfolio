import { ArrowRight, Mail } from "lucide-react";

function App() {
  return (
<div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* ==================== NAVBAR ==================== */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight transition hover:opacity-80"
          >
            Adarsha<span className="text-red-500">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              className="text-sm font-medium text-white/70 transition hover:text-red-400"
            >
              Work
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white/70 transition hover:text-red-400"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-white/70 transition hover:text-red-400"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white/70 transition hover:text-red-400"
            >
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
          >
            Let's Talk
          </a>
        </div>
      </nav>


      {/* ==================== MAIN ==================== */}
      <main>

        {/* ==================== HERO ==================== */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">

          {/* Background effects */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.06] blur-[120px]" />

          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-red-500/[0.04] blur-[100px]" />

          <div className="mx-auto w-full max-w-7xl">

            {/* Availability */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 shadow-lg shadow-red-500/40" />

              <span className="text-sm font-medium text-red-400">
                Available for freelance projects
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              I build{" "}
              <span className="text-red-500">
                digital products
              </span>{" "}
              that work.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              I'm Adarsha Gupta, a Java & Full-Stack Developer focused on
              building reliable web applications, REST APIs, and backend
              systems for businesses and startups.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/20"
              >
                Start a Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400"
              >
                View My Work
              </a>

            </div>

            {/* Social links */}
            <div className="mt-12 flex flex-wrap items-center gap-3">

              <a
                href="https://github.com/Adarsha098-web"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-red-500/50 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/adarsha-gupta-java/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-red-500/50 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#contact"
                aria-label="Email"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-all duration-300 hover:border-red-500/50 hover:text-red-400"
              >
                <Mail size={19} />
              </a>

            </div>

            {/* Tech stack */}
            <div className="mt-20 border-t border-white/10 pt-8">

              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-white/70">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>SQL</span>
                <span>REST APIs</span>
                <span>JDBC</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>Tailwind CSS</span>

              </div>
            </div>

          </div>
        </section>


        {/* ==================== PROJECTS ==================== */}
        <section
          id="work"
          className="border-t border-white/10 px-6 py-28 md:py-32"
        >
          <div className="mx-auto max-w-7xl">

            {/* Section heading */}
            <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                  Selected Work
                </p>

                <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Projects built to{" "}
                  <span className="text-white/40">
                    solve real problems.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-white/60">
                A selection of applications I've developed using modern
                frontend, backend, API, and database technologies.
              </p>

            </div>


            {/* Project cards */}
            <div className="grid gap-8 lg:grid-cols-2">


              {/* ==================== TASKFLOW ==================== */}
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5">

                {/* Preview */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-500/[0.10] via-transparent to-transparent">

                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.08] blur-3xl transition duration-500 group-hover:bg-red-500/[0.15]" />

                  <div className="relative text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                      Full Stack Application
                    </p>

                    <h3 className="mt-3 text-4xl font-bold">
                      TaskFlow
                      <span className="text-red-500"> AI</span>
                    </h3>

                  </div>
                </div>


                {/* Content */}
                <div className="p-8 md:p-9">

                  <div className="mb-5 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      Java
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      Spring Boot
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      React
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      PostgreSQL
                    </span>

                  </div>

                  <h3 className="text-2xl font-semibold">
                    Task Management Platform
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    A full-stack task management application with a Java
                    Spring Boot backend, React frontend, PostgreSQL database,
                    and RESTful APIs for managing tasks efficiently.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">

                    <a
                      href="https://github.com/Adarsha098-web/taskflow-ai"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      View Project
                    </a>

                    <a
                      href="https://github.com/Adarsha098-web/taskflow-ai"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-red-500/50 hover:text-red-400"
                    >
                      GitHub →
                    </a>

                  </div>

                </div>
              </article>


              {/* ==================== FLIGHT ==================== */}
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5">

                {/* Preview */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-500/[0.10] via-transparent to-transparent">

                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.08] blur-3xl transition duration-500 group-hover:bg-red-500/[0.15]" />

                  <div className="relative text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                      Booking Platform
                    </p>

                    <h3 className="mt-3 text-4xl font-bold">
                      Flight
                      <span className="text-red-500"> Management</span>
                    </h3>

                  </div>
                </div>


                {/* Content */}
                <div className="p-8 md:p-9">

                  <div className="mb-5 flex flex-wrap gap-2">

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      Next.js
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      Supabase
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      PostgreSQL
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                      Tailwind CSS
                    </span>

                  </div>

                  <h3 className="text-2xl font-semibold">
                    Flight Booking Platform
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    A responsive flight booking platform featuring flight
                    search, dynamic seat selection, booking confirmation,
                    authentication, and booking history.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">

                    <a
                      href="https://github.com/Adarsha098-web/flight-management-app"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      View Project
                    </a>

                    <a
                      href="https://github.com/Adarsha098-web/flight-management-app"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-red-500/50 hover:text-red-400"
                    >
                      GitHub →
                    </a>

                  </div>

                </div>
              </article>


              {/* ==================== JOB TRACKER ==================== */}
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5">
                {/* Preview */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-500/[0.10] via-transparent to-transparent">

                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.08] blur-3xl transition duration-500 group-hover:bg-red-500/[0.15]" />

                  <div className="relative text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                      Full Stack Application
                    </p>

                    <h3 className="mt-3 text-4xl font-bold">
                      Job Application
                      <span className="text-red-500"> Tracker</span>
                    </h3>

                  </div>
                </div>


                {/* Content */}
                <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:p-9">

                  <div>

                    <div className="mb-5 flex flex-wrap gap-2">

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                        FastAPI
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                        React
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                        PostgreSQL
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                        Docker
                      </span>

                    </div>

                    <h3 className="text-2xl font-semibold">
  Job Application Tracker
</h3>

<p className="mt-4 max-w-2xl leading-7 text-white/60">
  A full-stack platform for organizing job applications,
  tracking application status, and managing application
  data with React, FastAPI, PostgreSQL, and Docker.
</p>

</div>


<div className="flex items-center md:items-end">

  <div className="flex flex-wrap gap-3">

    <a
      href="https://github.com/Adarsha098-web/job-application-tracker"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
    >
      View Project
    </a>

    <a
      href="https://github.com/Adarsha098-web/job-application-tracker"
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-red-500/50 hover:text-red-400"
    >
      GitHub →
    </a>

  </div>

</div>

</div>
</article>


{/* ==================== FOODMANDU ==================== */}

<article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5">

  {/* Preview */}
  <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-500/[0.10] via-transparent to-transparent">

    <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.08] blur-3xl transition duration-500 group-hover:bg-red-500/[0.15]" />

    <div className="relative text-center">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
        Food Delivery Website
      </p>

      <h3 className="mt-3 text-4xl font-bold">
        Food<span className="text-red-500">mandu</span>
      </h3>

    </div>

  </div>


  {/* Content */}
  <div className="p-8 md:p-9">

    <div className="mb-5 flex flex-wrap gap-2">

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
        HTML
      </span>

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
        CSS
      </span>

      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
        JavaScript
      </span>

    </div>


    <h3 className="text-2xl font-semibold">
      Food Delivery Web App
    </h3>

    <p className="mt-4 leading-7 text-white/60">
      A responsive food delivery website with an interactive menu,
      shopping cart functionality, modern UI, and a smooth ordering
      experience across desktop and mobile devices.
    </p>


    <div className="mt-7 flex flex-wrap items-center gap-3">

      <a
        href="https://foodmandudelivery.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/Adarsha098-web/food-delivery-app"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-red-500/50 hover:text-red-400"
      >
        GitHub →
      </a>

    </div>

  </div>

</article>


</div>


            {/* Projects CTA */}
            <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

              <p className="text-sm text-white/60">
                Have a project in mind?
              </p>

              <a
                href="#contact"
                className="group flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-400"
              >
                Let's talk

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>
        </section>


{/* ==================== SERVICES ==================== */}

<section
  id="services"
  className="border-t border-white/10 px-6 py-28 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="max-w-3xl">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
        Services
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        What I can build{" "}
        <span className="text-white/40">
          for you.
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/60">
        I help startups, businesses, and individuals build reliable
        web applications, backend systems, and APIs with a focus on
        performance, usability, and clean development.
      </p>

    </div>


    {/* Services Grid */}
    <div className="mt-16 grid gap-5 md:grid-cols-2">


      {/* Service 01 */}
      <div className="group rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#101010] hover:shadow-xl hover:shadow-red-500/[0.03] md:p-10">

        <div className="flex items-start justify-between">

          <span className="text-sm font-semibold text-red-500">
            01
          </span>

          <span className="text-xl text-white/30 transition group-hover:text-red-400">
            ↗
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Web Application Development
        </h3>

        <p className="mt-4 max-w-md leading-7 text-white/60">
          Responsive and user-friendly web applications built around
          your business requirements, workflows, and user needs.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            React
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            JavaScript
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            Next.js
          </span>

        </div>

      </div>


      {/* Service 02 */}
      <div className="group rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#101010] hover:shadow-xl hover:shadow-red-500/[0.03] md:p-10">

        <div className="flex items-start justify-between">

          <span className="text-sm font-semibold text-red-500">
            02
          </span>

          <span className="text-xl text-white/30 transition group-hover:text-red-400">
            ↗
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Backend & REST API Development
        </h3>

        <p className="mt-4 max-w-md leading-7 text-white/60">
          Scalable backend services and REST APIs for authentication,
          business logic, application data, and frontend integration.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            Java
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            Spring Boot
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            REST APIs
          </span>

        </div>

      </div>


      {/* Service 03 */}
      <div className="group rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#101010] hover:shadow-xl hover:shadow-red-500/[0.03] md:p-10">

        <div className="flex items-start justify-between">

          <span className="text-sm font-semibold text-red-500">
            03
          </span>

          <span className="text-xl text-white/30 transition group-hover:text-red-400">
            ↗
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Database & API Integration
        </h3>

        <p className="mt-4 max-w-md leading-7 text-white/60">
          Structured database solutions and reliable integrations
          that keep application data organized, accessible, and
          connected across different systems.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            PostgreSQL
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            MySQL
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            SQL
          </span>

        </div>

      </div>


      {/* Service 04 */}
      <div className="group rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#101010] hover:shadow-xl hover:shadow-red-500/[0.03] md:p-10">

        <div className="flex items-start justify-between">

          <span className="text-sm font-semibold text-red-500">
            04
          </span>

          <span className="text-xl text-white/30 transition group-hover:text-red-400">
            ↗
          </span>

        </div>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Bug Fixing & Improvements
        </h3>

        <p className="mt-4 max-w-md leading-7 text-white/60">
          Debugging and improving existing applications by fixing
          frontend, backend, API, database, and integration issues.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            Debugging
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            APIs
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/60">
            Full Stack
          </span>

        </div>

      </div>

    </div>


    {/* Services CTA */}
    <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

      <div>
        <p className="text-sm font-medium text-white">
          Have a project in mind?
        </p>

        <p className="mt-1 text-sm text-white/40">
          Let’s discuss how I can help.
        </p>
      </div>

      <a
        href="#contact"
        className="group flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-400"
      >
        Start a conversation

        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>

    </div>

  </div>
</section>


 {/* ==================== ABOUT ==================== */}

<section
  id="about"
  className="border-t border-white/10 px-6 py-28 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Intro */}
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

      {/* Left */}
      <div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
          About Me
        </p>

        <h2 className="max-w-md text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Building with{" "}
          <span className="text-white/40">
            purpose.
          </span>
        </h2>

      </div>


      {/* Right */}
      <div>

        <p className="text-xl leading-9 text-white/85 md:text-2xl">
          I'm Adarsha Gupta, a Software Developer focused on building
          reliable web applications, backend systems, and REST APIs
          that solve practical business problems.
        </p>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
          My strongest area is backend development with Java and
          Spring Boot. I also work with React, JavaScript, Python,
          databases, and modern web technologies to build complete
          full-stack applications.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
          I enjoy understanding how different parts of an application
          work together — from designing backend logic and APIs to
          connecting databases and building responsive user interfaces.
          My goal is to create software that is clean, reliable, and
          practical to maintain.
        </p>


        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

          <div className="bg-[#0b0b0b] p-6">
            <p className="text-3xl font-bold text-white">
              5+
            </p>

            <p className="mt-2 text-sm text-white/60">
              Featured Projects
            </p>
          </div>

          <div className="bg-[#0b0b0b] p-6">
            <p className="text-3xl font-bold text-white">
              Full-Stack
            </p>

            <p className="mt-2 text-sm text-white/60">
              Development Focus
            </p>
          </div>

          <div className="bg-[#0b0b0b] p-6">
            <p className="text-3xl font-bold text-white">
              2025
            </p>

            <p className="mt-2 text-sm text-white/60">
              B.E. Graduate
            </p>
          </div>

        </div>

      </div>
    </div>


    {/* Experience */}
    <div className="mt-28 border-t border-white/10 pt-12 md:mt-32">

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Experience
          </p>
        </div>


        <div>

          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-start">

            <div>

              <h3 className="text-2xl font-semibold text-white">
                Full Stack Developer Intern
              </h3>

              <p className="mt-2 text-white/60">
                Varcons Technologies
              </p>

            </div>

            <span className="text-sm text-white/50">
              Software Development
            </span>

          </div>


          <p className="mt-7 max-w-3xl leading-8 text-white/60">
            Worked on backend development using Java, Spring Boot,
            JDBC, MySQL, and REST APIs. Developed and integrated
            backend modules, worked with databases, and debugged
            issues across frontend, backend, API, and database layers.
          </p>


          <div className="mt-7 flex flex-wrap gap-2">

            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-white/60">
              Java
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-white/60">
              Spring Boot
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-white/60">
              JDBC
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-white/60">
              MySQL
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-white/60">
              REST APIs
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* Technology Stack */}
    <div className="mt-28 border-t border-white/10 pt-12 md:mt-32">

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Tech Stack
          </p>

          <p className="mt-4 max-w-sm leading-7 text-white/60">
            Technologies I use to build modern, functional, and
            reliable applications.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">

          <div>
            <p className="text-lg font-medium text-white">Java</p>
            <p className="mt-1 text-sm text-white/50">
              Backend Development
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Spring Boot</p>
            <p className="mt-1 text-sm text-white/50">
              REST APIs
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">React</p>
            <p className="mt-1 text-sm text-white/50">
              Frontend
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">PostgreSQL</p>
            <p className="mt-1 text-sm text-white/50">
              Database
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">MySQL</p>
            <p className="mt-1 text-sm text-white/50">
              Database
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">JavaScript</p>
            <p className="mt-1 text-sm text-white/50">
              Web Development
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Python</p>
            <p className="mt-1 text-sm text-white/50">
              Backend & APIs
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">FastAPI</p>
            <p className="mt-1 text-sm text-white/50">
              API Development
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Docker</p>
            <p className="mt-1 text-sm text-white/50">
              Containers
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Next.js</p>
            <p className="mt-1 text-sm text-white/50">
              Web Applications
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Git & GitHub</p>
            <p className="mt-1 text-sm text-white/50">
              Version Control
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Tailwind CSS</p>
            <p className="mt-1 text-sm text-white/50">
              UI Development
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* About CTA */}
    <div className="mt-24 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/[0.03] sm:flex-row sm:items-center sm:p-10">

      <div>

        <h3 className="text-2xl font-semibold text-white">
          Have an idea you'd like to build?
        </h3>

        <p className="mt-2 text-white/60">
          Let's turn it into something useful.
        </p>

      </div>


      <a
        href="#contact"
        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
      >
        Start a Conversation

        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>

    </div>

  </div>
</section>


{/* ==================== CONTACT ==================== */}

<section
  id="contact"
  className="border-t border-white/10 px-6 py-28 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

      {/* Left */}
      <div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
          Start a Project
        </p>

        <h2 className="max-w-lg text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's build something{" "}
          <span className="text-white/40">
            great.
          </span>
        </h2>

        <p className="mt-6 max-w-md text-base leading-8 text-white/60">
          Have a project in mind? Whether you need a new web application,
          backend API, or improvements to an existing project, tell me
          what you need and let's discuss it.
        </p>


        {/* Availability */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/[0.05] px-4 py-2.5">

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>

          <span className="text-sm font-medium text-red-400">
            Available for freelance projects
          </span>

        </div>


        {/* Quick contact */}
        <div className="mt-12 space-y-5">

          <a
            href="mailto:adarshagupta098@gmail.com"
            className="group block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Email
            </p>

            <p className="mt-2 text-sm text-white/70 transition group-hover:text-red-400">
              adarshagupta098@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/adarsha-gupta-java/"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              LinkedIn
            </p>

            <p className="mt-2 text-sm text-white/70 transition group-hover:text-red-400">
              Connect with me →
            </p>
          </a>

        </div>

      </div>


      {/* Contact Form */}
      <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl shadow-black/20 sm:p-8">

        <div className="mb-8">

          <h3 className="text-2xl font-semibold text-white">
            Tell me about your project
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/50">
            Share a few details and I'll get back to you.
          </p>

        </div>


        <form
          action="https://formsubmit.co/adarshagupta098@gmail.com"
          method="POST"
          className="space-y-6"
        >

          {/* FormSubmit settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Freelance Project Inquiry"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />


          {/* Name */}
          <div>

            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Smith"
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/20"
            />

          </div>


          {/* Email */}
          <div>

            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="john@company.com"
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/20"
            />

          </div>


          {/* Project Type */}
          <div>

            <label
              htmlFor="project"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              What do you need?
            </label>

            <select
              id="project"
              name="project_type"
              required
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-500/60 focus:ring-1 focus:ring-red-500/20"
            >

              <option value="" disabled>
                Select a service
              </option>

              <option value="Web Application">
                Web Application
              </option>

              <option value="Backend / REST API">
                Backend / REST API
              </option>

              <option value="Database / Integration">
                Database / Integration
              </option>

              <option value="Bug Fixing / Improvements">
                Bug Fixing / Improvements
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          {/* Budget */}
          <div>

            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Estimated Budget
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-500/60 focus:ring-1 focus:ring-red-500/20"
            >

              <option value="" disabled>
                Select a budget range
              </option>

              <option value="Under ₹5,000">
                Under ₹1,000
              </option>

              <option value="₹5,000 - ₹15,000">
                ₹1,000 - ₹5,000
              </option>

              <option value="₹15,000 - ₹30,000">
                ₹5,000 - ₹10,000
              </option>

              <option value="₹30,000+">
                ₹10,000+
              </option>

              <option value="Not sure yet">
                Not sure yet
              </option>

            </select>

          </div>


          {/* Message */}
          <div>

            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Project Details
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Tell me what you'd like to build, what you need help with, or what problem you're trying to solve..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/20"
            />

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
          >
            Send Project Inquiry

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>


          <p className="text-center text-xs text-white/30">
            I'll review your message and get back to you as soon as possible.
          </p>

        </form>

      </div>

    </div>


    {/* Direct Contact */}
    <div className="mt-24 border-t border-white/10 pt-10">

      <div className="grid gap-8 sm:grid-cols-3">

        <a
          href="mailto:adarshagupta098@gmail.com"
          className="group"
        >

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Email
          </p>

          <p className="mt-3 text-sm text-white/70 transition group-hover:text-red-400">
            adarshagupta098@gmail.com
          </p>

        </a>


        <a
          href="https://www.linkedin.com/in/adarsha-gupta-java/"
          target="_blank"
          rel="noreferrer"
          className="group"
        >

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            LinkedIn
          </p>

          <p className="mt-3 text-sm text-white/70 transition group-hover:text-red-400">
            Connect with me →
          </p>

        </a>


        <a
          href="https://github.com/Adarsha098-web"
          target="_blank"
          rel="noreferrer"
          className="group"
        >

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            GitHub
          </p>

          <p className="mt-3 text-sm text-white/70 transition group-hover:text-red-400">
            View my work →
          </p>

        </a>

      </div>

    </div>

  </div>
</section>

      </main>


{/* ==================== FOOTER ==================== */}

<footer className="border-t border-white/10 px-6 py-12">

  <div className="mx-auto max-w-7xl">

    {/* Main Footer */}
    <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">

      {/* Brand */}
      <div>

        <a
          href="#"
          className="inline-block text-2xl font-bold tracking-tight text-white transition hover:text-white"
        >
          Adarsha<span className="text-red-500">.</span>
        </a>

        <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
          Java & Full-Stack Developer building reliable web applications,
          backend systems, and REST APIs.
        </p>

      </div>


      {/* Navigation */}
      <div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Navigation
        </p>

        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">

          <a
            href="#work"
            className="text-white/60 transition hover:text-red-400"
          >
            Work
          </a>

          <a
            href="#services"
            className="text-white/60 transition hover:text-red-400"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-white/60 transition hover:text-red-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-white/60 transition hover:text-red-400"
          >
            Contact
          </a>

        </div>

      </div>


      {/* Social Links */}
      <div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Connect
        </p>

        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">

          <a
            href="https://github.com/Adarsha098-web"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 transition hover:text-red-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/adarsha-gupta-java/"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 transition hover:text-red-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:adarshagupta098@gmail.com"
            className="text-white/60 transition hover:text-red-400"
          >
            Email
          </a>

        </div>

      </div>

    </div>


    {/* Footer Bottom */}
    <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

      <p className="text-xs text-white/40">
        © 2026 Adarsha Gupta. All rights reserved.
      </p>

      <p className="text-xs text-white/40">
        Built with React & Tailwind CSS
      </p>

    </div>

  </div>

      </footer>

    </div>
  );
}

export default App;