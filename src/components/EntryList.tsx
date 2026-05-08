"use client";

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

/**
 * EntryList — rauno.me-style list view used on /work and /papers.
 * Each row: title on the left, year on the right, separated by a dotted leader.
 * Rows fade in with a small stagger to feel alive.
 *
 * Conventions:
 *  - External hrefs (http/https) open in a new tab
 *  - Internal hrefs use next/link (prefetched, client-side)
 *  - Rows without href render as plain divs (placeholder content)
 */
export default function EntryList({ entries }: EntryListProps) {
  return (
    <ul className="entry-list">
      {entries.map((entry, idx) => {
        const isExternal = !!entry.href && /^https?:\/\//.test(entry.href);
        const delay = `${idx * 40}ms`;
        const inner = (
          <>
            <span className="entry-title">{entry.title}</span>
            <span className="entry-meta">
              {entry.description && (
                <span className="entry-venue">{entry.description}</span>
              )}
              <span className="entry-year">{entry.year}</span>
            </span>
          </>
        );

        return (
          <li
            key={`${entry.title}-${entry.year}-${idx}`}
            className="entry-row"
            style={{ ["--entry-delay" as string]: delay }}
          >
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
