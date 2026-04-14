import { useLang } from "../context/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            {t.about.tag}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.about.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <p className="text-lg leading-relaxed text-slate-600">
            {t.about.text}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-light rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-extrabold text-primary-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
