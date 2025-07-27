import Form from '@/components/form';
import { Ticket } from '@/types';
import { getTicket } from '@/utils/service';
import React, { FC } from 'react'

interface Props {
  params: Promise<{
    mode: string;
  }>
}

const Page: FC<Props> = async ({ params }) => {
  // reach the params in URL
  const { mode } = await params;

  // ! in which mode the form will work according to the param
  const isEditMode = mode !== 'add' ? true : false;

  // the item that will be edited or updated
  let editItem: Ticket | null = null;

  //  if the mode is edit, get the ticket to be edited
  if (isEditMode) {
    editItem = (await getTicket(mode)).ticket;
    console.log(editItem);
  }


  return <div>
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-bold text-zinc-500'>{isEditMode ? 'Edit Ticket' : 'Create Ticket'} Ticket</h1>
      <Form isEditMode={isEditMode} editItem={editItem}  />
    </div>
  </div>;
}

export default Page;