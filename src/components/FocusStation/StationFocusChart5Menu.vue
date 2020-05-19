<template>
    <!-- Right side bar -->
    <div class="wrapper3">
        <!-- Sidebar -->
        <nav id="sidebar4" class="active text-center">
            <!-- Toggle sidebar -->
            <div class="d-flex justify-content-center align-items-center" v-on:click="toggleMenu" id="sidebarCollapse4">
                <div class="collapse-button d-flex justify-content-center align-items-center">
                    <img src="../../../src/assets/Group.svg" alt="..." height="">
                    <img src="../../../src/assets/Group-1.svg" alt="..." height="">
                </div>
            </div>
            <div class="sidebar-header">
                <h3 class="sidebar-header-title text-uppercase ml-4 mt-4">Informations</h3>
            </div>
            <div class="sidebar-title ml-4 mt-5">
                Détails du scoring
            </div>
            <div class="scoring-details ml-4 mr-4 custom-background">
                <div class="pt-3 text-left container">
                    Les critères pris en compte pour le scoring sont les suivants :
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table border-table">
                    <div>CRITÈRE</div> 
                    <div>COEF</div>
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table">
                    <div class="col-6 pr-0 pl-0  text-left">Niveaux de revenus</div> 
                    <div>1</div>
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table" id="to-color">
                    <div class="col-6 pr-0 pl-0  text-left">CSP</div> 
                    <div>1</div>
                </div>
                <div class="d-flex justify-content-between align-items-center sidebar-table">
                    <div class="col-6 pr-0 pl-0  text-left">Taille des ménages</div> 
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
    name: 'Chart5Menu',
    methods: {
        toggleMenu: function () {    
            $('#sidebar4').toggleClass('active');
            $('.chart5-title').toggleClass('custom-width');
            $('.collapse-button').toggleClass('side-button2');
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#sidebar4 {
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
#sidebar4.active {
    margin-right: -18rem;
}
#sidebarCollapse4 {
    position: absolute;
    top: 10px;
    left: -28px;
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
.side-button2{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    transition: all 0.3s;
}
.scoring-details {
    font-size: 11px;
    height: 274px;
}
.sidebar-table {
    width: 225px;
    margin: 0 auto;
    height: 41px;
}
.border-table {
    border-bottom: 0.5px solid #99C3C1;
    padding-bottom: 5px;
}
.sidebar-header-title {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.sidebar-title {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
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
</style>