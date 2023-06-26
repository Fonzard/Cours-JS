import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Footer } from "./components/footer.js"; 
import { Nav } from "./components/nav.js";

let App = {
    data () {
        
    },
    components : {
            Header,
            Main,
            Footer
        },
    template :`
        <Header />
        <Main />
        <Footer />
        `
};

export { App };