let Nav = {
    props : ["links"],
    template : `
    <nav>
        <ul>
            <li v-for)link in links" :key="links.id"> {{ link.text }} </li>
        </ul>
    </nav>          `
};

export { Nav };