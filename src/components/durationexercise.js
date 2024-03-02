/* Rutherford Labbe: 03-01-2024 */

import StopWatch from "./stopwatch";

function DurationExercise({exercise, setMenuScreen}){
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  }

export default DurationExercise;