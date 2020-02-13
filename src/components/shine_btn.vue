<template>
    <div @click="closeMenu(path)" class="btn btn-5" :class="{ 'shine': routerName === path}">
        {{text}}  
    </div>    
</template>    
<script>
export default {
props:{
    text: {
      type: String
    },
     path: {
      type: String
    }
  },
data(){
  return {
   routerName:''
  }  
},
mounted(){
    this.routerName = this.$route.path
},  
methods: {
    closeMenu(path){
      if (this.$route.path === path){
        this.$emit('menu', {sta:false, run:'noRun'})
        return  
      }  
      this.$router.push(path)
      this.router = path
      this.$emit('menu', false)
    }
}   
}
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

//colors
$red: #E1332D;
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
    margin: 0 2em;
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
//button one
///////////////////////////////
.btn-1 {
  background: darken($red, 1.5%);
  font-weight: 100;
  
  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0; 
    width: 100%; 
  }
  
  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
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