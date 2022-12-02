import React, { useEffect, useState } from "react";

const BIRTH_DAY = "12/2/2022";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const checktheDate = (date) => {
    const dateToString = date.toLocaleDateString();
    if (dateToString === BIRTH_DAY) {
        return <h1>Today is your birthday!!!!</h1>;
    } else {
        return dateToString;
    }
};

const App = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), DAY);
        return () => {
            console.log(`date was ${date.toLocaleDateString()}`);
            clearInterval(intervalID)};
    });

    return <div>{checktheDate(date)}</div>;
};

export default App;
