import Link from "next/link";
import EntryList, { type Entry } from "@/components/EntryList";

const entries: Entry[] = [
  { title: "Paper Title One", year: "2025" },
  { title: "Paper Title Two", year: "2024" },
  { title: "Paper Title Three", year: "2023" },
];

export const metadata = {
  title: "Papers — Wenlan Wei",
  description: "Writing and papers by Wenlan Wei.",
};

export default function PapersPage() {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link href="/" className="subpage-back" aria-label="Back to home">
          <span aria-hidden>←</span> Wenlan Wei
        </Link>
        <h1 className="subpage-title">Papers</h1>
      </header>
      <EntryList entries={entries} />
    </main>
  );
}
