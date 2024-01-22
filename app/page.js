import React from "react";
import TicketCards from "./(components)/TicketCards";

const getTickets = async () => {
  try {
  } catch (error) {}
};

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCards />
        <TicketCards />
        <TicketCards />
        <TicketCards />
      </div>
    </div>
  );
};

export default Dashboard;
