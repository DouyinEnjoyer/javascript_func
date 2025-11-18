/**
 * @typedef {{id:string, label:string}} FormaFFF
 */


/** 
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} TIPUSS
*/
function createFormElement(form, id, LabelContent)
{
    const forma = document.createElement("form")
    tbody.appendChild(form)
    const div = document.createElement("div")
    forma.append(div)
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
    
    const span = document.createElement("span")
    div.appendChild(span)


    div.appendChild(label)
    div.appendChild(input)
    
    /**
     * error marker megcsinalasa
     * quevryselector
     * valtozo
     * const r 
     */
}

function HTMLEventListener(ide)
{
    ide.addEventListener("submit", htmlSubmitEventListener)
    
}


function htmlSubmitEventListener(e) {
    e.preventDefault()

    const formam = e.target
    const nem = formam.querySelector("#nemzetiseg").value;
    const a1  = formam.querySelector("#szerzo1").value;
    const m1  = formam.querySelector("#mu1").value;
    const a2  = formam.querySelector("#szerzo2").value;
    const m2  = formam.querySelector("#mu2").value;

    /**
     * kitoroljuk a hibauzeneteket
     */
    formam.querySelectorAll(".error").forEach(x => x.innerText = "")

    if (!validateFields(nem, a1, m1))
    {
        return
    }

    /**
     * ha nem ures akkor
     */
    const uj = { nationality: nem, author1: a1, literarypiece1: m1, author2: a2 !== "" ? a2  : undefined, literarypiece2: m2 !== "" ? m2: undefined }

      console.log("itt", uj)
/**
 * if (a2 !== "") {
        uj.author2 = a2
        uj.literarypiece2 = m2
    }
 */
    window.adatom.array.push(uj)
    test(window.adatom.array)

    // test(arr)
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
    
function test(vlm)
{
    const tbody = document.getElementById("tbodi")
    tbody.innerHTML = ""
    for (let elemeek of vlm)
    {
        renderTableRow(tbody, elemeek)
    }
}

/**
 * 
 * 
 
for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = a.nationality;
    tr2.appendChild(tr2_td1);
        /**
         * @type {HTMLTableCellElement}
         */
    /** 
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
    */
/**
 * 
 * @param {*} inputField 
 * @param {*} errorUzenete 
 * @returns 
 * itt ugye egy erteknel
 */
function validateField(inputField, errorUzenete)
{
    let ja = true
    if (inputField.value === "")
    {
        const div = inputField.parentElement
        const span = div.querySelector(".error")
        span.innerText = errorUzenete
        ja = false
    }
    return ja
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 * itt meg az egeszet
 */
function validateFields(a, b, c) {
    let ja = true

    if (validateField(b, "nincs szerzo") === false) {
        ja = false
    }

    if (validateField(c, "nincs mu") === false) {
        ja = false
    }

    if (validateField(a, "nincs nemzetiseg") === false) {
        ja = false
    }

    return ja
}

function createDynamicForm(formId, fields) {
    const forma = document.createElement("form")
    forma.id = formId
    
    for (const field of fields)
    {
        const div = document.createElement("div")

        const label = document.createElement("label")
        label.htmlFor = field.id
        label.innerText = field.label

        const input = document.createElement("input")
        input.type = "text"
        input.id = field.id
        input.name = field.id

        const span = document.createElement("span")
        span.classList.add("error")

        div.appendChild(span)
        div.appendChild(label)
        div.appendChild(input)
        forma.appendChild(div)
    }

    const gomb = document.createElement("button")
    gomb.innerText = "Hozzáadás"
    forma.appendChild(gomb)

    return forma
}

/**
 * @param {string[]} headerTexts
 * @returns {HTMLTableSectionElement}
 * megcsinalja a fejlecete
 */
function generateHeader(headerTexts)
{
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    thead.appendChild(tr)

    for (const text of headerTexts)
    {
        const th = document.createElement("th")
        th.innerText = text
        tr.appendChild(th)
    }

    return thead
}

/**
 * @param {string[]} headerTexts 
 * @param {string} tbodyId 
 * @returns {HTMLTableElement}
 * itt a tablazat
 */
function generateTable(headerTexts, tbodyId)
{
    const table = document.createElement("table")
    const thead = generateHeader(headerTexts)
    table.appendChild(thead)

    const tbody = document.createElement("tbody")
    tbody.id = tbodyId
    table.appendChild(tbody)

    document.body.appendChild(table)

    return table
}

