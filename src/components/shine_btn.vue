<template>
    <div v-if="path !== '/'" @click="closeMenu(path)" class="btn btn-5" :class="{ 'shine': routerName === path}">
        {{text}}
    </div>
    <div v-else @click="closeMenu(path)" class="btn btn-3" :class="{ 'btn-3_shine': homeRouter === path}">
        Paul
    </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    path: {
      type: String
    }
  },
  data () {
    return {
      routerName: ''
    }
  },
  computed: {
    homeRouter () {
      return this.$route.path
    }
  },
  mounted () {
    this.routerName = this.$route.path
  },
  methods: {
    closeMenu (path) {
      if (this.$route.path === path) {
        this.$emit('menu', { sta: false, run: 'noRun' })
        return
      }
      if (path === '/portfolio') {
        this.$emit('menu', { sta: false, run: 'portfolio' })
        this.$router.push(path)
        this.router = path
        return
      }
      this.$router.push(path)
      this.router = path
      this.$emit('menu', { sta: false, run: 'Run' })
    }
  }
}
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

//colors
$red: #4caf50;
$white: #fff;

//base styles

* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
}

//default button
.btn {
  color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    height: 50px;
    margin: 0 7px;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    text-align: center;

//   @media(min-width: 400px) {
//     display: inline-block;
//     margin-right: 2.5em;

//     &:nth-of-type(even) {
//       margin-right: 0;
//     }
//   }

  @media(min-width: 600px) {

    // margin: 0 1em 2em;

//     &:nth-of-type(even) {
//       margin-right: 2.5em;
//     }

//     &:nth-of-type(5) {
//       margin-right: 0;
//     }

  }

  &:hover { text-decoration: none; }

}

/////////////////////////////////
//button
///////////////////////////////
.btn-3 {
  max-width: 130px;
  margin: 0 0 0 2em;
  background: lighten($red, 3%);
  border: 1px solid darken($red, 4%);
  box-shadow: 0px 2px 0 darken($red, 5%), 2px 4px 6px darken($red, 2%);
  font-weight: 900;
  letter-spacing: 1px;
  transition: all 150ms linear;
}

.btn-3:hover{
  margin: 0 0 0 2em;
  background: darken($red, 1.5%);
  border: 1px solid rgba(#000, .05);
  box-shadow: 1px 1px 2px rgba(#fff, .2);
  color: lighten($red, 18%);
  text-decoration: none;
  text-shadow: -1px -1px 0 darken($red, 9.5%);
  transition: all 250ms linear;
}

.btn-3_shine{
  margin: 0 0 0 2em;
  background: darken($red, 1.5%);
  border: 1px solid rgba(#000, .05);
  box-shadow: 1px 1px 2px rgba(#fff, .2);
  color: lighten($red, 18%);
  text-decoration: none;
  text-shadow: -1px -1px 0 darken($red, 9.5%);
  transition: all 250ms linear;
}

/////////////////////////////
//button-5
///////////////////////////
.btn-5 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}

.shine {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>
