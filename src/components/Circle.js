import React from 'react';

const circleStyle = {
    backgroundColor: '#FF0000',
    width : '100px',
    height : '100px',
    borderRadius : '50px',
    position : 'absolute',
}



const Circle = ({top, left}) => {
    return ( 
        <div style={{...circleStyle, top: top, left: left}}>

        </div>
     );
}
 
export default Circle;