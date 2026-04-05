export default function ControlPanel({ t, params, setParams }: any) {
  const update = (key: string, value: number) => {
    setParams({ ...params, [key]: value });
  };

  return (
    <div className="glass p-5 space-y-4">
      <h2 className="text-xl font-bold">{t.title}</h2>

      {/* Amplitude */}
      <div>
        <label>{t.amplitude}</label>
        <input
          type="number"
          value={params.A}
          onChange={(e) => update("A", +e.target.value)}
          className="input"
        />
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={params.A}
          onChange={(e) => update("A", +e.target.value)}
          className="slider"
        />
      </div>

      {/* Period */}
      <div>
        <label>{t.period}</label>
        <input
          type="number"
          value={params.T}
          onChange={(e) => update("T", +e.target.value)}
        />
        <input
          type="range"
          min="0.5"
          max="10"
          step="0.1"
          value={params.T}
          onChange={(e) => update("T", +e.target.value)}
          className="slider"
        />
      </div>

      {/* Phase */}
      <div>
        <label>{t.phase}</label>
        <input
          type="number"
          value={params.phi}
          onChange={(e) => update("phi", +e.target.value)}
        />
        <input
          type="range"
          min="-6.28"
          max="6.28"
          step="0.01"
          value={params.phi}
          onChange={(e) => update("phi", +e.target.value)}
          className="slider"
        />
      </div>
    </div>
  );
}