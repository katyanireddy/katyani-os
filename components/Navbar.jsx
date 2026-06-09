export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-10 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <h1 className="font-semibold tracking-widest text-white">
          KATYANI AI v1.0
        </h1>

        <div className="flex gap-10 text-sm uppercase tracking-widest text-slate-300">

          <a href="#home" className="
relative
hover:text-cyan-400
transition-all
duration-300
">Home</a>
          <a href="#modules" className="
relative
hover:text-cyan-400
transition-all
duration-300
">Modules</a>
          <a href="#systems"className="
relative
hover:text-cyan-400
transition-all
duration-300
">Systems</a>
          <a href="#journey"className="
relative
hover:text-cyan-400
transition-all
duration-300
">Journey</a>
          <a href="#contact"className="
relative
hover:text-cyan-400
transition-all
duration-300
">Contact</a>

        </div>

      </div>
    </nav>
  );
}