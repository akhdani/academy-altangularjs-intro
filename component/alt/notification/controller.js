define([
    'asset/lib/jquery/jquery.min',
    'component/pusharlis/master/notifikasi'
], function(){
    return ['$scope', '$rootScope', '$log', '$auth', '$notification', 'Pusharlis_Master_Notifikasi',
        function($scope, $rootScope, $log, $auth, $notification, Pusharlis_Master_Notifikasi){
            $scope.$notification = $notification;
            $scope.closeMenu = function(){
                $rootScope.closeMenu();
            };

            $scope.setting = {
                permohonan: {
                    NEW:{
                        usergroups: [1,5],
                        label: "Input Koordinasi",
                        url: alt.baseUrl + 'pendahuluan/list'
                    },
                    KOR:{
                        usergroups: [1,5],
                        label: "Input Evaluasi",
                        url: alt.baseUrl + 'pendahuluan/list'
                    },
                    YA:{
                        usergroups: [1,5],
                        label: "Buat perjanjian pendahuluan",
                        url: alt.baseUrl + 'pendahuluan/list'
                    }
                },
                prapenugasan:{
                    usrKoordinasi:{
                        usergroups: [1,10],
                        label: "Input Koordinasi",
                        url: alt.baseUrl + 'prapenugasan/koordinasi/list'
                    },
                    usrKoordinasiEvaluasi:{
                        usergroups: [1,10],
                        label: "Input Evaluasi",
                        url: alt.baseUrl + 'prapenugasan/koordinasi/list'
                    },
                    usrPermohonanSurvey:{
                        usergroups: [1,10],
                        label: "Permohonan Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrPersetujuanSurvey:{
                        usergroups: [1,10],
                        label: "Pemberitahuan Waktu Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrWaktuSurvey:{
                        usergroups: [1,10],
                        label: "Pemberitahuan Waktu Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrWBSSurvey:{
                        usergroups: [1,17],
                        label: "WBS Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrPenugasanSurvey:{
                        usergroups: [1,10],
                        label: "Penugasan Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrHasilSurvey:{
                        usergroups: [1,10],
                        label: "Hasil Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrEngSurvey:{
                        usergroups: [1,10],
                        label: "Engineering Survey",
                        url: alt.baseUrl + 'prapenugasan/survey/list'
                    },
                    usrBiayaKesepakatan:{
                        usergroups: [1,10],
                        label: "Input Penawaran Biaya",
                        url: alt.baseUrl + 'prapenugasan/penawaran/list'
                    },
                    usrPilihKesepakatan:{
                        usergroups: [1,10],
                        label: "Input Kesepakatan Penugasan",
                        url: alt.baseUrl + 'prapenugasan/penawaran/list'
                    }
                },
                penugasan:{
                    pngsnPengalihanAnggaran:{
                        usergroups: [1,17],
                        label: "Input Pengalihan Anggaran",
                        url: alt.baseUrl + 'penugasan/pengalihananggaran/list'
                    },
                    pngsnPerencanaanProduksi:{
                        usergroups: [1,11],
                        label: "Input Perencanaan Penugasan",
                        url: alt.baseUrl + 'penugasan/perencanaan/list'
                    },
                    pngsnUWPDispMAN:{
                        usergroups: [1,19],
                        label: "Disposisi MANUWP",
                        url: alt.baseUrl + 'penugasan/uwpinternal/list'
                    },
                    pngsnUWPDispAsman:{
                        usergroups: [1,21],
                        label: "Disposisi Asman Teknik",
                        url: alt.baseUrl + 'penugasan/uwpinternal/list'
                    },
                    pngsnUWPSPKI:{
                        usergroups: [1,22],
                        label: "Input SPKI",
                        url: alt.baseUrl + 'penugasan/uwpinternal/list'
                    },
                    pngsnUWPApprovalSPKI:{
                        usergroups: [1,19],
                        label: "Approval SPKI",
                        url: alt.baseUrl + 'penugasan/uwpinternal/list'
                    },
                    pengadaanInput:{
                        usergroups: [1,18,20],
                        label: "Update Status Pengadaan",
                        url: alt.baseUrl + 'pengadaan/proses/list'
                    },
                    pengadaanInputUpdateProgress:{
                        usergroups: [1,11,22],
                        label: "Update Status Paska Pengadaan",
                        url: alt.baseUrl + 'pengadaan/proses/list'
                    },
                    pengadaanbapp:{
                        usergroups: [1,11,22],
                        label: "BAPP Unit dengan Mitra",
                        url: alt.baseUrl + 'pengadaan/ba/list'
                    },
                    pengadaanbastp:{
                        usergroups: [1,11,22],
                        label: "BASTP Unit dengan Mitra",
                        url: alt.baseUrl + 'pengadaan/ba/list'
                    },
                    pekerjaanProgress:{
                        usergroups: [1,11,22],
                        label: "Update Progress Pekerjaan",
                        url: alt.baseUrl + 'pekerjaan/proses/list'
                    },
                    pekerjaanbapp:{
                        usergroups: [1,22],
                        label: "BAPP Unit dengan Pemberi Kerja",
                        url: alt.baseUrl + 'pekerjaan/ba/list'
                    },
                    pekerjaanbastp:{
                        usergroups: [1,22],
                        label: "BASTP Unit dengan Kantor Induk",
                        url: alt.baseUrl + 'pekerjaan/ba/list'
                    },
                    notabukuunit:{
                        usergroups: [1,28],
                        label: "Nota Buku Unit ke Kantor Induk",
                        url: alt.baseUrl + 'pekerjaan/notabukuunit/list'
                    },
                    bastpinduk:{
                        usergroups: [1,11],
                        label: "BASTP Kantor Induk dengan Pemberi Kerja",
                        url: alt.baseUrl + 'pekerjaan/bainduk/list'
                    },
                    notabuku:{
                        usergroups: [1,16],
                        label: "Nota Buku Kantor Induk ke Pemberi Kerja",
                        url: alt.baseUrl + 'pekerjaan/notabuku/list'
                    }
                }
            };

            $notification.get = function () {
                // if (!$notification.isgetnotif) {
                    $notification.isgetnotif = true;
                    $notification.count = 0;
                    $notification.notif = {};
                    var unitid = $auth.userdata.unitid || '';
                    Pusharlis_Master_Notifikasi.list({unitid: unitid}).then(function (response) {
                        $notification.isgetnotif = false;
                        angular.forEach(response.data, function (jenis, kj) {
                            if ($scope.setting.hasOwnProperty(kj)) {
                                if (!$notification.notif[kj]) $notification.notif[kj] = {};
                                angular.forEach(jenis, function (subjenis, ksj) {
                                    var key = ksj;
                                    if (kj == 'permohonan' && ksj == 'ULG') key = 'NEW';

                                    if ($scope.setting[kj].hasOwnProperty(key)) {
                                        if ($scope.setting[kj][key]['usergroups'].indexOf(
                                                parseInt($auth.userdata.usergroupid)) > -1) {
                                            $notification.notif[kj][key] = subjenis;
                                            $notification.count += parseInt(subjenis);
                                        }
                                    }
                                });
                            }
                        });
                    });
                // }
            };

            $notification.get();
        }
    ];
});