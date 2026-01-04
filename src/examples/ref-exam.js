import { LitElement, html } from 'lit';
import { query, queryAll } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';

export class RefExam extends LitElement {

  inputRef = createRef();

  static properties = {
    showInput: { type: Boolean }
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.showInput = true;
  }

  render() {
    return html`
      <section class="section">
        <header>
          <h1 class="title">createRef() & query()</h1>
          <h2 class="subtitle">
            Show differences between refs and query methods
          </h2>       
        </header>
        <div class="box"> 
          <div class="field">
            ${this.showInput ?
                html`<input class="input" id="myInput" ${ref(this.inputRef)} />` :
                html`<p>Input oculto</p>
            `}
          </div>
          <button class="button is-warning is-small" @click=${() => this.toggleInput()}>Toggle</button>
        </div>
      </section>
    `;
  }

  toggleInput() {
    this.showInput = !this.showInput;
    console.log('inputEl', this.inputEl); // Ele DOM sin reactividad
    console.log('inputRef', this.inputRef.value); // Ele DOM con reactividad
    console.log('query', query('#myInput')(this)); // Proxy Ele DOM + better syntax
    console.log('queryAll', queryAll('button')(this)); // Proxy Ele DOM + better syntax
  }

  get inputEl() {
    return this.renderRoot.querySelector('#myInput');
  }
}

if (!customElements.get('ref-exam')) {
  customElements.define('ref-exam', RefExam);
}
