import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import Finder from '../../context/GithubContext/ContextData';
import AlertContext from '../../context/AlertContext/AlertContext';
import { SearchUsers } from '../../context/GithubContext/GithubActions';



function UserSearch() {
    // input state 
    const [Input,setInput] = useState("");


    
    // contexts
    const {users,dispatch} = useContext(Finder);

    // alert context
    const {setAlert} = useContext(AlertContext);

    // handling input
    const handleInput = (e)=>{
        setInput(e.target.value);
    }

    // handling clear
    const handleClear = ()=>{
        dispatch({type:'SET_CLEAR'});
    }
    
    // form
    const handleForm = async(e)=>{
        e.preventDefault();
        if(Input === ""){
            setAlert("Please fill the right info","error");
        }else{
            dispatch({type:'SET_LOADING'});
            const data = await SearchUsers(Input);
            dispatch({type:'SEARCH_USER',payload:data});
            setInput('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleForm} >
            <div className="form-control">
                <div className="relative">
                    <input type="text" value = {Input} onChange={handleInput} placeholder='Search Github' className="w-full pr-40 bg-gray-200 input-lg input text-black" />
                    <button type='submit'  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                </div>
            </div>
        </form>
      </div>
      {users.length>0 && <div>
        <button onClick={handleClear}  className="btn btn-ghost btn-lg">Clear</button>
      </div>}
      
    </div>
  )
}

export default UserSearch
