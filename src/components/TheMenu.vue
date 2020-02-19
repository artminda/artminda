<template>
  <div>
    <div v-show="flymenu || flymenu_d" class="flymenu">
      <shineBtn :text="$t('art_re')" :path="'/resume'" @menu="closeMenu($event)"></shineBtn>
      <shineBtn :text="$t('art_ser')" :path="'/services'" @menu="closeMenu($event)"></shineBtn>
      <shineBtn :text="$t('art_por')" :path="'/portfolio'" @menu="closeMenu($event)"></shineBtn>
      <shineBtn :text="$t('art_blog')" :path="'/blog'" @menu="closeMenu($event)"></shineBtn>
    </div>
    <div class="TheMenu" ref="list" @scroll="handleScroll">
      <v-layout  justify-center align-center wrap class>
        <v-flex xs12 md6 lg6 class="p-0">
          <div class="shineBtn">
            <shineBtn :text="$t('art_re')" :path="'/resume'" @menu="closeMenu($event)"></shineBtn>
            <shineBtn :text="$t('art_ser')" :path="'/services'" @menu="closeMenu($event)"></shineBtn>
            <shineBtn :text="$t('art_por')" :path="'/portfolio'" @menu="closeMenu($event)"></shineBtn>
            <shineBtn :text="$t('art_blog')" :path="'/blog'" @menu="closeMenu($event)"></shineBtn>
            <!-- <div class="dispearBlack" ></div> -->
            <div class="dispearBlack" :class="{'dispear':flymenu,'dispear_d':flymenu_d}"></div>
          </div>
          <div class="py-3 px-5 infoArea teal lighten-5">
            <h2 class="pb-1 mt-2">
              <span class="black--text">{{$t('art_getIn')}}</span>
              <span class="green--text">{{$t('art_tou')}}</span>
            </h2>
            <div class="py-1 subheading font-weight-bold">
              <v-icon color="green" left>fas fa-map-marker-alt</v-icon>
              <span class="grey--text text--darken-3">{{$t('art_site')}},&nbsp;</span>
              <span class="green--text">{{$t('art_tai')}}</span>
            </div>
            <div class="py-1 subheading font-weight-bold">
              <v-icon color="green" left>fas fa-envelope</v-icon>
              <span class="grey--text text--darken-3">doai10007118@</span>
              <span class="green--text">gmail.com</span>
            </div>
            <div class="py-1 subheading font-weight-bold">
              <v-icon color="green" left>fas fa-phone</v-icon>
              <span class="grey--text text--darken-3">0937&nbsp;</span>
              <span class="green--text">828 251</span>
            </div>
            <!-- <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-check</v-icon>
          <span>Freelance</span>
          <span class="green--text">Available</span>
            </div>-->
          </div>
        </v-flex>
        <v-flex xs12 md6 class="con_area">
          <v-container class="px-5 py-5">
            <h2 class="pb-1">
              <span class="blue-grey--text">{{$t('art_contact')}}</span>
              <span class="green--text">{{$t('art_form')}}</span>
            </h2>
            <form method="POST" action="https://formspree.io/xknrokpw" class="pb-3">
              <v-text-field
                rows="1"
                row-height="20"
                light
                name="name"
                color="green"
                background-color="transparent"
                v-model="name"
                :error-messages="nameErrors"
                v-bind:label="$t('art_textarea_name')"
                required
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                rows="1"
                row-height="20"
                light
                type="email"
                color="green"
                background-color="transparent"
                name="email"
                v-model="email"
                :error-messages="emailErrors"
                v-bind:label="$t('art_textarea_email')"
                required
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-textarea
                class="mb-4"
                rows="5"
                row-height="20"
                light
                color="green"
                background-color="transparent"
                :counter="200"
                :error-messages="bodyErrors"
                v-model="body"
                v-bind:label="$t('art_textarea')"
                name="body"
                @blur="$v.body.$touch()"
              ></v-textarea>
                <v-btn light @click="clear">{{$t('art_clear')}}</v-btn>
                <v-btn
                light
                @click="submit"
                type="submit"
                color="green"
                class="ml-4 white--text"
                :disabled=" (body.length<20)"
              >{{$t('art_send')}}</v-btn>
            </form>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import shineBtn from "./shine_btn";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
export default {
props: {
  goDark: {
    type: Boolean
  }
},  
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s ← artminda's web",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1,maximum-scale=1" },
      {
        name: "description",
        content:
          "artminda chen's Contact please keep in Touch ContactMe"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "artminda' web" },
      { property: "og:site_name", content: "artminda' web" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://artminda.github.io/artminda" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "artminda chen's Contact please keep in Touch ContactMe"
      }
    ]
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  components: {
    shineBtn
  },
  data() {
    return {
      flymenu_d: false,
      flymenu: false,
      router:"",
      name: "",
      email: "",
      body: "",
      drawer: null,
      Theclose: false,
    };
  },
methods: {
  changeTheme() {
    this.$emit("changeTheme", this.goDark);
  },
  submit() {
    this.$v.$touch();
  },
  clear() {
    this.$v.$reset();
    this.name = "";
    this.email = "";
    this.body = "";
  },
  closeMenu(data){
    this.$emit('menu', data)
  },
  handleScroll(){
    const $list = this.$refs.list;
        //如果資料有在載入中則這次請求退出
    if(this.isLoading) return; 
        //scrollTop 獲取到頂部的滾動距離
    if($list.scrollTop> 0 && this.$vuetify.theme.dark === false){
        this.flymenu = true
        return     
    }
    if($list.scrollTop> 0 && this.$vuetify.theme.dark === true){
        this.flymenu_d = true     
        return
    }
      this.flymenu = false
      this.flymenu_d = false
  }  
}, 
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push(this.$t('art_err_name'));
      !this.$v.name.required && errors.push(this.$t('art_required_name'));
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push(this.$t('art_err_email'));
      !this.$v.email.required && errors.push(this.$t('art_required_email'));
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push(this.$t('art_err_body'));
      !this.$v.body.required && errors.push(this.$t('art_required_body'));
      return errors;
    }
  }
}
</script>

<style lang="scss" scoped>
.TheMenu {
  width: 100vw;
  position: fixed;
  z-index: 888;
  background-color: #ffffff00;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(214, 214, 214, 0.507) 30%,
    rgba(117, 117, 117, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(214, 214, 214, 0.507) 30%,
    rgba(117, 117, 117, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(214, 214, 214, 0.507) 30%,
    rgba(117, 117, 117, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.shineBtn {
  display: flex;
  margin-top: 0vh;
  padding: 1.5vh;
  background-color: #616161;
  padding: 4rem 1rem;
  justify-content: center;
  margin-top: 13px;
  @media (max-width: 960px) {
    padding: 1rem 1rem;
    margin-top: 12vh;
  }
}
.infoArea {
  background-color: #616161;
  float: right;
  width: 100%;
  max-width: 420px;
}
.con_area {
  margin-top: 16vh;
  background-color: aliceblue;
  @media (max-width: 960px) {
    margin-top: 0vh;
  }
}
.p-0 {
  padding: 0 !important;
}
.uparea {
  background-color: #616161;
}
.flymenu {
  height: 82px;
  padding: 1rem 1rem;
  width: 100%;
  z-index: 1000;
  position: fixed;
  display: flex;
  top: 79px;
  background-color: #636363;
  -webkit-box-shadow: 2px 12px 11px 0px #636363a6;
	-moz-box-shadow: 2px 12px 11px 0px #636363a6;
	box-shadow: 2px 12px 11px 0px #636363a6;
}
.dispear {
  left: 0;
  right: 0;
  position: absolute;
  height: 92px;
  width: inherit;
  z-index: 1000;
  top: 79px;
  background-color: #fafafa;
}
.dispear_d {
  left: 0;
  right: 0;
  position: absolute;
  height: 92px;
  width: inherit;
  z-index: 1000;
  top: 79px;
  background-color: #121212;
}
</style>
