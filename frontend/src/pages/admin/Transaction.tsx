import { ArrowUpRight, ArrowDownLeft, ExternalLink } from "lucide-react";
import { StatusBadge, type StatusType } from "../../components/admin/Status";
import { Link } from "react-router-dom";

export interface Transaction {
  id: number;
  orderId: number;
  type: string; // e.g., "payment", "refund", "deposit"
  amount: string;
  status: StatusType;
  referenceId: string; // Your bank or gateway Ref ID
  createdAt: string;
}

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden m-8">
      <table className="w-full text-left">
        <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase">
          <tr>
            <th className="p-4">Type</th>
            <th className="p-4">Reference ID</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Order Link</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          {transactions?.map((txn) => (
            <tr
              key={txn.id}
              className="hover:bg-slate-700/20 transition-colors">
              <td className="p-4 text-white">
                <div className="flex items-center gap-2">
                  {txn.type === "payment" ?
                    <ArrowDownLeft className="text-emerald-400" size={16} />
                  : <ArrowUpRight className="text-red-400" size={16} />}
                  <span className="capitalize font-medium">{txn.type}</span>
                </div>
              </td>
              <td className="p-4 font-mono text-sm text-slate-300">
                {txn.referenceId || "N/A"}
              </td>
              <td className="p-4">
                <span
                  className={`font-bold ${txn.type === "payment" ? "text-white" : "text-red-400"}`}>
                  {txn.type === "payment" ? "+" : "-"} ${txn.amount}
                </span>
              </td>
              <td className="p-4">
                <Link
                  to={`/admin/order/${txn.orderId}`}
                  className="flex items-center gap-1 text-[#00D2FF] hover:underline text-sm">
                  #{txn.orderId} <ExternalLink size={12} />
                </Link>
              </td>
              <td className="p-4">
                <StatusBadge status={txn.status} />
              </td>
              <td className="p-4 text-right text-slate-500 text-sm">
                {new Date(txn.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
