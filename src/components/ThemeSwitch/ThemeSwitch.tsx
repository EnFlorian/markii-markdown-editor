import { useEffect } from "react";
import { useUIContext } from "../../state/UIContext";
import "./ThemeSwitch.scss";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useUIContext();

  useEffect(() => {
    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme") || "light");
  }, []);

  const toggleThemeChange = () => {
    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
      setIsDarkMode(true);
    }
  };

  return (
    <button className="theme-switch" onClick={toggleThemeChange}>
      {isDarkMode === false ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitch;
