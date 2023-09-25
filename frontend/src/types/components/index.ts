import React from 'react'
import RepositoryInfo from '../../components/RepositoryInfo';

export type Children = {
    children: React.ReactNode;
}

export  type RepositoryInfoType = {
    url: string,
    name: string,
    language: string,
    updated_at: string
}

export interface CommitCardInterface {
    commiter: UserCommit,
    message: string,
    url: string,

}

type UserCommit = {
    name: string,
    email: string,
    date: string,
}