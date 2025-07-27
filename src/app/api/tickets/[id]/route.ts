import connectMongo from "@/utils/connect-mongo";
import { NextResponse as Res } from "next/server";
import Ticket from "../../models/ticket";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: Params) {
  try {
    // Connect to database
    await connectMongo();

    // Find ticket by known ID
    const ticket = await Ticket.findById(params.id);

    // Return error if ticket not found
    if (!ticket) return Res.json({ message: "Ticket not found" }, { status: 404 });

    // Return ticket data if found
    return Res.json({ message: "Ticket found", ticket });
  } catch (error) {
    return Res.json(
      {
        message: "An error occurred while retrieving the ticket",
        error: error instanceof Error ? error.message : "Unknown error!",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    // Connect to database
    await connectMongo();

    // Delete ticket by ID
    await Ticket.findByIdAndDelete(params.id);

    // Send response to client
    return Res.json({ message: "Ticket deleted" });
  } catch (error) {
    return Res.json(
      {
        message: "An error occurred while deleting the ticket",
        error: error instanceof Error ? error.message : "Unknown error!",
      },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request, { params }: Params) {
  try {
    // Connect to database
    await connectMongo();

    // Get data from request body
    const body = await req.json();

    // Update ticket in database
    const updated = await Ticket.findByIdAndUpdate(params.id, body, { new: true });

    // Send response to client
    return Res.json({ message: "Ticket updated", ticket: updated });
  } catch (error) {
    return Res.json(
      {
        message: "An error occurred while updating the ticket",
        error: error instanceof Error ? error.message : "Unknown error!",
      },
      { status: 400 }
    );
  }
}
