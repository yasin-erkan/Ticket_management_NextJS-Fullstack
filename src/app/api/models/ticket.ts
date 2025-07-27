import mongoose, { Schema } from "mongoose";

// Define data type
export interface ITicket {
  title: string;
  description: string;
  category: "Software Issue" | "Hardware Issue" | "Connection Issue" | "Other";
  priority: number;
  progress: number;
  status: "In Progress" | "On Hold" | "Done";
}

// Create schema for ticket data
const ticketSchema = new Schema<ITicket>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    category: {
      type: String,
      enum: ["Software Issue", "Hardware Issue", "Connection Issue", "Other"],
      required: [true, "category field is required"],
    },
    priority: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, "priority field is required"],
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      required: [true, "progress field is required"],
    },
    status: {
      type: String,
      enum: ["In Progress", "On Hold", "Done"],
      required: [true, "status field is required"],
    },
  },
  {
    timestamps: true,
    // Remove __v field sent to client
    versionKey: false,
    // Remove _id field from response sent to client
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Create or get existing Ticket model to manage ticket data
const Ticket = mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
