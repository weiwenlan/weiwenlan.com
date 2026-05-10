import React from "react";
import Link from "next/link";

export interface Entry {
  title: string;
  year: string;
  href?: string;
  description?: string;
}

interface EntryListProps {
  entries: Entry[];
}

export default function EntryList({ entries }: EntryListProps) {
  return (
    <ul className="entry-list">
      {entries.map((entry, idx) => {
        const isExternal = !!entry.href && /^https?:\/\//.test(entry.href);
        const inner = (
          <>
            <span className="entry-title">{entry.title}</span>
            <span className="entry-leader" aria-hidden />
            <span className="entry-meta">
              {entry.description && (
                <span className="entry-venue">{entry.description}</span>
              )}
              <span className="entry-year">{entry.year}</span>
            </span>
          </>
        );

        return (
          <li key={`${entry.title}-${entry.year}-${idx}`}>
            {entry.href ? (
              isExternal ? (
                <a
                  className="entry-link"
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <Link className="entry-link" href={entry.href}>
                  {inner}
                </Link>
              )
            ) : (
              <div className="entry-link entry-link--inert">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
