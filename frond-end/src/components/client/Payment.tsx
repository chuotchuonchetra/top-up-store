export const Payment = () => {
  return (
    <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
      <h3 className="flex items-center gap-2 font-bold mb-4">
        <span className="text-[#00D2FF]">💳</span> Payment Method
      </h3>
      <div className="border-2 border-[#00D2FF] bg-slate-900 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">
            ABA
          </div>
          <div>
            <div className="text-xs font-bold uppercase">ABA KHQR</div>
            <div className="text-[10px] text-slate-400">
              Scan to pay with any banking app
            </div>
          </div>
        </div>
        <div className="bg-[#00D2FF] text-white rounded-full p-1 text-[10px]">
          ✔
        </div>
      </div>
    </div>
  );
};
