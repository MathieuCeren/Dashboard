<template>
    <div class="col-12">
        <div v-show="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
        </div>
        <div v-show="loading">
            Chargement
            <pulse-loader>
        
            </pulse-loader>
        </div>
        <div v-show="!errored" class="chart1-content">
            <p class="chart-1-text mr-0 ml-0 mt-4 text-left">
                Niveaux de revenus selon le type de ménage autour de {{line}}
            </p>
            <div class="revenu-card container row mt-5 mr-0 ml-0">
                <div class="col-8 pt-3">
                    <p class="revenu-month">2803€/Mois</p>
                    <p class="revenu-moyen col-10 p-0">Revenu moyen des habitants aux alentours de la station</p>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <img src="../../../src/assets/wallet.svg" alt="..." width="75" height="94px">
                </div>
            </div>
            <div v-show="loading == false">
                <!-- Chart div -->
                <div class="d-flex justify-content-center" id="chart1"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
// import axios from 'axios'

export default {
    name: 'StationFocusChart1',
    components: {
        PulseLoader
    },
    props: {
        line: String,
    },
    data () {
        return {
            info: null,
            loading: false,
            errored: false,
            gender: [],
            number: []
        }
        
    },
    created () {
        // axios
        // .get('http://localhost:3000/api/gender')
        // .then(response => {

        //     this.info = response.data.data
        //     this.info.forEach(element => {
        //         this.gender.push(element.genre),
        //         this.number.push(parseInt(element.count, 10))
        //     });
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.errored = true
        // })
        // .finally(() => this.loading = false);

    },
    mounted () {


        var options1 = {
            series: [{
                name: 'Salaire moyen',
                data: [2000, 2200, 2900, 2989, 2750]
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show:false
                }
            },
            colors: '#34B1CB',
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                show: false,
            },
            xaxis: {
                title:{
                    text: 'Salaire moyen (en €)',
                },
                
                categories: ['Célibataire', 'Couple', ['Famille', 'monoparentale'], ['Famille avec', '1 à 2 enfants'], ['Famille à', '3enfants et +']],
            },
            yaxis: {
                max: 5000,
                title:{
                    text: 'Type de ménage',
                    offsetX: 5,
                },
                
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                }
            }]
        };

        var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
        chart1.render();
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart1-content {
    height: 565px;
    padding-right: 30px;
    padding-left: 30px;
}
#chart1 {
    width: 100%;
}
.chart-1-text {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #2C2D30;
}
.revenu-card {
    height: 115px;
    background: #E3F8FF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
}
.revenu-month {
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    text-align: left;
}
.revenu-moyen {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
}
</style>