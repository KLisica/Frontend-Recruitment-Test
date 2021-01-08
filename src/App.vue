<template>
  <div id="app">
    <header-component />

    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
}
</script>
