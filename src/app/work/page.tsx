import Link from "next/link";
import EntryList, { type Entry } from "@/components/EntryList";

const entries: Entry[] = [
  { title: "Project One", year: "2025" },
  { title: "Project Two", year: "2024" },
  { title: "Project Three", year: "2024" },
  { title: "Project Four", year: "2023" },
  { title: "Project Five", year: "2022" },
];

export const metadata = {
  title: "Work — Wenlan Wei",
  description: "Selected projects and work by Wenlan Wei.",
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
      <EntryList entries={entries} />
    </main>
  );
}
