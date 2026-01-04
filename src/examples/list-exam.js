import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { repeat } from 'lit/directives/repeat.js';
import { range } from 'lit/directives/range.js';
import { until } from 'lit/directives/until.js';
import { guard } from 'lit/directives/guard.js';
import { cache } from 'lit/directives/cache.js';

const listTest = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))

export class ListExam extends LitElement {

  createRenderRoot() {
    return this;
  }

  static properties = {
    toggleCache: {state: true}
  }

  constructor() {
    super();
    this.toggleCache = true;
  }

  renderMap() {
    return html`
      <h3 class="title is-5">map()</h3>
      <ul>
        ${map(listTest, i => html`<li>${i}</li>`)}
      </ul>
    `;
  }

  renderRepeat() {
    return html`
      <h3 class="title is-5">repeat()</h3>
      <ul>
        ${repeat(
          listTest,
          i => i,
          i => html`<li>${i}</li>`
        )}
      </ul>
    `;
  }
  
  renderRange() {
    return html`
      <h3 class="title is-5">range()</h3>
      <ul>
        ${range(11, 20).map(i => html`<li>${i}</li>`)}
      </ul>
    `;
  }

  async fetchItems() {
    return new Promise((res) => {
      setTimeout(() => res(listTest), 5000)
    })
  }

  renderUntil() {
    return html`
      <h3 class="title is-5">until()</h3>
      <ul>
        ${until(
          this.fetchItems().then(list => list.map(i => html`<li>${i}</li>`)),
          html`<li>Cargando...</li>`
        )}
      </ul>
    `;
  }

  renderGuard() {
    // Recalcula la lista si cambia al dep
    return html`
      <h3 class="title is-5">guard()</h3>
      <ul>
        ${guard(
          [listTest],
          () => listTest.map(i => html`<li>${i}</li>`)
        )}
      </ul>
    `;
  }

  handleToggle() {
    this.toggleCache = !this.toggleCache;
  }

  renderCache() {
    return html`
      <h3 class="title is-5">cache()</h3>
      <button class="button is-warning is-small" @click=${this.handleToggle}>Toggle</button>
      ${cache(
        this.toggleCache
          ? html`<p id="preservado">Nodo nodito nodo</p>`
          : html`<p>Oculto</p>`
      )}
    `;
  }

  render() {
    return html`
      <section class="section">
        <header>
          <h1 class="title">Lists</h1>
          <h2 class="subtitle">
            Exposition about several methods related to listing.
          </h2>       
        </header>
        <div class="box"> 
          <div class="columns">
            <div class="column">${this.renderMap()}</div>
            <div class="column">${this.renderRepeat()}</div>
            <div class="column">${this.renderRange()}</div>
          </div>
          <div class="columns">
            <div class="column">${this.renderUntil()}</div>
            <div class="column">${this.renderGuard()}</div>
            <div class="column">${this.renderCache()}</div>
          </div>
        </div>
      </section>
    `;
  }
}

if (!customElements.get('list-exam')) {
  customElements.define('list-exam', ListExam);
}
