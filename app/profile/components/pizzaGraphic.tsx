"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF8042"];

export default function TicketPieChart({
  openCount,
  closedCount,
}: {
  openCount: number;
  closedCount: number;
}) {
  const data = [
    { name: "Atendidos", value: closedCount },
    { name: "Não Atendidos", value: openCount },
  ];

  return (
    <div className="w-full  flex justify-center mt-4">
      <PieChart width={364} height={364}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={130} // <-- aumente isso também
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
