import InstallPopup from "./components/InstallPopup";
import Logo from "./components/Logo";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
    return <h1>hello
        <Logo/>
        <WelcomeMessage/>
        <InstallPopup/>
    </h1>;
}
