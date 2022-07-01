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
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme") as string);
      setIsDarkMode(!isDarkMode);
    } else {
      localStorage.setItem("theme", "light");
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme") as string);
      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <button className="theme-switch" onClick={toggleThemeChange}>
      {isDarkMode === false ? <FaMoon /> : <BsSunFill />}
      <p className="theme-switch__mode"></p>
      {isDarkMode === false ? "Dark Mode" : " Light Mode"}
    </button>
  );
};

export default ThemeSwitch;
