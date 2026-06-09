import { motion } from "framer-motion";
import { fadeUp } from "../src/animations";
const projects = [
  {
    id: "001",
    name: "HeartLift",
    status: "LIVE",
    desc: "AI-powered emotional healing platform.",
  },
  {
    id: "002",
    name: "Gray Collar",
    status: "BUILDING",
    desc: "Employment platform for senior citizens.",
  },
  {
    id: "003",
    name: "Locly",
    status: "LIVE",
    desc: "Hyperlocal social networking ecosystem.",
  },
  {
    id: "004",
    name: "QurryHive",
    status: "DEVELOPMENT",
    desc: "AI productivity and collaboration platform.",
  },
  {
    id: "005",
    name: "Quantum × Delta",
    status: "LIVE",
    desc: "School and coaching digital ecosystem.",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "LIVE":
      return "bg-green-400";
    case "BUILDING":
      return "bg-yellow-400";
    default:
      return "bg-cyan-400";
  }
};

export default function Projects() {
  return (
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  id="systems"
className="relative py-32 px-10"
    
>
      
      <div className="mx-auto max-w-7xl">
<div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <p className="mb-4 text-cyan-400 tracking-[6px]">
          // DEPLOYED SYSTEMS
        </p>

        <h2 className="mb-16 text-5xl font-bold">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.id}
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
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >

              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-cyan-500/10
                to-purple-500/10
              "/>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <span className="text-cyan-400 text-sm tracking-widest">
                    DEPLOYMENT {project.id}
                  </span>

                  <div className="flex items-center gap-2">

                    <div
                      className={`h-2 w-2 rounded-full ${getStatusColor(project.status)}`}
                    />

                    <span className="text-sm text-slate-400">
                      {project.status}
                    </span>

                  </div>

                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  {project.name}
                </h3>

                <p className="mt-4 text-slate-400">
                  {project.desc}
                </p>

                <button
                  className="
                  mt-8
                  rounded-xl
                  border
                  border-cyan-400/20
                  px-5
                  py-2
                  text-sm
                  hover:bg-cyan-500/10
                  transition
                  "
                >
                  View System →
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}