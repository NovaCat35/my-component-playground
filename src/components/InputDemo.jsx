import { useState, useRef, useEffect } from "react";

function InputDemo() {
	const [text, setText] = useState("");
	const customInputRef = useRef(null);

	useEffect(() => {
		const customInput = customInputRef.current;

		const handleCustomInputChange = (e) => {
			const newValue = e.detail.value;
			setText(newValue);
		};

		if (customInput) {
			customInput.addEventListener("value-change", handleCustomInputChange);
		}

		return () => {
			if (customInput) {
				customInput.removeEventListener("value-change", handleCustomInputChange);
			}
		};
	}, [customInputRef]);

	return (
		<>
			<h3>
				I am not a custom element... <br />
				but I know what you said to the custom input: {text}
			</h3>
			<h3>{text}</h3>
			<custom-input ref={customInputRef}></custom-input>
		</>
	);
}

export default InputDemo;
