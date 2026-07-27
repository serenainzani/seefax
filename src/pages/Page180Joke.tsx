import { useEffect, useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import { fetchJoke } from "../lib/api/joke";

type Status = "loading" | "success" | "error";

export function Page180Joke() {
  const [status, setStatus] = useState<Status>("loading");
  const [joke, setJoke] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchJoke()
      .then((result) => {
        if (cancelled) return;
        setJoke(result);
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
    <TeletextLayout pageNumber="180">
      <PageHeader eyebrow="Joke" headline="RANDOM JOKE" />
      {status === "loading" && <p className="text-teletext-cyan">Loading...</p>}
      {status === "error" && (
        <p className="text-teletext-red">Joke currently unavailable.</p>
      )}
      {status === "success" && <p className="text-teletext-white">{joke}</p>}
    </TeletextLayout>
  );
}
