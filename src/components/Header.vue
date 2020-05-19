<template>
    <!-- Vertical navbar -->
    <div class="vertical-nav" id="sidebar" v-if="$route.name != 'login'">
        <div class="nav-header">
            <div class="py-4 px-3 mb-4 pb-4">
                <div class="pb-4 mb-2">
                    <img class="ratp-logo" src="../../src/assets/ratp-logo.svg" alt="ratp logo">
                    <div class="media-body pt-2">
                        <h4 class="dashboard-name m-0 pt-2">9 3/4</h4>
                    </div>
                </div>
            </div>
        </div>

        <ul class="nav flex-column mb-0 align-items-center">
            <div class="ligne"></div>
            <li class="nav-item">
                <router-link to='/map' class="nav-link menu-color d-flex align-items-center">
                    <div class="circle col-1">
                        <div class="inner-circle-active"></div>
                    </div>
                    <div class="menu-title col-10">
                        Stations Prioritaires
                    </div>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to='/stations' class="nav-link menu-color d-flex align-items-center">
                    <div class="circle col-1">
                        <div class="inner-circle-active"></div>
                    </div>
                    <div class="menu-title col-10">
                        Focus par station
                    </div>
                </router-link>
            </li>
            <div class="ligne2"></div>
            <li class="nav-item">
                <router-link to='/utilisateurs' class="nav-link menu-color d-flex align-items-center">
                    <div class="circle col-1">
                        <div class="inner-circle-active"></div>
                    </div>
                    <div class="menu-title col-10">
                        Focus utilisateurs
                    </div>
                </router-link>
            </li>
            <div class="ligne3"></div>
            <li class="nav-item">
                <router-link to='/performance' class="nav-link menu-color d-flex align-items-center">
                    <div class="circle col-1">
                        <div class="inner-circle-active"></div>
                    </div>
                    <div class="menu-title col-10">
                        Performance
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="train-background h-100">
            <img class="d-flex align-self-center" src="../../src/assets/train-background.svg" alt="..." height="250">
        </div>
    </div>
<!-- End vertical navbar -->
</template>

<script>
export default {
    name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.nav {
    position: relative;
}
.vertical-nav {
    font-family: 'Noto Sans', sans-serif;
    min-width: 17rem;
    width: 17rem;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: #34C5AD;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
}
.nav-header {
    background-image: url("../../src/assets/background-vector.svg");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}
.ratp-logo {
    width: 40%;
}
.dashboard-name {
    font-weight: bold;
    font-size: 25px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #4BC0AD;
}
li.nav-item{
    margin: 0 0 40px 0;
}
/* for toggle behavior */
#sidebar.active {
    margin-left: -17rem;
}

#content.active {
    width: 100%;
    margin: 0;
}
.router-link-exact-active{
    .inner-circle-active {
        display: inline;
    }
    color: #6674C6;
    font-weight: bold;
}
.nav-item:hover{
    .menu-title {
        font-weight: bold;
    }
}
.menu-color{
    color: white;
    text-transform: uppercase;
    width: 210px;
}
@media (max-width: 960px) {
    #sidebar {
        margin-left: -17rem;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #content {
        width: 100%;
        margin: 0;
    }
    #content.active {
        margin-left: -17rem;
        width: calc(100% - 17rem);
    }
}
.train-background {
    position: relative;
}

.train-background img {
    position: absolute;
    bottom: 624px;
    width: 80%;
}
@media (max-height: 600px) {
    .train-background {
        display: none;
    }
}
@media (max-height: 820px) {
    .train-background {
        width: 75%;
    }
    .train-background img {
        bottom: 600px;
    }
}
.circle {
    box-shadow: 0px 0px 0px 1px white;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ligne {
    border: 1px solid #FFFFFF;
    height: 18.3%;
    top: 46.7px;
    left: 62px;
    position: absolute;
}
.ligne2 {
    border: 1px solid #FFFFFF;
    height: 18.3%;
    top: 151px;
    left: 62px;
    position: absolute;
}
.ligne3 {
    border: 1px solid #FFFFFF;
    height: 16.1%;
    top: 255px;
    left: 62px;
    position: absolute;
}
.inner-circle-active {
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: white;
    display: none;
}
</style>
