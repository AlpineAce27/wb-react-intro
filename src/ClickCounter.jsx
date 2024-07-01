import { useState } from 'react'

const ClickCounter = () => {
const [count, setCount] = useState(0)
const increaseCount = () => {
  setCount(count + 1)
}
const decreaseCount = () => {
  setCount(count - 1)
}
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={decreaseCount}>Decrease count</button>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    )
}

export default ClickCounter