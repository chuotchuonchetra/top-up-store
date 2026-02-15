import { StatWidget } from "../../components/admin/StatWidgets";

export const AdminDashboard = () => {
  return (
    <div>
      <StatWidget
        color="red"
        icon={() => <div>Red Icon</div>}
        label="'Testing'"
        value={123}
        key={1}
        trend={{
          value: 12,
          isUpward: true,
        }}
      />
    </div>
  );
};
