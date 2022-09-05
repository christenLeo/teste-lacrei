import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Cards = ({color, duration}) => {

    const [background, setBackground] = useState('transparent');

    useEffect(() => {
        setTimeout(() => {
            setBackground(color);
        }, duration);
    }, [color, duration]);

    return (
        <Box sx={{
            border: `4px solid ${color}`,
            margin: '1rem',
            borderRadius: '10px',
            width: '30rem',
            height: '5rem',
            background: background,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {background === 'transparent' ? <CircularProgress sx={{
                color:`${color}`,
                opacity: '0.5'
            }}/> : ""}
        </Box>
    );
}

export default Cards;