# Day 1 – Why Redux?

## Objective
Understand why Redux is useful and learn its basic building blocks.

## Problems Redux Solves
- Prop drilling (passing props through many components)
- Non-centralized state
- Difficult debugging in large apps

## Core Concepts
- **Store**: Holds application state.
- **Action**: Describes an event.
- **Reducer**: Pure function that updates state based on actions.

## Example Action
```js
{
  type: 'INCREMENT'
}
```

## Example Reducer
```js
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

## Useful Links
- [Redux Docs](https://redux.js.org/introduction/getting-started)
- [Redux Tutorial by Dave Gray](https://www.youtube.com/watch?v=9boMnm5X9ak)
