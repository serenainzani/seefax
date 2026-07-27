import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";

export function Page200About() {
    return (
        <TeletextLayout pageNumber="200">
            <PageHeader eyebrow="About" headline="ABOUT SEEFAX" />
            <p className="mb-3 text-teletext-white">
                Seefax is a nostalgic recreation of the BBC's Ceefax teletext
                service, rebuilt as a modern single-page app.
            </p>
            <p className="mb-3 text-teletext-white">
                Made by Serena, a software engineer from Edinburgh.
            </p>
            <p className="mb-1 text-teletext-green">Built with:</p>
            <ul className="mb-3 list-disc pl-5 text-teletext-cyan">
                <li>React + Vite + TypeScript</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Open-Meteo, TheMealDB, TMDB, JokeAPI</li>
            </ul>
            <p className="mb-1 text-teletext-green">Fonts:</p>
            <ul className="list-disc pl-5 text-sm text-teletext-cyan">
                <li>
                    "Ceefax Teletext 4" by Yoshigahara Kunihisa (SIL Open Font
                    License)
                </li>
                <li>"Silkscreen" by Jason Kottke (SIL Open Font License)</li>
            </ul>
        </TeletextLayout>
    );
}
