export default function SystemStatus() {
  return (
    <section className="py-32 px-10">
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

          <p>{">"} katyani@ai_system:~$ status</p>

          <br />

          <p>learning = ["DSA", "Advanced ML"]</p>

          <p>building = ["Gray Collar", "AI Projects"]</p>

          <p>exploring = ["GenAI", "AI Agents"]</p>

          <p>goal = "AI Engineer & Innovator"</p>

          <p>mode = "Consistent Grind"</p>

          <p>energy = "110%"</p>

          <br />

          <p>
            System Output:
            Building the future, one line at a time.
          </p>

        </div>

      </div>
    </section>
  );
}