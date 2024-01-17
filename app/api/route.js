import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
