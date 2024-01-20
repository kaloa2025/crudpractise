const redux = require('redux')
const createStore = redux.legacy_createStore

console.log('From index.js');

const BUY_CAKE="BUY_CAKE";

//action creator
function buyCake()
{
    //action
    return{
        type:BUY_CAKE,
        info:'First Redux action'
    }
}

const initialCakeState = {
    numofCakes :10
}
// create reducer
const reducer = (state = initialCakeState,action )=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes: state.numofCakes-1
        }
        default: return state
    }
}
//subscribe store and dispatch action
const store=createStore(reducer);
console.log('Initial State',store.getState());
store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());