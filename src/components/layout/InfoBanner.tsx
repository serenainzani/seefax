import type { ReactNode } from "react";

interface InfoBannerProps {
    children: ReactNode;
}

export function InfoBanner({ children }: InfoBannerProps) {
    return (
        <div className="bg-teletext-blue py-1 text-center text-teletext-yellow">
            {children}
        </div>
    );
}
