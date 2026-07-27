export interface JackpotResult {
  amount: number;
  currency: string;
  drawDate?: string;
}

// Unofficial, undocumented, and aggressively rate-limited (verified during
// implementation) — treated as best-effort only. Any failure of any kind
// falls back to a joke jackpot value rather than an error page.
const NEXT_DRAW_URL = "https://euromillions.api.pedromealha.dev/v1/draws/next";

function isJackpotShape(data: unknown): data is { jackpot: number; currency?: string; date?: string } {
  return (
    typeof data === "object" &&
    data !== null &&
    "jackpot" in data &&
    typeof (data as { jackpot: unknown }).jackpot === "number"
  );
}

export async function fetchJackpot(): Promise<JackpotResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(NEXT_DRAW_URL, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`Lottery request failed: ${response.status}`);
    }
    const data: unknown = await response.json();
    if (!isJackpotShape(data)) {
      throw new Error("Unexpected lottery response shape");
    }
    return {
      amount: data.jackpot,
      currency: data.currency ?? "EUR",
      drawDate: data.date,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export const JACKPOT_FALLBACK: JackpotResult = {
  amount: 1_000_000_000_000,
  currency: "GBP",
};
