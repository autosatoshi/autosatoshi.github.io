import { html, LitElement } from 'lit';

export default class AppShell extends LitElement {
    createRenderRoot() { return this; }
    render = () => {  return html`autosatoshi`;  }
}

customElements.define('app-shell', AppShell);