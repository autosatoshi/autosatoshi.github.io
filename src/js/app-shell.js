import { html, LitElement } from 'lit';

export default class AppShell extends LitElement {
    createRenderRoot() { return this; }
    render = () => html`
    <div class="container">
        autosatoshi
    </div>
    `;
}

customElements.define('app-shell', AppShell);