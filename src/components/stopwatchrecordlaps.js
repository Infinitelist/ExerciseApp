/* Rutherford Labbe: 03-01-2024 */

import React, { useState, useEffect, useRef } from 'react';

/*---------------------------- Code from Chat GPT -------------------------------*/

function StopWatchRecordLaps() {
    const [startTime, setStartTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Initialize start time when component mounts
        setStartTime(Date.now());
    }, []);

    const start = () => {
        if (!running) {
            setRunning(true);
            setStartTime(Date.now() - elapsed);
            intervalRef.current = setInterval(() => {
                setElapsed(Date.now() - startTime);
            }, 10);
        }
    };

    const pause = () => {
        if (running) {
            setRunning(false);
            clearInterval(intervalRef.current);
        }
    };

    const reset = () => {
        setElapsed(0);
        clearInterval(intervalRef.current);
        setRunning(false);
        setStartTime(Date.now());
        setLaps([]);
    };

    const recordLap = () => {
        setLaps([...laps, elapsed]);
    };

    const printTime = (time) => {
        const milliseconds = Math.floor(time % 1000);
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <div>
            <div>{printTime(elapsed)}</div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
            <button onClick={recordLap}>Record Lap</button>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>{`Lap ${index + 1}: ${printTime(lap)}`}</li>
                ))}
            </ul>
        </div>
    );
}

/*---------------------------- Code from Chat GPT -------------------------------*/

export default StopWatchRecordLaps;
