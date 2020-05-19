<template>
    <div class="page-content pt-5">
        <!-- Loading -->
        <div v-if="loading" class="text-left pt-4 ml-5 mr-5">
            <h1 class="m-0">Loading...</h1>
        </div>
        <!-- Custom Box -->
        <div v-else class="p-5 ml-5 mr-5 mt-4 custom-background">
            <!-- Title -->
            <h1 class="map-title text-left mb-4">
                Les stations prioritaires pour la mise en place de services
            </h1>
            <!-- Custom Score bar -->
            <div class="container row score-bar pr-0 pl-0">
                <p class="score-text d-flex align-items-center mr-2 mt-3 col-md-4 ">Afficher le score des stations compris entre : </p>
                <div class="col-md-6">
                    <vue-slider type="range"  class="mt-3" v-model="value"  @change="valueChanged"></vue-slider>
                    <div class="input-label text-center">
                        <div class="d-flex">
                            <div class="p-2">1</div>
                            <div class="ml-auto p-2">100</div>
                        </div>
                    </div>
                </div> 
            </div> 
            <!-- add side bar -->
            <GaresMapMenu/>
            <!--  Vue Leaflet MAP -->
            <div class="col-12 ml-0 mr-0 pl-0 pr-0">
                <l-map
                :zoom="zoom"
                :center="center"
                class="col-12"
                style="height: 55vh;"
                >
                    <l-tile-layer
                    :url="url"
                    :attribution="attribution"
                    />
                    <l-geo-json
                    v-if=true
                    :geojson="geojson"
                    :options="options"
                    />
                    <!-- CUSTOM POINTS -->
                    <div class="" v-for="(points, key, index) in geojson.features" :key="index" >
                        <!-- SHOW ONLY IF TRUE AND HAS THE SCORE EQUAL TO LIMIT -->
                        <div v-if="points.properties.show_on_map && points.properties.Score >= limit[0] && points.properties.Score <= limit[1]">
                            <!-- SMALLER CIRCLE -->
                            <div v-if="points.properties.Score <= 50">
                                <l-marker @click="clickMarker" :lat-lng="[points.geometry.coordinates[1],points.geometry.coordinates[0]]">
                                    <l-icon
                                    class-name="circleSmall"
                                    >
                                        <!-- DIV TO TRICK URL EXCEPTED FROM COMPONENTS-->
                                        <div style="height:0px"></div>
                                    </l-icon>
                                    <l-tooltip :content="points.properties.station + ' score: ' + points.properties.Score"></l-tooltip>
                                </l-marker>
                            </div>
                            <!-- BIGGER CIRCLE -->
                            <div v-else>
                                <l-marker @click="clickMarker" :lat-lng="[points.geometry.coordinates[1],points.geometry.coordinates[0]]">
                                    <l-icon
                                    class-name="circleLarge"
                                    >
                                        <!-- DIV TO TRICK URL EXCEPTED FROM COMPONENTS-->
                                        <div style="height:0px"></div>
                                    </l-icon>
                                    <l-tooltip :content="points.properties.station + ' score: ' + points.properties.Score"></l-tooltip>
                                </l-marker>
                            </div>
                        </div>
                    </div>

                </l-map>       
            </div>
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, LMarker, LIcon, LTooltip } from "vue2-leaflet";
import 'vue-slider-component/theme/default.css'
import GaresMapMenu from './GaresMapMenu.vue'
import VueSlider from 'vue-slider-component'

export default {
    name: "Gares",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LMarker,
        LIcon,
        LTooltip,
        GaresMapMenu,
        VueSlider
    },
    data() {
        return {
            value: [5, 55],
            limit: [5, 55],
            loading: false,
            zoom: 12,
            center: [ 48.8534, 2.3488 ],
            geojson: null,
            url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        };
    },
    methods: {
        clickMarker() {
            this.$router.push("stations")
        },
        valueChanged(element) {
            // Features if we need to hide some elements at loading, not used in this case
            this.geojson.features[0].properties.show_on_map = true
            // When input value is changed re update values into the correct array
            this.limit[0] = element[0]
            this.limit[1] = element[1]

        },
    },
    computed: {
        options() {
            return {
                filter: this.filterFunction
            };
        },
        filterFunction () {
            return (feature) => {
                return feature.properties.show_on_map;
            };            
        }
    },
    async created() {
        this.loading = true;
        const response = await fetch("http://localhost:3000/api/stations")
        const data = await response.json();
        this.geojson = JSON.parse(data.data[0].geojson);
        this.loading = false;
    }
};
</script>

<style> 
.page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    height: 100vh;
    transition: all 0.4s;
}
@media (max-width: 960px) {
    .page-content {
        width: 100%;
        margin: 0;
    }
}
.custom-color {
    color:#6674C6;
}
.custom-background {
    background-color: white;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    height: 80vh;
}
.map-title {
    font-family: "Patua One";
    font-size: 16px;
    line-height: 20px;
}
.score-text {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
}
.input-label {
    width: 250px;
    font-size: 10px;
    line-height: 20px;
    color: #A0AEC1;

}
.custom-width {
    width: calc(100% - 301px)!important;
    transition: all 0.3s;
}
.circleLarge {
    background-color: #60C9EB;
    padding: 15px;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 0px 10px rgba(96, 201, 235, 0.15);
    text-align: center;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
}
.circleLargeLabel{
    background-color: #60C9EB;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 0px 8px rgba(96, 201, 235, 0.15);  
    width: 16.8px;
    height: 16.8px;
    margin: 0 auto;
}
.circleSmall {
    background-color: #60C9EB;
    padding: 10px;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 0px 8px rgba(96, 201, 235, 0.15);
    text-align: center;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
}
.circleSmallLabel{
    background-color: #60C9EB;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 0px 0px 5px rgba(96, 201, 235, 0.15);
    width: 8.4px;
    height: 8.4px;
    margin: 0 auto;
}
.spacer {
    height: 11px;
}
.vue2leaflet-map{
    transition: all 0.3s;
}
.vue-slider-ltr {
    width: 239px!important;
}
.vue-slider-rail {
    height: 5px;
    -webkit-appearance: none;
    background-color: #EEEEEE;;
    -webkit-transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
}
.vue-slider-process {
    background-color: #60C9EB;
}
.vue-slider-dot-handle {
    width: 12px;
    height: 12px;
    cursor: ew-resize;
    background-color: #60C9EB;
    box-shadow: 0px 0px 0px 5px white,0px 0px 0px 6px rgba(198, 203, 225, 0.5),  inset 0 0 0 40px #60C9EB; 
    border-radius: 50%;
    -webkit-transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
}
.vue-slider-dot-tooltip {
    visibility: visible;
}
.vue-slider-dot-tooltip-inner {
    background: rgba(96, 201, 235, 0.15);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.06);
    border-radius: 50% 50% 50% 50%;
}
.vue-slider-dot-tooltip-inner-top::after {
    border-top-color: rgba(96, 201, 235, 0.15);
}
.vue-slider-dot-tooltip-inner {
    color: #60C9EB;
}
</style>