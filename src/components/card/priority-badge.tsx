import { Flame } from 'lucide-react';
import React, { FC } from 'react'

interface Props {
    priority: number;
}

const PriorityBadge: FC<Props> = ({ priority }) => {
    const arr = new Array(5).fill('');
    return (
        <div className='flex items-center gap-1'>

            {arr.map((i, key) => (
                <Flame key={key} className={`${priority > key ? "text-red-500" : "text-gray-500"} text-sm size-5`} />
            ))}
        </div>
    )
}

export default PriorityBadge