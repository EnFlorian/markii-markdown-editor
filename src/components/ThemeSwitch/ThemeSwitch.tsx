import { useEffect } from "react";
import "./ThemeSwitch.scss";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setIsDarkMode } from "../../state/UISlice";
import { RootState } from "../../state/store";

const ThemeSwitch = () => {
  const isDarkMode = useSelector((state: RootState) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const toggleThemeChange = () => {
    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme") as string);
      dispatch(setIsDarkMode(!isDarkMode));
    } else {
      localStorage.setItem("theme", "light");
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme") as string);
      dispatch(setIsDarkMode(!isDarkMode));
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
