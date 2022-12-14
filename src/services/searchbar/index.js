export const searchbar = () => {
    let userInput = document.querySelector("#headerSearchbar").value.toLowerCase();

    const containerCards = document.querySelectorAll(".styles_card__7gwIp");

    for (let i = 0; i < (containerCards.length); i++) {
        const content = containerCards[i].textContent.toLowerCase();

        containerCards[i].classList.remove("hidden");

        if (!content.includes(userInput)) {
            containerCards[i].classList.add("hidden");
            console.log(content);
        }
    }
}