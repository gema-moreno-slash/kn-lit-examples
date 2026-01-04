import { LitElement, html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import { routes } from '../routes.js';

export class MainBar extends LitElement {
  static properties = {
    mode: {type: String}
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const titleTpl = html`
      <div class="navbar-brand">
        <h1 class="navbar-item title is-4">KN-Lit-Examples</h1>
      </div>
    `;

    const menuTpl = html`
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Examples
          </a>
          <div class="navbar-dropdown">
            ${map(routes.slice(1), r => html`
              <a class="navbar-item" href=${r.path}>${r.name}</a>  
            `)}
          </div>
        </div>
      </div>
    `;

    const actionsTpl = html`
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button 
              class="bd-tw-button button is-warning is-soft"
              @click=${this.clickMode}
            >
              ${this.mode === 'dark' ? 'Dark Mode 🌛' : 'Light Mode 🌞'}
            </button>
          </div>
        </div>
      </div>
    `;

    return html`
      <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
        ${titleTpl}
        <div id="navbarBasicExample" class="navbar-menu">
          ${menuTpl}
          ${actionsTpl}
        </div>
      </nav>
    `;
  }

  clickMode() {
    const e = new CustomEvent('change-mode', { bubbles: false, composed: true });
    this.dispatchEvent(e);
  }
}

if (!customElements.get('main-bar')) {
  customElements.define('main-bar', MainBar);
}
