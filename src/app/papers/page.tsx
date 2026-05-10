import Link from "next/link";
import EntryList, { type Entry } from "@/components/EntryList";

const SCHOLAR_PROFILE =
  "https://scholar.google.com/citations?user=fa7O7DAAAAAJ&hl=en";

const papers: Entry[] = [
  {
    title:
      "An Empirical Evaluation of Oversampling-Ensemble Interactions Under Varying Imbalance Ratios for Tabular Data Classification",
    year: "2026",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fa7O7DAAAAAJ&citation_for_view=fa7O7DAAAAAJ:qjMakFHDy7sC",
    description: "W. Wei, Z. Shang · AI & ML Review 7(2)",
  },
  {
    title: "Evolving Security in LLMs: A Study of Jailbreak Attacks and Defenses",
    year: "2026",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fa7O7DAAAAAJ&citation_for_view=fa7O7DAAAAAJ:2osOgNQ5qMEC",
    description: "W. Wei, Z. Shang, W. Bai · ICAICDA 2026",
  },
  {
    title: "Towards Visual Question Answering on Pathology Images",
    year: "2021",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fa7O7DAAAAAJ&citation_for_view=fa7O7DAAAAAJ:u5HHmVD_uO8C",
    description: "X. He, Z. Cai, W. Wei, Y. Zhang, L. Mou · ACL 2021",
  },
  {
    title: "Pathological Visual Question Answering",
    year: "2020",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fa7O7DAAAAAJ&citation_for_view=fa7O7DAAAAAJ:u-x6o8ySG0sC",
    description: "X. He, Z. Cai, W. Wei, Y. Zhang, L. Mou, E. Xing, P. Xie · arXiv:2010.12435",
  },
  {
    title: "Lightweight Image Super-Resolution with Mobile Share-Source Network",
    year: "2020",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=fa7O7DAAAAAJ&citation_for_view=fa7O7DAAAAAJ:d1gkVwhDpl0C",
    description: "J. Du, W. Wei, C. Fan, L. Zou, J. Shen, Z. Zhou, Z. Chen · IEEE Access 8",
  },
];

export const metadata = {
  title: "Papers — Wenlan Wei",
  description: "Selected publications by Wenlan Wei.",
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

      <section className="subpage-section">
        <h2 className="subpage-section-title">Selected Publications</h2>
        <EntryList entries={papers} variant="stacked" />
      </section>

      <a
        className="subpage-outbound"
        href={SCHOLAR_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        View all on Google Scholar <span aria-hidden>↗</span>
      </a>
    </main>
  );
}
