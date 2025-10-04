export default function SkillsErrorComponent({ error }: { error: string }) {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    </section>
  );
}
