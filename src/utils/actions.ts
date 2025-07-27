"use server";

import Ticket from "@/app/api/models/ticket";
import connectMongo from "./connect-mongo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Since we are inside a server action, we can directly make database queries

export async function createTicketAction(formData: FormData) {
  // Get the necessary information from formData
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    priority: formData.get("priority"),
    progress: formData.get("progress"),
    status: formData.get("status"),
  };

  // Connect to the database
  await connectMongo();

  // Create a new ticket
  const newTicket = await Ticket.create(rawData);

  // Rebuild static pages
  revalidatePath("/tickets");
  revalidatePath("/");
  revalidatePath(`/ticket/${newTicket._id.toString()}`);

  // Redirect to the tickets page
  redirect("/tickets");
}



export async function updateTicketAction(formData: FormData) {
  // The id of the item to be updated
  const id = formData.get("id");

  // Get the necessary information from formData
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    priority: formData.get("priority"),
    progress: formData.get("progress"),
    status: formData.get("status"),
  };

  // Connect to the database
  await connectMongo();

  // Update the ticket in the database
  const updatedTicket = await Ticket.findByIdAndUpdate(id, rawData, {});

  // Rebuild static pages
  revalidatePath("/tickets");
  revalidatePath("/");
  revalidatePath(`/ticket/${updatedTicket._id.toString()}`);

  // Redirect to the tickets page
  redirect("/tickets");
}
