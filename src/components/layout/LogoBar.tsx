const LETTERS = ["I", "N", "Z"];

export function LogoBar() {
    return (
        <div className="flex h-20 sm:h-32">
            <div className="hidden sm:flex">
                {LETTERS.map((letter) => (
                    <div
                        key={letter}
                        className="flex w-28 items-center justify-center border-t-8 border-x-8 border-teletext-black bg-teletext-white"
                    >
                        <span className="font-logo text-8xl font-bold text-teletext-black">
                            {letter}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-1 items-center justify-center bg-teletext-blue">
                <span className="font-logo text-4xl font-bold tracking-tighter text-teletext-yellow sm:text-9xl">
                    SEEFAX
                </span>
            </div>
        </div>
    );
}
