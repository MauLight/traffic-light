import React, { useState } from "react";

const Light = () => {

	const [selectColor, setSelectColor] = useState("red");

	return (

		<div className="full-body">
			<div className="handler"></div>
			<div className="head">
				<div
				onClick={() => setSelectColor("green")} 
				className={"t-light green" + (selectColor === "green" ? " glow" : "")}></div>
				<div 
				onClick={() => setSelectColor("yellow")}
				className={"t-light yellow" + (selectColor === "yellow" ? " glow" : "")}></div>
				<div 
				onClick={() => setSelectColor("red")}
				className={"t-light red" + (selectColor === "red" ? " glow" : "")} ></div>
			</div>
		</div>
	);
};

export default Light