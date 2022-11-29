let myEmojis = []
let emojisFromLocalStorage = JSON.parse(localStorage.getItem("emojis"))

if (emojisFromLocalStorage) { 
        myEmojis = emojisFromLocalStorage
    } else {
        myEmojis = ["👨‍💻", "⛷", "🍲"]
    }

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

function modifyEmojis(action) {
    if ((action === "push") && (emojiInput.value)) {
        myEmojis.push(emojiInput.value)
    }
    if ((action === "unshift") && (emojiInput.value)) {
        myEmojis.unshift(emojiInput.value)
    }
    if (action === "pop") {
        myEmojis.pop(emojiInput.value)
    }
    if (action === "shift") {
        myEmojis.shift(emojiInput.value)
    }
    emojiInput.value = ""
    localStorage.setItem("emojis", JSON.stringify(myEmojis))
    renderEmojis()
}

pushBtn.addEventListener("click", function(){
    modifyEmojis("push")
})

unshiftBtn.addEventListener("click", function(){
    modifyEmojis("unshift")
})

popBtn.addEventListener("click", function() {
    modifyEmojis("pop")
})

shiftBtn.addEventListener("click", function() {
    modifyEmojis("shift")
})
