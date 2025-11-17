

/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} TIPUSS
 */


/**
 * potlas
 */



/**
 * @type {{TIPUSS}}
 */
const obj = {}

/**
 * 
 * @param {Array} vlm 
 * felépitjuk az ASZTALt egyesével vlm tomb vagy array(nemtaláltam tomb paramot) segitségével
 * 
 */



const mez = [
    { id: "nemzetiseg", label: "Nemzetiség:" },
    { id: "szerzo1", label: "Szerző:" },
    { id: "mu1", label: "Mű:" },
    { id: "szerzo2", label: "Másik szerző:" },
    { id: "mu2", label: "Másik mű:" }
]

const ujforma = createDynamicForm("htmlform", mez)
document.body.appendChild(ujforma)

ujforma.addEventListener("submit", htmlSubmitEventListener)


/**
 * 
 * @param {HTMLFormElement} ide 
 */

// HTMLEventListener(ide) ez mar relic

/**
 * @type {{TIPUSS}}
 * 
 */

const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]
/** 
 * relioc ez is
const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const a = ['Nemzetiség', 'Szerző', 'Mű'];
for(let i of a) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = i;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

*/
/**
* @type {HTMLFormElement}
*/

/**
 * 
 * @param {string} form 
 * @param {number} id 
 * @param {string} LabelContent 
 */

/**
         * a felépitést az alsobb kod magyarázatbol kimasolom ide 
         * 
         * /**
            * itt megszerzi az aktiv kijelolt cella osztalyat 
            *  aztan megkeresi az elozo ilyen kijelolt osztalyt és ha volt
            * akkor arrol meg leveszi 
            * és aztan meg ennek adja a jelolest mint osztaly
            * mivel oran mondta hogy nem baj ha nincs ; ezért tobbet nem rakok 
            * 
        */

/**
     * itt megszerzi az aktiv kijelolt cella osztalyat 
     *  aztan megkeresi az elozo ilyen kijelolt osztalyt és ha volt
     * akkor arrol meg leveszi 
     * és aztan meg ennek adja a jelolest mint osztaly
     * mivel oran mondta hogy nem baj ha nincs ; ezért tobbet nem rakok 
     */


generateTable(
    ["Nemzetiség", "Szerző", "Mű"],  "tbodi"                         
)
test(arr) 
