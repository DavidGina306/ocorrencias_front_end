<template>
<div>
  <!-- Content Header (Page header) -->
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0 text-dark'>
            Empresas
          </h1>
        </div>
        <!-- /.col -->
        <div class='col-sm-6'>
          <ol class='breadcrumb float-sm-right'>
            <li class='breadcrumb-item'>
              <a href='#'>Home</a>
            </li>
            <li class='breadcrumb-item active'>
              Empresas
            </li>
          </ol>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <!-- Main row -->
      <div class='row'>
        <div class='col-12'>
          <section class='content'>
            <div class='row'>
              <div class='col-12'>
                <div class='card'>
                  <div class='card-header ui-sortable-handle' style='cursor: move'>
                    <h3 class='card-title'>
                      <i class='fas fa-chart-pie mr-1'></i>
                      Lista de Empresas
                    </h3>
                    <div class='card-tools'>
                      <ul class='nav nav-pills ml-auto mb-2'>
                        <li class='nav-item pr-1 '>
                          <button class='btn btn-success' @click='showCreate'> <i class='fa fa-user' aria-hidden='true'></i> Novo</button>
                        </li>
                        <li class='nav-item'>
                          <button class='btn bg-purpple'><i class='fas fa-sync'></i> Atualizar</button>
                        </li>
                        <!-- <li class='nav-item'>
                          <a class='nav-link' href='#sales-chart' data-toggle='tab'>Donut</a>
                        </li -->
                      </ul>
                    </div>
                  </div><!-- /.card-header -->
                  <div class='card-body'>
                    <div class='card-body'>
                      <div class="overflow-auto">
                        <div>
                          <b-row>
                            <b-col cols="2">
                              <span>Mostrar</span>
                              <b-form-select
                                @change="pesquisar"
                                v-model="search.size"
                                :options="options"
                                size="sm"
                                class="mt-1 mb-3">
                              </b-form-select>
                            </b-col>
                            <b-col cols="6"></b-col>
                            <b-col cols="4">
                              <span>Pesquisar</span>
                              <b-input v-model="search.searchTerm" @keyup="pesquisar(search.searchTerm)" size="sm" id="inline-form-input-username" placeholder=""></b-input>
                            </b-col>
                          </b-row>
                        </div>
                        <b-table
                          bordered
                          :fields="fields"
                          striped
                          hover
                          id="my-table"
                          :items="empresas"
                          :per-page="this.search.size"
                          :current-page="currentPage"
                          responsive="sm"
                          small>
                            <template v-slot:cell(idEmpresa)="data">
                              <b-dropdown right split text="AÇÕES">
                                 <b-dropdown-item @click="alterarStatus(data.item)"><i class="fas fa-toggle-on"></i> Alterar Status</b-dropdown-item>
                                 <b-dropdown-divider> </b-dropdown-divider>
                                 <b-dropdown-item @click="editar(data.item)"><i class="fas fa-exchange-alt"></i> Editar</b-dropdown-item>
                                 <b-dropdown-divider> </b-dropdown-divider>
                                 <b-dropdown-item><i class="far fa-trash-alt"></i> Deletar</b-dropdown-item>
                              </b-dropdown>
                            </template>
                        </b-table>
                        <p class="mt-3 pt-2">Página Atual: {{ currentPage }}</p>
                        <b-pagination
                          first-text="Início"
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="this.search.size"
                          aria-controls="my-table"
                          last-text="Fim"
                          align="right"
                        ></b-pagination>
                      </div>
                    </div>
                  </div><!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </div>
            <!-- /.row (main row) -->
          </section>
        </div>
      </div>

    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
</template>
<script>
export default {
  auth: 'auth',
  layout: 'adminlte',
  components: {},
  mounted () {
    this.pesquisar()
  },
  data () {
    return {
      fields: [
        { key: 'idEmpresa', label: '' },
        { key: 'txNomeFantasia', label: 'NOME', sortable: true }
      ],
      empresas: [],
      gerenteOption: [],
      form: {},
      loading: false,
      currentPage: 1,
      search: { page: 1, size: 10, searchTerm: '' },
      perPage: 10,
      options: [
        { value: 5, text: '5' },
        { value: 10, text: '10' },
        { value: 20, text: '50' }
      ]
    }
  },
  computed: {
    rows () {
      return this.empresas.length
    }
  },
  methods: {
    showCreate () {
      this.$router.push('/empresas/create/')
    },
    editar (item) {
      this.$router.push({ name: 'empresas-edit', params: item })
    },
    alterarStatus (item) {
      //
    },
    pesquisar () {
      this.$axios.$get(`empresa/search?page=0&size=${this.search.size}&searchTerm=${this.search.searchTerm}`).then((resp) => {
        this.empresas = resp.empresas
      }).catch((error) => {
        this.showErrors(error)
      })
    }
  }
}
</script>

<style></style>
