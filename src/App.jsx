import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

console.log(`
   .--.
  |o_o |
  |:_/ |
 //   \\ \\
(|     | )
/'\\_   _/\`\\
\\___)=(___/

 _____ _                                        _      ___  ____
|_   _| |__   ___    __ _ _ __  _____      ____| |_  _|_ _|/ ___|
  | | | '_ \\ / _ \\  / _\` | '_ \\/ __\\ \\ /\\ / / _ \\ '__| || \\___ \\
  | | | | | |  __/ | (_| | | | \\__ \\\\ V  V /  __/ |  | | ___) |
  |_| |_| |_|\\___|  \\__,_|_| |_|___/ \\_/\\_/ \\___|_| |___|____/

              _  _  ____
             | || ||___ \\
             | || |_ __) |
             |__   _/ __/
                |_||_____|

`);

export default function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection showEmailForm={true} />
      <Footer />
    </>
  );
}
