import React, { useEffect, useState} from 'react'
import RepositoryInfo from '../../components/RepositoryInfo';
import CommitCard from '../../components/CommitCard';
import { getCommits } from '../../api/commits';
import { CommitCardInterface } from '../../types/components';
export const Commits = () => {
    const [commits, setCommits] = useState<CommitCardInterface[]>([]);
    
    useEffect(() => {
        callCommits()
    })

    const callCommits = async () => {
        const response = await getCommits();
       
        console.log(response.data.data.map((commit: any) => ({
            url: commit.url,
            message: commit.commit.message,
            commiter: {
                name: commit.commit.committer.name,
                email: commit.commit.committer.email,
                date: commit.commit.committer.date
            }
        }) ))
        setCommits(response.data.data.map((commit: any) => ({
            url: commit.url,
            message: commit.commit.message,
            commiter: {
                name: commit.commit.committer.name,
                email: commit.commit.committer.email,
                date: commit.commit.committer.date
            }
        }) ))
    }

    return (
    <div className='flex flex-col md:flex-row md: flex-wrap' >
        <RepositoryInfo />
        <div className='flex flex-col md:w-[60%] bg-gray-700 h-[90vh] overflow-auto gap-3 '>
            {
                commits.map((commit) => (
                    <CommitCard  url={commit.url} message={commit.message} commiter={commit.commiter}/>
                ))
                
            }
        </div>
    </div>
    )
}

export default Commits;