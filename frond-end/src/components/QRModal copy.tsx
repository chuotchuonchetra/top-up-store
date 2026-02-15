import React, { useState, useEffect } from "react";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string | number;
  packageName: string;
}

const QRModal: React.FC<QRModalProps> = ({
  isOpen,
  onClose,
  amount,
  packageName,
}) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  // Timer Logic
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  // Format seconds into MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCheckPayment = () => {
    alert("Checking payment status... Please wait.");
    // Here you would typically call your Express API to verify the transaction
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white">
          ✕
        </button>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Scan to Pay</h2>
          <p className="text-slate-400 text-sm mb-4">
            Paying for: <span className="text-blue-400">{packageName}</span>
          </p>

          {/* Fake QR Code Area */}
          <div className="mx-auto mb-6 flex h-64 w-64 items-center justify-center rounded-xl bg-white p-4 shadow-inner">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=FAKE_PAYMENT_URL_${amount}`}
              alt="QR Payment"
              className="w-full h-full"
            />
          </div>

          {/* Price & Timer */}
          <div className="mb-6 space-y-2">
            <div className="text-3xl font-bold text-orange-400">{amount}</div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <span className="text-slate-400">Expires in:</span>
              <span
                className={`font-mono ${timeLeft < 60 ? "text-red-500 animate-pulse" : "text-blue-400"}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleCheckPayment}
              className="w-full rounded-xl bg-[#00D2FF] py-3 font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
              Check Payment Status
            </button>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">
              Do not close this window until payment is confirmed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
