import React from 'react'
import { CommitCardInterface } from '../../types/components';

export const CommitCard = ({ commiter, message, url} : CommitCardInterface)  => {
    return (
    <div  className="block md:w-[85%] mx-auto my-2 flex flex-wrap p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className='mb-2 md:mb-0 md:w-[50%] flex flex-col'>
            <span>Commiter</span>
            <span>{commiter.name}</span>
            <span>{commiter.email}</span>
            <span>{new Date(commiter.date).toDateString()}</span>
        </div>
        <div className='md: w-[50%] flex flex-col'>
            <span>message: { message}</span>
            <a href={url} className='underline'>See more details</a>
        </div>
        
    </div>

    )
};

export default CommitCard;