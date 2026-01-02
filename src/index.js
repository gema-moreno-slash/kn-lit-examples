import { LitElement, html, css } from 'lit';
import './style/global.css'

export class AppComponent extends LitElement {
  static styles = css`
    h1 {
      
    }
  `;

  render() {
    return html`<h1>Lit Test</h1>`;
  }
}

customElements.define('app-component', AppComponent);