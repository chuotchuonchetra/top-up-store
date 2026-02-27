import React from "react";
import type { Order } from "../../types/order";

interface OrderDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export const OrderDetailModal = ({
  isOpen,
  onClose,
  order,
}: OrderDetailModalProps) => {
  // Guard clause: don't render if closed or if order data is missing
  if (!isOpen || !order) return null;

  // Helper to color-code status badges
  const getStatusStyles = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "failed":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Order Details</h2>
            <p className="text-xs text-slate-500 font-mono">ID: {order.id}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
            ✕
          </button>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <DetailItem label="Status">
            <span
              className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(order.status)}`}>
              {order.status}
            </span>
          </DetailItem>

          <DetailItem
            label="Payment Method"
            value={order.paymentMethod.toUpperCase()}
          />
          <DetailItem label="Game User ID" value={order.gameUserId} />
          <DetailItem label="Server" value={order.serverId} />

          {order.package && (
            <div className="col-span-2 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <p className="text-[10px] text-slate-500 uppercase mb-1">
                Package Content
              </p>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">
                  {order.package.title || "Game Credits"}
                </span>
                <span className="text-[#00D2FF] font-bold text-lg">
                  ${order.package.price}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Meta Info */}
        <div className="space-y-2 border-t border-slate-800 pt-4 mb-6">
          <div className="flex justify-between text-xs">
            <span className="text-slate-500">Transaction Date</span>
            <span className="text-slate-300">
              {new Date(order.createdAt).toLocaleString()}
            </span>
          </div>
          {order.supplierTransactionId && (
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Supplier Ref</span>
              <span className="text-slate-300 font-mono">
                {order.supplierTransactionId}
              </span>
            </div>
          )}
        </div>

        {/* Action */}
        <button
          onClick={onClose}
          className="w-full rounded-xl bg-slate-800 py-3 font-semibold text-white transition-all hover:bg-slate-700 active:scale-[0.98]">
          Close View
        </button>
      </div>
    </div>
  );
};

// Simple helper component for clean layout
const DetailItem = ({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) => (
  <div>
    <p className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
      {label}
    </p>
    {children ?
      children
    : <p className="text-white font-medium truncate">{value}</p>}
  </div>
);
