import React from 'react'

export const Skeleton = ({number = 5, height = ''}) => {
    return (
        <div role="status" className={`overflow-y-hidden max-w-sm animate-pulse ${height? height : ''}`}>
    {
       [...Array(number).keys()].map(() => (
           <div className="h-2 rounded-full bg-gray-700 max-w-[360px] mb-2.5"></div>
       ))
    }
    <span className="sr-only">Loading...</span>
    </div>
    )
}

export default Skeleton;