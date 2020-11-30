var appBanner = new Vue({
  el: "#appBanner",
  data: {
    timeoutId: null,
    awards: [],
  },
  created: function () {
    var _this = this;
    aponder.get(`${aponder.cdnBase}/jsons/banner.json`).then(function (res) {
      console.log(res);
      _this.awards = res.data.awards;
    });
  },

  updated() {
    clearTimeout(this.timeoutId);
    this.timeoutId = aponder.startmarquee(1118,200,-100);
  },

  mounted() {
  },
});
