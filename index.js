const sourceUrl = "https://docs.google.com/spreadsheets/d/1zGNI04-zadWtt41BTshNlI2Qlrg0ANhfCHsh1DqvZ60/gviz/tq?tqx=out:csv&sheet=Main"
const $$ = (id, text) => document.getElementById(id).appendChild(document.createTextNode(text))
document.addEventListener("DOMContentLoaded", () => {
    fetch(sourceUrl)
        .then(r => r.text())
        .then(t => {
            const sheet = t.split("\m").map(l => l.split(",").map(c => c.replace(/^["]/, "").replace(/["]$/, "")))
            console.log(sheet[1][0])
            $$("codlock_price", sheet[1][3])
        })
})