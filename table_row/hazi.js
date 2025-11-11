/**
 * potlas
 */



/**
 * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}}
 */
const obj = {}





/**
 * @type {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}}
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
        
        const valt = e.target
        valt.classList.add("marked");
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
    

    e.preventDefault();
    
    const nemtudom = e.target
    /**
     * @type {HTMLInputElement}
     */
    const nem = nemtudom.querySelector("#nemzetiseg")
    
    const szerzo1 = nemtudom.querySelector("#szerzo1")
    
    const szerzo2 = nemtudom.querySelector("#szerzo2")
    
    const mu1 = nemtudom.querySelector("#mu1")
    
    const mu2 = nemtudom.querySelector("#mu2")

    /**
     * @type {string}
     */
    const nemuj = nem.value
    /**
     * @type {string}
     */
    const szerzo1uj = szerzo1.value
    /**
     * @type {string}
     */
    const szerzo2uj = szerzo2.value
    /**
     * @type {string}
     */
    const mu1uj = mu1.value
    /**
     * @type {string}
     */
    const mu2uj = mu2.value

    obj.nem = nemuj
    obj.szerzo1 = szerzo1uj
    obj.szerzo2 = szerzo2uj
    obj.mu1 = mu1uj
    obj.mu2 = mu2uj

        
    const tbody = document.querySelector('#tbodi')
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
 
    const td_nem = document.createElement('td')
    td_nem.innerText =obj.nem
    td_nem.rowSpan=2
    tr.appendChild(td_nem)
 
    const td_szerzo1 = document.createElement('td')
    td_szerzo1.innerText =obj.szerzo1
    tr.appendChild(td_szerzo1)
 
    const td_mu1 = document.createElement('td')
    td_mu1.innerText =obj.mu1
    tr.appendChild(td_mu1)
 
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)
 
    const td_szerzo2 = document.createElement('td')
    td_szerzo2.innerText = obj.szerzo2
    tr2.appendChild(td_szerzo2)
 
    const td_mu2 = document.createElement('td')
    td_mu2.innerText= obj.mu2
    tr2.appendChild(td_mu2)

    
        
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