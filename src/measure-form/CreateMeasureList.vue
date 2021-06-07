<template>
  <div class="container">
      <div class="row mx-auto my-5">
          <div class="col-3 mt-5">
              <strong>TimeLine</strong>
              <div class="col-12 mt-5">
                  <div class="timeline-circle bg-active"></div>
                  <small class="ml-3 font-weight-bold">Create System</small>
              </div>
              <div class="col-12 mt-5">
                  <div class="timeline-circle bg-disable"></div>
                  <small class="ml-3">Stage</small>
              </div>
              <div class="col-12 mt-5">
                  <div class="timeline-circle bg-disable"></div>
                  <small class="ml-3">Standard Control</small>
              </div>
              <div class="col-12 mt-5">
                  <div class="timeline-circle bg-disable"></div>
                  <small class="ml-3">Finish</small>
              </div>
          </div>
          <div class="col-8" id="measure-list-form" v-html="stepForm"></div>
      </div>
  </div>
</template>

<script>
import { CreateMeasureList } from './html/CreateMeasureList'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js CreateMeasureList',
      stepForm : CreateMeasureList
    }
  },
  mounted (){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.timeline-circle {
    display: inline-block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
}

.bg-active {
    background: #BADA55;
}
.bg-disable {
    background: #9e9e9e;
}
</style>
