const init = {
    list: []
}

const TodoReducer = (state = init, action)=>{
    switch(action.type){
        case "ADD": 

            const {id, data} = action.payload
            return {
                ...state,
                data:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                }]
            }
        default: return state 
    }
}