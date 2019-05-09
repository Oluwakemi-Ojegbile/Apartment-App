<template>
<div class="services">
      <div class="serviceimg">
        <h4>OUR SERVICES</h4>
        <p class="note1">Connecting house owners and tenants</p>
        <div class="homeserve"></div>
        <p class="note2"> We willc onnect you faster that other connections </p>
        <button type="submit" class="btn">View our Properties</button>
     </div>
     <div class="Rectangle"><img src="../assets/Rectangle.jpg"></div>
</div>
</template>
<script>

</script>
<style scoped>
.services {
    width: 1440;
    height: 717px;
}
.serviceimg {
    position: absolute;
    width: 1290px;
    height: 648px;
    padding: 1.8em;
    top:10%;
    display: flex;
    justify-content: space-between;
    background: url("../assets/service.jpg");
}
h4 {
    width: 161px;
    height: 24px;
    margin-left: 630px;
    top: 110px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
}
.note1 {
    position: absolute;
    width: 316px;
    height: 34px;
    left: 562px;
    top: 255px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}
.homeserve {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 670px;
    top: 325px;
    background: url("../assets/homeserve.png")
}
.note2 {
    position: absolute;
    width: 256px;
    height: 28px;
    left: 587px;
    top: 489px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}
.btn {
    position: absolute;
    width: 130px;
    height: 41px;
    left: 664px;
    top: 581px;
    background: #66DBB7;
    border-radius: 4px;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}
.Rectangle {
    position: absolute;
    top: 120.31%;
    background: #F2F6FF;
}
</style>