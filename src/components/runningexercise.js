/* Rutherford Labbe: 03-01-2024 */

import StopWatchRecordLaps from "./stopwatchrecordlaps";

function RunningExercise({exercise, setMenuScreen}){
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatchRecordLaps/>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  }

export default RunningExercise;