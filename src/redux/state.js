let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', like: 5},
            {id: 2, message: 'It`s my first post', like: 10},
            {id: 3, message: 'What it`s happen', like: 15}
        ]
    },
      
    dialogsPage: {
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
    },

    sideBar:{
        friends: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Alina'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state