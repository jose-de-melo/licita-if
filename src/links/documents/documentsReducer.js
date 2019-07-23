const INICIAL_STATE = {
    list: []
}

export default (state = INICIAL_STATE, action) =>{
    switch(action.type){
        case 'DOCS_FETCHED':
            return {...state, list: (action.payload.data) ? action.payload.data.files : []}
        default:
            return state
    }
}