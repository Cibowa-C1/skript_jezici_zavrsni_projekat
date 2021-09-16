import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router" 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    vinyls: [],
    cds: [],
    admin: false,
    logged: false
  },

  mutations: {

    setUser: function (state, user) {
      state.user = user;
    },

    set_admin: function (state, admin){
      state.admin = admin;
    },

    //VINYLS----------------------------

    set_vinyls: function (state, vinyls) {
      state.vinyls = vinyls;
    },

    add_vinyl: function (state, vinyl) {
      state.vinyls.push(vinyl);
    },

    remove_vinyl: function (state, id) {
      for (let m = 0; m < state.vinyls.length; m++) {
        if (state.vinyls[m].id === id) {
          state.vinyls.splice(m, 1);
          break;
        }
      }
    },

    update_vinyl: function (state, payload) {
      for (let m = 0; m < state.vinyls.length; m++) {
        if (state.vinyls[m].id === parseInt(payload.id)) {
          state.vinyls[m].title = payload.vinyl.title;
          state.vinyls[m].artist = payload.vinyl.artist;
          state.vinyls[m].label = payload.vinyl.label;
          break;
        }
      }
    },

    //CDS------------------------------


    set_cds: function (state, cds) {
      state.cds = cds;
    },

    add_cd: function (state, cd) {
      state.cds.push(cd);
    },

    remove_cd: function (state, id) {
      for (let m = 0; m < state.cds.length; m++) {
        if (state.cds[m].id === id) {
          state.cds.splice(m, 1);
          break;
        }
      }
    },

    update_cd: function (state, payload) {
      for (let m = 0; m < state.cds.length; m++) {
        if (state.cds[m].id === parseInt(payload.id)) {
          state.cds[m].title = payload.cds.title;
          state.cds[m].artist = payload.cds.artist;
          state.cds[m].label = payload.cds.label;
          break;
        }
      }
  },
},

actions: {
  isAdmin: function ({commit},user) {
    fetch('http://localhost:81/api/isAdmin/' + user, {
      method: 'get'
    }).then((response) => {

      return response.json();
    }).then((jsonData) => {
      commit('set_admin', jsonData)
    });
  },
  login: function ({commit}, user) {
    fetch('http://localhost:81/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }).then((response) => {
      if (!response.ok)
        throw response;
      //logged = true;
      router.push('/home');
    }).then((jsonData) => {
      commit('setUser', jsonData);
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  logOut: function (){
    router.push("/");
  },

  goHome: function (){
    router.push('/home');
  },

  newUser: function ({commit}, user) {
    fetch('http://localhost:81/api/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }).then((response) => {
      if (!response.ok)
        throw response;

      router.push("/");
      return;
    }).then((jsonData) => {

    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  load_vinyls: function ({commit}) {
    fetch('http://localhost:81/api/vinyls', {method: 'get'}).then((response) => {
      if (!response.ok)
        throw response;

      return response.json()
    }).then((jsonData) => {
      commit('set_vinyls', jsonData)
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  delete_vinyl: function ({commit}, id) {
    fetch('http://localhost:81/api/vinyl/' + id, {method: 'delete'}).then((response) => {
      if (!response.ok)
        throw response;

      return response.json()
    }).then((jsonData) => {
      commit('remove_vinyl', jsonData.id)
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  new_vinyl: function ({commit}, vinyl) {
    fetch('http://localhost:81/api/vinyl', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: vinyl
    }).then((response) => {
      if (!response.ok)
        throw response;

      return response.json();
    }).then((jsonData) => {
      commit('add_vinyl', jsonData);
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  change_vinyl: function ({commit}, payload) {
    fetch('http://localhost:81/api/vinyl/' + payload.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload.vin
    }).then((response) => {
      if (!response.ok)
        throw response;

      return response.json();
    }).then((jsonData) => {
      commit('update_vinyl', {id: payload.id, vin: jsonData});
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },


  ///CDS

  load_cds: function ({commit}) {
    fetch('http://localhost:81/api/cds', {method: 'get'}).then((response) => {
      if (!response.ok)
        throw response;

      return response.json()
    }).then((jsonData) => {
      commit('set_cds', jsonData)
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  delete_cd: function ({commit}, id) {
    fetch('http://localhost:81/api/cd/' + id, {method: 'delete'}).then((response) => {
      if (!response.ok)
        throw response;

      return response.json()
    }).then((jsonData) => {
      commit('remove_cd', jsonData.id)
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  new_cd: function ({commit}, cd) {
    fetch('http://localhost:81/api/cd', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: cd
    }).then((response) => {
      if (!response.ok)
        throw response;

      return response.json();
    }).then((jsonData) => {
      commit('add_cd', jsonData);
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  },

  change_cd: function ({commit}, payload) {
    fetch('http://localhost:81/api/cd/' + payload.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload.ceedee
    }).then((response) => {
      if (!response.ok)
        throw response;

      return response.json();
    }).then((jsonData) => {
      commit('update_cd', {id: payload.id, ceedee: jsonData});
    }).catch((error) => {
      if (typeof error.text === 'function')
        error.text().then((errorMessage) => {
          alert(errorMessage);
        });
      else
        alert(error);
    });
  }
}


})
