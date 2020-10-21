<template>
    <section>
        <div class="div-container">
            <br><br><br><br><br><br><br>
            <div class="columns is-vcentered" style="width : 100%;">
                <div class="column has-text-right" >
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default { 
    name : 'mobilebanner'
}
</script>
<style scoped>
.div-container{
    background-image: url('/Vacation-House.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height : 800px;
    width: 100%;
}
@media only screen and (max-width:1400px) {
    .div-container {
        height : 700px;
    }
}
@media only screen and (max-width:1100px) {
    .div-container {
        height : 500px;
    }
}
@media only screen and (max-width:768px) {
    .div-container {
        height : 400px;
    }
}
</style>