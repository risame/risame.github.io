var appMember = new Vue({
    el: '#appMember',
    data: {
      members: []
    },
    created: function () {
      _this = this;
      axios.get(`${aponder.cdnBase}/jsons/members.json`).then(function (res) {
          console.log(res)
          _this.members = res.data
      })
    },
    computed: {
        reshapedMembers: function () {
            return _.chunk(this.members, 3);
        }
    }
  })