import { LitElement, html, css, unsafeCSS } from 'lit';
import { Router } from '@lit-labs/router';
import { routes } from './routes.js';
import {
  detectSystemMode,
  getMode,
  changeMode
} from './theme.js';
import './components/main-bar.js';
import './style/global.css'

export class AppComponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  router = new Router(this, routes);

  static properties = {
    mode: { state:true }
  }

  constructor() {
    super();
    detectSystemMode();
    this.mode = getMode();
  }

  render() {
    return html`
      <div class="mainCont">
        <main-bar .mode=${this.mode} @change-mode=${this.changeModee}></main-bar>
        <main>${this.router.outlet()}</main>
        <footer class="footer has-text-centered">Kodeneko@2026</footer>
      </div>
    `;
  }

  changeModee() {
    changeMode();
    this.mode = getMode();
  }
}

if (!customElements.get('app-component')) {
  customElements.define('app-component', AppComponent);
}
