import {
  FaPython,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiOpenai,
  SiJavascript,
} from "react-icons/si";

const modules = [
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Core language for AI and backend systems."
  },
  {
    icon: <SiTensorflow />,
    title: "Machine Learning",
    desc: "Building intelligent predictive systems."
  },
  {
    icon: <SiOpenai />,
    title: "Generative AI",
    desc: "LLMs, Agents and AI products."
  },
  {
    icon: <FaReact />,
    title: "Web Development",
    desc: "Modern frontend applications."
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    desc: "Interactive web experiences."
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    desc: "Efficient data architecture."
  },
];

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative py-32 px-10"
    >
        {/* Background Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-10
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

            <p className="mb-4 text-cyan-400 tracking-[6px]">
            // CORE MODULES
            </p>

            <h2 className="mb-16 text-5xl font-bold">
            My Technical Modules
            </h2>

            <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
            {modules.map((module) => (
            <div
              key={module.title}
               className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:border-cyan-400/40
    hover:-translate-y-3
    hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
    "
            >

                {/* Glow Layer */}
    <div
      className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition
      duration-500
      bg-gradient-to-br
      from-cyan-500/10
      to-purple-500/10
      "
    />


{/* Content */}
<div className="relative z-10">

              <div className="
                text-5xl
                text-cyan-400
                mb-6
              ">
                {module.icon}
              </div>

              <h3 className="
                text-2xl
                font-bold
                mb-4
              ">
                {module.title}
              </h3>

              <p className="text-slate-400">
                {module.desc}
              </p>
            </div>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}