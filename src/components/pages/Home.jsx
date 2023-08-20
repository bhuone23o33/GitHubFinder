import React from 'react'
import UserList from '../user/UserList'
import UserSearch from '../user/UserSearch'


function Home() {
    

    // THIS IS USED TO USE KEY FROM ENV FILE IN VITE APP AND IN REACT YOU HAVE TO USE REACT PREFIX JUST LIKE VITE
    // import.meta.env.VITE_GITHUB_TOKEN
    
  return (
   <>
    <UserSearch/>
    <UserList/>
   </>
  )
}

export default Home
