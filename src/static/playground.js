import { jtl } from '/vendor/jtl-esm.min.js';

const SRC = document.getElementById('playground-src');
const MSG = document.getElementById('playground-msg');
const ROOT = document.getElementById('playground-root');

if (SRC && MSG && ROOT) {
    const json = {
        name: "div",
        children: [
            { name: "h3", content: "Hello, World!" },
            { name: "h3", content: "Type into the textarea above to change me." }
        ]
    };

    SRC.value = JSON.stringify(json, null, 4);
    ROOT.innerHTML = '';
    ROOT.appendChild(jtl(json).toHtmlElement());

    SRC.addEventListener('input', () => {
        try {
            const json = JSON.parse(SRC.value);
            ROOT.innerHTML = '';
            MSG.innerHTML = '';
            MSG.style.opacity = 0;
            ROOT.appendChild(jtl(json).toHtmlElement());
        } catch (e) {
            MSG.innerHTML = '';
            MSG.style.opacity = 1;
            MSG.innerText = e.message;
        }
    });
}