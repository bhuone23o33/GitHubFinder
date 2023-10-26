import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react';
import GitUser from './ReducerData';

const Finder = createContext();
// initializing keys or url
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


export const FinderProvider = ({ children }) => {

  // const [isLoading,setisLoading] = useState(true);
  // const [user,setuser] = useState([]);

  // intializing reducer for initial state just like state
  const oldUser = {
    users: [],
    user: {},
    userRepos: [],
    isLoading: false
  }

  // using Reducers state->to use data and dispatch->to update data just like we use states ok!!
  const [state, dispatch] = useReducer(GitUser, oldUser);

  // fetching data from github(only for testing)
  const fetchData = async () => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    const data = await res.json();



    // setuser(data);
    // setisLoading(false);
    // instead of this 
    dispatch({
      // sending type so it identify it
      type: 'GIT_USER',
      data: data
    }
    );
  }


  // get singleuser from github
  const getUser = async (user) => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users/${user}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const data = await res.json();
    console.log(data);
    // check if user not found
    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      dispatch({
        type: 'SET_USER',
        payload: data
      })
    }
  }

  // getting only 10 repos using param
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  // getting repos of the user
  const getRepos = async (user) => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users/${user}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const data = await res.json();
    // check if user not found
    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      dispatch({
        type: 'SET_REPOS',
        payload: data
      })
    }
  }


  // setLoading
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }


  return (
    <Finder.Provider value={{
      ...state,
      dispatch,
      getUser,
      getRepos
    }}>
      {children}
    </Finder.Provider>
  )
}

export default Finder
