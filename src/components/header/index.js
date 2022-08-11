import "./style.css"
import kubefirstLogo from "../../assets/kubefirst.png"

const Header = () => {
    return (
        <div id="header">
            <div id="kubefirst-logo">
                <img src={kubefirstLogo} alt="kubefirst logo"/>
            </div>
        </div>
    )
}

export default Header
