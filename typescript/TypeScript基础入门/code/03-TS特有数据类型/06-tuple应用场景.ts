function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
    return currentState
  }
  const tuple: [any, (newState: any) => any] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10)
const newCounter = setCounter(1000)
console.log(counter)
console.log("newCounter: ", newCounter)

const [title, setTitle] = useState("hello tuple")
console.log(title)
console.log(setTitle("hello typescript"))

export { }