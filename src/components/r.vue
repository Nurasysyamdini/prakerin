<template>
    <section class="content" v-if="totaluser" v-show="totaluser">
        <div class="container-fluid">
            <div class="row" v-animate-css="'fadeIn'">
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="bg-white info-box"
                        style="background: linear-gradient(141.89deg, rgb(254, 153, 0) -70%, rgba(254, 153, 0, 0) 50%) no-repeat;">
                        <span class="bg-white img-circle d-flex align-items-center justify-content-center"
                            style="width: 70px; height: 70px; line-height: 70px; font-size: 35px;">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="#FE9900">
                                <path
                                    d="M29.3359 21.4062C24.2096 21.4062 20.0391 25.5768 20.0391 30.7031C20.0391 35.8295 24.2096 40 29.3359 40C34.5053 40 38.7109 35.8295 38.7109 30.7031C38.7109 25.5768 34.5053 21.4062 29.3359 21.4062ZM32.1893 29.5784L29.0643 33.3284C28.8402 33.5972 28.5095 33.75 28.1641 33.75C28.1192 33.75 28.0741 33.7474 28.0289 33.7422C27.6361 33.6966 27.2927 33.4559 27.1159 33.1022L25.8659 30.6022C25.5764 30.0234 25.8111 29.3194 26.3899 29.03C26.9687 28.7404 27.6727 28.9752 27.9622 29.5541L28.4109 30.4514L30.3888 28.0779C30.8031 27.5808 31.5421 27.5137 32.0392 27.9278C32.5365 28.3422 32.6037 29.0811 32.1893 29.5784Z"
                                    fill="#FE9900" />
                                <path
                                    d="M28.8309 6.67602L24.076 1.75891C24.0737 1.75656 24.0714 1.75414 24.0691 1.7518C22.9744 0.638516 21.451 0 19.8898 0H4.80469C2.86617 0 1.28906 1.57711 1.28906 3.51562V33.9062C1.28906 35.8448 2.86617 37.4219 4.80469 37.4219H19.8352C18.488 35.5225 17.6953 33.2038 17.6953 30.7031C17.6953 24.2845 22.9173 19.0625 29.3359 19.0625C29.7314 19.0625 30.1223 19.0823 30.5078 19.1205V10.7797C30.5078 9.23523 29.9123 7.77813 28.8309 6.67602ZM13.7109 26.1719H7.46094C6.81375 26.1719 6.28906 25.6472 6.28906 25C6.28906 24.3528 6.81375 23.8281 7.46094 23.8281H13.7109C14.3581 23.8281 14.8828 24.3528 14.8828 25C14.8828 25.6472 14.3581 26.1719 13.7109 26.1719ZM13.7109 19.9219H7.46094C6.81375 19.9219 6.28906 19.3972 6.28906 18.75C6.28906 18.1028 6.81375 17.5781 7.46094 17.5781H13.7109C14.3581 17.5781 14.8828 18.1028 14.8828 18.75C14.8828 19.3972 14.3581 19.9219 13.7109 19.9219ZM13.7109 13.6719H7.46094C6.81375 13.6719 6.28906 13.1472 6.28906 12.5C6.28906 11.8528 6.81375 11.3281 7.46094 11.3281H13.7109C14.3581 11.3281 14.8828 11.8528 14.8828 12.5C14.8828 13.1472 14.3581 13.6719 13.7109 13.6719ZM21.2109 19.9219H19.9609C19.3137 19.9219 18.7891 19.3972 18.7891 18.75C18.7891 18.1028 19.3137 17.5781 19.9609 17.5781H21.2109C21.8581 17.5781 22.3828 18.1028 22.3828 18.75C22.3828 19.3972 21.8581 19.9219 21.2109 19.9219ZM21.2109 13.6719H19.9609C19.3137 13.6719 18.7891 13.1472 18.7891 12.5C18.7891 11.8528 19.3137 11.3281 19.9609 11.3281H21.2109C21.8581 11.3281 22.3828 11.8528 22.3828 12.5C22.3828 13.1472 21.8581 13.6719 21.2109 13.6719Z"
                                    fill="#FE9900" />
                            </svg>
                        </span>
                        <!-- <span class="info-box-icon bg-info elevation-1">
              <i class="fa fa-users"></i>
            </span>-->
                        <div class="info-box-content">
                            <!-- <span class="info-box-text text-info">Total User</span> -->
                            <span class="font-size-24 font-weight-bold" style="color: rgb(254, 153, 0);">Total
                                User</span>
                            <span class="info-box-number" v-animate-css="'fadeInUp'">
                                <small class="badge badge-warning font-size-16" v-for="(item, index) in totaluser">
                                    <countTo :startVal='0' :endVal='item.totaljab' :duration='5000'></countTo>
                                </small>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="mb-3 bg-white info-box"
                        style="background: linear-gradient(141.89deg, rgb(71, 188, 188) -70%, rgba(254, 153, 0, 0) 50%) no-repeat;">
                        <span class="bg-white img-circle d-flex align-items-center justify-content-center"
                            style="width: 70px; height: 70px; line-height: 70px; font-size: 35px;">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="#47BCBC">
                                <path
                                    d="M28 0H6C5 0 4 1 4 2V38C4 39.2 5 40 6 40H34C35 40 36 39.2 36 38V8L28 0ZM14 10H16V8C16 7 17 6 18 6C19 6 20 7 20 8V10H22C23 10 24 11 24 12C24 13.2 23 14 22 14H20V16C20 17.2 19 18 18 18C17 18 16 17.2 16 16V14H14C13 14 12 13.2 12 12C12 11 13 10 14 10ZM22 34H10C9 34 8 33 8 32C8 31 9 30 10 30H22C23.2 30 24 31 24 32C24 33 23 34 22 34ZM30 26H10C9 26 8 25 8 24C8 23 9 22 10 22H30C31.2 22 32 23 32 24C32 25 31 26 30 26Z"
                                    fill="#47BCBC" />
                            </svg>
                        </span>
                        <!-- <span class="info-box-icon bg-danger elevation-1">
              <i class="fa fa-user"></i>
            </span>-->

                        <div class="info-box-content">
                            <!-- <span class="info-box-text text-danger">Total User Pendamping</span> -->
                            <span class="font-size-24 font-weight-bold" style="color: rgb(71, 188, 188);">Total User
                                Pendamping</span>
                            <span class="info-box-number" v-animate-css="'fadeInUp'">
                                <small class="badge badge-info font-size-16" v-for="(item, index) in totaluser">
                                    <countTo :startVal='0' :endVal='item.pendamping' :duration='5000'></countTo>
                                </small>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->

                <!-- fix for small devices only -->
                <div class="clearfix hidden-md-up"></div>

                <div class="col-md-3 col-sm-6 col-12">
                    <div class="mb-3 bg-white info-box"
                        style="background: linear-gradient(141.89deg, rgb(241, 90, 90) -70%, rgba(254, 153, 0, 0) 50%) no-repeat;">
                        <!-- <span class="info-box-icon bg-success elevation-1">
              <i class="fa fa-user-times"></i>
            </span>-->
                        <span class="bg-white img-circle d-flex align-items-center justify-content-center"
                            style="width: 70px; height: 70px; line-height: 70px; font-size: 35px;">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="#F15A5A">
                                <path
                                    d="M36.7998 0C35.1998 0 33.7998 1.4 33.7998 3V6H39.7998V3C39.7998 1.4 38.5998 0 36.7998 0Z"
                                    fill="#F15A5A" />
                                <path d="M34 10V29C34 30.6 35.4 40 37 40C38.6 40 40 30.6 40 29V10H34Z" fill="#F15A5A" />
                                <path
                                    d="M22 0H2C0.8 0 0 0.8 0 2V38C0 39.2 1 40 2 40H28C29.2 40 30 39.2 30 38V8L22 0ZM6 6H18C19.2 6 20 6.8 20 8C20 9.2 19.2 10 18 10H6C4.8 10 4 9.2 4 8C4 6.8 4.8 6 6 6ZM25.4 27.4L17.4 35.4C16.6 36.2 15 36.2 14.4 35L11.8 31L7.6 35.2C6.8 36 5.6 36 4.8 35.2C4 34.4 4 33.2 4.8 32.4L10.8 26.4C11.6 25.6 13.2 25.6 13.8 26.8L16.4 30.8L22.6 24.6C23.4 23.8 24.6 23.8 25.4 24.6C26.2 25.4 26.2 26.6 25.4 27.4ZM24 18H6C4.8 18 4 17.2 4 16C4 14.8 4.8 14 6 14H24C25.2 14 26 14.8 26 16C26 17.2 25.2 18 24 18Z"
                                    fill="#F15A5A" />
                            </svg>
                        </span>

                        <div class="info-box-content">
                            <!-- <span class="info-box-text text-success">Total User Apd Kab/Kota</span> -->
                            <span class="font-size-24 font-weight-bold" style="color: rgb(241, 90, 90);">Total User Apd
                                Kab/Kota</span>
                            <span class="info-box-number" v-animate-css="'fadeInUp'">
                                <small class="badge badge-danger font-size-16" v-for="(item, index) in totaluser">
                                    <countTo :startVal='0' :endVal='item.apdkab' :duration='6000'></countTo>
                                </small>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="mb-3 bg-white info-box"
                        style="background: linear-gradient(141.89deg, rgb(119, 119, 219) -70%, rgba(254, 153, 0, 0) 50%) no-repeat;">
                        <span class="bg-white img-circle d-flex align-items-center justify-content-center"
                            style="width: 70px; height: 70px; line-height: 70px; font-size: 35px;">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="#7777DB">
                                <path
                                    d="M24.6875 2.34375H23.3154C22.8313 0.979609 21.5278 0 20 0C18.4722 0 17.1688 0.979609 16.6846 2.34375H15.3125C13.3739 2.34375 11.7969 3.92078 11.7969 5.85938C11.7969 6.50711 12.321 7.03125 12.9688 7.03125H27.0312C27.679 7.03125 28.2031 6.50711 28.2031 5.85938C28.2031 3.92078 26.6261 2.34375 24.6875 2.34375Z"
                                    fill="#7777DB" />
                                <path
                                    d="M31.7188 4.6875H30.4283C30.5055 5.06633 30.5469 5.45812 30.5469 5.85938C30.5469 7.79797 28.9698 9.375 27.0312 9.375H12.9688C11.0302 9.375 9.45312 7.79797 9.45312 5.85938C9.45312 5.45812 9.49445 5.06633 9.57172 4.6875H8.28125C6.34266 4.6875 4.76562 6.26453 4.76562 8.20312V36.4844C4.76562 38.423 6.34266 40 8.28125 40H31.7188C33.6573 40 35.2344 38.423 35.2344 36.4844V8.20312C35.2344 6.26453 33.6573 4.6875 31.7188 4.6875ZM16.4844 32.8125H11.7969C11.1491 32.8125 10.625 32.2884 10.625 31.6406C10.625 30.9929 11.1491 30.4688 11.7969 30.4688H16.4844C17.1321 30.4688 17.6562 30.9929 17.6562 31.6406C17.6562 32.2884 17.1321 32.8125 16.4844 32.8125ZM16.4844 24.6094H11.7969C11.1491 24.6094 10.625 24.0852 10.625 23.4375C10.625 22.7898 11.1491 22.2656 11.7969 22.2656H16.4844C17.1321 22.2656 17.6562 22.7898 17.6562 23.4375C17.6562 24.0852 17.1321 24.6094 16.4844 24.6094ZM16.4844 16.4062H11.7969C11.1491 16.4062 10.625 15.8821 10.625 15.2344C10.625 14.5866 11.1491 14.0625 11.7969 14.0625H16.4844C17.1321 14.0625 17.6562 14.5866 17.6562 15.2344C17.6562 15.8821 17.1321 16.4062 16.4844 16.4062ZM27.8598 33.1559C28.3175 33.6136 28.3175 34.3552 27.8598 34.813C27.6309 35.0419 27.331 35.1563 27.0312 35.1563C26.7315 35.1563 26.4316 35.0419 26.2027 34.813L24.6875 33.2977L23.1723 34.813C22.9434 35.0419 22.6435 35.1563 22.3438 35.1563C22.044 35.1563 21.7441 35.0419 21.5152 34.813C21.0575 34.3552 21.0575 33.6136 21.5152 33.1559L23.0304 31.6406L21.5152 30.1254C21.0574 29.6677 21.0574 28.926 21.5152 28.4683C21.9729 28.0105 22.7145 28.0105 23.1723 28.4683L24.6875 29.9835L26.2027 28.4683C26.6605 28.0105 27.4021 28.0105 27.8598 28.4683C28.3176 28.926 28.3176 29.6677 27.8598 30.1254L26.3446 31.6406L27.8598 33.1559ZM29.0316 21.9223L25.516 25.4379C25.2871 25.6668 24.9873 25.7812 24.6875 25.7812C24.3877 25.7812 24.0878 25.6668 23.859 25.4379L21.5152 23.0941C21.0575 22.6364 21.0575 21.8948 21.5152 21.437C21.973 20.9793 22.7146 20.9793 23.1723 21.437L24.6875 22.9523L27.3746 20.2652C27.8323 19.8074 28.574 19.8074 29.0317 20.2652C29.4895 20.7229 29.4895 21.4645 29.0316 21.9223ZM29.0316 14.891L25.516 18.4066C25.2871 18.6355 24.9873 18.75 24.6875 18.75C24.3877 18.75 24.0878 18.6355 23.859 18.4066L21.5152 16.0629C21.0575 15.6052 21.0575 14.8635 21.5152 14.4058C21.973 13.948 22.7146 13.948 23.1723 14.4058L24.6875 15.921L27.3746 13.2339C27.8323 12.7762 28.574 12.7762 29.0317 13.2339C29.4895 13.6916 29.4895 14.4333 29.0316 14.891Z"
                                    fill="#7777DB" />
                            </svg>
                        </span>
                        <!-- <span class="info-box-icon bg-warning elevation-1">
              <i class="fa fa-user-plus"></i>
            </span>-->

                        <div class="info-box-content">
                            <!-- <span class="info-box-text text-warning">Total User Korkab</span> -->
                            <span class="font-size-24 font-weight-bold" style="color: rgb(119, 119, 219);">Total User
                                Korkab</span>
                            <span class="info-box-number" v-animate-css="'fadeInUp'">
                                <small class="badge bg-purple font-size-16" v-for="(item, index) in totaluser">
                                    <countTo :startVal='0' :endVal='item.korkab' :duration='6000'></countTo>
                                </small>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
                <!-- Left col -->
                <div class="col-md-6">
                    <!-- MAP & BOX PANE -->
                    <div class="card" v-animate-css="'fadeIn'">
                        <div class="card-header">
                            <h4 class="text-lg card-title font-weight-bold" style="color: rgb(254, 153, 0);">Welcome to
                                SIMPAD - Sistem Informasi Pengadministrasi Data PKH Kab. Sragen</h4>

                            <!-- <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div> -->
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body imgberanda">
                            <p align="justify" v-animate-css="'fadeInUp'">
                                Dalam rangka percepatan penanggulangan kemiskinan sekaligus pengembangan kebijakan di
                                bidang perlindungan sosial,
                                Pemerintah Indonesia mulai tahun 2007 telah melaksanakan Program Keluarga Harapan (PKH).
                            </p>
                            <p align="justify" v-animate-css="'fadeInUp'">
                                PKH dikenal di negara lain dengan istilah Conditional Cash Transfers (CCT) atau bantuan
                                tunai bersyarat. PKH lebih dimaksudkan kepada upaya membangun sistem perlindungan sosial
                                kepada masyarakat miskin. Pelaksanaan di
                                Indonesia diharapakan akan membantu penduduk termiskin, bagian masyarakat yang paling
                                membutuhkan uluran tangan
                                dari siapapun juga.
                            </p>
                            <p align="justify" v-animate-css="'fadeInUp'">Program Keluarga Harapan (PKH) di Kabupaten
                                Sragen dimulai tahun 2011. Pada tahun tersebut, Kabupaten Sragen salah satu Kabupaten
                                penerima Program Keluarga Harapan (PKH) bersama-sama dengan 4 (empat) Kabupaten lainnya
                                yaitu Brebes, Cilacap, Pemalang dan Wonogiri di Propinsi Jawa Tengah.</p>
                            <!-- <div class="table-responsive">
                <table class="table m-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Esername</th>
                      <th>Nama</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">OR9842</a>
                      </td>
                      <td>Call of Duty IV</td>
                      <td>
                        <span class="badge badge-success">Shipped</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#00a65a"
                          data-height="20"
                        >90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">OR1848</a>
                      </td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <span class="badge badge-warning">Pending</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#f39c12"
                          data-height="20"
                        >90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">OR7429</a>
                      </td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <span class="badge badge-danger">Delivered</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#f56954"
                          data-height="20"
                        >90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">OR7429</a>
                      </td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <span class="badge badge-info">Processing</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#00c0ef"
                          data-height="20"
                        >90,80,-90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">OR1848</a>
                      </td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <span class="badge badge-warning">Pending</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#f39c12"
                          data-height="20"
                        >90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">OR7429</a>
                      </td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <span class="badge badge-danger">Delivered</span>
                      </td>
                      <td>
                        <div
                          class="sparkbar"
                          data-color="#f56954"
                          data-height="20"
                        >90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>-->
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                    <!-- /.card -->
                </div>
                <!-- /.col -->

                <div class="col-md-6" v-animate-css="'fadeIn'">

                    <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(254, 153, 0);">
                        <div class="info-box-content">
                            <span class="info-box-text">Master Data Wilayah</span>
                            <mdb-container>
                                <mdb-bar-chart  :data="barChartData" :options="barChartOptions" :width="380"
                                    :height="200">
                                </mdb-bar-chart>
                            </mdb-container>
                            <!-- <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart> -->
                        </div>
                    </div>

                    <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(71, 188, 188);">
                        <div class="info-box-content">
                            <span class="info-box-text">Master Data User</span>
                            <mdb-container>
                                <mdb-pie-chart :key="chartkey" :data="pieChartData" :options="pieChartOptions" :width="380"
                                    :height="200">
                                </mdb-pie-chart>
                            </mdb-container>
                            <!-- <apexchart type="donut" width="380" :options="datachartOptions" :series="dataseries">
                            </apexchart> -->
                        </div>
                    </div>

                    <!-- Info Boxes Style 2 -->
                    <!-- <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(254, 153, 0);">
                        <span class="info-box-icon">
                            <i class="fa fa-flag text-orange"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Master Provinsi</span>
                            <span class="info-box-number" v-animate-css="'fadeInLeft'">
                                <countTo :startVal='0' :endVal='totalprov' :duration='6000'></countTo>
                            </span>
                        </div>
                    </div> -->

                    <!-- /.info-box -->
                    <!-- <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(43, 125, 235);">
                        <span class="info-box-icon">
                            <i class="fa fa-bookmark text-blue"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Master Kabupaten/Kota</span>
                            <span class="info-box-number" v-animate-css="'fadeInLeft'">
                                <countTo :startVal='0' :endVal='totalkab' :duration='5000'></countTo>
                            </span>
                        </div>
                    </div> -->

                    <!-- /.info-box -->
                    <!-- <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(241, 90, 90);">
                        <span class="info-box-icon">
                            <i class="fa fa-tags text-maroon"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Master Kecamatan</span>
                            <span class="info-box-number" v-animate-css="'fadeInLeft'">
                                <countTo :startVal='0' :endVal='totalkec' :duration='4000'></countTo>
                            </span>
                        </div>
                    </div> -->
                    <!-- /.info-box -->

                    <!-- <div class="mb-3 bg-white info-box" style="border-top: 7px solid rgb(71, 188, 188);">
                        <span class="info-box-icon">
                            <i class="fa fa-tag text-info"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Master Desa/Kelurahan</span>
                            <span class="info-box-number" v-animate-css="'fadeInLeft'">
                                <countTo :startVal='0' :endVal='totalkelr' :duration='3000'></countTo>
                            </span>
                        </div>
                    </div> -->
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- <div class="mt-2 col-md-12">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group row">
                            <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group row">
                            <apexchart type="donut" width="380" :options="datachartOptions" :series="dataseries"></apexchart>
                        </div>
                    </div>
                </div>
            </div> -->

        </div>
        <!--/. container-fluid -->
    </section>
</template>

<script>
import { mdbBarChart, mdbPieChart, mdbContainer } from 'mdbvue';
export default {
    name: 'ChartPage',
    components: {
        mdbBarChart,
        mdbPieChart,
        mdbContainer
    },
    data() {
        return {
            totaluser: "",
            series: [],
            chartOptions: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                labels: [],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            dataseries: [],
            datachartOptions: {
                chart: {
                    width: 380,
                    type: "donut",
                },
                labels: [],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            // totalprov: "",
            // totalkab: "",
            // totalkec: "",
            // totalkelr: "",
            pieChartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                    }
                ]
            },
            pieChartOptions: {
                responsive: true,
                maintainAspectRatio: true
            },
            barChartData: {
                labels: ["Provinsi (34)", "Kabupaten (514)", "Kecamatan (6878)", "Desa/Kelurahan (79702)"],
                datasets: [{
                    label: '# Total Master Wilayah',
                    data: [34, 514, 6878, 79702],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }]
                }
            },

            chartKey: 0,
        };
    },
    methods: {
        piemasterwil() {
            axios
                .get(window.axios.defaults.baseURL + "/api/piemasterwil")
                .then((response) => {
                    this.pieChartData.datasets.data = response.data;
                    this.chartKey += 1
                })
                .catch(function (error) {
                    if (error.response) {
                        handleError(error.response.data.message);
                    }
                });
        },
        piemasterwilname() {
            axios
                .get(window.axios.defaults.baseURL + "/api/piemasterwilname")
                .then((response) => {
                    this.pieChartData.labels = response.data;
                })
                .catch(function (error) {
                    if (error.response) {
                        handleError(error.response.data.message);
                    }
                });
        },
        baruser() {
            axios
                .get(window.axios.defaults.baseURL + "/api/baruser")
                .then((response) => {
                    this.dataseries = response.data;
                })
                .catch(function (error) {
                    if (error.response) {
                        handleError(error.response.data.message);
                    }
                });
        },
        barusername() {
            axios
                .get(window.axios.defaults.baseURL + "/api/barusername")
                .then((response) => {
                    this.datachartOptions.labels = response.data;
                })
                .catch(function (error) {
                    if (error.response) {
                        handleError(error.response.data.message);
                    }
                });
        },
        // formatNum(value) {
        //     let val = (value / 1).toFixed(0).replace(".", ",");
        //     return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        // },
    },
    mounted() {
        // console.log(document.querySelector("meta[name=csrf-token]").content);
        this.piemasterwil();
        this.piemasterwilname();
        this.baruser();
        this.barusername();
    },
    created() {
        this.$Progress.start();
        let loader = this.$loading.show();
        axios
            .get(window.axios.defaults.baseURL + "/api/home")
            .then((response) => {
                // this.totalprov = response.data.totalprov;
                // this.totalkab = response.data.totalkab;
                // this.totalkec = response.data.totalkec;
                // this.totalkelr = response.data.totalkelr;
                this.totaluser = response.data.totaluser;
            })
            .catch(function (error) {
                if (error.response) {
                    handleError(error.response.data.message);
                }
            });
        this.$Progress.finish();
        // simulate AJAX
        setTimeout(() => {
            loader.hide();
        }, 100);
    },
};
</script>
