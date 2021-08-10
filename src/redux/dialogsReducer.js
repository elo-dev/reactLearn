const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alina'}
    ],

    messages : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'HI'},
        {id: 3, message: 'What'}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE: 
            let newMessage = {
                id: 4,
                message: action.messageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default: 
            return state
    }
}

export const addMessageActionCreator = (messageBody) => {
    return {
        type: ADD_MESSAGE,
        messageBody
    }
}

export default dialogsReducer
