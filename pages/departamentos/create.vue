<template>
  <div class="content-wrapper">
  <section class="content-header">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Departamentos
            </h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">
                Departamentos
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
              <h3 class="card-title">Cadastro de Departamentos</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputNome">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.txDescricao"
                    id="exampleInputNome"
                    placeholder="Digite o Nome"
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
                    :options="this.EmpresaOption"
                    :reduce="option => option.idEmpresa">
                  </v-select>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Gerente</label>
                  <v-select
                    label="txNome"
                    v-model="form.funcionarioId"
                    :options="this.gerenteOption"
                    :reduce="option => option.idFuncionario">
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
  created () {
    this.getidEmpresas()
    this.getEmpregados()
  },
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
        console.log('ASDAS' + el)
        el.focus()
      }
    }
  },
  methods: {
    async getidEmpresas () {
      const idEmpresas = await this.$axios.$get('empresa/all')
      this.EmpresaOption = idEmpresas
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
      this.$axios.$post('departamento', this.form).then((resp) => {
        this.$router.push('/departamentos')
      }).catch((error) => {
        this.showErrors(error)
      })
    },
    keyUpHandler ($event) {
      this.form.txDescricao = String(this.form.txDescricao).toUpperCase()
    },
    async getEmpregados () {
      const empregados = await this.$axios.$get('empregado/all')
      this.gerenteOption = empregados
    }

  }
}
</script>

<style></style>
