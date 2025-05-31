import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
	
	let task1 = [
		{id: 1, title: 'CSS', isDone: true},
		{id: 1, title: 'CSS', isDone: true},
		{id: 1, title: 'CSS', isDone: true},
	]
	return (
		<div className="App">
			<Todolist title={"What to learn"}/>
			<Todolist title={"Movies"}/>
		</div>
	);
}

export default App;
