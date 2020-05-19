<template>   
    <div id="chartUsers"></div>          
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
    name: 'UsersFocusChart1',
    mounted() {
        var options5 = {
            series: [32, 32, 20, 16],
            chart: {
                width: 800,
                type: 'donut',
            },
            colors: ['#8f73ff', '#BCF3EA', '#109CF1', '#60C9EB'],
            labels: ['Boulangerie', 'Supermarché', 'Fleuriste', 'Autres'],
            dataLabels: {
                enabled: false,
            },
            legend: {
                overflow: 'visible',
                width: 500,
                fontSize: '14px',
                itemMargin: {
                    vertical: 20
                },
            },
            responsive: [{
                breakpoint: 1200,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        position: 'bottom'
                    },
                }
            }]
        };

        var chart5 = new ApexCharts(document.querySelector("#chartUsers"), options5);
        chart5.render();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chartUsers {
    width: 80%;
}
svg {
    overflow: visible!important;
}
</style>