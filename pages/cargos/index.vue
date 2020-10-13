<template>
<div>
  <!-- Content Header (Page header) -->
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
                      Lista de Cargos
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
                      <table id='cargos_data_table' class='table table-bordered table-hover'>
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
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
    console.log('CArgos')
    this.$axios.$get('cargo')
    // eslint-disable-next-line no-undef
    $('#cargos_data_table').DataTable({
      ajax: {
        crossDomain: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        url: 'http://127.0.0.1:9090/cargo/datatable',
        beforeSend (xhr) {
          console.log(xhr)
          xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYwMjk1Mzk2M30.OPTz-DVCxJJjksJQKqQc8_6bowh266szE1K8Gz-ahFXBnOB25x8if-UwKsZ9lgvZZ3v1c5-fZoxCtpz0VyzOGA')
        },
        type: 'POST',
        data (d) {
          return JSON.stringify(d)
        }
      },
      responsive: true,
      autoWidth: false,
      serverSide: true,
      buttons: [
        'copy', 'excel', 'pdf'
      ],
      columns: [
        { title: 'ID', data: 'idCargo' },
        { title: 'NOME', data: 'txNome' },
        { title: 'DESCRICAO', data: 'txDescricao' }
      ]
    })
  },
  methods: {
    showCreate () {
      this.$router.push('/cargos/create/')
    },
    flatten (params) {
      params.columns.forEach(function (column, index) {
        params['columns[' + index + '].data'] = column.data
        params['columns[' + index + '].name'] = column.name
        params['columns[' + index + '].searchable'] = column.searchable
        params['columns[' + index + '].orderable'] = column.orderable
        params['columns[' + index + '].search.regex'] = column.search.regex
        params['columns[' + index + '].search.value'] = column.search.value
      })
      delete params.columns

      params.order.forEach(function (order, index) {
        params['order[' + index + '].column'] = order.column
        params['order[' + index + '].dir'] = order.dir
      })
      delete params.order

      params['search.regex'] = params.search.regex
      params['search.value'] = params.search.value
      delete params.search

      return params
    }
  }
}
</script>

<style></style>
