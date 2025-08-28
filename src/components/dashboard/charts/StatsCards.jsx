import React from "react";
import {
  Eye,
  Users,
  UserPlus,
  UserCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";


function StatsCards() {

  const data = [
    { label: "Page Views", total: "721K", diff: "+11.02%", isGrowth: true, icon: Eye },
    { label: "Site Visits", total: "367K", diff: "-0.03%", isGrowth: false, icon: Users },
    { label: "New Signups", total: "1,156", diff: "+15.03%", isGrowth: true, icon: UserPlus },
    { label: "Active Members", total: "239K", diff: "+6.08%", isGrowth: true, icon: UserCheck },
  ];

  return (
    <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
        >
      
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">{item.label}</span>
            <item.icon className="h-5 w-5 text-gray-400" />
          </div>

     
          <div className="flex items-end justify-between">
            <span className="text-3xl font-semibold text-gray-900">
              {item.total}
            </span>
            <span
              className={`flex items-center text-sm ${
                item.isGrowth ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.isGrowth ? (
                <TrendingUp className="mr-1 h-4 w-4" />
              ) : (
                <TrendingDown className="mr-1 h-4 w-4" />
              )}
              {item.diff}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
