class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        setTimeout(this.render);
        this.innerHTML = `
        <footer>
            <i class="fa fa-github" aria-hidden="true"></i>
            Hey, I created this website!
            <a href="https://github.com/nopetrides"> Check out my GitHub</a>
            <i class="fa fa-github" aria-hidden="true"></i>
        </footer>
        `;
    }
}


customElements.define('footer-component', Footer);