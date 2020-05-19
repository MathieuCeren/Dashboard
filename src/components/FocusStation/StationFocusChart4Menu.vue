<template>
    <!-- Right side bar -->
    <div class="wrapper3">
        <!-- Sidebar -->
        <nav id="sidebar3" class="active text-center">
            <!-- Toggle sidebar -->
            <div class="d-flex justify-content-center align-items-center" v-on:click="toggleSideMenu" id="sidebarCollapse3">
                <div class="collapse-button d-flex justify-content-center align-items-center">
                    <img src="../../../src/assets/Group.svg" alt="..." height="">
                    <img src="../../../src/assets/Group-1.svg" alt="..." height="">
                </div>
            </div>
            <div class="sidebar-header">
                <h3 class="sidebar-header-title text-uppercase ml-4 mt-4">Informations</h3>
            </div>
            <div class="sidebar-title ml-4 mt-5">
                Détails du croisement de données
            </div>
            <div class="scoring-details ml-4 mr-4 mt-2 custom-background">
                <div class="pt-3 text-left container">
                    La recommandation est basée sur les services manquants autour de la station.


                </div>
                <div class="pt-3 text-left container">
                    Liste des services à proximité :
                    <ul class="p-0 pt-2">
                        <li>Librairie - 60m</li>
                        <li>Epicerie - 80m</li>
                        <li>Boutique de vêtements - 85m</li>
                        <li>Service de téléphonie - 90m</li>
                        <li>Bagagerie - 110m</li>
                        <li class="font-weight-bold">Supermarché - 120m</li>
                        <li class="font-weight-bold">Primeur - 150m</li>
                        <li class="font-weight-bold">Fleuriste - 250m</li>
                        <li class="font-weight-bold">Epicerie - 300m</li>
                        <li class="font-weight-bold">Boulangerie - 650m</li>
                    </ul>
                    

                </div>
            </div>

        </nav>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Chart4Menu',
    methods: {
        toggleSideMenu: function () {
            $('#sidebar3').toggleClass('active');
            $('.chart4-title').toggleClass('custom-width');
            $('#chart4').toggleClass('graph4');
            $('.collapse-button').toggleClass('side-button1');
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar3 {
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
#sidebar3.active {
    margin-right: -18rem;
}
#sidebarCollapse3 {
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
.side-button1{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    transition: all 0.3s;
}
.sidebar-header-title {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.scoring-details {
    font-size: 11px;
    height: 254px;
}
.sidebar-title {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
}
li {
    list-style-type: none;
}
</style>