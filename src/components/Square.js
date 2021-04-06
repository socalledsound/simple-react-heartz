import React from 'react';

const squareStyle = {
    backgroundColor: '#FF0000',
    width : '100px',
    height : '100px',
    position : 'absolute',
    transform: 'rotate(-45deg)',
}


const Square = ({top, left}) => {
    return ( 
        <div style={{...squareStyle, top: top, left: left}}>

        </div>
     );
}
 
export default Square;