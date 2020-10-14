import { html } from 'orison';
import playgroundPartial from '../partials/playground.js';

export default context => html`
    <section>
        ${playgroundPartial()}
    </section>
`;