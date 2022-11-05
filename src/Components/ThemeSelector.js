import { useTheme } from "../hooks/useTheme"

const themeColors = ["#E97777", "#9E7676", "#B9E0FF", "#DEF5E5", "#C47AFF"]

export default function ThemeSelector(){

    const {changeColor, changeMode, mode} = useTheme()

    return (
        <div className = "themeSelector">
            <div className = "theme-buttons">
                {themeColors.map(color => (
                    <div className = "color-button"
                    key = {color}
                    onClick ={() => changeColor(color)}
                    style = {{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}