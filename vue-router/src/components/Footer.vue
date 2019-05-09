<template>
  <div class="page-footer">
    <span>
      <img src="../assets/icons.png">
    </span>
      
        <div class="footerinfo">
          <span class="info">
          raimioluwakemi@yahoo.com<br>+2348099872932<br>Always available
      </span>

      <span class="addr">
          BETTER HOLDINGS<br>Lorem Ipsum<br>Dolaroes Er<br>Lagos. 
      </span>
    </div>

 </div>
</template>
<script>
 export default {
   name: 'page-footer',
 }
</script>n

<style>
.page-footer {
  position: absolute;
  width: 1440px;
  height: 320px;
  left: 0px;
  top: 2200px;
  background: #354A5F;
}
img {
 position: absolute;
width: 176px;
height: 50px;
left: 632px;
top: 30px;
  background: url("../assets/icons.png");
}
.info {
position: absolute;
width: 156px;
height: 105px;
left: 975px;
top: 120px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 25px;
text-align: right;

color: #FFFFFF;

}
.addr {
position: absolute;
width: 183px;
height: 158px;
left: 300px;
top: 120px;
text-align:justify;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 25px;

color: #FFFFFF;

}

</style>