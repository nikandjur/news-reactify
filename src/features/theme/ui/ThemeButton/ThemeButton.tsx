import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets";

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};
