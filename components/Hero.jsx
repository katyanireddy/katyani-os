import { motion } from "framer-motion";
import NeuralCore from "./NeuralCore";
import Navbar from "./Navbar";
import AboutPanel from "./AboutPanel";
import FloatingModule from "./FloatingModule";


export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050816]">

  <Navbar />

  {/* Glow Layer */}
  <div
  className="
  absolute
  left-1/2
  top-1/2
  h-[900px]
  w-[900px]
  -translate-x-1/2
  -translate-y-1/2
  rounded-full
  bg-gradient-to-r
  from-cyan-500/10
  via-purple-500/10
  to-cyan-500/10
  blur-[200px]
  "
/>

  <div className="absolute inset-0">
    <NeuralCore />
<FloatingModule
  title="Vision Module"
  subtitle="Computer Vision"
  className="top-[18%] left-[35%]"
/>

<FloatingModule
  title="Reasoning Module"
  subtitle="Machine Learning"
  className="top-[18%] right-[12%]"
/>

<FloatingModule
  title="Language Module"
  subtitle="Generative AI"
  className="bottom-[18%] left-[35%]"
/>

<FloatingModule
  title="Interface Module"
  subtitle="Web Development"
  className="bottom-[18%] right-[12%]"
/>
  </div>

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">

    {/* LEFT */}

    <div className="w-[35%]">

      <p className="mb-4 tracking-[8px] text-cyan-400">
        // INITIALIZING
      </p>

      <h1 className="
      text-8xl
      font-black
      leading-none
      bg-gradient-to-r
      from-white
      via-cyan-300
      to-purple-400
      bg-clip-text
      text-transparent
      ">
        KATYANI
        <br />
        REDDY
      </h1>

      <h3 className="mt-8 text-3xl text-cyan-300">
        AI ENGINEER
      </h3>

      <h3 className="mt-2 text-2xl text-purple-300">
        FULL STACK DEVELOPER
      </h3>
      

      <p className="mt-8 max-w-md text-slate-400">
        Building intelligent systems and beautiful
        interfaces that solve real-world problems.
      </p>

      <div className="mt-10 flex gap-4">

  <button className="
  rounded-xl
  border
  border-cyan-400/30
  px-6
  py-3
  bg-cyan-500/10
  hover:bg-cyan-500/20
  hover:scale-105
hover:shadow-[0_0_25px_rgba(34,211,238,.5)]
transition-all
duration-300
  ">
    Enter The Model →
  </button>

</div>

    </div>

    {/* RIGHT */}

    <AboutPanel />

  </div>
  <div
  className="
  pointer-events-none
  absolute
  inset-0
  opacity-[0.03]
  "
  style={{
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent, transparent 2px, white 3px)"
  }}
/>

</section>
  );
}