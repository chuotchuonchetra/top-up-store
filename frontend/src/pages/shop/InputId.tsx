import { useState, type ChangeEvent } from "react";
interface InputIdProps {
  gameName: string | undefined;
}
export const InputId = ({ gameName }: InputIdProps) => {
  const [gameId, setGameId] = useState<string>("");
  const [zoneId, setZoneId] = useState<string>("");

  const isMLBB = gameName === "mobile-legends" ? true : false;

  const handleNumericChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void,
  ) => {
    const { value } = e.target;
    if (value === "" || /^\d+$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
      <h3 className="flex items-center gap-2 font-bold mb-6 text-white">
        <span className="text-[#00D2FF]">👤</span> Enter Your Information
      </h3>

      {/* 1. Fieldset as the border container */}
      <fieldset className="border border-slate-700 rounded-xl px-4 pb-2 transition-focus-within focus-within:border-[#00D2FF]">
        {/* 2. Legend as the 'cut-through' label */}
        <legend className="text-[#00D2FF] text-xs font-bold px-2 ml-2 uppercase tracking-wide">
          Game ID
        </legend>

        <input
          type="text"
          placeholder="e.g. 12345678"
          inputMode="numeric"
          value={gameId}
          onChange={(e) => handleNumericChange(e, setGameId)}
          className="w-full bg-transparent text-white outline-none py-1 placeholder:text-slate-500"
        />
      </fieldset>
      {isMLBB && (
        <fieldset className="border border-slate-700 rounded-xl px-4 pb-2 mt-3 transition-focus-within focus-within:border-[#00D2FF]">
          {/* 2. Legend as the 'cut-through' label */}
          <legend className="text-[#00D2FF] text-xs font-bold px-2 ml-2 uppercase tracking-wide">
            Server ID
          </legend>

          <input
            type="text"
            placeholder="1234"
            inputMode="numeric"
            value={zoneId}
            onChange={(e) => handleNumericChange(e, setZoneId)}
            className="w-full bg-transparent text-white outline-none py-1  placeholder:text-slate-500"
          />
        </fieldset>
      )}
      <div className="mt-4 flex justify-between items-center text-sm px-1">
        <span className="text-slate-400">Player</span>
        <span className="text-red-500 font-semibold">Invalid</span>
      </div>
    </div>
  );
};
