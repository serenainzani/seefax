import { useEffect, useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import { fetchWeather, EDINBURGH_COORDS, type WeatherResult } from "../lib/api/openMeteo";

type Status = "loading" | "success" | "error";

export function Page130Weather() {
  const [status, setStatus] = useState<Status>("loading");
  const [weather, setWeather] = useState<WeatherResult | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadFor(lat: number, lon: number, fallback: boolean) {
      try {
        const result = await fetchWeather(lat, lon);
        if (cancelled) return;
        setWeather(result);
        setUsingFallback(fallback);
        setStatus("success");
      } catch {
        if (cancelled) return;
        setStatus("error");
      }
    }

    if (!navigator.geolocation) {
      loadFor(EDINBURGH_COORDS.lat, EDINBURGH_COORDS.lon, true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        loadFor(position.coords.latitude, position.coords.longitude, false);
      },
      () => {
        loadFor(EDINBURGH_COORDS.lat, EDINBURGH_COORDS.lon, true);
      },
      { timeout: 8000 },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <TeletextLayout pageNumber="130">
      <PageHeader eyebrow="Weather" headline="LOCAL FORECAST" />
      {status === "loading" && <p className="text-teletext-cyan">Locating...</p>}
      {status === "error" && (
        <p className="text-teletext-red">Weather currently unavailable.</p>
      )}
      {status === "success" && weather && (
        <>
          <p className="teletext-dh text-teletext-white">{Math.round(weather.temperatureC)}°C</p>
          <p className="text-teletext-cyan">{weather.condition}</p>
          {usingFallback && (
            <p className="mt-4 text-sm text-teletext-green">
              Showing default location: Edinburgh
            </p>
          )}
        </>
      )}
    </TeletextLayout>
  );
}
