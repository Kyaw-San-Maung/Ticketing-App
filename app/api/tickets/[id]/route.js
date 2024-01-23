import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

//For Getting data from our data
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundTicket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error..", error }, { status: 500 });
  }
}

//For Deleting Data function
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Deleted Ticket is successfully done." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete the ticket.", error },
      { status: 500 }
    );
  }
}

//For updating Datat Function
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ message: "Ticket updated." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update the ticket.", error },
      { status: 500 }
    );
  }
}
