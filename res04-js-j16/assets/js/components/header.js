import { Nav } from "./nav.js";
let Header = {
    data () {
      return {
          navLinks : [
                {
                    id : 1,
                    text : "Accueil"
                },
                {
                    id : 2,
                    text : "A propos"
                },
                {
                    id: 3,
                    text : "Contact"
                }
        ]
      }  
    },
    components : {
        Nav
    },
    template: `
        <Header>
            <Nav :links="navLinks"></Nav>
        </Header>
`};

export { Header };