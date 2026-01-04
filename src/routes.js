import { html } from 'lit';

export const routes = [
  {
    path: '/',
    name: 'home',
    enter: async () => await import('./components/main-cont.js'),
    render: () => html`<main-cont></main-cont>`
  },
  {
    path: '/life-cycle',
    name: 'Life Cycle',
    enter: async () => await import('./examples/life-cycle-exam.js'),
    render: () => html`<life-cycle-exam></life-cycle-exam>`
  },
  {
    path: '/list',
    name: 'List',
    enter: async () => await import('./examples/list-exam.js'),
    render: () => html`<list-exam></list-exam>`
  },
  {
    path: '/ref',
    name: 'Ref',
    enter: async () => await import('./examples/ref-exam.js'),
    render: () => html`<ref-exam></ref-exam>`
  },
  {
    path: '/task',
    name: 'Task',
    enter: async () => await import('./examples/task-exam.js'),
    render: () => html`<task-exam></task-exam>`
  }
];