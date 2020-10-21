<template>
    <section>
        <div class="div-container">
            <br><br><br><br><br><br><br>
        </div>
    </section>
</template>
<script>
export default { 
    name : 'mobileblogsbanner'
}
</script>
<style scoped>
.div-container{
    background-image: url('/blog-banner.jpg');
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