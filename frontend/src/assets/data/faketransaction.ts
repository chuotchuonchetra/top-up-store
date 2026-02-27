import type { Transaction } from "../../pages/admin/Transaction";

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    orderId: 1,
    type: "payment",
    amount: "50.00",
    status: "completed",
    referenceId: "ABA-99821-2026",
    createdAt: "2026-02-25T08:30:00Z",
  },
  {
    id: 2,
    orderId: 2,
    type: "payment",
    amount: "5.00",
    status: "pending",
    referenceId: "MAN-92183-XYZ",
    createdAt: "2026-02-25T09:15:00Z",
  },
  {
    id: 3,
    orderId: 3,
    type: "refund",
    amount: "10.00",
    status: "completed",
    referenceId: "REF-00122-ABA",
    createdAt: "2026-02-25T11:00:00Z",
  },
  {
    id: 4,
    orderId: 4,
    type: "payment",
    amount: "100.00",
    status: "failed",
    referenceId: "ACE-88721-ERR",
    createdAt: "2026-02-24T22:10:00Z",
  },
];
