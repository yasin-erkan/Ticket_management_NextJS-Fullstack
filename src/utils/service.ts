import { MessageResponse, StatisticsResponse, TicketResponse, TicketsResponse } from "@/types";




const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

export const wait = async (ms: number = 1500) => {

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};


export const getStatistics = async (): StatisticsResponse => {
  const response = await fetch(`${APP_URL}/api/statistics`, { cache: "no-store" });


  return response.json();
}

export const getTickets = async (): Promise<TicketsResponse> => {
  const response = await fetch(`${APP_URL}/api/tickets`, { cache: "no-store" });

  return response.json();
}

export const deleteTicket = async (id: string): MessageResponse => {
  const res = await fetch(`${APP_URL}/api/tickets/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export const getTicket = async (id: string): Promise<TicketResponse> => {
  const response = await fetch(`${APP_URL}/api/tickets/${id}`, { cache: "no-store" });

  return response.json();
}