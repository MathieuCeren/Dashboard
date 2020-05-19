<template>
    <div class="col-12">
        <div class="chart3-content">
            <p class="chart3-title text-left mr-0 ml-2 mt-4">
                Répartition des typologies de ménages autour de {{line}}
            </p>
            <div class="row d-flex justify-content-center">
                <div class="d-flex align-items-center" id="center">
                    <div class="average-container">
                        <h1 class="font-weight-bold" id="custom-size">1.7</h1> 
                        <p class="text-person">personnes en moyenne</p>
                    </div>
                </div>
                <div id="chart3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
    name: 'StationFocusChart3',
    props: {
        line: String,
    },
    mounted () {

      
        var options3 = {
            series: [{
                name: 'series name',
                data: [50, 30, 5, 20, 15]
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
                }
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false,
            },
            xaxis: {
                title:{
                    text: 'Part des ménages (en %)'
                },
                max: 100,
                categories: ['Célibataire', 'Couple', ['Famille', 'monoparentale'], ['Famille avec', '1-2 enfants'], ['Famille avec', '3+ enfants']],
            },
        };

        var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
        chart3.render();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart3-content {
    height: 439px;
}
#chart3 {
    width: 60%;
}
#center {
    margin-right: 5%;
}
.average-container {
    background: #E3F8FF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 30px 15px 30px 15px;
}
.chart3-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
}
#custom-size {
    font-size: 21px;
}
.text-person {
    font-size: 12px;
}
</style>