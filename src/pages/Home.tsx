import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Instagram,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
                <span className="font-display text-lg font-bold text-white">G</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-none text-black">
                  GoldenHue
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-amber-600">
                  Group
                </div>
              </div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium transition hover:text-amber-600"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium transition hover:text-amber-600"
            >
              Process
            </a>
            <a
              href="#outcomes"
              className="text-sm font-medium transition hover:text-amber-600"
            >
              Outcomes
            </a>
            <a
              href="https://www.instagram.com/goldenhuegroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition hover:text-amber-600"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://cal.com/goldenhue/operational-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm"
            >
              Book Audit
            </a>
          </nav>

          {/* Mobile CTA */}
          <a
            href="https://cal.com/goldenhue/operational-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm md:hidden"
          >
            Book Audit
          </a>
        </div>
      </header>

      {/* ==================== 1. HERO ==================== */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="gold-divider mb-6" />
                <h1 className="premium-heading mb-6">
                  Build Operations That Run Systematically.
                </h1>
                <p className="premium-subheading">
                  Operational workflow systems for modern service businesses —
                  designed to reduce manual coordination, streamline customer
                  handling, and create scalable operational structure.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://cal.com/goldenhue/operational-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book an Operational Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#services" className="btn-secondary">
                  Explore Workflow Systems
                </a>
              </div>
            </div>

            {/* Right: Diagram */}
            <div className="hidden lg:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663678443914/kAcm7ycjVFV5pShmjcLQzg/hero-workflow-diagram-UiYmb7fd2nfZQihWJJ5NEh.webp"
                alt="Operational Workflow Dashboard"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. POSITIONING ==================== */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h2 className="premium-heading mb-6">
              We Don't Sell Software. We Implement Operational Systems.
            </h2>
            <p className="premium-subheading">
              Goldenhue Group helps businesses replace scattered coordination
              and manual processes with structured operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Inquiry Handling",
                desc: "Capture and organize every customer inquiry systematically",
              },
              {
                title: "Booking Coordination",
                desc: "Streamline scheduling and reduce booking errors",
              },
              {
                title: "Customer Follow-Up",
                desc: "Automated, structured follow-up workflows",
              },
              {
                title: "Quotation Workflows",
                desc: "Systematic quote generation and tracking",
              },
              {
                title: "Operational Tracking",
                desc: "Real-time visibility into all operations",
              },
              {
                title: "Centralized Management",
                desc: "Single source of truth for customer data",
              },
            ].map((item, idx) => (
              <div key={idx} className="operational-card bg-white">
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-amber-600 bg-white p-8">
            <p className="text-lg font-semibold text-black">
              The goal is not more tools. The goal is operational clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 3. PROBLEM ==================== */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="premium-heading mb-12 text-center">
            Manual Operations Become Expensive As Businesses Grow.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: AlertCircle,
                title: "Missed Inquiries",
                desc: "Inquiries slip through the cracks in WhatsApp and email",
              },
              {
                icon: Clock,
                title: "Inconsistent Follow-ups",
                desc: "No systematic approach to customer follow-up",
              },
              {
                icon: Users,
                title: "Booking Confusion",
                desc: "Double bookings and scheduling conflicts",
              },
              {
                icon: BarChart3,
                title: "Owner Dependency",
                desc: "Business can't scale without the owner",
              },
              {
                icon: Zap,
                title: "Fragmented Data",
                desc: "Customer information scattered across platforms",
              },
              {
                icon: AlertCircle,
                title: "Quotation Delays",
                desc: "Manual quote creation slows down sales",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="operational-card">
                  <Icon className="mb-4 h-8 w-8 text-amber-600" />
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 4. SERVICES ==================== */}
      <section id="services" className="section-spacing bg-gray-50">
        <div className="container">
          <h2 className="premium-heading mb-12 text-center">
            Operational Systems We Implement
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                num: "01",
                title: "Inquiry Management System",
                desc: "Capture, organize, and track every customer inquiry in a centralized system. No more lost leads in WhatsApp.",
              },
              {
                num: "02",
                title: "Booking & Scheduling Workflow",
                desc: "Eliminate double bookings and scheduling conflicts with a structured booking system that syncs across platforms.",
              },
              {
                num: "03",
                title: "Customer Follow-Up Systems",
                desc: "Automated follow-up workflows ensure no customer is forgotten. Systematic, timely, and consistent.",
              },
              {
                num: "04",
                title: "CRM & Customer Database",
                desc: "Centralized customer data with complete history, preferences, and communication records.",
              },
              {
                num: "05",
                title: "WhatsApp Coordination Systems",
                desc: "Structured WhatsApp workflows that integrate with your operational systems. Coordination without chaos.",
              },
              {
                num: "06",
                title: "Quotation Workflow Automation",
                desc: "Systematic quote generation, tracking, and follow-up. Reduce quote-to-booking time.",
              },
            ].map((service, idx) => (
              <div key={idx} className="operational-card bg-white">
                <div className="flex items-start gap-4">
                  <div className="workflow-step-number text-lg">
                    {service.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. PROCESS ==================== */}
      <section id="process" className="section-spacing">
        <div className="container">
          <h2 className="premium-heading mb-16 text-center">
            How We Systematise Operations
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-2">
              {[
                {
                  num: "01",
                  title: "Operational Audit",
                  desc: "Deep dive into current operations",
                },
                {
                  num: "02",
                  title: "Workflow Mapping",
                  desc: "Document all processes",
                },
                {
                  num: "03",
                  title: "System Design",
                  desc: "Design custom workflows",
                },
                {
                  num: "04",
                  title: "Deployment",
                  desc: "Implement and train",
                },
                {
                  num: "05",
                  title: "Monitoring",
                  desc: "Optimize & improve",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="workflow-step-number mb-4 text-2xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="mb-2 text-center font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-center text-xs text-gray-600">
                    {step.desc}
                  </p>
                  {idx < 4 && (
                    <div className="mt-6 hidden h-1 w-full bg-amber-600 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. WORKFLOW VISUAL ==================== */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <h2 className="premium-heading mb-12 text-center">
            From Inquiry to Structured Operations
          </h2>

          <div className="mx-auto max-w-5xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663678443914/kAcm7ycjVFV5pShmjcLQzg/operational-systems-abstract-djdNdaySUx9xwLC4PLpvDL.webp"
              alt="Operational Workflow Diagram"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Inquiry Arrives",
                desc: "Customer inquiry captured automatically",
              },
              {
                title: "Lead Captured",
                desc: "Information organized and categorized",
              },
              {
                title: "Status Assigned",
                desc: "Clear workflow stage identified",
              },
              {
                title: "Quote Sent",
                desc: "Systematic quotation process",
              },
              {
                title: "Booking Confirmed",
                desc: "Scheduled and confirmed",
              },
              {
                title: "Customer Follow-Up",
                desc: "Structured post-booking engagement",
              },
            ].map((stage, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="mb-2 font-semibold">{stage.title}</h3>
                <p className="text-sm text-gray-600">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. OUTCOMES ==================== */}
      <section id="outcomes" className="section-spacing">
        <div className="container">
          <h2 className="premium-heading mb-12 text-center">
            What Changes When Operations Become Systematic
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "Fewer Missed Inquiries",
                desc: "Every inquiry is captured and tracked",
              },
              {
                icon: Zap,
                title: "Faster Response Times",
                desc: "Systematic workflows reduce response delays",
              },
              {
                icon: AlertCircle,
                title: "Reduced Booking Errors",
                desc: "Structured scheduling eliminates conflicts",
              },
              {
                icon: Clock,
                title: "Structured Follow-up",
                desc: "Consistent, timely customer engagement",
              },
              {
                icon: Users,
                title: "Centralized Customer Data",
                desc: "Single source of truth for all customer info",
              },
              {
                icon: BarChart3,
                title: "Operational Independence",
                desc: "Business runs without owner dependency",
              },
            ].map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div key={idx} className="operational-card">
                  <Icon className="mb-4 h-8 w-8 text-amber-600" />
                  <h3 className="mb-2 text-lg font-semibold">{outcome.title}</h3>
                  <p className="text-sm text-gray-600">{outcome.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 8. CTA ==================== */}
      <section className="section-spacing bg-black text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Build More Structured Operations?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl">
            We begin every engagement with a structured operational audit to
            identify workflow bottlenecks, coordination gaps, and opportunities
            for systemization.
          </p>
          <a
            href="https://cal.com/goldenhue/operational-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Book an Operational Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ==================== 9. FOOTER ==================== */}
      <footer className="bg-gray-900 py-16 text-gray-300">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
                  <span className="font-display text-lg font-bold text-white">
                    G
                  </span>
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-none text-white">
                    GoldenHue
                  </div>
                  <div className="text-xs font-medium uppercase tracking-widest text-amber-600">
                    Group
                  </div>
                </div>
              </div>
              <p className="text-sm">Operations & Workflow Systems</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="transition hover:text-amber-600">
                    Inquiry Management
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-amber-600">
                    Booking Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-amber-600">
                    CRM Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition hover:text-amber-600">
                    Workflow Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition hover:text-amber-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="transition hover:text-amber-600">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-amber-600">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/goldenhuegroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-amber-600"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@goldenhue.com"
                    className="transition hover:text-amber-600"
                  >
                    hello@goldenhue.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="transition hover:text-amber-600"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876543210"
                    className="transition hover:text-amber-600"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="pt-2">Kochi, Kerala</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-sm md:flex-row">
            <p>&copy; 2025 GoldenHue Group. All rights reserved.</p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <a href="#" className="transition hover:text-amber-600">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-amber-600">
                Terms of Service
              </a>
              <a
                href="https://www.instagram.com/goldenhuegroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-amber-600"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
