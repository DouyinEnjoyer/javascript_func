/**
 *  @type{{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table') // létrehoz egy Html elemet a memoriában (nem jelenik meg a html oldalon)
document.body.appendChild(table) //hozzáfűz egy html elemet vmi-hez

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

const th1 = document.createElement('th')
th1.innerText = "Fizika területe"
tr.append(th1)
const th2 = document.createElement('th')
th2.innerText = "Időszak"
tr.append(th2)
const th3 = document.createElement('th')
th3.innerText = "Képviselők"
tr.append(th3)
//th3.colSpan=2

//1.
const tbody = document.createElement('tbody')
table.appendChild(tbody)

//2.

//3.