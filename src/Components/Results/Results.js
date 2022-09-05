import React from "react";
import { SectionStyled } from "./style";

const Results = ({box, duration}) => {
    return (
        <SectionStyled aria-details="Boxes timers to change background">
            <h3>{box}:</h3>
            <p>{duration} Miliseconds</p>
        </SectionStyled>
    )
};
export default Results;