import React from 'react'
import { useState } from 'react'
import'./Count.css'

export default function Count() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <div className="count">

                <p>hello world</p>
                <h2>{count}</h2>
                <button onClick={increment}>
                    <i >Inc</i>
                </button>
                <button onClick={decrement}><i >Dec</i>
                </button>

                <button onClick={() => setCount(0)}> Reset </button>

            </div>
        </div>
    )
}
