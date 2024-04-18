// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
// });

// locoScroll()

const boxes = document.querySelectorAll(".boxshow");
const boximg = document.querySelector(".boximg img")

function toggleActiveClassSequentially(index) {
    const currentIndex = index % boxes.length;

    boxes[currentIndex].classList.add("active");

    if (currentIndex == 1) {
        boxes[currentIndex - 1].classList.remove("active");
        boximg.src = "https://d2b1cooxpkirg1.cloudfront.net/publicAssets/how_it_works/step2.png"
    }
    else if (currentIndex == 2) {
        boxes[currentIndex - 1].classList.remove("active");
        boximg.src = "https://d2b1cooxpkirg1.cloudfront.net/publicAssets/how_it_works/step3.png"
    }
    else {
        boxes[boxes.length - 1].classList.remove("active");
        boximg.src = "https://d2b1cooxpkirg1.cloudfront.net/publicAssets/how_it_works/step1.png"
    }

    setTimeout(() => {
        toggleActiveClassSequentially(index + 1);
    }, 4000);
}
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        boximg.src = `https://d2b1cooxpkirg1.cloudfront.net/publicAssets/how_it_works/step${index + 1}.png`;
        boxes.forEach(b => b.classList.remove("active"));
        box.classList.add("active");
    });
});

toggleActiveClassSequentially(0);
