"use client";

const ITEMS = [
  "Flutter",
  "Dart",
  "NestJS",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "App Security",
  "CI/CD",
  "AWS",
  "Docker",
  "Supabase",
  "Riverpod",
  "BLoC",
];

const Dot = () => (
  <span className="mx-5 w-1 h-1 rounded-full bg-gray-600 flex-shrink-0 inline-block align-middle" />
);

export default function MarqueeStrip() {
  return (
    <div className="relative w-full overflow-hidden py-5 bg-gray-900 border-y border-gray-800">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-gray-400 text-[11px] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
