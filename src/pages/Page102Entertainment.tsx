import { useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";

const VIDEO_ID = "dQw4w9WgXcQ";

export function Page102Entertainment() {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <TeletextLayout pageNumber="102">
      <PageHeader eyebrow="Entertainment" headline="NOW SHOWING" />
      <p className="mb-4 text-teletext-cyan">Rick Astley — Never Gonna Give You Up</p>
      <div className="mb-4 aspect-video w-full border-2 border-teletext-white">
        <iframe
          key={reloadKey}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
          title="Never Gonna Give You Up"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <button
        type="button"
        onClick={() => setReloadKey((k) => k + 1)}
        className="w-full bg-teletext-magenta py-2 text-center font-bold text-teletext-black"
      >
        PRESS PLAY IF AUDIO DOES NOT START
      </button>
    </TeletextLayout>
  );
}
