import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Join from "./Components/Join/join";
import Chat from "./Components/Chat/chat";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Store/reducer";

const store = createStore(reducer);

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={Join} />
			<Route exact path="/chat" component={Chat} />
		</BrowserRouter>
	</Provider>
);

export default App;
