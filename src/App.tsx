import "./index.css";
import profile from "./data/profile";

function App() {
  return (
    <div>
      <header className="border-b border-slate-800 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/80 z-50">
        <nav className="container-center flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <a href="/#hero">
              <img
                src={profile.logoUrl || "/logo.png"}
                alt={profile.name}
                className="h-16 w-16 ring-primary/40 shadow-soft object-fill"
              />
            </a>
            <a href="/#hero">
              <div className="font-bold text-lg">{profile.title}</div>
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary-light">
              About
            </a>
            <a href="#skills" className="hover:text-primary-light">
              Skills
            </a>
            <a href="#experience" className="hover:text-primary-light">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary-light">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary-light">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="container-center py-12 md:py-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Profile Image */}
            <div className="reveal mb-6">
              <img
                src={profile.avatarUrl || "/profile.png"}
                alt="Profile photo"
                className="h-48 w-48 rounded-full ring-4 ring-primary/40 shadow-soft object-fill mx-auto"
              />
            </div>
            {/* Name and Title */}
            <div className="reveal mb-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-3">
                <span className="text-primary">{profile.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium">
                Sr Full Stack Web Expert
              </p>
            </div>

            {/* Tagline */}
            <div className="reveal mb-8">
              <p className="text-base md:text-lg text-slate-400 max-w-2xl">
                Specializing in C#, ASP.NET Core, React, Angular, and AI-driven solutions. Building
                secure, scalable applications with modern architecture and best practices.
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="reveal mb-10">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent p-[2px]">
                <div className="rounded-xl bg-slate-900 px-8 py-4 border border-slate-800">
                  <p className="text-slate-300 text-sm md:text-base">{profile.heroTech}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a className="btn-primary justify-center" href="#contact">
                Contact Me
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-6 py-2 font-medium hover:bg-slate-800 transition"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container-center py-5">
          <h2 className="section-title">💼 Overview 💼</h2>
          <p className="text-slate-300 mb-4 reveal">
            I am a Senior Full Stack Web Expert with tremendous experience of building secure,
            scalable, and high-performance applications across .NET, JavaScript, React, Angular,
            Node.js, and AI-driven platforms.
          </p>
          <p className="text-slate-300 mb-4 reveal">
            Whether you want to start a new project or add features to the existing one. I would
            love to take you through the process of what it takes to make your project a success. My
            focus is to work with you in reaching your goals and finding the best ways to achieve
            them.
          </p>
          <p className="text-slate-300 mb-4 reveal">
            I specialize in developing modern full-stack applications, production-ready APIs,
            microservices, intelligent chatbot and AI-powered automation workflows.
          </p>
          <p className="text-slate-300 mb-4 reveal">
            I deliver clean, maintainable, and scalable code using best practices like Clean
            Architecture, SOLID, CI/CD automation, and cloud-native design.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <p className="text-slate-300 mt-10">🌟 I Can Help You With: 🌟 </p>
              <ul className="my-2 grid-ul text-slate-300">
                <li>Full-stack development (Backend + Frontend + Database)</li>
                <li>ASP.NET Core & Node.js (Express) API development</li>
                <li>AI chatbot and automation workflows</li>
                <li>AI tools (VSCode GPT, GitHub Copilot, Claude, Trae)</li>
                <li>Third-party tools (Devexpress, Telerik)</li>
                <li>Database design (SQL + NoSQL: MongoDB)</li>
                <li>Microservices, messaging, background jobs</li>
                <li>Third-party integrations and OAuth2 / Identity / JWT</li>
                <li>Cloud deployment (Microsoft Azure, AWS), Docker, CI/CD</li>
                <li>System Upgrades, API integrations, code modernization</li>
                <li>Ongoing maintenance with high reliability</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <p className="text-slate-300 mt-10">🌟 Why Clients Trust Me? 🌟 </p>
              <ul className="my-2 grid-ul text-slate-300">
                <li>
                  Clear Communication – Daily updates, transparent progress & on-time delivery
                </li>
                <li>Clean Architecture – Clean, scalable, production-quality code</li>
                <li>Pixel-Perfect Frontend + Stable Backend</li>
                <li>Fast delivery with end-to-end project ownership</li>
                <li>Long-Term Support – Reliable long-term support</li>
                <li>Skilled in AI chatbot, automation workflows & GPT-driven tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="container-center py-5">
          <h2 className="section-title">✨ Technical Skills ✨</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <h3 className="section-title">Backend</h3>
              <ul className="my-2 grid-ul">
                {[
                  "ASP.NET Core, Web API, C#, MVC, ADO.NET",
                  "Node.js, Express.js",
                  "Microservices (REST, gRPC)",
                  "Authentication: OAuth2, JWT, Identity",
                  "Message queues (RabbitMQ, Azure Service Bus)",
                  "SignalR, PubSub",
                  "Entity Framework, LINQ",
                  "AutoMapper, Dapper",
                  "Swagger documentation",
                  "Background jobs (Hangfire, Window Service)",
                  "API gateways, versioning, throttling, caching, observability",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <h3 className="section-title">Frontend</h3>
              <ul className="my-2 grid-ul">
                {[
                  "React.js, Next.js",
                  "Angular",
                  "JavaScript / TypeScript",
                  "HTML5, CSS3, Bootstrap, Tailwind",
                  "Responsive UI/UX implementation",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <h3 className="section-title">Databases</h3>
              <ul className="my-2 grid-ul">
                {[
                  "SQL: SQL Server, PostgreSQL, MySQL",
                  "NoSQL: MongoDB, Redis",
                  "Data modeling, indexing, performance tuning",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <h3 className="section-title">Cloud & DevOps</h3>
              <ul className="my-2 grid-ul">
                {[
                  "Microsoft Azure (App Services, Functions, Storage, Key Vault, AKS)",
                  "AWS (EC2, S3, RDS, KMS)",
                  "Docker, Kubernetes",
                  "CI/CD (Azure DevOps, AWS, GitHub Actions)",
                  "Logging & Monitoring (Serilog, Application Insights, Stackify)",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
              <h3 className="section-title">AI Experience</h3>
              <ul className="my-2 grid-ul">
                {[
                  "Experience with VS Code GPT, GitHub Copilot, and Claude for AI-assisted development",
                  "Implemented AI-powered automation workflows",
                  "Integrated third-party AI APIs for conversation, classification, and knowledge-based bots",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container-center py-5">
          <h2 className="section-title">Experience</h2>
          <ul className="space-y-6">
            {[
              {
                role: "FullStack Developer",
                company: "Freelancing",
                period: "Oct 2024 - Oct 2025",
                summary: "Built multi-tenant SaaS with micro frontends and event-driven backend.",
              },
              {
                role: "Lead Software Engineer",
                company: "Highlevel Inc.",
                period: "Mar 2021 - Jul 2024",
                summary: "Modernized legacy stack, led performance and reliability initiatives.",
              },
              {
                role: "FullStack Developer",
                company: "Freelancing",
                period: "Jul 2017 - Feb 2021",
                summary: "Built multi-tenant SaaS with micro frontends and event-driven backend.",
              },
              {
                role: "Project Manager",
                company: "La Net Team Software Solution Pvt Ltd.",
                period: "Aug 2015 - Jun 2017",
                summary:
                  "Managed .NET, Angular, React projects, coordinated teams, ensured timely delivery.",
              },
              {
                role: "Lead Software Engineer",
                company: "La Net Team Software Solution Pvt Ltd.",
                period: "Aug 2012 - Jul 2015",
                summary: ".NET, Angular, React web apps, team lead, client communication.",
              },
              {
                role: "Software Development Engineer",
                company: "La Net Team Software Solution Pvt Ltd.",
                period: "Aug 2010 - Jul 2012",
                summary:
                  "C#, ASP.NET MVC web apps, database design, API development, microservices.",
              },
            ].map((item, i) => (
              <li key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-4 reveal">
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    {item.role} • {item.company}
                  </div>
                  <div className="text-sm text-muted">{item.period}</div>
                </div>
                <p className="text-slate-300 mt-2">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="container-center py-5">
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Laboratory Inventory Management System",
                desc: [
                  "Developed a comprehensive Laboratory Inventory Management System designed to streamline the tracking, usage, and optimization of laboratory supplies, reagents, consumables, and equipment across multiple departments. The solution enhances operational efficiency, reduces material wastage, and provides real-time visibility into critical laboratory resources.",
                  "Centralized Inventory Control, Intelligent Stock Monitoring, Expiration Tracking & Waste Reduction, Barcode & RFID Integration, Automated Purchase Order Workflow, Real-Time Reporting & Dashboards, Notifications & Alerts, Equipment & Resource Management.",
                  "Technologies: ASP.NET Core, React, MySQL, background processing jobs, SignalR, Azure DevOps CI/CD.",
                ],
                link: "#",
              },
              {
                name: "Customer Loyalty Rewards System",
                desc: [
                  "Built a scalable Customer Loyalty & Rewards Platform featuring automated triggers, email/SMS campaigns, activity and referral tracking, dynamic form/survey builders, and a full loyalty points engine. Includes real-time updates via SignalR, advanced analytics, and a member self-service portal. Developed using .NET APIs, background jobs, SQL Server, ASP.NET MVC, Angular, and deployed on AWS.",
                  "Technologies: .NET APIs, background processing jobs, SignalR, ASP.NET MVC & Angular, SQL Server, AWS.",
                ],
                link: "#",
              },
              {
                name: "Logistics & Carrier Management",
                desc: [
                  "A robust Logistics & Carrier Management Platform designed to streamline carrier operations, shipment visibility, capacity planning, and marketplace connectivity. It centralizes carrier and customer data, automates RMIS synchronization, and supports real-time capacity matching using microservices, message queues, and scalable cloud infrastructure.",
                  "Technologies: ASP.NET Core, React, MongoDB, RabbitMQ, Azure Services, Docker, Kubernetes.",
                ],
                link: "#",
              },
              {
                name: "Enterprise HR Management System",
                desc: [
                  "A comprehensive, enterprise-grade HR Management System designed to streamline and automate HR operations across the organization. The platform supports role-based access, recruitment workflows, employee management, compliance tracking, and secure document generation - all accessible through tailored portals for Admins, Managers, Employees, and general Users.",
                  "Technologies: ASP.NET Core, Angular, PostgreSQL, Azure DevOps CI/CD, Docker.",
                  "Technologies: ASP.NET Core, React, SQL Server, AWS.",
                ],
                link: "#",
              },
            ].map((p) => (
              <a
                key={p.name}
                style={{ pointerEvents: p.link === "#" ? "none" : "auto" }}
                href={p.link}
                className="block rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-primary/60 hover:shadow-soft transition reveal"
              >
                <div className="font-semibold mb-2 project-title">{p.name}</div>
                {Array.isArray(p.desc) ? (
                  <ul className="grid-ul text-slate-300">
                    {p.desc.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-300">{p.desc}</p>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container-center py-5">
          <h2 className="section-title">Contact</h2>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 reveal">
            <p className="text-slate-300 mb-4">
              I’m available for senior full‑stack roles and consulting opportunities.
            </p>
            <div className="flex gap-4">
              <a className="btn-primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              {profile.social.map((s) => (
                <a
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 font-medium hover:bg-slate-800 transition"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container-center py-10 text-sm text-muted">
        © {new Date().getFullYear()} Bharatsing Parmar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
