import React, { useState } from "react";
import QRCode from "react-qr-code";

function Qrcodegenerater() {
  const [qrCode, setqrCode] = useState("");
  const [input, setinput] = useState("");

  function handleGenerateQRCode() {
    setqrCode(input);
    setinput("");
  }
  return (
    <div>
      <h1>QRCode Generator</h1>
      <div>
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
      <div>
      <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Qrcodegenerater;
