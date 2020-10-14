import store from './store'


/*
  This subscribe() method return a function for unsubscribing from the store
*/
const unsubscribe = store.subscribe(()=>{
  console.log('Store changes:', store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1'
  }
})

unsubscribe()

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1
  }
})

console.log(store.getState())
