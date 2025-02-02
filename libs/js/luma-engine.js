window.onload = () => {
  new LumaEngine();
};

class LumaEngine {
  // enums
  SPLASH_SCREEN_RESOLVE_TIME = 2000;

  // vars
  body = null;

  constructor() {
    this.body = document.getElementById("engine");
    this.showSplashScreen().then(() => {
      this.loadContent();
    });
  }

  showSplashScreen = () => {
    return new Promise((resolve) => {
      this.loadSplashScreen();

      setTimeout(() => {
        resolve();
      }, this.SPLASH_SCREEN_RESOLVE_TIME);
    });
  };

  loadSplashScreen() {
    this.body.innerHTML =
      "<div class='modal-centered'><p>Loading</p> <img src='./assets/images/luma.gif' width='50px'/></div>";
  }

  loadContent() {
    console.log("Laoding contents");
    this.body.innerHTML =
      "<div class='modal-centered'><p>Hello World <br /> a new project made by <a href='https://github.com/RIDY01'>RIDY01</a></p></div>";
  }
}
