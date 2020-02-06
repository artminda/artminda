<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="380">
      <v-list class="pt-4">
        <v-list-tile active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>RESUME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/services">
          <v-list-tile-content>
            <v-list-tile-title>SERVICES</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/portfolio">
          <v-list-tile-content>
            <v-list-tile-title>PORTFOLIO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/blog">
          <v-list-tile-content>
            <v-list-tile-title>BLOG</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/contact">
          <v-list-tile-content>
            <v-list-tile-title>CONTACT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-flex class="xs10">
             <v-select
              v-model="selectLang" 
              class="hidden-md-and-up"
              :items="items"
              label="select"
              dense
              single-line
              ></v-select>
            </v-flex> 
        </v-list-tile>  
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">artminda</span>
        <span class="green--text">Chen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
    <!-- pc -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" active-class="green--text headline">Home</v-btn>
        <v-btn flat to="/resume" active-class="green--text headline">Resume</v-btn>
        <v-btn flat to="/services" active-class="green--text headline">Services</v-btn>
        <v-btn flat to="/portfolio" active-class="green--text headline">Portfolio</v-btn>
        <v-btn flat to="/blog" active-class="green--text headline">Blog</v-btn>
        <v-btn flat to="/contact" active-class="green--text headline">Contact</v-btn>
        <v-select
          v-model="selectLang"
          class="selectWidth ml-3 mr-3"
          :items="items"
          label="select lang"
          dense
          single-line
        ></v-select>
        <v-btn @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    goDark: {
      type: Boolean
    },
    lang: {
      type: String
    }
  },
  data() {
    return {
      selectLang: localStorage.getItem('lang') === "tw" ? "中文" : "English" ,
      items:["English","中文"],
      drawer: null
    };
  },
  watch:{
    selectLang(val){
      this.$emit("changeLang", val);
    }
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    }
  }
};
</script>

<style >
.selectWidth {
  width: 109px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-item-align: center;
  align-self: center;
}
</style>