import { useState } from "react";
import { Link } from "react-router-dom";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import { PAGES } from "../data/pages";
import { HEADLINES } from "../data/headlines";

export function Page100() {
  const [headline] = useState(
    () => HEADLINES[Math.floor(Math.random() * HEADLINES.length)],
  );

  return (
    <TeletextLayout pageNumber="100">
      <PageHeader eyebrow="Headline" headline={headline} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-4 gap-x-6">
        {PAGES.map((page) => (
          <li key={page.number}>
            <Link
              to={page.route}
              className="flex items-baseline justify-between py-1 uppercase hover:opacity-80"
            >
              <span className="text-teletext-yellow">{page.title}</span>
              <span className="text-teletext-white">{page.number}</span>
            </Link>
          </li>
        ))}
      </ul>
    </TeletextLayout>
  );
}
