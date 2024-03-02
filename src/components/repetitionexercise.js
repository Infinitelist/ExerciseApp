/* Rutherford Labbe: 03-01-2024 */

import { useState } from "react"

function RepetitionExercise(exercise){
    let [count, setCount] = useState(0)
    return <div>
        <p>{exercise.name}</p>
        <p style={{fontSize: "5em"}}>{count}</p>
        <button style={{fontSize: "1em"}} onClick={() => setCount(count=>count+1)}>Increment</button>
        <button style={{fontSize: "1em"}} onClick={() => setCount(0)}>Reset</button><br></br>
      </div>
}

export default RepetitionExercise;
