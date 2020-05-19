<template>
    <div class="page-content">
        
        <div class="container">
            <div class="usersfocus-title text-left pt-3 pb-3">
                Les attentes des utilisateurs
           
            </div>
            <!-- First Row -->
            <div class="col-12 row m-0 p-0">   
                <div class="services-background col-9">
                    <h1 class="services-title text-left ml-5 pt-4">Répartition des <span class="color-blue">services voulus</span></h1>
                    <div class="d-flex justify-content-center align-items-center" style="height:80%;">
                        <UsersFocusChart1/>
                    </div>
                </div>
                <div class="col-3 pr-0">
                    <div class="top-services mt-5 col container text-left">
                        <img class="d-flex pt-3" src="../../../src/assets/croissant.svg" alt="..." width="52">
                        <p class="m-0 mt-2 text-uppercase font-weight-bold">Boulangerie</p>
                        <p class="m-0 mt-2"><span class="font-weight-bold text-uppercase">top 1</span> des services preferés des utilisateurs ce mois-ci</p>
                    </div>
                    <div class="all-services mb-5 mt-5 col container text-left">
                        <img class="d-flex pt-3" src="../../../src/assets/shop.svg" alt="..." width="41">
                        <p class="m-0 mt-3 number">25</p>
                        <p class="m-0 mt-2">Boulangeries réparties dans 15 stations</p>
                    </div>
                </div>
            </div>
            <!-- Second Row -->
            <div class="container row m-0 p-0 d-flex justify-content-between mt-5 col-12">
                <div class="col-3 p-0">
                    <div class="services-vote text-left d-flex align-items-center">
                        <div class="services-vote-text ml-4">
                            <span class="ranking font-weight-bold" ><i class="fas fa-sort-up mr-2"></i> +73%</span>
                            <p class="m-0 mt-2">de votes pour la boulangerie cette année</p>
                        </div>
                    </div>
                </div>
                <div class="services-graph-background col-8 mb-5">
                    <UsersFocusChart2/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UsersFocusChart1 from './UsersFocusChart1.vue'
import UsersFocusChart2 from './UsersFocusChart2.vue'

export default {
    name: 'UsersFocus',
    components: {
        UsersFocusChart1,
        UsersFocusChart2
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
    height: max-content;
}
.usersfocus-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #434B5C;
}
.services-background {
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
}
.services-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #192A3E;
}
.color-blue {
    color: #61C9EB;
}
.number {
    font-size: 24px;
    font-weight: bold;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #60C9EB;
}
.top-services {
    background: #E3F8FF;
    border-radius: 14px;
    font-size: 13px;
    width: 90% !important;
    height: 159px;
}
.all-services {
    height: 159px;
    background: #FFFFFF;
    font-size: 13px;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.13);
    width: 90% !important;
    border-radius: 10px;
}
@media (max-width: 1025px) {
    .top-services {
        font-size: 11px;
    }
    .all-services { 
        font-size: 11px;
    }
    
}
.services-vote {
    height: 159px;
    background: #E3F8FF;
    box-shadow: 0px 20px 30px rgba(106, 116, 201, 0.13);
    border-radius: 10px;
}
.ranking {
    font-size: 24px;
    display: flex;
    align-items: flex-end;
}
.fa-sort-up {
    font-size: 28px;
}
.services-graph-background {
    height: 428px;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
}
.services-vote-text {
    margin: 0 auto;
}
.fa-sort-up {
    width: 30px;
    font-size: 24px;
    vertical-align: bottom;
}
</style>