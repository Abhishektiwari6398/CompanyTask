import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function ChartsSection() {
  const userStats = [
    { month: "Jan", current: 14, prev: 11 },
    { month: "Feb", current: 19, prev: 13 },
    { month: "Mar", current: 16, prev: 17 },
    { month: "Apr", current: 21, prev: 15 },
    { month: "May", current: 23, prev: 18 },
    { month: "Jun", current: 20, prev: 19 },
    { month: "Jul", current: 26, prev: 21 },
  ];

  const devices = [
    { name: "Linux", value: 15 },
    { name: "Mac", value: 20 },
    { name: "iOS", value: 30 },
    { name: "Windows", value: 25 },
    { name: "Android", value: 12 },
    { name: "Other", value: 10 },
  ];

  const regions = [
    { name: "United States", value: 40.2 },
    { name: "Canada", value: 21.7 },
    { name: "Mexico", value: 28.3 },
    { name: "Other", value: 9.8 },
  ];

  const sources = [
    { name: "Google", percentage: 47 },
    { name: "YouTube", percentage: 23 },
    { name: "Instagram", percentage: 33 },
    { name: "Pinterest", percentage: 14 },
    { name: "Facebook", percentage: 19 },
    { name: "Twitter", percentage: 11 },
    { name: "LinkedIn", percentage: 7 },
  ];

  const palette = ["#3b82f6", "#10b981", "#f59e0b", "#6366f1"];

  return (
    <div className="space-y-6">
   
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
     
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 xl:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Total Users</h3>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="prev"
                  stroke="#6b7280"
                  strokeDasharray="4 4"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

     
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-5">Traffic by Website</h3>
          <div className="space-y-3">
            {sources.map((src) => (
              <div key={src.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{src.name}</span>
                <div className="w-28 bg-gray-200 h-2 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${src.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
       
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-5">Traffic by Device</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={devices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" barSize={22}>
                  {devices.map((entry, idx) => (
                    <Cell
                      key={entry.name}
                      fill={
                        [
                          "#3b82f6",
                          "#10b981",
                          "#6366f1",
                          "#f59e0b",
                          "#ef4444",
                          "#8b5cf6",
                        ][idx % 6]
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-5">Traffic by Location</h3>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regions}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                  >
                    {regions.map((region, idx) => (
                      <Cell
                        key={region.name}
                        fill={palette[idx % palette.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

           
            <div className="mt-6 sm:mt-0 sm:ml-6 space-y-2">
              {regions.map((region, idx) => (
                <div
                  key={region.name}
                  className="flex items-center justify-between w-44"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: palette[idx % palette.length] }}
                    />
                    <span className="text-sm text-gray-600">{region.name}</span>
                  </div>
                  <span className="text-sm font-medium">{region.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsSection;
