import { LitElement, html, css } from 'lit';
import {Task} from '@lit/task';

export class TaskExam extends LitElement {
  createRenderRoot() {
    return this;
  }

  isOk = true;

  #pokemonTask = new Task(
    this,
    async ([msg]) => {
      const result = await new Promise((res, rej) =>
        setTimeout(() => this.isOk ? res(msg) : rej('Horror!'), 2000));
      return result;
    }
  )

  render() {
    return html`
      <section class="section">
        <header>
          <h1 class="title">Task</h1>
          <h2 class="subtitle">
            How to make async actions usin task()
          </h2>       
        </header>
        <div class="box"> 
          ${this.#pokemonTask.render({
            initial: () => html`
              <button class="button is-warning is-small" @click=${this.handleInfo}>Get Info</button>
              <button class="button is-warning is-small" @click=${this.handleError}>Fail!</button>
            `,
            pending: () => html`Loading...`,
            complete: (val) => html`Result: ${val}`,
            error: (err) => html`There was an error with this message: ${err}`,
          })}
        </div>
      </section>
    `;
  }

  handleInfo() {
    this.#pokemonTask.run(['Everything is ok']);
  }

  handleError() {
    this.isOk = false;
    this.#pokemonTask.run(['']);
  }
}

if (!customElements.get('task-exam')) {
  customElements.define('task-exam', TaskExam);
}
