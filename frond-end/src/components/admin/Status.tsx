export type StatusType = "pending" | "processing" | "completed" | "failed";

export const StatusBadge = ({ status }: { status: StatusType }) => {
  const styles: Record<StatusType, string> = {
    pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    failed: "bg-red-500/10 text-red-500 border-red-500/20",
    processing: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
};
