let text = document.querySelector("textarea")
let totalCount = document.querySelector(".total")
let remains = document.querySelector(".remains")
text.addEventListener('input', (e) => {
    let count = e.target.value.length;
    let rem = 99 - e.target.value.length;
    totalCount.innerText = count;
    remains.innerText = rem;
    setTimeout(() => {
        totalCount.style.transform = "scale(1) translateY(0)";
    }, 300);
    setTimeout(() => {
        remains.style.transform = "scale(1) translateY(0)";
    }, 300);
})