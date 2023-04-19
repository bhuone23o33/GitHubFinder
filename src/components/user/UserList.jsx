import React from 'react'  
import Spinner from '../layout/Spinner';
import { useContext } from 'react';
import Finder from '../../context/GithubContext/ContextData';
import UserItem from './UserItem';

function UserList() {
 
  

  const { isLoading,users } = useContext(Finder);
  
    
    if(isLoading){
      return (
        <div>
          <Spinner/>
        </div>
      )
    }else{
        return (
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" > 
            {users.map((user)=>(
                <UserItem key={user.id} users = {user}/>
            ))}
            
          </div>
        )
    }

}

export default UserList

