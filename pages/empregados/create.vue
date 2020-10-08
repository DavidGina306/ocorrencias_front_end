<template>
<div class="content-wrapper">
  <section class="content-header">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Empregados
            </h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">
                Empregados
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
              <h3 class="card-title">Cadastro de Empregados</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Nome</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite o Nome">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Senha</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Digiete a Senha">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Matricula</label>
                  <input type="text" class="form-control" id="exampleInputMatricula" placeholder="Digite a Matrícula">
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Empresa</label>
                  <v-select :options="['CAA', 'IAA']"></v-select>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Departamento</label>
                  <v-select label="countryName" :options="empresaOption"></v-select>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
              </div>

              <div class="card-footer">
                <button type="submit" class="btn btn-success"><i class='fas fa-save'> </i> Salvar</button>
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
export default {
  middleware: 'auth',
  layout: 'adminlte',
  components: {},
  mounted () { this.getEmpresas() },
  data () {
    return {
      empresaOption: false,
      loading: false,
      selectCategories: [],
      fields: {},
      self_id: '',
      action: {}
    }
  },
  methods: {
    async getEmpresas () {
      const empresas = await this.$axios.$get('empresa/all')
      this.empresaOption = empresas
    }
  }
}
</script>

<style></style>
