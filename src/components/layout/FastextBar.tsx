const LINKS = [
  { label: "GitHub", href: "https://github.com/serenainzani", color: "text-teletext-red" },
  { label: "Portfolio", href: "https://serena.software", color: "text-teletext-green" },
  // StoryGraph profile slug is a best guess — verify against the real profile URL.
  { label: "StoryGraph", href: "https://app.thestorygraph.com/profile/sinz", color: "text-teletext-yellow" },
  { label: "LinkedIn", href: "https://linkedin.com/in/serenainzani", color: "text-teletext-blue" },
];

export function FastextBar() {
  return (
    <div className="flex w-full justify-between bg-teletext-black px-2 py-1.5 font-bold">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={link.color}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
