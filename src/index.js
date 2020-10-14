import store from './store'
import { bugAdded, bugRemoved, bugResolved} from './actions'

/*
  This subscribe() method return a function for unsubscribing from the store
*/
const unsubscribe = store.subscribe(()=>{
  console.log('Store changes:', store.getState())
})

store.dispatch(bugAdded('Bug 1'))

store.dispatch(bugResolved(1))

// unsubscribe()

// store.dispatch(bugRemoved(1))

console.log(store.getState())
