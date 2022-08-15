import "./style.css"
import {useEffect, useState} from "react";
import {metaphorJsApi, metaphorGoApi} from "../../services/api";

const Items = () => {

    const [metaphorJsHealth, setMetaphorJsHealth] = useState(true)
    const [metaphorGoHealth, setMetaphorGoHealth] = useState(true)

    const [jsAppName, setJsAppName] = useState("")
    const [jsCompanyName, setJsCompanyName] = useState("")
    const [jsChartVersion, setJsChartVersion] = useState("")
    const [jsDockerTag, setJsDockerTag] = useState("")

    const [goAppName, setGoAppName] = useState("")
    const [goCompanyName, setGoCompanyName] = useState("")
    const [goChartVersion, setGoChartVersion] = useState("")
    const [goDockerTag, setGoDockerTag] = useState("")

    const [kubernetesConfigOne, setKubernetesConfigOne] = useState("")
    const [kubernetesConfigTwo, setKubernetesConfigTwo] = useState("")

    const [vaultSecretOne, setVaultSecretOne] = useState("")
    const [vaultSecretTwo, setVaultSecretTwo] = useState("")

    useEffect(() => {
        const getJsApiHealthz = async () => {
            try {
                const data = await metaphorJsApi.get("/healthz")
                if (data.status !== 200) {
                    setMetaphorJsHealth(false)
                }
                console.log(data)
            } catch (e) {
                setMetaphorJsHealth(false)
                console.log(e)
            }
        }
        const getGoApiHealthz = async () => {
            try {
                const data = await metaphorGoApi.get("/healthz")
                if (data.status !== 200) {
                    setMetaphorGoHealth(false)
                }
                console.log(data)
            } catch (e) {
                setMetaphorGoHealth(false)
                console.log(e)
            }
        }

        const getJsAppData = async () => {
            try {
                const data = await metaphorJsApi.get("/app")
                if (data.status === 200) {
                    setJsAppName(data.data.app_name)
                    setJsCompanyName(data.data.company_name)
                    setJsChartVersion(data.data.chart_version)
                    setJsDockerTag(data.data.docker_tag)
                }
            } catch (e) {
                console.log(e)
            }
        }

        const getGoAppData = async () => {
            try {
                const data = await metaphorGoApi.get("/app")
                if (data.status === 200) {
                    setGoAppName(data.data.app_name)
                    setGoCompanyName(data.data.company_name)
                    setGoChartVersion(data.data.chart_version)
                    setGoDockerTag(data.data.docker_tag)
                }
            } catch (e) {
                console.log(e)
            }
        }

        const getKubernetesData = async () => {
            try {
                const data = await metaphorJsApi.get("/kubernetes")
                if (data.status === 200) {
                    setKubernetesConfigOne(data.data.config_one)
                    setKubernetesConfigTwo(data.data.config_two)
                }
            } catch (e) {
                console.log(e)
            }
        }

        const getVaultData = async () => {
            try {
                const data = await metaphorJsApi.get("/vault")
                if (data.status === 200) {
                    setVaultSecretOne(data.data.secret_one)
                    setVaultSecretTwo(data.data.secret_two)
                }
            } catch (e) {
                console.log(e)
            }
        }
        console.log(window.__env__.METAPHOR_JS_API_BASE_URL)
        console.log(window.__env__.METAPHOR_GO_API_BASE_URL)

        // Metaphor JS
        getJsApiHealthz()
        // Metaphor Go
        getGoApiHealthz()

        // JS app data
        getJsAppData()

        // Go app data
        getGoAppData()

        // get Kubernetes configs
        getKubernetesData()

        // get Vault data
        getVaultData()
    }, [])

    return (
        <div id="items">

            <div id="items-left">

                <div className="app-item">
                    <div className="app-item-health">
                        <span className={metaphorJsHealth ? "health-ok" : "health-not-ok"} type="up"></span>&nbsp;
                        <span className="api-name">Metaphor JS API</span>
                        <div className="app-item-health-status">
                            status: {metaphorJsHealth ? "running" : "not running"}
                        </div>
                    </div>
                </div>
                <div className="app-item">
                    <div className="app-item-name">
                        Metaphor (JS API)
                    </div>
                    <div className="app-item-value">
                        App name: {jsAppName}
                    </div>
                    <div className="app-item-value">
                        Company Name: {jsCompanyName}
                    </div>
                    <div className="app-item-value">
                        Chart Version: {jsChartVersion}
                    </div>
                    <div className="app-item-value">
                        Docker Tag: {jsDockerTag}
                    </div>
                </div>

                <div className="app-item">
                    <div className="app-item-name">
                        Kubernetes (JS API)
                    </div>
                    <div className="app-item-value">
                        Config One: {kubernetesConfigOne}
                    </div>
                    <div className="app-item-value">
                        Config Two: {kubernetesConfigTwo}
                    </div>
                </div>
                <div className="app-item">
                    <div className="app-item-name">
                        Vault (JS API)
                    </div>
                    <div className="app-item-value">
                        Secret One: {vaultSecretOne}
                    </div>
                    <div className="app-item-value">
                        Secret Two: {vaultSecretTwo}
                    </div>
                </div>

            </div>
            <div id="items-right">
                <div className="app-item">
                    <div className="app-item-health">
                        <div className={metaphorGoHealth ? "health-ok" : "health-not-ok"}></div>&nbsp;
                        Metaphor Go API
                        <div className="app-item-health-status">
                            status: {metaphorGoHealth ? "running" : "not running"}
                        </div>
                    </div>
                </div>

                <div className="app-item">
                    <div className="app-item-name">
                        Metaphor (Go API)
                    </div>
                    <div className="app-item-value">
                        App name: {goAppName}
                    </div>
                    <div className="app-item-value">
                        Company Name: {goCompanyName}
                    </div>
                    <div className="app-item-value">
                        Chart Version: {goChartVersion}
                    </div>
                    <div className="app-item-value">
                        Docker Tag: {goDockerTag}
                    </div>
                </div>
                <div className="app-item">
                    <div className="app-item-name">
                        Kubernetes (Go API)
                    </div>
                    <div className="app-item-value">
                        Config One: {kubernetesConfigOne}
                    </div>
                    <div className="app-item-value">
                        Config Two: {kubernetesConfigTwo}
                    </div>
                </div>
                <div className="app-item">
                    <div className="app-item-name">
                        Vault (Go API)
                    </div>
                    <div className="app-item-value">
                        Secret One: {vaultSecretOne}
                    </div>
                    <div className="app-item-value">
                        Secret Two: {vaultSecretTwo}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Items
