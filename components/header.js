class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <!--Fluid side banner, becomes top header when on mobile, 
			contains personal and contact info-->
		<header>
			<div class="vignette">&nbsp;</div>
			<div class="info">
				<img src="/images/noah.jpg" alt="Noah Petrides"/>
				<div class="about">
					<h1>Noah Petrides</h1>
					<p>Hello! I am a game programmer in Vancouver, Canada. When I make my
						own games, I do art and music too!
					</p>
				</div>
			</div>

			<div class="social">
				<a class="linkedin" href="https://www.linkedin.com/in/noah-petrides/"></a>
				<a class="facebook" href="https://facebook.com/noah.petrides"></a>
				<a class="email" href="mailto:nopetrides@gmail.com"></a>
			</div>
		</header>
        `;
    }
}


customElements.define('header-component', Header);