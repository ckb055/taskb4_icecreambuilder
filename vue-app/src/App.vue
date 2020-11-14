<template>
  <div id="app">
    <ControlButtons/>
    <b-button variant="primary">
        yo
    </b-button>
  </div>
</template>

<script>
import ControlButtons from './components/ControlButtons'

export default {
  name: 'App',
  components: {
    ControlButtons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
