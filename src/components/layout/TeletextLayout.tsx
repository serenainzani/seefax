import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { usePageNumberInput } from "../../hooks/usePageNumberInput";
import { TopBar } from "./TopBar";
import { LogoBar } from "./LogoBar";
import { InfoBanner } from "./InfoBanner";
import { FastextBar } from "./FastextBar";

interface TeletextLayoutProps {
    pageNumber: string;
    children: ReactNode;
}

export function TeletextLayout({ pageNumber, children }: TeletextLayoutProps) {
    const { buffer } = usePageNumberInput();
    const displayNumber = buffer || pageNumber;

    return (
        <div className="flex min-h-screen justify-center bg-teletext-black font-teletext">
            <div className="flex w-full max-w-[1000px] flex-col text-2xl">
                <TopBar displayNumber={displayNumber} />
                <LogoBar />
                <main className="flex-1 px-2 py-3 text-teletext-white">
                    {children}
                </main>
                <InfoBanner>
                    {pageNumber === "100" ? (
                        "Seefax: the world at your fingertips"
                    ) : (
                        <>
                            Type 100 or click{" "}
                            <Link
                                to="/100"
                                className="font-bold text-teletext-white underline"
                            >
                                HOME
                            </Link>{" "}
                            to return to the Seefax index
                        </>
                    )}
                </InfoBanner>
                <FastextBar />
            </div>
        </div>
    );
}
