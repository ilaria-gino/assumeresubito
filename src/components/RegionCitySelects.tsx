import { ITALIAN_REGIONS, citiesForRegion } from "../data/italyGeo";

type Props = {
  regionId: string;
  cityId: string;
  regionName: string;
  cityName: string;
  disabled?: boolean;
  onRegionChange: (region: string) => void;
  onCityChange: (city: string) => void;
  regionLabel?: string;
  cityLabel?: string;
  cityPlaceholderNoRegion?: string;
};

export function RegionCitySelects({
  regionId,
  cityId,
  regionName,
  cityName,
  disabled,
  onRegionChange,
  onCityChange,
  regionLabel = "Regione",
  cityLabel = "Città (capoluogo di provincia)",
  cityPlaceholderNoRegion = "Scegli prima la regione",
}: Props) {
  const cities = regionName ? citiesForRegion(regionName) : [];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700" htmlFor={regionId}>
          {regionLabel}
        </label>
        <select
          id={regionId}
          name={`${regionId}-region`}
          required
          value={regionName}
          onChange={(e) => {
            onRegionChange(e.target.value);
            onCityChange("");
          }}
          disabled={disabled}
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
        >
          <option value="">Scegli…</option>
          {ITALIAN_REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700" htmlFor={cityId}>
          {cityLabel}
        </label>
        <select
          id={cityId}
          name={`${cityId}-city`}
          required
          value={cityName}
          onChange={(e) => onCityChange(e.target.value)}
          disabled={disabled || !regionName}
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
        >
          <option value="">{regionName ? "Scegli…" : cityPlaceholderNoRegion}</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-slate-500">
          Elenco su capoluoghi di provincia; copre tutta Italia. Estendibile ai comuni ISTAT in seguito.
        </p>
      </div>
    </div>
  );
}
