import queryString from 'query-string';

class OauthModal {
  constructor(url, redirectUrl) {
    this.url = url;
    this.redirectUrl = redirectUrl;
  }

  open() {
    const h = 500;
    const w = 500;

    const dualScreenLeft =
      window.screenLeft != undefined ? window.screenLeft : screen.left;
    const dualScreenTop =
      window.screenTop != undefined ? window.screenTop : screen.top;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;

    this.authWindow = window.open(
      this.url,
      null,
      `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
    );
  }

  checkAuth(successCallback) {
    let code;

    try {
      if (this.redirectUrl.includes(this.authWindow.location.pathname)) {
        code = queryString.parse(this.authWindow.location.search).code;
        this.authWindow.close();
      }
    } catch (e) {
      if (e.code != e.SECURITY_ERR) {
        throw e;
      }
    }

    if (code) {
      successCallback({ code });
    }

    if (this.authWindow.closed) {
      clearInterval(this.timer);
    }
  }

  authorize(successCallback) {
    this.open();
    this.timer = setInterval(this.checkAuth.bind(this, successCallback), 200);
  }
}

export default OauthModal;
