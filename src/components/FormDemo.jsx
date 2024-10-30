import { useState, useRef, useEffect } from "react";

/**
 * You can use custom elements to manipulate other custom elements
 */
function FormDemo() {
	const [active, setActive] = useState(false);
	const [submitCount, setSubmitCount] = useState(0);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const customButtonRef = useRef(null);
	const customFormRef = useRef(null);

	useEffect(() => {
		const customButton = customButtonRef.current;
		const handleButtonClick = () => setActive((prevActive) => !prevActive);

		if (customButton) {
			customButton.addEventListener("click", handleButtonClick);
		}

		return () => {
			if (customButton) {
				customButton.removeEventListener("click", handleButtonClick);
			}
		};
	}, []); 

	useEffect(() => {
		const customForm = customFormRef.current;
		const handleFormSubmit = () => {
			setFormSubmitted(true);
			setSubmitCount((count) => count + 1);
		};

		if (customForm) {
			customForm.addEventListener("click", handleFormSubmit);
		}

		return () => {
			if (customForm) {
				customForm.removeEventListener("click", handleFormSubmit);
			}
		};
	}, [submitCount]); 

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<custom-button ref={customButtonRef} type="error" text="Go ahead, press me"></custom-button>
         {formSubmitted && <h3 style={{ color: "green" }}>You have clicked on this form body {submitCount} times. <br></br> Thank you.</h3>}
         {active && <custom-form ref={customFormRef}></custom-form>}
		</div>
	);
}

export default FormDemo;
