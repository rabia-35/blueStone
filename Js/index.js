const slideDesc = document.querySelector("#slide-desc");
const carouselItems = document.querySelectorAll(".carousel-item");

setInterval(() => {
  const activeItem = document.getElementsByClassName("carousel-item active");

  if (activeItem[0] === carouselItems[0]) {
    slideDesc.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
    quisquam quis eaque cumque ratione, fuga deserunt facilis
    exercitationem assumenda ex sed, consequatur accusantium quam
    consectetur, numquam excepturi`;
  } else if (activeItem[0] === carouselItems[1]) {
    slideDesc.innerHTML = `Dolorem nostrum repellat ab pariatur eligendi maiores laboriosam
     necessitatibus numquam ipsum! Veritatis corrupti saepe nisi quis tenetur,laborum temporibus
      delectus, minima natus, asperiores doloribus rerum.`;
  } else if (activeItem[0] === carouselItems[2]) {
    slideDesc.innerHTML = `Eius error animi, explicabo consequatur nihil esse atque quisquam aut 
    ab veniam deleniti iusto id nostrum sunt amet cupiditate! Earum quos blanditiis culpa, minima
     maxime autem eaque error cupiditate magni! `;
  }
}, 2000);
