import connectMongo from "@/utils/connect-mongo";
import Ticket from "../models/ticket";
import { NextResponse as Res } from "next/server";

export async function GET() {
  try {
    // Connect to database
    await connectMongo();

    // Get ticket data
    const tickets = await Ticket.find();

    return Res.json({
      message: "Ticket data retrieved",
      tickets,
    });
  } catch (error) {
    return Res.json(
      {
        message: "An error occurred while retrieving ticket data",
        error: (error instanceof Error && error.message) || "Unknown error!",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Connect to database
    await connectMongo();

    // Get data from request body
    const body = await req.json();

    // Save new ticket to database
    const newTicket = await Ticket.create(body);

    return Res.json({
      message: "Ticket created",
      ticket: newTicket,
    });
  } catch (error: any) {
    return Res.json(
      {
        message: "An error occurred while creating ticket data",
        error: (error instanceof Error && error.message) || "Unknown error!",
      },
      { status: 500 }
    );
  }
}
