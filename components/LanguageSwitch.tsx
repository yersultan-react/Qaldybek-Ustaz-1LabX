export default function LanguageSwitch({ lang, setLang }: any) {
  return (
    <div className="flex gap-2">
      <button onClick={() => setLang("kk")} className="glass px-3 py-1">
        ҚАЗ
      </button>
      <button onClick={() => setLang("ru")} className="glass px-3 py-1">
        РУС
      </button>
    </div>
  );
}