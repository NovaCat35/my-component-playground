import "./App.css";
import "@novacat35/lit-web-components/dist/my-components.es.js";
import ButtonDemo from "./components/ButtonDemo";
import FormDemo from "./components/FormDemo";
import InputDemo from "./components/InputDemo";
import LineBreak from "./components/LineBreak";
function App() {
	return (
		<>
			<ButtonDemo />

			<LineBreak /> 
			<FormDemo />

			<LineBreak />
			<div style={{ margin: "20px 0" }}>
				<custom-button onClick={() => alert("You can attach a 'click event-listener' to this custom button. ")} type="alert" text="Go ahead, press me"></custom-button>
			</div>

			<LineBreak /> 
			<InputDemo />
		</>
	);
}

export default App;
