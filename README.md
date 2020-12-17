# Simple Counter with Redux

- Create simple counter with two buttons (increment and decrement)
- Action types -> reducer -> pass reducer to createStore()
- Button will listen to click event and then execute store.dispatch()
  - Inside store.dispatch() , we pass in the actionCreators method for what we want to (actionCreators.increment(), actionCreators.decrement());
- Create updateView to get the updated dtate and then Update our DOM
