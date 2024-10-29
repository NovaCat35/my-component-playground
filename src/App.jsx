import "./App.css";
import "@novacat35/lit-web-components/dist/my-components.es.js";

function App() {
	return (
		<>
			<h1>HELLO!</h1>
			<button>My button</button>
			<custom-form></custom-form>
			<custom-button type="alert" text='⚠️ Danger ahead'></custom-button>
		</>
	);
}

export default App;
