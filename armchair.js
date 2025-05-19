
// Функція для зміни фону
function changeBackgroundTemporary() {
    document.body.style.transition = "background-color 1s";
    document.body.style.backgroundColor = "#e1ecff";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}

// location перенаправлення
function redirectToCategories() {
    setTimeout(() => {
        if (confirm("Do you want to visit our shop?")) {
            location.href = "find_store.html";
        }
    }, 35000);
}

// Перемикання видимості відгуків
function toggleReviews() {
    const reviewsList = document.getElementById("reviewsList");
    const toggleBtn = document.getElementById("toggleReviewsBtn");

    if (reviewsList.style.display === "none") {
        reviewsList.style.display = "block";
        toggleBtn.textContent = "Hide Reviews";
    } else {
        reviewsList.style.display = "none";
        toggleBtn.textContent = "Show Reviews";
    }
}

// Додавання нового відгуку
function addReview() {
    const reviewContainer = document.getElementById("reviewsList");

    const newComment = document.createElement("div");
    newComment.classList.add("comment");

    const title = document.createElement("p");
    title.textContent = "Best chair ever!";

    const body = document.createElement("p");
    body.textContent = "I can spend hours reading in this armchair, it's perfect!";

    const author = document.createElement("p");
    author.textContent = "by Olivia";

    newComment.append(title, body, author);
    reviewContainer.append(newComment);
}

// querySelectorAll
function styleCommentTitles() {
    const commentsTitles = document.querySelectorAll(".comment p:first-child");
    commentsTitles.forEach(title => {
        title.style.color = "gray";
    });
}

// Модифікація DOM-вузлів
function modifyDOMProperties() {
    //  createTextNode
    const gallerySection = document.querySelector(".gallery");
    const textNode = document.createTextNode("Discover more models in store!");
    const p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.marginTop = "10px";
    p.append(textNode);

    // prepend
    gallerySection.prepend(p);

    //  outerHTML
    const firstColor = document.getElementById("first_c");
    firstColor.outerHTML = '<span id="first_c" style="width:20px; height:20px; display:inline-block; border-radius:50%; background-color: lightgray;"></span>';

    // textContent
    const copyright = document.querySelector(".rights");
    copyright.textContent = "© 2025 Babenko Design Studio. All rights reserved.";

    // nodeValue
    const valueSpan = document.querySelector(".right-side");
    console.log("nodeValue:", valueSpan.firstChild.nodeValue);
}

// Використання replaceWith
function replaceSpecialOffer() {
    const specialOffer = document.querySelector(".special-offer");
    if (specialOffer) {
        const replacement = document.createElement("div");
        replacement.className = "replacement-message";
        replacement.textContent = "Check back later for more deals!";
        specialOffer.replaceWith(replacement);
    }
}

// after
function addNewSectionAfterGallery() {
    const gallery = document.querySelector(".gallery");
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h2>RELATED PRODUCTS</h2><p>More comfy chairs coming soon...</p>";
    gallery.after(newSection);
}

// remove
function addressLink() {
    const addressLink = document.querySelector(".address");
    if (addressLink) {
        addressLink.remove();
    }
}

// Ініціалізація всіх скриптів
changeBackgroundTemporary();
redirectToCategories();
styleCommentTitles();
modifyDOMProperties();
addNewSectionAfterGallery();
replaceSpecialOffer();
addressLink();

