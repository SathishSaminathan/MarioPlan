const initState={
    projects:[
       {id:'1', title:'help me to find', content:'blah blah blah'}, 
       {id:'2', title:'collect the all stars', content:'blah blah blah'},
       {id:'3', title:'hunt egg with yoshi', content:'blah blah blah'},
    ]
}

const projectReducer=(state = initState, action)=>{
    switch (action.type){
        case "CREATE_PROJECT":
        console.log("Created Project...", action.project)
    }
    return state;
}

export default projectReducer; 