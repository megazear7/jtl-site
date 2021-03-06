import { html } from 'orison';
import playgroundPartial from '../partials/playground.js';

export default context => html`
  <section>${context.mdFile('./src/partials/getting-started.md')}</section>
  <section>${playgroundPartial()}</section>
`;
