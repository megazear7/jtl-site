import { html } from 'orison';

export default context => html`
    <section>
        <h2>API Example</h2>
        <div><jtl-example-api></jtl-example-api></div>
        <script type="module" src="/js/examples/api.js"></script>
    </section>
`;