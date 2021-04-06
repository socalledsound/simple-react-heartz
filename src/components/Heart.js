import React from 'react';
import Circle from './Circle';
import Square from './Square';

const Heart = ({top, left}) => {
    return ( 
        <div>
            <Circle top={`${top}px`} left={`${left}px`} />
            <Circle top={`${top}px`} left={`${left + 70}px`}/>
            <Square top={`${top + 35}px`} left={`${left + 35}px`}/>
        </div>
     );
}
 
export default Heart;