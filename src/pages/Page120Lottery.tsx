import { useEffect, useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import {
    fetchJackpot,
    JACKPOT_FALLBACK,
    type JackpotResult,
} from "../lib/api/lottery";

export function Page120Lottery() {
    const [jackpot, setJackpot] = useState<JackpotResult | null>(null);
    const [isFallback, setIsFallback] = useState(false);

    useEffect(() => {
        let cancelled = false;

        fetchJackpot()
            .then((result) => {
                if (cancelled) return;
                setJackpot(result);
                setIsFallback(false);
            })
            .catch(() => {
                if (cancelled) return;
                setJackpot(JACKPOT_FALLBACK);
                setIsFallback(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    const formatted = jackpot
        ? new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: jackpot.currency,
              maximumFractionDigits: 0,
          }).format(jackpot.amount)
        : null;

    return (
        <TeletextLayout pageNumber="120">
            <PageHeader eyebrow="Lottery" headline="EUROMILLIONS JACKPOT" />
            {!jackpot && <p className="text-teletext-cyan">Loading...</p>}
            {jackpot && (
                <>
                    <p className="teletext-dh text-teletext-white">
                        {formatted}
                    </p>
                    {isFallback && (
                        <p className="mt-4 text-teletext-green">
                            (Official figures unavailable right now — but why
                            think small?)
                        </p>
                    )}
                    {jackpot.drawDate && !isFallback && (
                        <p className="mt-2 text-teletext-cyan">
                            Next draw: {jackpot.drawDate}
                        </p>
                    )}
                </>
            )}
        </TeletextLayout>
    );
}
