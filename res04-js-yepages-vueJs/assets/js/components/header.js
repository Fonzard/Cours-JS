import { Nav } from "./nav.js";
let Header = {
    data () {
        return {
            navLinks : [
                {
                    id:1,
                    text:"Accueil"
                },
                {
                    id:2,
                    text:"Livre"
                },
                {
                    id:3,
                    text:"Compte"
                }
            ]
        }
    },
    components : {
        Nav
    },
    template :`
        <Header>
            <div class="logo">
                <img src="assets/images/Logo-Blanc.svg" alt="logo blanc">
            </div>
            <Nav :links="navLinks"></Nav>
        </Header>
    `
};

export { Header };