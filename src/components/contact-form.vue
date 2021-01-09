<template>
  <form
    class="contact-form"
    @submit.prevent="handleSubmit"
  >
    <!-- Error messages  -->
    <div
      v-if="errors.length > 0"
      class="error-alerts"
    >
      <div
        v-for="(error, index) in errors"
        :key="index"
        class="error-message"
      >
        <span
          v-ripple
          @click="removeErrorMessage(error.param)"
        >
          &#215;
        </span>
        {{ error.msg }}
      </div>
    </div>

    <!-- Success message -->
    <div
      v-if="sucessMessage"
      class="success-message"
    >
      <span
        v-ripple
        @click="sucessMessage = null"
      >
        &#215;
      </span>
      {{ sucessMessage }}
    </div>

    <!-- Form input content -->
    <div class="group">
      <label for="email">Email</label>
      <input
        v-model="formData.email"
        type="text"
        placeholder="Write your email..."
        :class="{'is-invalid' : classErrors.includes('email')}"
        @change="checkValidation('email')"
      >
    </div>

    <div class="group">
      <label for="message">Message</label>
      <textarea
        v-model="formData.message"
        name="message"
        placeholder="Write your message..."
        :class="{'is-invalid' : classErrors.includes('message')}"
        @change="checkValidation('message')"
      />
    </div>

    <button
      v-ripple
      type="submit"
      class="btn btn-main w-100"
    >
      Send message
    </button>
  </form>
</template>

<script>
import ContactService from '../services/ContactService'

export default {
  data: () => ({
    formData: {
      email: null,
      message: null,
    },
    errors: [],
    classErrors: [],
    sucessMessage: null,
  }),

  methods: {
    async handleSubmit() {
      this.classErrors = []
      this.sucessMessage = null

      try {
        // Handle form submit.
        await ContactService.sendEmail(this.formData).then((response) => {
          this.sucessMessage = response.data
          this.resetForm()
        })
      } catch (error) {
        this.errors = error.response.data.errors.map((error) => {
          // Set class errors.
          this.classErrors.push(error.param)

          // Set error messages.
          return {
            param: error.param,
            msg: error.msg,
          }
        })
      }
    },

    resetForm() {
      this.formData = {
        email: null,
        message: null,
      }
      this.errors = []
    },

    removeErrorMessage(param) {
      // Removing error alerts list.
      const indexOfError = this.errors.map((error) => error.param).indexOf(param)
      this.errors.splice(indexOfError, 1)

      // Removing error classes.
      const indexOfClassError = this.classErrors.indexOf(param)
      this.classErrors.splice(indexOfClassError, 1)
    },

    checkValidation(element) {
      // For email field change.
      if (element === 'email') {
        // Email pattern validation
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        // If valid email is provided remove errors.
        if (pattern.test(this.formData[element])) {
          this.removeErrorMessage('email')
        }
      }

      // For message change.
      // If message is equal or greather then 30 charachters.
      if (element === 'message' && this.formData[element].length >= 30) {
        this.removeErrorMessage('message')
      }
    },
  },
}
</script>