import React, { FC, Suspense } from 'react'
import TicketsGrid from './tickets-grid'
import Loading from './loading'


const Page: FC = () => {


  return (
    <div >
      <div className='mb-6'>
        <h1 className='text-2xl font-bold text-gray-100 mb-2'>Tickets</h1>
        <p className='text-sm text-gray-400'>
          Manage your tickets and show them categorized by status, priority, and more.
        </p>
      </div>

      <Suspense fallback={<Loading />}>
        <TicketsGrid />
      </Suspense>

    </div>
  )
}

export default Page