import { Search, Eye } from "lucide-react";
import { StatusBadge } from "../../components/admin/Status";
import type { Order } from "../../types/order";
import { OrderDetailModal } from "../../components/admin/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>();
  useEffect(() => {
    const fetchOrders = async () => {
      const respone = await axios.get("http://localhost:3000/api/v1/orders");
      setOrders(respone.data);
    };

    fetchOrders();
  }, []);
  console.log(orders);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };
  return (
    <div className="p-8 space-y-6 bg-[#0f172a] text-white min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Transaction History</h1>
          <p className="text-slate-400 text-sm">
            Monitor and fulfill customer top-ups.
          </p>
        </div>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Player ID or Transaction..."
            className="bg-slate-800 border border-slate-700 pl-10 pr-4 py-2 rounded-xl outline-none focus:border-[#00D2FF] w-80 transition-all"
          />
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="p-4 font-semibold">Customer</th>
              <th className="p-4 font-semibold">Game Info</th>
              <th className="p-4 font-semibold">Item</th>
              <th className="p-4 font-semibold">Payment</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {orders?.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-slate-700/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium">
                    {order.user?.name || "Guest"}
                  </div>
                  <div className="text-xs text-slate-500">
                    ID: #{order.userId}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-mono text-[#00D2FF]">
                    ID: {order.gameUserId}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Server: {order.serverId}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-medium">
                    {order.package?.title || "Unknown Item"}
                  </div>
                  <div className="text-xs text-emerald-400 font-bold">
                    ${order.package?.price}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-xs uppercase font-bold text-slate-300">
                    {order.paymentMethod}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </td>
                <td className="p-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleViewOrder(order)}
                    className="p-2 hover:bg-[#00D2FF]/20 hover:text-[#00D2FF] rounded-lg transition-colors text-slate-400">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <OrderDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Simple reset
          order={selectedOrder}
        />
      </div>
    </div>
  );
};
