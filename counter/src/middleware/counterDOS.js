let lest_timestamp = 0
let middleware = store => next => action => {
if(action.type == 'INCREMENT'){
    let current = new Date().getTime()
    if(current - lest_timestamp < 1500){
        return
    }
    lest_timestamp = current;
}
next(action);
}


export default middleware