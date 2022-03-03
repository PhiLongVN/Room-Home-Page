/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */

const icon = document.querySelector('.head-toggle');
const menu = document.querySelector('.head-menu');

icon.onclick = () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('active');
  icon.classList.remove('active');
};

/* ============================================ */
/*                     SLIDE                    */
/* ============================================ */
const next = document.querySelector('.wrap-right');
const prev = document.querySelector('.wrap-left');

const title = document.querySelector('.title');
const para = document.querySelector('.para');
const imagePC = document.querySelector('.img-pc');
const imageMobile = document.querySelector('.img-mobile');

next.addEventListener('click', plus);
prev.addEventListener('click', minus);

let dem = 1;

// nút NEXT
function plus() {
  if (dem < 3) {
    dem++;
  } else {
    dem = 1;
  }
  handleInfo(dem);
}

// nút LÙI
function minus() {
  if (dem > 1) {
    dem--;
  } else {
    dem = 3;
  }
  handleInfo(dem);
}

// bấm nút xong gọi hàm render ra
function handleInfo(dem) {
  console.log(dem);
  switch (dem) {
    case 1:
      title.innerText = 'Discover innovative ways to decorate';
      para.innerText =
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
      imagePC.src = `./images/desktop-image-hero-${dem}.jpg`;
      imageMobile.src = `./images/mobile-image-hero-${dem}.jpg`;
      break;

    case 2:
      title.innerText =
        'We are available all across the globe With stores all over the world';
      para.innerText =
        "it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      imagePC.src = `./images/desktop-image-hero-${dem}.jpg`;
      imageMobile.src = `./images/mobile-image-hero-${dem}.jpg`;
      break;

    case 3:
      title.innerText = 'Shop now Manufactured with the best materials';
      para.innerText =
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to product is made as perfect and as consistent as possible. With three decades of experience in this industry';
      imagePC.src = `./images/desktop-image-hero-${dem}.jpg`;
      imageMobile.src = `./images/mobile-image-hero-${dem}.jpg`;
      break;
  }
}
