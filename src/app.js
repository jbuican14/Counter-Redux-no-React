console.clear();

const incrementBtn = document.getElementById('button-increment');
const decrementBtn = document.getElementById('button-decrement');
const countDOMElement = document.getElementById('count');

const actionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
};

const actionCreators = {
  increment: function (increaseBy = 1) {
    return {
      type: actionTypes.increment,
      increaseBy: increaseBy,
    };
  },
  decrement: function () {
    return {
      type: actionTypes.decrement,
    };
  },
};

let initialState = {
  count: 20,
};

// Action Map -- mini reducer
const actionsMap = {
  [actionTypes.increment]: function (state, action) {
    return { count: state.count + 1 };
  },
  [actionTypes.decrement]: function (state, action) {
    return { count: state.count - 1 };
  },
};

let reducer = function (state = initialState, action) {
  // Good as can be tested its own separate unit
  var reducerFunction = actionsMap[action.type];
  if (reducerFunction) {
    return reducerFunction(state, action);
  }
  return state;
};

const store = Redux.createStore(reducer);
const updateViews = function () {
  const state = store.getState();
  console.log(store.getState());
  countDOMElement.innerHTML = `Total Click = ${state.count}`;
};

store.subscribe(updateViews);
updateViews();

incrementBtn.addEventListener('click', () => {
  store.dispatch(actionCreators.increment());
});
decrementBtn.addEventListener('click', () => {
  store.dispatch(actionCreators.decrement());
});
