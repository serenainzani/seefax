export interface FilmRelease {
    title: string;
    releaseDate: string;
}

export function isTmdbConfigured(): boolean {
    return Boolean(import.meta.env.VITE_TMDB_API_KEY);
}

export async function fetchFilmsThisMonth(): Promise<FilmRelease[]> {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    if (!apiKey) {
        throw new Error("VITE_TMDB_API_KEY is not configured");
    }
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`TMDB request failed: ${response.status}`);
    }
    const data = await response.json();

    return (data.results ?? [])
        .slice(0, 8)
        .map((movie: { title: string; release_date: string }) => ({
            title: movie.title,
            releaseDate: movie.release_date,
        }));
}
