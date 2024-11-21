import { Header } from "./components/Header";
import { useTheme } from "./context/ThemeContext";
import { Main } from "./pages/Main";

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
