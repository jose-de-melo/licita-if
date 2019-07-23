import { combineReducers } from 'redux'
import documentsReducer from '../links/documents/documentsReducer'
import chatReducer from '../chat/chatReducer';


const rootReducer = combineReducers({
    docs: documentsReducer,
    chat: chatReducer
})

export default rootReducer