<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="page-go">
      <router-view class="page"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
