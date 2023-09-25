import React, { useEffect, useState } from 'react'
import { getRepository } from '../../api/repository';
import { RepositoryInfoType } from '../../types/components';
import Skeleton from '../Skeleton';
export const RepositoryInfo = () => {
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfoType>({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
       if (!localStorage.getItem('repositoryInfo')) callRepositoryInfo();
       else setRepositoryInfo(JSON.parse(localStorage.getItem('repositoryInfo') || ''))
    }, []) 

    const callRepositoryInfo = async () => {
        setLoading(true)
        const response = await getRepository();
        console.log(response)
        localStorage.setItem('repositoryInfo', JSON.stringify( {
            url: response.data.url,
            name: response.data.data.name,
            language: response.data.data.language,
            updated_at: response.data.data.updated_at
        }))
        setRepositoryInfo( {
            url: response.data.url,
            name: response.data.data.name,
            language: response.data.data.language,
            updated_at: response.data.data.updated_at
        })
        setLoading(false)
    }

    return (<div className='flex flex-col md:w-[40%]  text-white bg-gray-800 h-[90vh]'>
        {
            loading?
            < div>
                <Skeleton number={40} height='md: h-[90vh]' />
            </div>
            :
            <>
                <h2 className='text-3xl font-bold mb-2 ms-3 mt-10'>{repositoryInfo?.name}</h2>
                <span className='text-xl my-3 ms-3'> Languages Used:  {repositoryInfo.language}</span>
                <a className='ms-3 underline' href={repositoryInfo.url}> go to repository</a>
                <span className='mt-auto mb-5 ms-3'> Last Updated: {new Date(repositoryInfo.updated_at).toDateString()}</span>
            
            </>
        }
    </div>)
} 

export default RepositoryInfo;