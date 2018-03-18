let nextTodoId = 3
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: 'false',
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOE_ACTIVE'
}

export const setVisibilityFilters = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter || VisibilityFilters.SHOW_ALL
})