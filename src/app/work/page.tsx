import Link from "next/link";
import EntryList, { type Entry } from "@/components/EntryList";

const experience: Entry[] = [
  { title: "Software Engineer, Microsoft",            year: "Mar 2026 — Present" },
  { title: "Software Engineer, Bot Auto",             year: "Mar 2025 — Mar 2026" },
  { title: "Senior Machine Learning Engineer, Visa",  year: "Jul 2024 — Mar 2025" },
  { title: "Senior Data Engineer, Visa",              year: "Jan 2024 — Jul 2024" },
  { title: "Data Infra Engineer II, Flexport",        year: "Jun 2023 — Nov 2023" },
  { title: "Data Infra Engineer, TuSimple",           year: "Jun 2022 — Jun 2023" },
  { title: "Software Engineer Intern, VMware",        year: "Nov 2020 — Jul 2021" },
];

const education: Entry[] = [
  { title: "M.Eng. ECE, Cornell Tech", year: "Jul 2021 — May 2022" },
];

export const metadata = {
  title: "Work — Wenlan Wei",
  description: "Work experience and education of Wenlan Wei.",
};

export default function WorkPage() {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link href="/" className="subpage-back" aria-label="Back to home">
          <span aria-hidden>←</span> Wenlan Wei
        </Link>
        <h1 className="subpage-title">Work</h1>
      </header>

      <section className="subpage-section">
        <h2 className="subpage-section-title">Experience</h2>
        <EntryList entries={experience} />
      </section>

      <section className="subpage-section">
        <h2 className="subpage-section-title">Education</h2>
        <EntryList entries={education} />
      </section>
    </main>
  );
}
