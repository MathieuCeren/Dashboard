<template>   
    <div id="performanceChart2"></div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
    name: 'PerformanceChart',
    mounted() {

        var options7= {
            series: [
                {
                    name: '2020',
                    data: [90, 100, 57, 70, 61, 50, 90, 90, 30]
                }, 
                {
                    name: '2021',
                    data: [110, 85, 40, 115, 69, 58, 55, 55, 60]
                }
            ],
            chart: {
                type: 'bar',
                height: 450,
                toolbar: {
                    show:false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                position: 'right',
                offsetY: 0
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                labels: {
                    rotate: -45
                },
                categories: ['Boulangerie', 'Fleuriste', 'Pharmacie', ['Service de' ,'téléphonie'], 'Epicerie', 'Primeur', 'Tabac', 'Librairie', ['Boutique de', 'vêtements']],
                tickPlacement: 'on'
            },
            yaxis: {
                title: {
                    text: "Nombres de ventes"
                }
            },
            colors: ['#C8F1FF', '#6A74C9'],
            fill: {
                
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "nombres de ventes : " + val 
                    }
                }
            }
        };

        var chart7 = new ApexCharts(document.querySelector("#performanceChart2"), options7);
        chart7.render();
      
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#performanceChart2 {
    width: 90%;
}
svg {
    overflow: visible!important;
}
</style>