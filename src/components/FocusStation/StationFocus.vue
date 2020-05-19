<template>
    <div class="page-content col-12">
        <div class="container pt-4 pb-5">
            <!-- Select metro & lignes Bloc -->
            <div class="d-flex row custom-background-black mr-0 ml-0">
                <div class="d-flex align-items-center col-12 pr-0 pl-0">

                    <span class="metros-bloc-title mt-2 col pl-0 pr-0">Focus sur la station</span>
                    <div class="form-group text-left col-3 ">
                        <label for="ligne" class="">Ligne</label>
                        <select v-model="lignesSelected" class="form-control" id="ligne">
                            <option v-for="option in options" v-bind:value="option.value" :key="option.text">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group text-left col-3 ">
                        <label for="Arret" class="">Arrêt</label>
                        <select v-model="singleLigne" class="form-control" id="Arret">
                            <option v-for="lign in lignesSelected" :key="lign">
                                {{ lign }}
                            </option>
                        </select>
                    </div>
                    <div class="notes col d-flex justify-content-center align-items-center">
                        <div class="global-score col-10">Score global de ma station <br><span class="stations-notes font-weight-bold">80</span></div>
                        <div class="cta-infos col">
                            <img class="cta-img" src="../../../src/assets/info.svg" alt="...">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chart 1 & 2 -->
            <div class="col-12  mt-5 ml-0 mr-0 pr-0 pl-0 d-flex justify-content-between">
                
                <div class="donutcsp-wrapper custom-background pl-0 pr-0" >
                    <StationFocusChart1 :line="singleLigne"/>
                </div>


                <div class="donutcsp-wrapper custom-background pr-0 pl-0 ml-3" >
                    <StationFocusChart2 :line="singleLigne"/>
                </div>
            </div>

            <!-- Menages Bar graph -->
            <div class="custom-background mt-5">
                <StationFocusChart3 :line="singleLigne"/>
            </div>

            <!-- Recommendations bar graph -->
            <div class="custom-background mt-5">
                <StationFocusChart4 :line="singleLigne"/>
            </div>

            <!-- Recommendations 2 bar graph -->
            <div class="custom-background best-enseigne mt-5">
                <StationFocusChart5 :line="singleLigne"/>
            </div>

            

            
        </div>
    </div>
</template>

<script>
import StationFocusChart1 from './StationFocusChart1.vue'
import StationFocusChart2 from './StationFocusChart2.vue'
import StationFocusChart3 from './StationFocusChart3.vue'
import StationFocusChart4 from './StationFocusChart4.vue'
import StationFocusChart5 from './StationFocusChart5.vue'


export default {
    name: 'StationFocus',
    components: {
        StationFocusChart1,
        StationFocusChart2,
        StationFocusChart3,
        StationFocusChart4,
        StationFocusChart5
    },
    data () {
        return {
            modalOpen: false,
            lignesSelected: ['Bastille', 'Saint-Michel', 'Paris Austerlitz'],
            singleLigne: 'Bastille',
            options: [
                { text: 'Ligne 8', value: ['Bastille', 'Saint-Michel', 'Paris Austerlitz'] },
                { text: 'Ligne 2', value: ['Jean', 'Republique', 'Tolbiac']},
                { text: 'Ligne 3', value: ['Tour Eifell', 'Mairie ivry', 'Olympiades'] }
            ],
        }
        
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-background-black {
    position: relative;
    border-radius: 6px;
    background-color: #393635;
    color: white;
    font-size: 16px !important;
}
.page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100%;
    transition: all 0.4s;
}
@media (max-width: 960px) {
    .page-content {
        width: 100%;
        margin: 0;
    }
}
.metros-bloc-title {
    font-size: 14px;
    line-height: 20px;
}
label {
    font-size: 12px;
    margin-bottom: 0px;
    padding-right: 10px;
}
select {
    font-size: .9rem;
    padding: 2px 5px;
}
.custom-background {
    height: fit-content;
}
.notes {
    background-color: white;
    position: relative;
    color: black;
    height: 100%;
    width: 100%;
}
.global-score {
    font-size: 12px;
    line-height: 16px;
}
.stations-notes {
    font-size: 18px;
    margin-top: 5px;
}
.cta-infos {
    background: #34C5AD;
    box-shadow: 0px 4px 4px rgba(171, 171, 171, 0.25);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
}
.form-control {
    background: #EDEDF6;
    border-radius: 4px;
    width: 80%;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    color: #202020;
}
.donutcsp-wrapper {
    width: 646px;
}
.best-enseigne {
    height: 100%;
}
</style>