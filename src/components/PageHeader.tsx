interface PageHeaderProps {
  eyebrow: string;
  headline: string;
}

export function PageHeader({ eyebrow, headline }: PageHeaderProps) {
  return (
    <div className="mb-3">
      <p className="text-3xl text-teletext-yellow">{eyebrow}</p>
      <p className="teletext-dh text-teletext-white">{headline}</p>
      <hr className="mt-2 border-t-2 border-teletext-blue" />
    </div>
  );
}
