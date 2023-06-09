import React, { useState } from 'react';


const BoxGenerator = () => {
    const [color, setColor] = useState("");
    const [boxColors, setBoxColors] = useState([]);


    const Submithandler = (e) => {
        e.preventDefault();
        setBoxColors([...boxColors, color]); 
        setColor("");
    };



    const ColorChangehandler = (e) => {
        setColor(e.target.value);
    };

    return (
        <>
            <form style={{ margin: "20px" }} onSubmit={Submithandler} >
                <div>
                    <label>Color</label>
                    <input type="text" onChange={ColorChangehandler} value={color}></input>
                    <button type="submit" >Add</button>
                </div>
            </form>
            <>
                <div style={{ display: "flex", width: "1000px" }} >
                    {boxColors.map((boxColors, index) => (
                        <div
                            key={index}
                            style={{ width: "150px", height: "200px", backgroundColor: boxColors, margin: "10px" }}
                        ></div>
                    ))}
                </div>
            </>


        </>
    );
};
// ================================================================================================================





export default BoxGenerator;
