<template>
  <div class='content-wrapper'>
  <section class='content-header'>
    <div class='content-header'>
      <div class='container-fluid'>
        <div class='row mb-2'>
          <div class='col-sm-6'>
            <h1 class='m-0 text-dark'>
              Cargos
            </h1>
          </div>
          <!-- /.col -->
          <div class='col-sm-6'>
            <ol class='breadcrumb float-sm-right'>
              <li class='breadcrumb-item'>
                <a href='#'>Home</a>
              </li>
              <li class='breadcrumb-item active'>
                Cargos
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </section>
  <section class='content'>
    <div class='container-fluid'>
      <div class='row'>
        <!-- left column -->
        <div class='col-md-12'>
          <!-- general form elements -->
          <div class='card card-primary'>
            <div class='card-header'>
              <h3 class='card-title'>Edição de Cargos</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role='form'>
              <div class='card-body'>
                <div class='form-group'>
                  <label for='exampleInputNome'>Nome</label>
                  <input
                    type='text'
                    class='form-control'
                    v-model='form.txNome'
                    id='exampleInputNome'
                    placeholder='Digite o Nome'
                    @keyup='keyUpHandler'
                    required
                  >
                </div>
                <div class='form-group'>
                  <label for='exampleInputNome'>Descricao</label>
                  <textarea
                    id='exampleInputDescricao'
                    v-model='form.txDescricao'
                    name='txDescricao'
                    class='form-control'
                    rows='5'
                    cols='33'>
                  </textarea>
                </div>
              </div>

              <div class='card-footer'>
                <button
                  type='submit'
                  @click.prevent='submit'
                  class='btn btn-success'
                  >
                  <i class='fas fa-save'> </i> Salvar
                </button>
              </div>
            </form>
          </div>
          <!-- /.card -->
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import FormMixin from '../../mixins/FormMixin'
export default {
  mixins: [FormMixin],
  middleware: 'auth',
  layout: 'adminlte',
  components: {},
  data () {
    return {
      EmpresaOption: [],
      gerenteOption: [],
      form: {},
      loading: false,
      selectCategories: [],
      fields: {},
      self_id: '',
      action: {}
    }
  },
  directive: {
    uppercase: {
      uppercase (el) {
        el.focus()
      }
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    submit () {
      this.$axios.$put('cargo/' + this.form.idCargo, this.form).then((resp) => {
        this.$router.push('/cargos')
      }).catch((error) => {
        this.showErrors(error)
      })
    },
    keyUpHandler ($event) {
      this.form.txNome = String(this.form.txNome).toUpperCase()
    }
  }
}
</script>

<style></style>
