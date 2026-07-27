import { useEffect, useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import {
    fetchFilmsThisMonth,
    isTmdbConfigured,
    type FilmRelease,
} from "../lib/api/tmdb";

type Status = "loading" | "success" | "error" | "not-configured";

export function Page105Films() {
    const [status, setStatus] = useState<Status>("loading");
    const [films, setFilms] = useState<FilmRelease[]>([]);

    useEffect(() => {
        if (!isTmdbConfigured()) {
            setStatus("not-configured");
            return;
        }

        let cancelled = false;

        fetchFilmsThisMonth()
            .then((result) => {
                if (cancelled) return;
                setFilms(result);
                setStatus("success");
            })
            .catch(() => {
                if (cancelled) return;
                setStatus("error");
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <TeletextLayout pageNumber="105">
            <PageHeader eyebrow="Films" headline="RELEASING SOON" />
            {status === "loading" && (
                <p className="text-teletext-cyan">Loading...</p>
            )}
            {status === "error" && (
                <p className="text-teletext-red">
                    Films data currently unavailable.
                </p>
            )}
            {status === "not-configured" && (
                <p className="text-teletext-red">
                    TMDB API key not configured — add VITE_TMDB_API_KEY to your
                    .env file.
                </p>
            )}
            {status === "success" && (
                <ul>
                    {films.map((film) => (
                        <li
                            key={film.title}
                            className="flex items-baseline justify-between py-1"
                        >
                            <span className="text-teletext-yellow">
                                {film.title}
                            </span>
                            <span className="text-teletext-white">
                                {film.releaseDate}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </TeletextLayout>
    );
}
