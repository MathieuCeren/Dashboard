<template>   
    <div>
        <div class="row d-flex align-items-center container">
            <span class="userschart-title pt-3 ml-1">Émergence des nouveaux besoins :</span>
            <div class="form-group text-left ml-2">
                <label for="stations">Station</label>
                <select v-model="stations" class="form-control" id="stations">
                    <option v-for="station in stationsList" :key="station.ext">
                        {{ station.text }}
                    </option>
                </select>
            </div>
            <div class="form-group text-left ml-2">
                <label for="service">Type de service</label>
                <select v-model="serviceType" class="form-control" id="service">
                    <option 
                        v-for="option in options" 
                        v-bind:value="option.text" 
                        :key="option.text"  
                    >
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="form-group text-left ml-2">
                <label for="users">Tranche d'Age</label>
                <select v-model="usersTypologie" class="form-control" id="users">
                    <option v-for="user in users" :key="user.ext">
                        {{ user.text }}
                    </option>
                </select>
            </div>
        </div>
        <div id="chartServices"></div>      
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'

export default {
    name: 'UsersFocusChart2',
    data () {
        return {
            serviceType: undefined,
            usersTypologie: undefined,
            stations: undefined,
            users: [
                { text: '18 - 25'},
                { text: '25 - 40'},
                { text: '40 - 60'}
            ],
            options: [
                { text: 'boulangerie'},
                { text: 'bar'},
                { text: 'restaurant'}
            ],
            stationsList: [
                { text: 'Bastille'},
                { text: 'Austerlitz'},
                { text: 'Chatelet'}
            ],
        }
    },
    created () {
        this.serviceType = this.options[0].text;
        this.usersTypologie = this.users[0].text;
        this.stations = this.stationsList[0].text;
    },
    mounted() {
        var options6 = {
            series: [{
                name: 'usages',
                data: [4.2, 3.5 , 3.7 , 2.8, 1.6, 1.8, 1.4]
            }],
            chart: {
                type: 'bar',
                height: 300,
                toolbar: {
                    show:false
                }
            },
            colors: '#53C1E4',
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                strokeDashArray: 2,
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false
                    }
                },  
       
            },
            xaxis: {
                max: 7,
                categories: ['2020', '2019', '2018', '2017', '2016', '2015', '2014'],
                title:{
                    text: 'Nombre de votes (en milliers)'
                },
            }
        };

        var chart6 = new ApexCharts(document.querySelector("#chartServices"), options6);
        chart6.render();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userschart-title {
    font-size: 16px;
    font-family: 'Patua One';
}
@media (max-width: 1200px) {
   .userschart-title {
        width: 20%;
    }
}
#chartServices {
    width: 90%;
    margin: 0 auto;
}
label {
    font-size: 13px;
}
select {
    background: #EDEDF6;
    border-radius: 4px;
    font-weight: bold;
}
.form-group {
    width: 20%;
}
@media (max-width: 1200px) {
   .form-group {
        width: initial;
    }
}
</style>