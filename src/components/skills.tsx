
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

type Skill = {
  name: string;
  icon?: string;
  logoVariant?: string;
};

type SkillGroup = {
  label: string;
  description: string;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Programming languages",
    description: "Languages I use to build applications and solve problems.",
    items: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C", icon: "c" },
      { name: "Dart", icon: "dart" },
      { name: "SQL", icon: "mysql" },
    ],
  },
  {
    label: "Frontend development",
    description: "Building responsive interfaces and user experiences.",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Material UI", icon: "materialui" },
    ],
  },
  {
    label: "Backend development",
    description: "APIs, server-side applications and integrations.",
    items: [
      { name: "Django", icon: "django", logoVariant: "plain" },
      { name: "Django REST Framework", icon: "django", logoVariant: "plain" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "REST APIs" },
      { name: "WebSockets" },
    ],
  },
  {
    label: "AI & machine learning",
    description: "Machine learning, computer vision and generative AI.",
    items: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "YOLO" },
      { name: "Artificial Neural Networks" },
      { name: "LLMs & Generative AI" },
      { name: "RAG & Embeddings" },
      { name: "Vector Search" },
      { name: "pgvector" },
    ],
  },
  {
    label: "Databases & storage",
    description: "Data modelling, queries and cloud database platforms.",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      { name: "ChromaDB" },
      { name: "Cloudinary", icon: "cloudinary", logoVariant: "plain"  },
    ],
  },
  {
    label: "Cloud & deployment",
    description: "Deploying applications and managing development environments.",
    items: [
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "Render" },
      { name: "PythonAnywhere" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    label: "Development tools",
    description: "Tools used throughout my development workflow.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Cisco Packet Tracer" },
      { name: "Jupyter", icon: "jupyter" },
    ],
  },
  {
    label: "AI-powered development",
    description: "AI tools that assist my coding, research and development workflow.",
    items: [
      { name: "Cursor" },
      { name: "Claude" },
      { name: "OpenAI / Codex" },
      { name: "GitHub Copilot" },
      { name: "Google Antigravity" },
      { name: "Grok" },
    ],
  },
];

function SkillLogo({
  name,
  icon,
  logoVariant = "original",
}: {
  name: string;
  icon?: string;
  logoVariant?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-deep font-serif text-sm font-semibold text-accent">
        {name
          .split(/[\s/&-]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </span>
    );
  }

  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-deep p-2">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-${logoVariant}.svg`}
        alt={`${name} logo`}
        loading="lazy"
        className="size-full object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export function Skills() {
  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <section
      id="skills"
      className="anchor border-t border-line"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="04"
          label="Technical skills"
          title="Tools I actually ship with."
          lede="A practical toolkit spanning full-stack development, artificial intelligence, machine learning, databases and deployment."
        />

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-5">
          <div>
            <span className="font-serif text-3xl text-ink">
              {totalSkills}+
            </span>
            <span className="ml-2 text-sm text-muted">
              Technologies & tools
            </span>
          </div>

          <span className="hidden h-8 w-px bg-line sm:block" />

          <div>
            <span className="font-serif text-3xl text-ink">
              {skillGroups.length}
            </span>
            <span className="ml-2 text-sm text-muted">
              Skill categories
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className="min-w-0 border-t border-line pt-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")} / Stack
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-ink">
                    {group.label}
                  </h3>
                </div>

                <span className="pt-1 font-mono text-xs text-muted">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-2 min-h-10 text-sm leading-5 text-muted">
                {group.description}
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex min-w-0 items-center gap-2.5 border border-line bg-paper p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-paper-deep"
                    title={item.name}
                  >
                    <SkillLogo
                      name={item.name}
                      icon={item.icon}
                      logoVariant={item.logoVariant}
                    />

                    <span className="min-w-0 text-xs font-medium leading-5 text-ink">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-6">
          <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted">
            "I enjoy working across the stack — from understanding data and
            building intelligent systems to designing interfaces and
            deploying products that people can actually use."
          </p>
        </div>
      </div>
    </section>
  );
}
