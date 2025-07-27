import { getStatistics, wait } from "@/utils/service";
import { FC } from "react";

const Statistics: FC = async () => {

  const { totalTickets, ticketsByStatus, averagePriority } = await getStatistics();

  return (
    <div className="py-4 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 bg-zinc-900 border-b border-zinc-800">
      <div className="bg-blue-900/20 text-blue-400 p-3 rounded-lg">
        <div className="text-2xl font-bold">{totalTickets}</div>
        <div className="text-xs text-blue-400/70">Active Tickets</div>
      </div>
      <div className="bg-green-900/20 text-green-400 p-3 rounded-lg">
        <div className="text-2xl font-bold">{ticketsByStatus["Done"] || 0}</div>
        <div className="text-xs text-green-400/70">Done</div>
      </div>
      <div className="bg-yellow-900/20 text-yellow-400 p-3 rounded-lg max-md:hidden">
        <div className="text-2xl font-bold">{ticketsByStatus["On Hold"] || 0}</div>
        <div className="text-xs text-yellow-400/70">On Hold</div>
      </div>
      <div className="bg-purple-900/20 text-purple-400 p-3 rounded-lg max-md:hidden">
        <div className="text-2xl font-bold">{averagePriority}</div>
        <div className="text-xs text-purple-400/70">Average Priority</div>
      </div>
    </div>
  );
};

export default Statistics;