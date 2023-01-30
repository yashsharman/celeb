class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="navbar-div"><nav>
    <div class="hamburger-Menu-div">
      <div class="stacks stacks-1"></div>
      <div class="stacks stacks-2"></div>
      <div class="stacks stacks-3"></div>
    </div>
    <a href="./">
    <div class="logo-div">
      <img loading="lazy" src="./assets/img/logo.png" alt="company logo" srcset="" width="90" height="29" />
      </div>
      </a>
    <ul class="links-list">
      <li><a id="link-list-items" href="./wedding-card.html">Wedding Invitation</a></li>
      <li><a href="./video-invite.html" class="video-invite-link">Video Invitation</a></li>

    </ul>
    <div>
    <div class="login login-btn" id="login-btn">Login</div>
    <div class="profile-img-div"></div>
    </div>
    
    <div class="mobile-slider">
    <div>
      <div class="login-info-container">
      
      <button class=" mobile-login-btn" id="login-btn">Login</button>
      </div>
      <a href="./wedding-card.html"><div class="mobile-link-div"><img loading="lazy" src="../assets/img/navbar/card-invite.webp">Wedding Invitation</div></a>
      <a href="./video-invite.html"><div class="mobile-link-div"><img loading="lazy" src="./assets/img/navbar/video-invite.webp">Video Invitation</div></a>
      <a href="my-order.html"><div class="mobile-link-div"><img loading="lazy" src="./assets/img/navbar/order.webp">My Orders</div></a>
      <a href="draft.html"><div class="mobile-link-div"><img loading="lazy" src="./assets/img/navbar/draft.webp">My Draft</div></a>
      </div>
    </nav>
    <div id="dashboard"></div>
    </div>
  </div>`;
  }
}
customElements.define("my-navbar", MyNavbar);
let clickedBurger = 0;
document.querySelector(".hamburger-Menu-div").addEventListener("click", () => {
  if (clickedBurger == 0) {
    document.querySelector(".mobile-slider").style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
    clickedBurger++;
  } else {
    document.querySelector(".mobile-slider").style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
    clickedBurger = 0;
  }
});

document.querySelector(".mobile-slider").addEventListener("click", (e) => {
  document.querySelector(".mobile-slider").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
  clickedBurger = 0;

});
document
  .querySelector(".mobile-slider > div")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });
  