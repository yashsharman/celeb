class MyFooter extends HTMLElement{connectedCallback(){this.innerHTML=`<footer>
        <div class="footer-main">
          <div class="footer-main-div company-info">
          <img loading="lazy" src="./assets/img/companyLogo.webp" alt="Company Logo" width="112" height="92">
            <p>
              Celebrare is a startup by Alumni of IIT Hyderabad working in the
              digital India sector to transform wedding invitations market. We
              have 3,00,000+ app downloads on play store.
            </p>
          </div>
          <div class="footer-main-div">
            <h2>Wedding</h2>
            <a href="./wedding-card.html">Save The Date</a>
            <a href="./wedding-card.html">North Indian</a>
            <a href="./wedding-card.html">South Indian</a>
            <a href="./wedding-card.html">Sangeet</a>
            <a href="./wedding-card.html">Haldi</a>
            <a href="./wedding-card.html">Mehandi</a>
            <a href="./wedding-card.html">Muslim</a>
            <a href="./wedding-card.html">Sikh</a>
          </div>
          <div class="footer-main-div">
            <h2>Policy</h2>
            <a href="./policyNew.html?policy=privacyPolicy">Privacy Policy</a>
            <a href="./policyNew.html?policy=termsofuse">Terms Of Use</a>
            <a href="./policyNew.html?policy=returnPolicy">Return, shipping & cancellation policy</a>
          </div>
          <div class="footer-main-div">
            <h2>Contact info</h2>
            <span>FAQ's</span>
            <a href="./aboutUsPage.html">About Us</a>
            <span>+91-8005993442</span>
            <span>support@celebrare.in</span>
          </div>
          <div class="footer-main-div stay-connected">
            <h2>Stay Connected</h2>
            <div class="social-links">
              <a href="https://in.pinterest.com/celebrare_in/" target="_blank" aria-label="pinterest page">
                <i class="fa fa-pinterest"></i
              ></a>
  
              <a href="https://www.facebook.com/celebrare.in" target="_blank" aria-label="pinterest page">
                <i class="fa fa-facebook-square"></i
              ></a>
            </div>
            <a
              class="googlePlayicon-div"
              href="https://play.google.com/store/apps/details?id=com.enjoy.celebrare"
              target="_blank"
              aria-label="playstore page"
            >
              <i class="fab fa-google-play me-2"></i>
              <div class="google-play-text">Get it on Google Play</div>
            </a>
            <h2 class="qrcode-p">Or scan QR code</h2>
            <img loading="lazy" class="qr-code" src="./assets/img/playstore-qr-code.webp" alt="google playstore" width="112" height="112">
          </div>
        </div>
        <hr>
        <div class="footer-copyright">
          <p>© Celebrare 2022</p>
        </div>
      </footer>`}}customElements.define("my-footer",MyFooter);