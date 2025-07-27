"use client";

import { deleteTicket } from "@/utils/service";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleDelete = () => {
    // get clients approval
    if (!confirm("Are you sure you want to delete this ticket?")) return;

    // send a request to delete the ticket
    deleteTicket(id)
      // refresh the page
      .then(() => router.refresh());
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition">
      <Trash className="size-4" />
    </button>
  );
};

export default DeleteButton;