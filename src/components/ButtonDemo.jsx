import { useState, useRef, useEffect } from "react";

/**
 * You can use custom elements to manipulate default html
 */
function ButtonPlayground() {
	const [activeHeading, setActiveHeading] = useState("h1");
	const customButtonRef = useRef(null);

	useEffect(() => {
		const customButton = customButtonRef.current;
		if (customButton) {
			customButton.addEventListener("click", () => {
				setActiveHeading(activeHeading === "h1" ? "h2" : "h1");
			});
		}
	}, [activeHeading, customButtonRef]);

	return (
		<>
			<h2 className={activeHeading === "h1" ? "active" : "hidden"}>⭐️ I am active by default</h2>
			<h2 className={activeHeading === "h2" ? "active" : "hidden"} style={{ color: "#f0c033" }}>
				⚠️ I am usually hidden until you press the custom button
			</h2>
			<custom-button ref={customButtonRef} type="success" text="Go ahead, press me"></custom-button>
		</>
	);
}

export default ButtonPlayground;
