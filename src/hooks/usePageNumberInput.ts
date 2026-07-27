import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findPageByNumber } from "../data/pages";

export function usePageNumberInput() {
  const [buffer, setBuffer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!/^[0-9]$/.test(event.key)) return;

      setBuffer((prev) => {
        const next = prev.length >= 3 ? event.key : prev + event.key;

        if (next.length === 3) {
          const match = findPageByNumber(next);
          if (match) {
            navigate(match.route);
          }
          return "";
        }

        return next;
      });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return { buffer };
}
