<template>
<div>
  <!-- Content Header (Page header) -->
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
  <section class="content">
    <div class="container-fluid">
      <!-- Main row -->
      <div class="row">
        <div class="col-12">
          <section class="content">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header ui-sortable-handle" style="cursor: move;">
                    <h3 class="card-title">
                      <i class="fas fa-chart-pie mr-1"></i>
                      Lista de Veiculos
                    </h3>
                    <div class="card-tools">
                      <ul class="nav nav-pills ml-auto mb-2">
                        <li class="nav-item pr-1 ">
                          <button class="btn btn-success" @click="showCreate"> <i class="fa fa-user" aria-hidden="true"></i> Novo</button>
                        </li>
                        <li class="nav-item">
                          <button class="btn bg-purpple"><i class="fas fa-sync"></i> Atualizar</button>
                        </li>
                        <!-- <li class="nav-item">
                          <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                        </li -->
                      </ul>
                    </div>
                  </div><!-- /.card-header -->
                  <div class="card-body">
                    <div class="card-body">
                      <table id="example1" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                          </tr>
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
    // eslint-disable-next-line no-undef
    $('#example1').DataTable({
      responsive: true,
      autoWidth: false,
      buttons: [
        'copy', 'excel', 'pdf'
      ]
    })
  },
  methods: {
    showCreate () {
      this.$router.push('/veiculos/create/')
    }
  }
}
</script>

<style></style>
