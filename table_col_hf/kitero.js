/**
 * ez a fuggveny valamit csinal
 * @returns {void}
  */

const szam = 6

function valami1()
{
    console.log("gooba")
}
valami1()

function valami2()
{
    console.log(szam)
}
valami2()
/**
 * ez egy kolalis valtozo
 */
function valami3()
{


    const v = 9

    console.log(v)
}
valami3()

/**
 * valamit csinal
 * 
 * @param {number} sigma 
 * 
 * @returns {number}
 */

function valami4(sigma)
{
    const a = 6
    const c = a + sigma
    return c
}
const opsum = valami4(2)
console.log(opsum)

/**
 * html elem letrehozasa szoveg beallitasa es szulohoz rendelese
 * @param {string} type - tipus
 * @param {string} text - szoveg
 * @param {HTMLElement} parent - fonok :)
 * @returns {HTMLElement} - ujelem
 */
function createElem(type, text, parent) {
    const e = document.createElement(type)
    if (text) e.innerText = text
    parent.appendChild(e)
    return e
}

/**
 * form kreálása
 * @returns {void}
 */
function createJsForm() {
    const form = document.createElement("form")
    form.id = "form_js"
    document.body.appendChild(form)

    createElem("h2", "Javascript form", form)

    const divName = document.createElement("div")
    form.appendChild(divName)
    createElem("label", "Hallgató neve:", divName)
    const inputName = document.createElement("input")
    inputName.type = "text"
    divName.appendChild(inputName)

    const divAge = document.createElement("div")
    form.appendChild(divAge)
    createElem("label", "Hallgató életkora:", divAge)
    const inputAge = document.createElement("input")
    inputAge.type = "number"
    divAge.appendChild(inputAge)

    const divArea = document.createElement("div")
    form.appendChild(divArea)
    createElem("label", "Kedvenc fizikai terület:", divArea)
    const select = document.createElement("select")
    divArea.appendChild(select)
    const options = ["Optika", "Asztronómia", "Kvantumfizika", "Modern fizika"]
    for (const o of options) {
        const opt = document.createElement("option")
        opt.value = o
        opt.innerText = o
        select.appendChild(opt)
    }
    const divBtn = document.createElement("div")
    form.appendChild(divBtn)
    const submitBtn = createElem("button", "Küldés", divBtn)
    submitBtn.type = "submit"
    const resetBtn = createElem("button", "Törlés", divBtn)
    resetBtn.type = "reset"
}

createJsForm()