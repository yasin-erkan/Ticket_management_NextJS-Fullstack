import React, { FC } from 'react'

interface Props {
    progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => {
    return (
        <div className="w-full">
            <div className='flex justify-between text-xs text-gray-400 mb-1'>
                <span>progress</span>
                <span>{progress}%</span>
            </div>

            <div className='w-full h-2 bg-gray-700 rounded-full'>
                <div className='bg-gradient-to-r from-blue-500 to-green-500 h-2   rounded-full transition duration-300' style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}

export default ProgressBar