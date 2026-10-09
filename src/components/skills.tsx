import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="anchor border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="03"
          label="Skills"
          title="Tools I actually ship with."
          lede="A working set, not a keyword cloud — from model training through the API and the screen in front of it."
        />

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.label} className="border-t border-line pt-4">
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-base text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
