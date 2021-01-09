<template>
  <header>
    <div class="inner">
      <div class="left">
        <router-link to="/">
          My App
        </router-link>
      </div><!-- /left -->

      <div class="right">
        <router-link
          v-ripple
          to="/"
        >
          Home
        </router-link>

        <router-link
          v-ripple
          to="/contact-us"
        >
          Contact us
        </router-link>
      </div><!-- /right -->
    </div>
  </header>
</template>
