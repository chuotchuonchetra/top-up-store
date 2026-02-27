import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Gamepad2,
  CheckCircle,
  Copy,
  XCircle,
  AlertCircle,
} from "lucide-react";
import type { Order } from "../../types/order";
import axios from "axios";
import { StatusBadge } from "./Status";

export const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // 1. Fetch Order Data from Backend
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/v1/orders/${orderId}`,
        );
        setOrder(response.data);
      } catch (err) {
        console.error("Error fetching order:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);
  console.log(order);

  // 2. Handle Status Transitions (Pending -> Completed/Failed)
  const handleStatusUpdate = async (newStatus: string) => {
    if (
      !window.confirm(
        `Are you sure you want to mark this order as ${newStatus}?`,
      )
    )
      return;

    try {
      setUpdating(true);
      const response = await axios.patch(`/api/v1/admin/orders/${orderId}`, {
        status: newStatus,
      });

      // Update local state with the new data from backend
      setOrder(response.data);
    } catch (err) {
      alert("Failed to update order status. Please check your connection.");
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  // 3. Helper: Copy Player ID to Clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can replace this with a toast notification library later
  };

  if (loading)
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-100 text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00D2FF] mb-4"></div>
        Loading order details...
      </div>
    );

  if (!order)
    return (
      <div className="p-8 text-center text-white">
        <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
        <p>Order not found or has been deleted.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-[#00D2FF]">
          Return to Dashboard
        </button>
      </div>
    );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation & Current Status Badge */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Orders
        </button>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 text-sm">Current Status:</span>
          <StatusBadge status={order.status} />
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Order <span className="text-slate-500">#</span>
            {order.id}
          </h1>
          <p className="text-slate-500 mt-1">
            Placed on{" "}
            {new Date(order.createdAt).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </p>
        </div>

        {/* DYNAMIC ACTION BUTTONS */}
        <div className="flex gap-3">
          {/* Show Cancel/Fail button if not already finished */}
          {order.status !== "completed" && order.status !== "failed" && (
            <button
              disabled={updating}
              onClick={() => handleStatusUpdate("failed")}
              className="flex items-center gap-2 bg-red-500/10 text-red-500 px-5 py-2.5 rounded-xl font-bold border border-red-500/20 hover:bg-red-500/20 disabled:opacity-50 transition-all">
              <XCircle size={18} /> Cancel Order
            </button>
          )}

          {/* Show Complete button if not already completed */}
          {order.status !== "completed" && (
            <button
              disabled={updating}
              onClick={() => handleStatusUpdate("completed")}
              className="flex items-center gap-2 bg-[#00D2FF] text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(0,210,255,0.35)] active:scale-95 disabled:opacity-50 transition-all">
              <CheckCircle size={18} />
              {order.status === "failed" ?
                "Retry Fulfillment"
              : "Complete Top-up"}
            </button>
          )}
        </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-[#00D2FF] mb-4">
              <User size={18} />
              <h2 className="font-bold uppercase tracking-widest text-[11px]">
                Customer Profile
              </h2>
            </div>
            <p className="text-white font-semibold text-lg">
              {order.user?.name || "Guest User"}
            </p>
            <p className="text-slate-400 text-sm">{order.user?.email}</p>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">
                Payment via
              </p>
              <p className="text-white font-bold uppercase mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {order.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        {/* Game Account & Item Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/60 relative overflow-hidden">
            <div className="flex items-center gap-2 text-emerald-400 mb-6">
              <Gamepad2 size={20} />
              <h2 className="font-bold uppercase tracking-widest text-[11px]">
                Delivery Information
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <p className="text-slate-500 text-[10px] uppercase font-bold mb-1">
                  Player ID
                </p>
                <div
                  onClick={() => copyToClipboard(order.gameUserId)}
                  className="flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-700 cursor-pointer hover:border-emerald-500 transition-all shadow-inner">
                  <span className="text-white font-mono text-xl">
                    {order.gameUserId}
                  </span>
                  <Copy
                    size={16}
                    className="text-slate-500 group-hover:text-emerald-400"
                  />
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold mb-1">
                  Server Region
                </p>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700 shadow-inner">
                  <span className="text-white font-mono text-xl">
                    {order.serverId}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50 flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold">
                  Item Purchased
                </p>
                <p className="text-2xl font-bold text-white mt-1">
                  {order.package?.title}
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-[10px] uppercase font-bold">
                  Total Price
                </p>
                <p className="text-2xl font-black text-[#00D2FF] mt-1">
                  {order.package?.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
