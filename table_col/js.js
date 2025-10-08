/** @type {{author: string, era: string, love1: string, love2?: string}[]} */
const authors = [
    { author: "Balassi Bálint", era: "reformáció", love1: "Losonczy Anna", love2: "Dobó Krisztina" },
    { author: "Csokonai Vitéz Mihály", era: "felvilágosodás", love1: "Vajda Juliána" },
    { author: "Petőfi Sándor", era: "magyar romantika", love1: "Mednyánszky Berta", love2: "Szendrey Júlia" },
    { author: "Ady Endre", era: "20. század", love1: "Léda", love2: "Csinszka" }
];

function createAuthorsTable() {
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Szerző neve", "Korszak", "Szerelmek"];
    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");
        th.innerText = headers[i];
        if (i === 2) th.colSpan = 2;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (const author of authors) {
        const tr = document.createElement("tr");

        const tdAuthor = document.createElement("td");
        tdAuthor.innerText = author.author;
        const tdEra = document.createElement("td");
        tdEra.innerText = author.era;

        tr.appendChild(tdAuthor);
        tr.appendChild(tdEra);

        const tdLove1 = document.createElement("td");
        tdLove1.innerText = author.love1;

        if (author.love2 === undefined) {
            tdLove1.colSpan = 2;
            tr.appendChild(tdLove1);
        } else {
            tr.appendChild(tdLove1);
            const tdLove2 = document.createElement("td");
            tdLove2.innerText = author.love2;
            tr.appendChild(tdLove2);
        }

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

window.addEventListener("DOMContentLoaded", createAuthorsTable);
