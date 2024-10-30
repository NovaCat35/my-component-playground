# My Component Playground
A playground for testing out my Lit web component. Imagine a production using the NPM package to create components right out of the box. 

## Links 🔗
- My NPM package: https://www.npmjs.com/package/@novacat35/lit-web-components
- My web component repo: https://github.com/NovaCat35/lit-web-components
  
<img width="614" alt="Screenshot 2024-10-30 at 12 19 01 PM" src="https://github.com/user-attachments/assets/3929c9a4-dd9d-4bad-aa26-e6d0c931fa64">

## Tech Stack 🌐
- Vite + React
- Javascript 

## Installation ⚙️
1) Create a project (this example creates a React project)
```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm run dev
```

2) Install my package
> [!NOTE]
> If you experience issues with not getting the latest, type: `npm cache clean --force`    
`npm install @novacat35/lit-web-components@latest`

3) Import the node_module package link somewhere (Example below is from `src/App.jsx`)
```
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
```
