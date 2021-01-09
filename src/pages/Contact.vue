<template>
  <div class="container page-cont contact-page text-center">
    <div class="row justify-center">
      <div class="col-6 self-center">
        <div class="content">
          <h1>Get in touch</h1>
          <p>I look forward to hear from you!</p>
        </div>

        <contact-form />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/contact-form'

export default {
  components: { ContactForm },
}
</script>