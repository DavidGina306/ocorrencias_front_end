<template>
  <div class="content-wrapper">
  <section class="content-header">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Veiculos
            </h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">
                Veiculos
              </li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </section>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Cadastro de Veiculos</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputMarca">Marca</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.txMarca"
                    id="exampleInputMarca"
                    placeholder="Digite o Marca"
                    @keyup="keyUpHandler"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="exampleInputModelo">Modelo</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.txModelo"
                    id="exampleInputModelo"
                    placeholder="Digite o Modelo"
                    @keyup="keyUpHandler"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="exampleInputPlaca">Placa</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.txPlaca"
                    v-mask="'AAA-####'"
                    id="exampleInputPlaca"
                    placeholder="Digite o Placa"
                    @keyup="keyUpHandler"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="idEmpresa">Empresa</label>
                  <v-select
                    @input="getDepartamentos"
                    v-model="form.idEmpresa"
                    label="txNomeFantasia"
                    :options="this.idEmpresaOption"
                    :reduce="option => option.idEmpresa">
                  </v-select>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Departamento</label>
                  <v-select
                    label="txDescricao"
                    v-model="form.idDepartamento"
                    :options="this.departamentoOption"
                    :reduce="option => option.idDepartamento">
                  </v-select>
                </div>
              </div>

              <div class="card-footer">
                <button
                  type="submit"
                  @click.prevent="submit"
                  class="btn btn-success"
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
  created () { this.getidEmpresas() },
  data () {
    return {
      idEmpresaOption: [],
      departamentoOption: [],
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
        console.log('ASDAS' + el)
        el.focus()
      }
    }
  },
  methods: {
    async getidEmpresas () {
      const idEmpresas = await this.$axios.$get('empresa/all')
      this.idEmpresaOption = idEmpresas
    },
    async getDepartamentos () {
      if (this.form.idEmpresa) {
        const departamento = await this.$axios.$get(`/departamento/empresa/${this.form.idEmpresa}`)
        this.departamentoOption = departamento
        this.form.idDepartamento = undefined
      }
      this.departametnoOption = []
    },
    submit () {
      console.log(this.fom)
      this.$axios.$post('veiculo', this.form).then((resp) => {
        console.log(resp)
        this.$router.push('/veiculos')
      }).catch((error) => {
        this.showErrors(error)
      })
    },
    keyUpHandler ($event) {
      if (this.form.txMarca) {
        this.form.txMarca = String(this.form.txMarca).toUpperCase()
      }
      if (this.form.txModelo) {
        this.form.txModelo = String(this.form.txModelo).toUpperCase()
      }
      if (this.form.txPlaca) { this.form.txPlaca = String(this.form.txPlaca).toUpperCase() }
    }
  }
}
</script>

<style></style>
