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
  <span className="mx-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex-shrink-0 inline-block align-middle opacity-60" />
);

export default function MarqueeStrip() {
  return (
    <div className="relative w-full overflow-hidden py-5 bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-blue-600 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-teal-500 to-transparent pointer-events-none"></div>

      {/* Track */}
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-white/90 text-sm font-bold tracking-wide uppercase">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
