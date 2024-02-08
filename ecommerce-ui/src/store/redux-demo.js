const redux = require('redux');

const counterReducer = (state = {counter: 0},action) => {
    //inputs old state +  action dispatched output: new state pure fuction no side effects
    if(action.type === 'increment')
    return {

        counter: state.counter + 1
    }
    return state;
}

const store = redux.createStore(counterReducer)  //manage data determined by reducer function as it will spit out new state whenever an action reaches it

const counterSubs = () => {
    //getstate will get latest new snapshot of state 
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubs);

store.dispatch({type: 'increment'});