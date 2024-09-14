import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Qrcodegenerater from "./components/Qr-code-generater";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Qrcodegenerater />
    </>
  );
}

export default App;
