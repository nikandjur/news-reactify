import { useTheme } from "@/app/providers/ThemeProvider";
import { MainPage } from "@/pages/main/ui/MainPage";
import { Header } from "@/widgets/header";

function BaseLayout() {
  const { isDark } = useTheme();

  console.log("Импортируемый путь:", "@/pages/main/ui/MainPage");

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
