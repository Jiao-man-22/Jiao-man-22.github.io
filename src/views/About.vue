<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutMe></AboutMe>
    <P>{{message}}</P>
  </div>
</template>
<script>
import AboutMe from '../components/AboutMe.vue'
export default {
  data(){
    return{
      message:'焦哥带你玩转vue-cli'
    }
  },
  components:{
    AboutMe
  }
  
}
</script>
