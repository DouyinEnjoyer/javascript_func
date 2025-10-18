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
        const th = createCellElement("th", headers[i], headerRow);
        if (i === 2) th.colSpan = 2;
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (const author of authors) {
        const tr = document.createElement("tr");

        
        createCellElement("td", author.author, tr)

        
        createCellElement("td", author.era, tr)
        
        
        const tdLove1 = createCellElement("td", author.love1, tr)

        if (author.love2 === undefined) {
            tdLove1.colSpan = 2;
        } else {
            createCellElement("td", author.love2, tr)
        }

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

createAuthorsTable()

/**
 * 
 * @param {string} cellType tipus
 * @param {string} cellContent tartalom
 * @param {HTMLTableRowElement} cellRow sor
 * @returns {HTMLTableCellElement} létrehozott cella
 */

function createCellElement(cellType, cellContent, cellRow)
{
    const cell = document.createElement(cellType)
    cell.innerText = cellContent
    cellRow.appendChild(cell)
    return cell
}
