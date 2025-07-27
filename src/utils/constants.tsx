import { House, Ticket, Plus, Users, Mail, ChartArea, Home, User, Settings, LucideIcon } from "lucide-react";
import { TicketCategory, TicketStatus } from "@/types";

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: House,
  },
  {
    label: "Tickets",
    href: "/tickets",
    icon: Ticket,
  },
  {
    label: "New Ticket",
    href: "/ticket/add",
    icon: Plus,
  },
  {
    label: "Teams",
    href: "#",
    icon: Users,
  },
  {
    label: "Inbox",
    href: "#",
    icon: Mail,
  },
  {
    label: "Statistics",
    href: "#",
    icon: ChartArea,
  },
];

export const DATE_FORMATS = {
  display: {
    day: "2-digit" as const,
    month: "long" as const,
    year: "numeric" as const,
  },
  short: {
    day: "2-digit" as const,
    month: "short" as const,
    year: "numeric" as const,
  },
};


export const STATUS_COLORS = {
  "On Hold": "bg-yellow-500",
  "In Progress": "bg-blue-500",
  Done: "bg-green-500",
};

export const TICKET_CATEGORIES: TicketCategory[] = ["Software Issue", "Hardware Issue", "Connection Issue"];

export const TICKET_STATUSES: TicketStatus[] = ["On Hold", "In Progress", "Done"];

export const TICKET_PRIORITIES = [1, 2, 3, 4, 5] as const;

export enum PRIORITY_LABELS {
  "Very Low" = 1,
  "Low",
  "Medium",
  "High",
  "Critical",
}