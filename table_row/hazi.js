

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
function test(vlm)
{
    const tbody = document.getElementById("tbodi")
    tbody.innerHTML = ""
    for (let elemeek of vlm)
    {
        renderTableRow(tbody, elemeek)
    }
}

function renderTableRow(tablebody,TIPUSS)
{
        const tr1 = document.createElement("tr")
        const tdnacionalitasomas = document.createElement("td")
        tdnacionalitasomas.innerText = TIPUSS.nationality
        tr1.appendChild(tdnacionalitasomas)
        
        tdnacionalitasomas.addEventListener("click", function(e){
            const cell = e.target
            const sor = cell.parentElement
            const tb = sor.parentElement
            const elozo = tb.querySelector(".marked")
            if (elozo !== null){
                elozo.classList.remove("marked")
            }
            cell.classList.add("marked")
        })
        const tdszerzo1 = document.createElement("td")
        tdszerzo1.innerText = TIPUSS.author1
        tr1.appendChild(tdszerzo1)
        const tdlit = document.createElement("td")
        tdlit.innerText = TIPUSS.literarypiece1
        tr1.appendChild(tdlit)
        tablebody.appendChild(tr1)
        if (TIPUSS.author2)
        {
            tdnacionalitasomas.rowSpan = 2
            const tr2 = document.createElement("tr")
            const tdszerzo2 = document.createElement("td")
            tdszerzo2.innerText = TIPUSS.author2
            tr2.appendChild(tdszerzo2)
            const tdlit2 = document.createElement("td")
            tdlit2.innerText = TIPUSS.literarypiece1
            tr2.appendChild(tdlit2)
            tablebody.appendChild(tr2)
        }
}


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

for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = a.nationality;
    tr2.appendChild(tr2_td1);
        /**
         * @type {HTMLTableCellElement}
         */
    tr2_td1.addEventListener("click", function(e){
    
        const cll = e.target
        const sor = cll.parentElement
        const tbody = sor.parentElement

        const elozok = tbody.querySelector(".marked")

        if (elozok !== null)
        {
            elozok.classList.remove("marked")
        }

        cll.classList.add("marked");
    });

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = a.author1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = a.literarypiece1;
    tr2.appendChild(tr2_td3);

    if (a.author2 != undefined && a.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.author2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.literarypiece2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}
/**
* @type {HTMLFormElement}
*/
const ide = document.getElementById("htmlform");
ide.addEventListener("submit", function(e){
    e.preventDefault()
    const formam = e.target
    const nem = formam.querySelector("#nemzetiseg").value;
    const a1  = formam.querySelector("#szerzo1").value;
    const m1  = formam.querySelector("#mu1").value;
    const a2  = formam.querySelector("#szerzo2").value;
    const m2  = formam.querySelector("#mu2").value;
    const uj = {nationality: nem, author1: a1, literarypiece1: m1}
    if (a2 !== "")
    {
        uj.author2 = a2
        uj.literarypiece2 = m2 
    }
    arr.push(uj)
    test(arr)
});
/**
 * 
 * @param {string} form 
 * @param {number} id 
 * @param {string} LabelContent 
 */
function createFormElement(form, id, LabelContent)
{
    const forma = document.createElement("form")
    tbody.appendChild(form)

    const label = document.createElement("label")
    label.HTMLFor = id
    label.innerText = LabelContent
    /**
     * @type {id}
     */
    const input = document.createElement("input")
    input.type = "text"
    input.id = id
    input.name = id
    
    forma.appendChild(label)
    forma.appendChild(input)
    
}

test(arr)

/**
         * a felépitést az alsobb kod magyarázatbol kimasolom ide 
         * 
         * /**
            * itt megszerzi az aktiv kijelolt cella osztalyat 
            *  aztan megkeresi az elozo ilyen kijelolt osztalyt és ha volt
            * akkor arrol meg leveszi 
            * és aztan meg ennek adja a jelolest mint osztaly
            * mivel oran mondta hogy nem baj ha nincs ; ezért tobbet nem rakok 
        */

/**
     * itt megszerzi az aktiv kijelolt cella osztalyat 
     *  aztan megkeresi az elozo ilyen kijelolt osztalyt és ha volt
     * akkor arrol meg leveszi 
     * és aztan meg ennek adja a jelolest mint osztaly
     * mivel oran mondta hogy nem baj ha nincs ; ezért tobbet nem rakok 
     */