export const state = () => ({
    todos: [
        // {
        //     content: " travel to australia melbourne my favorite city in the world",
        //     completed : false,
        // }
    ]
})

export const mutations = {
    ADD_TODO(state, todo) {
        state.todos = [{ content: todo, completed: false }, ...state.todos]
        // state.todos.push({ content: todo, completed: false}) another option to add an object to an array
        // state.todos.unshift({ content: todo, completed: false}) another option to add an object to an array
    },

    REMOVE_TODO(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);


    },

    TOGGLE_TODO(state, todo) {
        todo.completed = !todo.completed
    }


}

// export default store
