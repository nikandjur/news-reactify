import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header isDark={isDark} setIsDark={() => setIsDark((prev) => !prev)} />
      <div className="container">
        <Main isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
