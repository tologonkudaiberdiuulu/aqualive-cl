import { useLang } from "../context/LanguageContext";

const brands = [
  { name: "IWA", color: "#0072CE", url: "https://iw-analytics.com/" },
  { name: "AquaAnalytics", color: "#003DA5", url: "https://aquaanalytics-tekhnika.ru/" },
];

export default function Brands() {
  const { t } = useLang();

  return (
    <section id="brands" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            {t.brands.tag}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.brands.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.brands.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 mx-auto max-w-lg">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-light group flex h-28 items-center justify-center rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className="text-lg font-bold transition-colors"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
