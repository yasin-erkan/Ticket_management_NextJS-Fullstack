

import { Ticket } from "@/types";
import { FC } from "react";
import FieldSet from "./fieldset";
import { PRIORITY_LABELS, TICKET_CATEGORIES, TICKET_PRIORITIES, TICKET_STATUSES } from "@/utils/constants";
import SubmitButton from "./submit-btn";
import { createTicketAction, updateTicketAction } from "@/utils/actions";

interface Props {
  isEditMode: boolean;
  editItem: Ticket | null;
}

const Form: FC<Props> = ({ isEditMode, editItem }) => {
  return (
    <div className="max-w-[600px]">
      <form action={isEditMode ? updateTicketAction : createTicketAction} className="flex flex-col gap-5">
        {/* secret id for update action for reaching ID */}
        {isEditMode && <input readOnly hidden type="text" name="id" value={editItem?.id} />}

            {/* ! fieldset is used as HOC for the form */}
        <FieldSet label="Title"> 

          <input name="title" type="text" required maxLength={100} defaultValue={editItem?.title} className="input" />
        </FieldSet>

        <FieldSet label="Description">
          <textarea
            name="description"
            required
            rows={4}
            maxLength={500}
            defaultValue={editItem?.description}
            className="input resize-y min-h-20 max-h-96"
          />
        </FieldSet>

        <FieldSet label="Category">
          <select name="category" className="input" required defaultValue={editItem?.category}>
            <option value="">Select Category</option>

            {TICKET_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </FieldSet>

        <FieldSet label="Priority">
          <div className="flex flex-wrap gap-3">
            {TICKET_PRIORITIES.map((priority) => (
              <div key={priority} className="flex items-center gap-2">
                <input
                  id={`${priority}`}
                  type="radio"
                  name="priority"
                  value={priority}
                  required
                  defaultChecked={editItem?.priority === priority}
                  className="size-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 "
                />

                <label htmlFor={`${priority}`} className="text-sm font-medium cursor-pointer hover:text-blue-400">
                  {priority} - {PRIORITY_LABELS[priority]}
                </label>
              </div>
            ))}
          </div>
        </FieldSet>

        <FieldSet label={`Progress`}>
          <input type="range" name="progress" min={0} max={100} step={5} defaultValue={editItem?.progress || 0} />
        </FieldSet>

        <FieldSet label="Status">
          <select name="status" className="input" required defaultValue={editItem?.status}>
            {TICKET_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </FieldSet>

        <SubmitButton mode={isEditMode} />
      </form>
    </div>
  );
};

export default Form;