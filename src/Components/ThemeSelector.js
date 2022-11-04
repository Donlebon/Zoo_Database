import { useTheme } from "../hooks/useTheme"

const themeColors = ["green", "blue", "orange"]

export default function ThemeSelector(){

    const {changeColor} = useTheme()

    return (
        <div className = "themeSelector">
            <div className = "theme-buttons">
                {themeColors.map(color => (
                    <div 
                    key = {color}
                    onClick ={() => changeColor(color)}
                    style = {{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}