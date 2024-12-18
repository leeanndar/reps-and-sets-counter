let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let saveSetsEl = document.getElementById("save-sets-el")
let countSetsEl = document.getElementById("count-sets-el")
let countSets = 0

function incrementSets() {
    countSets += 1
    countSetsEl.textContent = countSets
}

function saveSets() {
    let countStrSets = countSets + " - "
    saveSetsEl.textContent += countStrSets
    countSetsEl.textContent = 0
    countSets = 0
}
