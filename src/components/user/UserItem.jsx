import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({users:{login,avatar_url}}) {
  return (
    <div className = "card shadow-md compact side bg-base-100">
        <div className="flex flex-row  space-x-4 items-center card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="a v a t a r" />
                    </div>
                </div>
            </div>
            <div className = "space-y-1">
                <h2 className="card-title">{login}</h2>
                <Link to={`/user/${login}`} className="text-base-content text-opacity-40">Visit Profile</Link>
                {/* <a href={`${html_url}`} target='_blank' className="text-base-content text-opacity-40">Visit Profile</a> */}
            </div>
        </div>
    </div>
  )
}

export default UserItem
