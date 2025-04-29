import React from "react";
import { Fetch } from "./Fech";

const Home = () => {
	return (
		<div className=" mt-5 mb-5 container">
			<h1> Tareas </h1>
			<Fetch />
		</div>
	);
};

export default Home;