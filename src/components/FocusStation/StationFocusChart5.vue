<template>
    <div>
        <div v-show="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
        </div>
        <div v-show="loading">
            Chargement
            <pulse-loader>
        
            </pulse-loader>
        </div>
        <div v-show="!errored" class="chart5-content">
            <div class="row chart5-title form-group mr-0 ml-0 mb-0 d-flex justify-content-center mt-3">
                <p class="mt-2">Le meilleur niveau de gamme pour </p>
                <select class="form-control col-2 ml-2 mr-2 mt-1">
                    <option value="boulangerie" selected>
                        une boulangerie
                    </option>
                    <option value="fleuriste">
                        le fleuriste
                    </option>
                </select>
                <p class="mt-2">pour {{line}}</p>
            </div>
            <div v-show="infoCatched">
                <div id="chart5" class="graph5"></div>
                <div class="recommandations d-flex row align-items-center justify-content-center">
                    <p class="m-0 font-weight-bold">Quelques recommandations milieu de gamme :</p>
                    <p class="m-0">Chambelland, Pain Pain, Ladurée, Hugo & Victor</p>
                    

                </div>
            </div>
            <!-- Side bar 2 -->
            <StationFocusChart5Menu/>
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import StationFocusChart5Menu from './StationFocusChart5Menu.vue'
import ApexCharts from 'apexcharts'
// import axios from 'axios'

export default {
    name: 'StationFocusChart5',
    components: {
        PulseLoader,
        StationFocusChart5Menu
    },
    props: {
        line: String,
    },
    data () {
        return {
            info: null,
            infoCatched: true,
            loading: false,
            errored: false,
            lib_arret: [],
            numb_validations: [],
        }
        
    },
    // created () {
    //     axios
    //     .get('http://localhost:3000/api/validations')
    //     .then(response => {
    //         this.info = response.data.data
    //         this.info.forEach(element => {
    //             this.lib_arret.push(element.LIBELLE_ARRET),
    //             this.numb_validations.push(element.NB_VALD)
    //         });
    //         this.infoCatched = true
    //     })
    //     .catch(error => {
    //         this.errored = true;
    //         console.log(error);
            
    //     })
    //     .finally(() => this.loading = false);
    // },
    mounted () {
        var options5 = {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show:false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '100%',
                    distributed: false,
                    endingShape: 'flat'  
                }
            },
            series: [{
                name: 'score',
                data: [6.5, 8.1, 7.6]
            }],
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                style: {
                    colors: ['#fff'],
                    fontSize: '10px',
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex]
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },
            xaxis: {
                labels: {
                    show: false,
                    rotate: -45
                },
                position: 'bottom',
                categories: ['Bas de gamme', 'Millieu de gamme', 'Haut de gamme']
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            stroke: {
                width: 0
            },
            grid: {
                show: false,
            },
            fill: {
                type: 'solid',
                colors: [function({ value }) {
                    if(value < 7) {
                        return '#007890'
                    } else if (value >= 7 && value <= 8) {
                        return '#0C96B2'
                    } else if (value > 8 && value <=10){
                        return '#006980'
                    } 
                }],
            }
        }

        var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
        
        chart5.render();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart5-content {
    height: 500px;
}
.graph5 {
    margin: 0 auto;
    width: 37%;
}
.form-control {
    background: #EDEDF6;
    border-radius: 4px;
    width: 80%;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    color: #202020;
}
.recommandations {
    margin: 0 auto;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 2px 5px rgba(83, 97, 255, 0.0534986);
    width: 34%;
    height: 58px;
    font-size: 13px;
    line-height: 17px;
    color: #333D5F;
}
</style>