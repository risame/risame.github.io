window.aponder = {
  // cdnBase: 'https://cdn.jsdelivr.net/gh/risame/risame.github.io@master',
  cdnBase: "",
  get: function (url, refreshInterval = 60) {
    var _t = parseInt(Date.now() / 1000 / refreshInterval);
    url += "?_t=" + _t;
    return axios.get(url);
  },

  startmarquee: function (lh, speed, delay) {
    var p = false;
    var t;
    var sh;
    var o = document.getElementById("marqueebox");
    console.log(o);
    o.innerHTML += o.innerHTML;
    o.style.marginTop = 0;
    o.onmouseover = function () {
      p = true;
    };
    o.onmouseout = function () {
      p = false;
    };
    function start() {
      sh = o.offsetHeight;
      o.style.height = sh;
      t = setInterval(scrolling, speed);
      if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
    }
    function scrolling() {
      if (parseInt(o.style.marginTop) % lh != 0) {
        o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
        if (Math.abs(parseInt(o.style.marginTop)) >= sh / 2)
          o.style.marginTop = 0;
      } else {
        clearInterval(t);
        setTimeout(start, delay);
      }
    }
    return setTimeout(start, delay);
  },
};
