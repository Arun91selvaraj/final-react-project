import { render } from "react-dom";
import App from "./components/app/App";

const appDesign = App()
render(
    appDesign,
    document.getElementById('root')
)