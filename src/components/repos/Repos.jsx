import React from 'react'
import ReposItems from './ReposItems';

function Repos({repos}) {
    console.log(repos);
  return (
    <div className = "rounded-lg shadow-lg card bg-base-100" >
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repos
            </h2>
            {repos.map((repo)=>(
                <ReposItems key={repo.id} repo = {repo} />
            )
            )}
        </div>
    </div>
  )
}

export default Repos
