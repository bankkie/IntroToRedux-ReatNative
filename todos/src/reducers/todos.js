const initial = [
    { id: 1, text: 'foo'},
    { id: 2, text: 'bar'}  
];

const todos = (state = initial, action) => {
    switch(action.type){
        case 'ADD_TODO' :
        // let todos = state.todos
        // todos.push({id:action.id, text: action.text})
        console.log(action.id)
        return [...state, {
            id:action.id,
            text:action.text
        }]
    }
    return state
}
export default todos