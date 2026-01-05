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

  async scheduleUpdate() {
    // Antes de programar update()

    // Ejemplo: retrasar render
    // await new Promise(resolve => setTimeout(resolve, 2000));

    return super.scheduleUpdate();
  }

  performUpdate() {
    // Cuando se realiza el update()
    // Intercepta el ciclo de Update
    // - shouldUpdate()
    // - willUpdate()
    // - render()
    // - updated()

    console.log('➡️ performUpdate: empieza actualización');
    super.performUpdate();
    console.log('✅ performUpdate: actualización terminada');
  }

  willUpdate(changedProperties) {
    // Antes de update()

    // -- USOS --
    // - preparar datos antes del render
    console.log('willUpdate');
    console.log(this.hasUpdated ? 'There were updates before' : 'First Update');
  }

  updated(changeProperties) {
    // Después de cambios en el DOM

    // -- USOS --
    // - efectos secundarios posteriores al DOM
    // - sincronizar

    console.log('updated', changeProperties);
  }

  async getUpdateComplete() {
    // Promesa que se resuelve tras el update()

    // -- USOS --
    // - esperar a que se complete el update()
    const result = await super.getUpdateComplete();
    console.log('getUpdateComplete');

    return result;
  }


  // -- ATRIBUTOS -- //

  attributeChangedCallback(name, oldVal, newVal) {
    // Cuando un atributo cambia

    // -- USOS --
    // - reaccionar a cambios de atributos
    super.attributeChangedCallback(name, oldVal, newVal);
  }


  render() {
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
            <div class="column content">
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
        <div class="box">
          <div class="columns"> 
            <div class="column">
              <h3 class="title is-5">Init</h3>
              <ol class="fixList">
                <li>➡️ constructor</li>
                <li>createRenderRoot</li>
                <li>connectedCallback</li>
                <li>scheduleUpdate</li>
                <li>➡️ performUpdate</li>
                <li>shouldUpdate</li>
                <li>willUpdate</li>
                <li>update</li>
                <li>render</li>
                <li>firstUpdated</li>
                <li>updated</li>
                <li>getUpdateComplete</li>
                <li>➡️ performUpdate</li>
              </ol>
            </div>
            <div class="column">
              <h3 class="title is-5">Upload</h3>
              <ol class="fixList">
                <li>➡️ requestUpdate</li>
                <li>scheduleUpdate</li>
                <li>➡️ performUpdate</li>
                <li>shouldUpdate</li>
                <li>willUpdate</li>
                <li>update</li>
                <li>render</li>
                <li>updated</li>
                <li>getUpdateComplete</li>
                <li>➡️ performUpdate</li>
              </ol>
            </div>
            <div class="column">
              <h3 class="title is-5">Destroy</h3>
              <ol class="fixList">
                <li>➡️ disconnectedCallback</li>
              </ol>
            </div>
          </div>      
        </div>
      </section>
    `
  }

  async inc() {
    this.counter++;
    // Se ejecuta tras renderizar
    await this.updateComplete;
    console.log('Counter inc');
  }

  async dec() {
    this.counter--;
    // Se ejecuta tras renderizar
    await this.updateComplete;
    console.log('Counter dec');
  }

  act() {
    this.noReactivo++;
    this.requestUpdate();
  }

}

if (!customElements.get('life-cycle-exam')) {
  customElements.define('life-cycle-exam', LifeCycleExam);
}
