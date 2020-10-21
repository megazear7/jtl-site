import { jtl } from '/vendor/jtl-esm.min.js';

class ExampleApiComponent extends HTMLElement {
    constructor() {
        super();
        fetch('/data.json')
            .then(res => res.json())
            .then(json => this.movies = json.movies)
            .then(() => this.render());
    }

    addMovie() {
        const title = this.querySelector('.add-title').value;
        const imdb = this.querySelector('.add-imdb').value;

        this.movies.push({ title, imdb });
        this.render();
    }

    removeMovie(movieTitle) {
        this.movies = this.movies.filter(movie => movie.title !== movieTitle);
        this.render();
    }

    render() {
        this.innerHTML = '';
        this.appendChild(jtl({
            name: "div",
            children: [
                {
                    name: "ul",
                    children: this.movies.map(movie => ({
                        name: "li",
                        children: [
                            {
                                name: "a",
                                attrs: { href: movie.imdb },
                                content: movie.title
                            }, {
                                name: "span",
                                attrs: { class: "remove", "data-movie": movie.title },
                                content: " x"
                            }
                        ]
                    }))
                }, {
                    name: "input",
                    attrs: { class: "add-title", placeholder: "Title" }
                }, {
                    name: "input",
                    attrs: { class: "add-imdb", placeholder: "IMDB" }
                }, {
                    name: "button",
                    attrs: { class: "add-btn" },
                    content: "Add"
                }
            ]
        }).toHtmlElement());

        this.querySelector('.add-btn').addEventListener('click', () => this.addMovie());
        this.querySelectorAll('.remove')
            .forEach(btn => btn.addEventListener('click', (e) => this.removeMovie(e.target.dataset.movie)));
    }
}

window.customElements.define('jtl-example-api', ExampleApiComponent);
