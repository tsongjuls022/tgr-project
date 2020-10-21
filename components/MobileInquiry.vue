<template>
    <section style="padding : 20px 20px;">
        
        <div>
            <p class="card-main-title">Ask Us</p>
            <p class="card-main-sub-category">For any interior design, renovation, fit out, or construction requirement, contact Tokyo Grand Renovation and maximize quality and sophistication for your residential home or commercial space.</p>
        </div>
        <br>
        
        <textarea name="inquire-message" id="inquire-message" cols="40" rows="60" style="resize : none; width : 100%; height: 150px; margin-top : 10px;" placeholder="*Message"></textarea>
        <span class="span-style" id="label-message"></span>
        <input type="text" name="inquire-name" id="inquire-name" style="width : 100%; line-height: 3em;" placeholder="*Full Name"><br>
        <span class="span-style" id="label-name"></span>
        <input type="tel" name="inquire-number" id="inquire-number" placeholder="*Phone Number" style="width : 100%; line-height : 3em; margin-top : 5px;">
        <span class="span-style" id="label-number"></span>
        <input type="button" name="inquire-button" id="inquire-button" class="button is-black" style="width : 100%; margin-top : 5px;" value="INQUIRE NOW!">
    </section>
</template>
<script>
export default { 
    name : 'mobileinquiry'
}
</script>
<style scoped>
.card-main-title{
    font-size: 20px;
    font-weight:normal;
    color: #000000;
    font-family: Abril Fatface;
    text-align: left;
}
.card-main-sub-category{
    font-family: Raleway;
    font-size: 16px;
    font-weight:normal;
    color: #3C3C3D;
    text-align: justify;
}
.span-style{
    color : red;
    font-size: 12px;
}
</style>