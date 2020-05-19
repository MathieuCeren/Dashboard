<template>
    <div class="login-page d-flex justify-content-end align-items-center text-left">
        <div class="train-background">
            
        </div>
        <div class="login-content pr-4">
            <h1 class="login-title">Bienvenue sur <br><span class="to-color">9 3/4</span></h1>
            <p class="login-text col-9 p-0">Le dashboard qui vous accompagne dans vos prises de décision sur les services en station</p>
            <div class="con">
                <i class="far fa-envelope"></i>
                <input type="text" placeholder="email" />

            </div>
            <div class="con mt-3">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="mot de passe" />

            </div>
            <router-link to='/map' class="">
                <button class="login-button mt-4">Connexion</button>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.login-page {
    height: 100vh;
    background-image: url("../../src/assets/background-login.png");
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
}
.train-background {
    background-image: url("../../src/assets/train-background.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    height: 50%;
}
.train-login {
    bottom: 0;
    left: 0;
    width: 28%;
}
.login-title {
    font-family: Patua One;
    font-style: normal;
    font-weight: normal;
    font-size: 46px;
    line-height: 54px;
    color: #000000;
}
.to-color {
    color: #34C5AD;
}
.login-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 29px;
}
.login-button {
    background: #34C5AD;
    border-radius: 4px;
    border: 0.5px solid #34C5AD;
    box-sizing: border-box;
    width: 140px;
    color: white;
    height: 32px;
}
.con { 
    width: 500px; 
    position:relative; 
    height: 42px;
    background-color: white;
    border-radius: 6px;
}
.con input { 
    margin: 0px 0px 0 35px; 
    border:0; 
    height: 42px;
    border-radius: 6px;
    width: 90%;
}
.con .fa-envelope { 
    display:block; 
    position:absolute; 
    top:13px; 
    left:10px; 
    cursor:pointer; 
}
.con .fa-lock { 
    display:block; 
    position:absolute; 
    top:13px; 
    left:10px; 
    cursor:pointer; 
}
</style>
