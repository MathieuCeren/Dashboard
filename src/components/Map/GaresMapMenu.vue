<template>
    <!-- Right side bar -->
    <div class="wrapper2">
        <!-- Sidebar -->
        <nav id="sidebar2" class="active text-center">
            <!-- Toggle sidebar -->
            <div class="d-flex justify-content-center align-items-center" v-on:click="toggleMapMenu" id="sidebarCollapse2">
                <div class="collapse-button d-flex justify-content-center align-items-center">
                    <img src="../../../src/assets/Group.svg" alt="..." height="">
                    <img src="../../../src/assets/Group-1.svg" alt="..." height="">
                </div>
            </div>
            <div class="sidebar-header">
                <h3 class="sidebar-header-title text-uppercase ml-4 mt-4">Informations</h3>
            </div>
            <div class="sidebar-title2 ml-4 mt-5">
                Légende
            </div>

            <div class="legend ml-4 mr-4 mt-2 custom-background">
                    <div class="legend-details row ml-0 w-100">
                        <div class="legend-icon pt-3">
                            <div class="circleSmallLabel"></div>
                            <div class="spacer"></div>
                            <p class="legend-icon-text">Score faible</p>
                        </div>
                        <div class="legend-icon pt-2">
                            <div class="circleLargeLabel"></div>
                            <div class="legend-icon-text pt-2">Score élevé</div>
                        </div>
                        <div class="small-line"></div>
                        <div class="pr-0 pl-2 col text-left">
                            Plus un point est grand, plus le score de la station est elevé.
                        </div> 
                    </div>
        
            </div>

            <div class="sidebar-title2 ml-4 mt-5">
                Détails du scoring
            </div>
            <div class="scoring-card ml-4 mr-4 mt-2 custom-background">
                <div class="scoring-card-title container pt-3">
                    Les critères suivants sont pris en compte pour le scoring :
                </div>
                <div class="mt-2 d-flex justify-content-between align-items-center sidebar-table border-table">
                    <div class="text-uppercase">Critere</div> 
                    <div class="text-uppercase">Coef</div>
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table">
                    <div>Affluence</div> 
                    <div>1</div>
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table" id="to-color">
                    <div>Nombre de correspondances</div> 
                    <div>1</div>
                </div>
                <button class="edit-scores text-uppercase mt-4">Éditer</button>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Chart1Menu',
    methods: {
        toggleMapMenu() {

            $('#sidebar2').toggleClass('active');
            $('.vue2leaflet-map').toggleClass('custom-width');
            $('.text-left').toggleClass('custom-width');
            $('.score-bar').toggleClass('custom-width');
            $('.collapse-button').toggleClass('side-button');
        
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper2 {
    display: flex;
    width: 100%;
    text-align: end;
}

#sidebar2 {
    width: 301px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px 0px 0px 5px;
    height: 100%;
    z-index: 5;
    background: #E3F8FF;
    transition: all 0.3s;
}
/* for toggle behavior */
#sidebar2.active {
    margin-right: -18rem;
}
.sidebar-header-title {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.sidebar-title2 {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
}
#sidebarCollapse2 {
    position: absolute;
    top: 10px;
    left: -30px;
    color: white;
    z-index: 10;
    width: 44px;
    height: 44px;
    background: #E3F8FF;
    border-radius: 23px;
}
.collapse-button {
    width: 35px;
    height: 35px;
    background: #34C5AD;
    border-radius: 40px;
}
.side-button{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    transition: all 0.3s;
}
.legend {
    font-size: 11px;
    height: 83px;
}
.legend-details {
    align-items: center;
    height: 100%;
}
.legend-icon-text {
    width: 50%;
    margin-top: 5%;
    margin: 0 auto!important;
}
.small-line {
    height: 73px;
    border: 0.5px solid #99C4C1;
}
.sidebar-title {
    text-align: left !important;
}
.sidebar-table {
    width: 225px;
    margin: 0 auto;
    height: 41px;
}
.scoring-card {
    font-size: 11px;
    height: 256px;
}
.scoring-card-title {
    text-align: left;
}
.border-table {
    border-bottom: 0.5px solid #99C3C1;
    padding-bottom: 5px;
}
#to-color {
    background: rgba(196, 240, 237, 0.2);
}
.edit-scores {
    background: #34C5AD;
    border-radius: 4px;
    border: 0.5px solid #34C5AD;
    box-sizing: border-box;
    width: 93px;
    color: white;
    height: 23px;
}
.font-size-16 {
    font-size: 16px;
}
</style>