import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./Components/join";
import Chat from "./Components/chat";

const App = () => (
	<BrowserRouter>
		<Route exact path="/" component={Join} />
		<Route exact path="/chat" component={Chat} />
	</BrowserRouter>
);

export default App;
