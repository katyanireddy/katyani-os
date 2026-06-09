import { motion } from "framer-motion";
import { fadeUp } from "../src/animations";
const timeline = [
  {
    year: "2021",
    title: "Started Programming",
    desc: "First steps into coding."
  },
  {
    year: "2022",
    title: "Web Development",
    desc: "Built websites and frontend projects."
  },
  {
    year: "2023",
    title: "AI / ML",
    desc: "Started machine learning journey."
  },
  {
    year: "2024",
    title: "Hackathons",
    desc: "Built products under pressure."
  },
  {
    year: "2025",
    title: "Building Startups",
    desc: "HeartLift, Locly, Gray Collar."
  },
  {
    year: "Future",
    title: "AI Engineer",
    desc: "Building intelligent systems at scale."
  }
];

export default function Timeline() {
  return (
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
      id="journey"
      className="relative py-32 px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <p className="mb-4 text-cyan-400 tracking-[6px]">
          // TRAINING JOURNEY
        </p>

        <h2 className="mb-20 text-5xl font-bold">
          Model Training Timeline
        </h2>

        {/* Timeline Line */}

        <div className="relative">

          <div
            className="
            absolute
            top-5
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-purple-500
            via-cyan-400
            to-purple-500
            "
          />

          <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative"
              >

                <div
                  className="
                  mb-8
                  h-4
                  w-4
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,1)]
                  "
                />

                <h3 className="text-cyan-400 font-bold">
                  {item.year}
                </h3>

                <h4 className="mt-2 font-semibold">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-slate-400">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
      <div className="
mt-20
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
">
  <h3 className="text-2xl font-bold mb-4">
    Training Progress
  </h3>

  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
    <div className="
    h-full
    w-[92%]
    bg-gradient-to-r
    from-cyan-400
    to-purple-500
    " />
  </div>

  <p className="mt-4 text-slate-400">
    Model Accuracy: 92.7%
  </p>
</div>
    </motion.section>
    
  );
}