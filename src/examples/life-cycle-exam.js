import { LitElement, html } from 'lit';

export class LifeCycleExam extends LitElement {

  noReactivo = 0;

  static properties = {
    counter: {state: true }
  }

  constructor() {
    // Instancia creada

    // -- USOS --
    // - inicializar props internas
    // - crear refs
    // - private vars

    super();
    console.log('constructor');
    this.counter = 0;
  }


  // -- INICIO -- //

  connectedCallback() {
    // Añadido al DOM

    // -- USOS --
    // - event listeners globales
    // - timers + subscripciones

    super.connectedCallback();
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    // Eliminado del DOM

    // -- USOS --
    // - limpieza

    super.disconnectedCallback();
    console.log('disconnectedCallback'); 
  }

  adoptedCallback() {
    // Movido a otro documento

    // -- USOS --
    // - ???

    super.adoptedCallback();
    console.log('adoptedCallback'); 
  }

  createRenderRoot() {
    // Al crear el renderRoot

    // -- USOS --
    // - personalizar root
    // - si devuelve "this" renderiza en Light DOM

    console.log('createRenderRoot');
    return this;
    // return super.createRenderRoot();
  }


  // -- UPDATE -- //

  update(changedProperties) {
    // Antes del cambios en el DOM

    // -- USOS --
    // - computed vars

    console.log('update', changedProperties);
    super.update(changedProperties);
  }
  
  updated(changeProperties) {
    // Después de cambios en el DOM

    // -- USOS --
    // - efectos secundarios posteriores al DOM
    // - sincronizar

    console.log('updated', changeProperties);
  }

  firstUpdated(changeProperties) {
    // Después del primer render()

    // -- USOS --
    // - acceder a elementos DOM
    // - animaciones iniciales
    // - foco incial

    console.log('firstUpdated');
  }

  shouldUpdate(changeProperties) {
    // Antes de update()

    // -- USOS --
    // - decidir sin renderizarlo
    // - renders costosos

    console.log('shouldUpdate');
    return true;
  }

  render() {
    // Cuando necesita renderizar
    console.log('render');

    return html`
      <section class="section">
        <header>
          <h1 class="title">Life Cycle</h1>
          <h2 class="subtitle">
            For learning the several lyfe cycles
          </h2>       
        </header>
        <div class="box">
          <div class="columns"> 
            <div class="column">
              <p class="subtitle is-5">Reactive Counter: ${this.counter}</p>
              <div>
                <button class="button is-warning is-small" @click=${this.inc}>➕</button>
                <button class="button is-warning is-small" @click=${this.dec}>➖</button>
              </div>
            </div>
            <div class="column">
              <p class="subtitle is-5">Programatic Counter: ${this.noReactivo}</p>
              <button class="button is-warning is-small" @click=${this.act}>Actualizar</button>
            </div>
          </div>      
        </div>
      </section>
    `
  }

  inc() {
    this.counter++;
  }

  dec() {
    this.counter--;
  }

  act() {
    this.noReactivo++;
    this.requestUpdate();
  }

}

if (!customElements.get('life-cycle-exam')) {
  customElements.define('life-cycle-exam', LifeCycleExam);
}
