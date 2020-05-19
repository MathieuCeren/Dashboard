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
        <div v-show="!errored" class="chart4-content">
            <p class="chart4-title mt-3">La meilleure recommandation de service pour {{line}}</p>
                <div v-show="infoCatched" class="chart4-wrapper d-flex">
                    <div id="chart4" class="graph4"></div>
                </div>
            <!-- Side bar 1 -->
            <StationFocusChart4Menu/>
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import StationFocusChart4Menu from './StationFocusChart4Menu.vue'
import ApexCharts from 'apexcharts'
// import axios from 'axios'


export default {
    name: 'StationFocusChart4',
    components: {
        PulseLoader,
        StationFocusChart4Menu
    },
    props: {
        line: String,
    },
    data () {
        return {
            info: null,
            loading: false,
            infoCatched: true,
            errored: false,
            allserv: [],
            name: []
        }
        
    },
    // created () {
        
    //     axios
    //     .get('http://localhost:3000/api/allservices')
    //     .then(response => {
    //         this.info = response.data.data
    //         this.info.forEach(element => {
    //             this.allserv.push(element)
            
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
       var options4 = {
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
                    endingShape: 'flat',
                }
            },
            series: [{
                name: 'distance',
                data: [6.5,7.5,7.9,7.1,6.3]
            }],
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                style: {
                    colors: ['#fff'],
                    fontSize: '12px',
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
                categories: ['Primeur', 'Epicerie', 'Boulangerie', 'Fleuriste', 'Supermarche']
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
                    if(value < 6.5) {
                        return '#56C2D8'
                    } else if (value >= 6.5 && value <7.5){
                        return '#0C96B3'
                    } else if (value >= 7.5 && value <= 10) {
                        return '#006980'
                    }
                }]
            }
        }

        var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
        chart4.render();
 
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart4-content {
    height: 402px;
}
.chart4-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
}
.graph4 {
    margin: 0 auto;
    width: 60%;
}
</style>