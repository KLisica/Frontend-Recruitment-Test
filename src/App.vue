<template>
  <div id="app">
    <base-header />

    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
