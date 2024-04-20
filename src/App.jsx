import { useState } from "react";
import ResponsiveAppBar from "./assets/component/nav/ResponsiveAppBar";
import Quiz from "./assets/component/quiz/quiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResponsiveAppBar />
      <Quiz />
    </>
  );
}

export default App;
