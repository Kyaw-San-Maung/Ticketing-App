import React from "react";
import TicketCards from "./(components)/TicketCards";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategory = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategory?.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCards
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
