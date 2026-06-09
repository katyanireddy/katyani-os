export default function FloatingModule({
  title,
  subtitle,
  className,
}) {
  return (
    <div
      className={`
      absolute
      border
      border-cyan-400/20
      bg-white/5
      backdrop-blur-md
      rounded-2xl
      px-5
      py-4
      text-white
      ${className}
      `}
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-xs text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}