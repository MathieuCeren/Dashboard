<template>
    <div class="page-content">
        <div class="container">
            <div class="container performance-title text-left pt-3 pb-3">
                Le service PickMe est-il un succès ?
            </div>
            <div class="container">
                <!-- First Row -->
                <div class="row d-flex justify-content-between ml-0 mr-0"> 
                    <div class="download text-left d-flex align-items-center col">
                        <div class="center">
                            <div class="font-weight-bold mt-2">
                                <span class="highest-number">137</span>
                                <span class="percent-color">
                                    <i class="fas fa-sort-up"></i> 
                                    +12 %
                                </span>                            
                            </div>
                            <p class="mt-2 ranking-text">Téléchargements de l'application maRATP ce mois-ci </p>
                        </div>
                    </div>

                    <div class="sales text-left d-flex align-items-center col ml-2">
                        <div class="center">
                            <div class="font-weight-bold mt-2">
                                <span class="highest-number">12 053€</span>
                                <span class="percent-color">
                                    <i class="fas fa-sort-up"></i> 
                                    +33 %
                                </span> 
                            </div>
                            <p class="mt-2 ranking-text">de CA provenant des services des stations ce mois-ci</p>
                        </div>
                    </div>
                    <div class="right-side-bloc col">
                        <div class="services1">
                            <div class="center text-left">
                                <span>Service le plus rentable ce mois-ci</span>
                                <p class="services1-text">La boulangerie</p>
                            </div>
                        </div>
                        <div class="services2 mt-2">
                            <div class="center text-left">
                                <span>Service le moins rentable ce mois-ci</span>
                                <p class="services2-text">La pharmacie</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Second Row -->
                <div class="performance-chart container mt-4">
                    <div class="row pt-3 pl-5">
                        <h1 class="performancechart-title text-left container col">Performance par service</h1>
                        <div class="select-station form-group text-left col-3 row pl-5 pt-3">
                            <label class="mb-0">Station :</label>
                            <select class="select-custom col">
                                <option>
                                    Bastille
                                </option>
                                <option>
                                    Paris austerlitz
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="text-left container pt-3 pl-5">
                        <ul class="tab">
                            <li>
                                <input id="tab1" checked="checked" type="radio" value="ca" name="tab" v-on:click="toggleGraph" />
                                <label class="ca" for="tab1">En chiffres d'affaires</label>
                            </li>
                            <li>
                                <input id="tab2" type="radio" name="tab" value="salesnumber" v-on:click="toggleGraph"/>
                                <label class="salesnumber" for="tab2">En nombre de ventes</label>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-center mt-2">  
                        <PerformanceChart v-if="toggle == 'ca'"/>
                        <PerformanceChart2 v-if="toggle == 'salesnumber'"/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PerformanceChart from './PerformanceChart.vue'
import PerformanceChart2 from './PerformanceChart2.vue'

export default {
    name: 'Performance',
    components: {
        PerformanceChart,
        PerformanceChart2
    },
    data () {
        return {
            toggle: 'ca'
        }
        
    },
    methods: {
        toggleGraph: function(event) {
            this.toggle = event.target.value
        }
    }
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.performance-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #434B5C;
}
.download {
    width: 31%;
    background: #E3F8FF;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.1);
    border-radius: 10px;
}
.highest-number {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 31px;
}
.percent-color {
    font-size: 13px;
    line-height: 31px;
    color: #0E6E8D;
}
.fa-sort-up {
    width: 30px;
    font-size: 24px;
    vertical-align: bottom;
}
.center {
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
}
.sales {
    width: 31%;
    background: #E3F8FF;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.1);
    border-radius: 10px;
}
.ranking-text {
    font-size: 13px;
}
.services1 {
    width: 100%;
    height: 44%;
    font-size: 16px;
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.1);
    border-radius: 10px;
}
.services1-text {
    color: #106E8D;
    font-weight: bold;
}
.services2 {
    width:  100%;
    height: 43%;
    background: #FFFFFF;
    font-size: 16px;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.1);
    border-radius: 10px;
}
.services2-text {
    color: #7DD3ED;
    font-weight: bold;
}
.performance-chart {
    background: #FFFFFF;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.1);
    border-radius: 10px;
}
.performancechart-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #3D4857;
}
.select-station {
    align-items: center;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #6A707E;
}
.select-custom {
    border: 0;
    color: #61C9EB;
    font-weight: bold;
    background-color: white;
}
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
ul.tab {
    list-style-type:none;
    margin: 0;
    padding:0;
    border-radius: 5px;
}
ul.tab li {
    display: inline;
    padding: 0;
}
ul.tab li label {
    background: rgba(237, 237, 246, 0.1);
    padding: 10px;
    border: 1px solid #EDEDF6;
    display: inline-block;
}
.ca {
    border-radius: 5px 0px 0px 5px;
}
.salesnumber {
    border-radius: 0px 5px 5px 0px;
}
ul.tab li input[type="radio"] {
    opacity: 0;
    width: 0px;
    height: 1px;
}
ul.tab li input[type="radio"]:checked ~ label {
    background: #EDEDF6;
    color: #3D4857;
    font-weight: bold;
}
</style>