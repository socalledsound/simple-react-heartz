import React from 'react';
import Heart from './components/Heart';

const data = Array.from({ length: 50}, () => ({ top: Math.random() * window.innerWidth, left: Math.random() * window.innerHeight}));

const App = () => {
    return ( 
        <div>
            {
                data.map(item => {
                    return (
                        <Heart top={item.top} left={item.left} />
                    )
                })
            }
        </div>
     );
}
 
export default App;