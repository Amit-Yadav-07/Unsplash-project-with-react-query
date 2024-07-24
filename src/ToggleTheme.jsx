import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const ToggleTheme = () => {
    const { isDarkTheme, ToggleDarkTheme } = useGlobalContext();
    return (
        <div className="theme-container">
        <button type="button" className="toggle-btn" onClick={ToggleDarkTheme}>
            {isDarkTheme ? <IoSunny /> : <FaMoon />}
        </button>
        </div>
    )
}

export default ToggleTheme;