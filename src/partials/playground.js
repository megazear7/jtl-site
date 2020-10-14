import { html } from 'orison';

export default () => html`
    <h2>JTL Playground</h2>
    <p>Type into the textarea below to see live updates.</p>
    <div>
        <textarea id="playground-src"></textarea>
        <div id="playground-msg"></div>
    </div>
    <div id="playground-root"></div>
`;