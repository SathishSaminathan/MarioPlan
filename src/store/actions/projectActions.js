export const createProject =(project)=>{
    return(dispatch, getstate)=>{
        // make async call to database
        dispatch({
            type:"CREATE_PROJECT",
            project
        })
    }
}