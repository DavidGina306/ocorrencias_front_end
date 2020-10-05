export default {
  methods: {
    showErrors (error, form = null) {
      if (error?.response?.status === 422) {
        Object.entries(error.response.data.errors).forEach((error) => {
          const legend = (form || document).querySelector(`[data-legend=${error[0]}]`)
          const errorElement = (form || document).querySelector(`[data-error=${error[0]}]`)
          if (legend) { legend.classList.add('text-danger') }
          if (errorElement) { errorElement.innerHTML = error[1] }
        })
      }
    },

    reset () {
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
