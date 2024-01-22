import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-gray-500";
    switch (status.toLowerCase()) {
      case (status = "done"):
        color = "bg-green-500";
        return color;
      case (status = "started"):
        color = "bg-yellow-500";
        return color;
      case (status = "not started"):
        color = "bg-red-500";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      <p className="text-s text-black">{status}</p>
    </span>
  );
};

export default StatusDisplay;
