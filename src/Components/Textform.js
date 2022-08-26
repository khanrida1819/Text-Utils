import React,{useState} from 'react'

export default function Textform({ heading, mode, showAlert }) {
  const handleOnChange = (e) => {
    // console.log("On Change");
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert(" Converted into upppercase!", "success");
  };
  const handleToClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert(" Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    showAlert(" Text cleared!", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert(" Extra spaces remove!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert(" Copied to clipboard!", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: mode === "dark" ? "white" : "#042743" }}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleToClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
