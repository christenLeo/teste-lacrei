import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.js";
import data from '../../data/data.json';
import { PanelStyled } from "./style.js";

const Panel = () => {
    const [showTime, setshowTime] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setshowTime(true);
        }, 3000);    
    }, []);

    // Making one single Array with all the infos in data
    const infoArr = data.steps.map((item) => {
        return {...item, duration: data.durations[`${item.key}`]};
    });

    // Now creating the cards with their respective infos
    const mountCards = infoArr.map((item) => {
        return (
            <Cards duration={item.duration} color={item.value} key={item.key}/>
        );
    });

    // Showing to the user the duration time info
    const mountDurationInfo = infoArr.map((item) => {
        return (
            <>
                <h2>{item.key}:</h2>
                <p>{item.duration} miliseconds</p>
            </>
        )
    })

    return (
        <PanelStyled>
            <header>
                <h1>Cards and Timer</h1>
            </header>
            <main>
                {mountCards}
            {showTime ? mountDurationInfo : ""}
            </main>
        </PanelStyled>
    );
}

export default Panel;