import connectMongo from "@/utils/connect-mongo";
import Ticket from "../models/ticket";
import { NextResponse as Res } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    await connectMongo();

    // Fetch tickets from the database
    const tickets = await Ticket.find();

    // Total number of tickets
    const totalTickets = tickets.length;

    // Distribution by category
    const ticketsByCategory = tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] || 0) + 1;
      return acc;
    }, {});

    // Distribution by status
    const ticketsByStatus = tickets.reduce((acc, ticket) => {
      acc[ticket.status] = (acc[ticket.status] || 0) + 1;
      return acc;
    }, {});

    // Completion rate
    const completedTickets = tickets.filter((ticket) => ticket.status === "Done").length;
    const completionRate = Number(
      totalTickets > 0
        ? Number(((completedTickets / totalTickets) * 100).toFixed(1))
        : 0
    );

    // Critical priority tickets count
    const criticalTickets = tickets.filter((ticket) => ticket.priority >= 4).length;

    // Calculate dates
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisYear = new Date(now.getFullYear(), 0, 1);

    // Count tickets by date
    const ticketsCreatedToday = tickets.filter((ticket) => new Date(ticket.createdAt) >= today).length;
    const ticketsCreatedThisWeek = tickets.filter((ticket) => new Date(ticket.createdAt) >= thisWeek).length;
    const ticketsCreatedThisMonth = tickets.filter((ticket) => new Date(ticket.createdAt) >= thisMonth).length;
    const ticketsCreatedThisYear = tickets.filter((ticket) => new Date(ticket.createdAt) >= thisYear).length;

    // Calculate average priority
    const averagePriority = Number(
      (tickets.reduce((acc, ticket) => acc + ticket.priority, 0) / totalTickets).toFixed(1)
    );

    return Res.json({
      totalTickets,
      ticketsByCategory,
      ticketsByStatus,
      completionRate,
      criticalTickets,
      ticketsCreatedToday,
      ticketsCreatedThisWeek,
      ticketsCreatedThisMonth,
      ticketsCreatedThisYear,
      averagePriority,
    });
  } catch (error) {
    return Res.json({ message: "An error occurred" }, { status: 500 });
  }
}
