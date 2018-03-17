export const inc = (by = 1) => {
    return {
        type: 'INCREMENT',
        by
    }
}

export const incWithDelay = (by) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(inc(by))
        }, 1000)
    }
}

export const reset = (by = 1) => {
    return {
        type: 'RESET',
        by
    }
}

export const accumulate = () => {
    return { type: 'ACCUMULATE'}
    
}

export const accPush = () => {
    return {
        type: 'ACC_PUSH'
    }
}