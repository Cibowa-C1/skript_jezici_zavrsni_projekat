<template>
  <div class="home">
      <Header/>
      <b-container>
        <b-row class="p-3">
            <b-button v-if="admin==true" variant="secondary" size="lg" @click="newVinyl">New Vinyl</b-button>
        </b-row>
        <b-row>
          <b-col cm="6" >
            <VinylList/>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <HeaderT/>
        <b-row class="p-3">
          <b-button v-if="admin==true" variant="secondary" size="lg" @click="newCD">New CD</b-button>
        </b-row>
        <b-row>
          <b-col cm="6" >
            <CDList/>
          </b-col>
        </b-row>
        <b-row class="p-3">
          <b-button  variant="secondary" size="lg" @click="logOut">Log Out</b-button>
        </b-row>
      </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import VinylList from "@/components/VinylList";
import Vinyl from "@/views/Vinyl";
import router from "@/router";
import {mapState, mapActions} from "vuex";
import CDList from "@/components/CDList";
import HeaderT from "@/components/HeaderT";

export default {
    name: 'home',
    components: {
        Header,
        HeaderT,
        VinylList,
        CDList
    },
    computed: {
      ...mapState(['admin'])
    },

  methods:{
      ...mapActions(['logOut']),
      newVinyl: function (){
        router.push('/edit');
      },
      newCD: function (){
       router.push('/editCD');
      }


    }
  }

</script>
