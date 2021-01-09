<template>
  <router-link
    v-if="redirect"
    v-ripple
    :to="redirect"
    :class="{'btn-main' : primary}"
    class="btn"
  >
    {{ title }}
  </router-link>

  <button
    v-else
    v-ripple
    :class="{'btn-main' : primary}"
    class="btn"
  >
    {{ title }}
    <span class="icon">
      <chevron-right />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    primary: {
      type: Boolean,
      required: false,
      default: false,
    },

    redirect: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
