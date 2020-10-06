<template>
<div>
  <section class="login-page section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3>{{logintitle}}</h3>
          <div class="theme-card">
            <form class="theme-form" @submit.prevent="send">
              <div class="form-group" name="nome_guerra_div" label="nome_guerra_lb" :required="true">
                <input type="text" v-model="form.username" class="form-control" placeholder="username" name="username" />
              </div>
              <div class="form-group" name="password" label="Password" :required="true">
                <input type="password" v-model="form.password" name="password" class="form-control" placeholder="Enter your password" />
              </div>
              <button type="submit" class="btn btn-solid">Login</button>
            </form>
          </div>
        </div>
        <div class="col-lg-6 right-login">
          <h3>{{registertitle}}</h3>
          <div class="theme-card authentication-right">
            <h6 class="title-font">Create A Account</h6>
            <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to
              be able to order from our shop. To start shopping click register.</p>
            <!-- <nuxt-link :to="{ path: '/page/register'}" class="btn btn-solid">Create an Account
            </nuxt-link> -->
            {{form}}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import FormMixin from '../../mixins/FormMixin'
export default {
  auth: false,
  mixins: [FormMixin],
  data () {
    return {
      form: {},
      passord: '',
      logintitle: 'Login',
      registertitle: 'Novo Empregado'
    }
  },
  methods: {
    send ({
      target
    }) {
      console.log('aqui')
      this.$auth.loginWith('local', {
        data: this.form
      }).then((resp) => {
        console.log(resp)
        this.$router.push('/empresas')
      }).catch((error) => {
        this.showErrors(error, target)
      })
    }
  }
}
</script>
