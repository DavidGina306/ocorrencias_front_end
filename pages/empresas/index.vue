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
        <section class='content'>
          <div class='row'>
            <div class='col-12'>
              <div class='card'>
                <div class='card-header'>
                  <h3 class='card-title'>
                    DataTable with minimal features & hover style
                  </h3>
                </div>
                <!-- /.card-header -->
                <div class='card-body'>
                  <table id='example1' class='table table-bordered table-hover'>
                    <thead>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
          </div>
          <!-- /.row (main row) -->
        </section>
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
    const empresas = this.$axios.$get('empresa/datatable').then(function (response) {
      console.log(response)
    }).catch((error) => {
      if (this.$axios.isCancel(error)) {
        console.log('Request canceled', error)
      } else {
        // handle error
      }
    })
    console.log(empresas)
    // eslint-disable-next-line no-undef
    $('#example1').DataTable({
      ajax: this.$axios.$get('empresa/datatable'),
      serverSide: true,
      columns: [{
        data: 'id'
      }, {
        data: 'mail'
      }, {
        searchable: false,
        orderable: false
      }]
    })
  }
}
</script>

<style></style>
