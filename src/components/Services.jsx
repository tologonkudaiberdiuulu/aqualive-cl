import { useLang } from "../context/LanguageContext";

const icons = {
  equipment: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 00-.659 1.59v.91a1.5 1.5 0 01-1.5 1.5h-4.74a1.5 1.5 0 01-1.5-1.5v-.91a2.25 2.25 0 00-.659-1.59L5 14.5m14 0h.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H19M5 14.5h-.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75H5" />
    </svg>
  ),
  reagent: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M5 14.5v5.25A2.25 2.25 0 007.25 22h9.5A2.25 2.25 0 0019 19.75V14.5m-14 0h14" />
    </svg>
  ),
  service: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.36.36 5.1-5.1a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1.36.36a1.5 1.5 0 010 2.12l-.88.88a1.5 1.5 0 01-2.12 0l-.36-.36zM6 21h12" />
    </svg>
  ),
  commissioning: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0h.375a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75H19.5m-18-.75v-.75a.75.75 0 01.75-.75h.375" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-950 py-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            {t.services.tag}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item) => (
            <div
              key={item.icon}
              className="glass-card group rounded-2xl p-6 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 text-primary-400 ring-1 ring-primary-500/20">
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
