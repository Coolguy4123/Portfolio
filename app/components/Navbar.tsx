import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/Head.jpeg"
            alt="Profile picture"
            width={36}
            height={36}
            className="rounded-full border border-zinc-700"
            priority
          />
          <span className="font-semibold">Your Name</span>
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-zinc-300 hover:text-white">
            Projects
          </a>
          <a href="#github" className="text-zinc-300 hover:text-white">
            GitHub
          </a>
          <a href="#about" className="text-zinc-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-zinc-300 hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
