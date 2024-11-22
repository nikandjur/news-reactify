import { useTheme } from "@/app/providers/ThemeProvider";
import { MainPage } from "@/pages/main/ui/MainPage";
import { Header } from "@/widgets/header";

function BaseLayout() {
  const { isDark } = useTheme();
  console.log("Путь до компонента Main:", "@/pages/main");

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
