import { LitElement, html } from 'lit';

export class MainCont extends LitElement {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="section">
        <header>
          <h1 class="title">Welcome!</h1>   
        </header>
        <div class="box">
          <div class="columns"> 
            <div class="column">
              <p>Select from "Examples" dropdown the one which you prefer ❤️</p>
            </div>
          </div>      
        </div>
      </section>
    `;
  }

}

if (!customElements.get('main-cont')) {
  customElements.define('main-cont', MainCont);
}
