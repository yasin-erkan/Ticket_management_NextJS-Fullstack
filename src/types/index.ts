export type CategoryType = {
  "Software Issue"?: number;
  "Hardware Issue"?: number;
  "Connection Issue"?: number;
  Other?: number;
};

export type StatusType = {
  "In Progress"?: number;
  "On Hold"?: number;
  "Done"?: number;
};

export type Statistics = {
  totalTickets: number;
  ticketsByCategory: CategoryType;
  ticketsByStatus: StatusType;
  completionRate: number;
  criticalTickets: number;
  ticketsCreatedToday: number;
  ticketsCreatedThisWeek: number;
  ticketsCreatedThisMonth: number;
  ticketsCreatedThisYear: number;
  averagePriority: number;
};

export type TicketCategory = "Software Issue" | "Hardware Issue" | "Connection Issue" | "Other";

export type TicketStatus = "In Progress" | "On Hold" | "Done";

export type Ticket = {
  title: string;
  description: string;
  category: TicketCategory;
  priority: number;
  progress: number;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type StatisticsResponse = Promise<Statistics>;

export type TicketResponse = Promise<{
  message: string;
  ticket: Ticket;
}>;

export type TicketsResponse = Promise<{
  message: string;
  tickets: Ticket[];
}>;

export type MessageResponse = Promise<{
  message: string;
}>;
