import React from 'react'
import RepoItem from './RepoItem';
const Repos = ({repos}) => {
  return repos.map(repo => {
        return <RepoItem repo={repo} key={repo.id}></RepoItem>
    })
}

export default Repos;