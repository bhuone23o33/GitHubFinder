const GitUser = (state,action)=>{
    // using switch cases checking for action.type and then update the data
    switch(action.type){

        // identifying type of action
        case('SET_LOADING'):
            // setting loading
            return {
                ...state,
                isLoading:true,
            }
        case ('SEARCH_USER'):
            return {
                ...state,
                users:action.payload,
                isLoading:false
            }
        case ('SET_USER'):
            return {
                ...state,
                user:action.payload,
                isLoading:false
            }
        case ('SET_CLEAR'):
            return {
                ...state,
                users:[],
            }
        
        case ('SET_REPOS'):
            return {
                ...state,
                userRepos:action.payload,
                isLoading:false
            }
        
        default:  
            return users;
    }
}


export default GitUser
