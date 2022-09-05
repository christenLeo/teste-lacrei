import React from "react";
import { ResultStyled } from "./style";

const Results = ({box, duration}) => {
    return (
        <ResultStyled aria-details="Boxes timers to change background">
            <h3>{box}:</h3>
            <p>{duration} Miliseconds</p>
        </ResultStyled>
    )
};
export default Results;