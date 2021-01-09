import axios from 'axios'
import config from '../../config/config.env'

// Set axios base url on API endpoint.
axios.defaults.baseURL = config.API_URL

class ContactService {
  // Sending email to API.
  static sendEmail(formData) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post('/contact', formData)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default ContactService
