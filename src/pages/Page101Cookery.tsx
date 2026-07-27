import { useEffect, useState } from "react";
import { TeletextLayout } from "../components/layout/TeletextLayout";
import { PageHeader } from "../components/PageHeader";
import { fetchRandomRecipe, type Recipe } from "../lib/api/themealdb";

type Status = "loading" | "success" | "error";

export function Page101Cookery() {
    const [status, setStatus] = useState<Status>("loading");
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetchRandomRecipe()
            .then((result) => {
                if (cancelled) return;
                setRecipe(result);
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
        <TeletextLayout pageNumber="101">
            <PageHeader
                eyebrow="Cookery"
                headline={recipe ? recipe.name : "RANDOM RECIPE"}
            />
            {status === "loading" && (
                <p className="text-teletext-cyan">Loading...</p>
            )}
            {status === "error" && (
                <p className="text-teletext-red">
                    Recipe currently unavailable.
                </p>
            )}
            {status === "success" && recipe && (
                <>
                    <p className="mb-1 text-teletext-green">Ingredients:</p>
                    <ul className="mb-3 text-teletext-cyan">
                        {recipe.ingredients.map((item, i) => (
                            <li key={i}>
                                {item.measure} {item.ingredient}
                            </li>
                        ))}
                    </ul>
                    <p className="mb-1 text-teletext-green">Instructions:</p>
                    <p className="whitespace-pre-line text-teletext-white">
                        {recipe.instructions}
                    </p>
                </>
            )}
        </TeletextLayout>
    );
}
