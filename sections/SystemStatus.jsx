import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeUp } from "../src/animations";
export default function SystemStatus() {
  return (
    <motion.section
  className="relative py-32 px-10"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <p className="mb-4 text-cyan-400 tracking-[6px]">
          // LIVE CONSOLE
        </p>

        <h2 className="mb-16 text-5xl font-bold">
          Current System Activity
        </h2>

        <div
          className="
          rounded-3xl
          border
          border-green-500/20
          bg-black/40
          p-8
          backdrop-blur-xl
          font-mono
          text-green-400
          "
        >
            <div className="mb-6 flex gap-2">
  <div className="h-3 w-3 rounded-full bg-red-500"></div>
  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
  <div className="h-3 w-3 rounded-full bg-green-500"></div>
</div>
          <div className="space-y-2">

  <TypeAnimation
    sequence={[
      '> initializing neural systems...',
      1000,
      '> loading AI modules...',
      1000,
      '> connecting to Katyani.OS...',
      1000,
      '> system online ✓',
      1000,
    ]}
    speed={60}
    repeat={0}
    className="text-green-400 text-lg"
  />

  <div className="mt-6 border-t border-green-500/20 pt-4">

    <p>learning = ["DSA", "Advanced ML"]</p>

    <p>building = ["Gray Collar", "Locly"]</p>

    <p>exploring = ["GenAI", "AI Agents"]</p>

    <p>goal = "AI Engineer & Innovator"</p>

    <p>mode = "Locked In 🚀"</p>

    <p>energy = "110%"</p>

  </div>

</div>
          

          <div className="mt-6 border-t border-green-500/20 pt-4">
  <p className="text-cyan-400">
    System Output
  </p>

  <p className="mt-2 text-green-300">
    Building intelligent systems.
  </p>

  <p className="text-green-300">
    Shipping real-world products.
  </p>

  <p className="text-green-300">
    Learning continuously.
  </p>
</div>

        </div>

      </div>
    </motion.section>
  );
}