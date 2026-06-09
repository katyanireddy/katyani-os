import { motion } from "framer-motion";

export default function AboutPanel() {
  return (
    <motion.div
      initial={{ opacity:0, x:100 }}
      animate={{ opacity:1, x:0 }}
      transition={{ duration:1 }}
      className="
      w-[350px]
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >

      <p className="mb-4 text-cyan-400 text-sm">
        // ABOUT SYSTEM
      </p>

      <h2 className="text-4xl font-bold">
        WHO IS
        <span className="block text-purple-400">
          KATYANI?
        </span>
      </h2>

      <div className="
my-8
h-[220px]
rounded-2xl
border
border-purple-400/20
bg-white/5
backdrop-blur-xl
flex
items-center
justify-center
">
  <div className="
  h-28
  w-28
  rounded-full
  bg-gradient-to-r
  from-cyan-400
  to-purple-500
  blur-xl
  "/>
</div>
      <p className="text-slate-300 leading-7">
        AI/ML student passionate about building
        intelligent systems and scalable web
        applications.
      </p>

    </motion.div>
  );
}