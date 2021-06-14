const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {

    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default: 
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer
