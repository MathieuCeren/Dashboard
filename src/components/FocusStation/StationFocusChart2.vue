<template>
    <div class="col-12">
        <div class="chart2-content">
            <p class="mr-0 ml-0 mt-4 text-left chart2-title">
                CSP des habitants autour de {{line}}
            </p>
            <div class="pt-5" id="chart2"></div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
    name: 'StationFocusChart2',
    props: {
        line: String,
    },
    mounted () {


        var options2 = {
            chart: {
                type: 'radar',
                height: 440,
                toolbar: {
                    show:false
                }
            },
            series: [
                {
                    name: "Le % est de ",
                    data: [5, 2, 4, 17 , 31 , 12, 18, 15]
                }
            ],
            // Fill inside graph
            fill: {
                opacity: 0.5,
                colors: '#60c9eb'
            },
            // Line between points
            stroke: {
                show: true,
                width: 2,
                colors: '#006980',
                dashArray: 0
            },
            xaxis: {
                categories:  [["Artisants, Commerçants, Chef d'entreprise"], ['Agriculteurs','exploitants'], 'Ouvriers', ['Professions', 'intermédiaires'],['Cadres et professions', ['intellectuelles supérieures']] ,'Employés', 'Retraités' ,'Sans activité'],
            },
            markers: {
                size: 5,
                colors: '#56C2D8',
                hover: {
                    size: 10
                }
            },
        };

        var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
        chart2.render();
      
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart2-content {
    height: 565px;
    padding-right: 30px;
    padding-left: 30px;
}
.chart2-title {
    font-family: 'Patua One';
}
#chart2 {
    width: 100%;
}
.csp {
    background: #006980;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 30%;
}
.apexcharts-legend-series {
    margin: 50px 50px
}
</style>
