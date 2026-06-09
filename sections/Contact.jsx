import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../src/animations";

export default function Contact() {
  return (
   <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
      id="contact"
      className="relative py-32 px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <p className="mb-4 text-cyan-400 tracking-[6px]">
          // CONNECT
        </p>

        <h2 className="mb-16 text-5xl font-bold">
          Let's Build The Future Together
        </h2>

        <div
          className="
          rounded-3xl
          border
          border-cyan-400/20
          bg-white/5
          backdrop-blur-xl
          p-10
          "
        >

          <div className="
          font-mono
          text-green-400
          space-y-2
          mb-10
          ">

            <p>{">"} establish_connection()</p>
            <p>Connection successful...</p>
            <p>Status: ONLINE</p>

          </div>

          <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          ">

            <a
              href="mailto:yourmail@gmail.com"
              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
              transition
              hover:border-cyan-400/40
              "
            >
              <FaEnvelope className="text-3xl text-cyan-400 mb-4" />
              <h3>Email</h3>
            </a>

            <a
              href="https://github.com/katyanireddy"
              target="_blank"
              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
              transition
              hover:border-cyan-400/40
              "
            >
              <FaGithub className="text-3xl text-cyan-400 mb-4" />
              <h3>GitHub</h3>
            </a>

            <a
              href="https://linkedin.com/in/katyanireddy"
              target="_blank"
              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
              transition
              hover:border-cyan-400/40
              "
            >
              <FaLinkedin className="text-3xl text-cyan-400 mb-4" />
              <h3>LinkedIn</h3>
            </a>

            <a
              href="#"
              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-6
              transition
              hover:border-cyan-400/40
              "
            >
              <FaFileAlt className="text-3xl text-cyan-400 mb-4" />
              <h3>Resume</h3>
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  );
}