import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiJavascript,
  SiTensorflow,
  SiOpenai,
  SiFirebase,
  SiSupabase,
  SiMongodb
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp } from "../src/animations";

const techStack = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiOpenai />, name: "OpenAI" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function TechUniverse() {
  return (
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}

      className="relative py-32 px-10"
      id="tech"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <p className="mb-4 text-cyan-400 tracking-[6px]">
          // TECH UNIVERSE
        </p>

        <h2 className="mb-20 text-5xl font-bold">
          My Tech Ecosystem
        </h2>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
          gap-8
          "
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
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
              text-center
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >
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

              <div className="relative z-10">

                <div className="
                  mb-5
                  text-5xl
                  text-cyan-400
                ">
                  {tech.icon}
                </div>

                <h3 className="font-semibold">
                  {tech.name}
                </h3>

              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}