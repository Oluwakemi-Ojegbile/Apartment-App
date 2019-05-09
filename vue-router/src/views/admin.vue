<template>
<div class="admin">
  <h2>ADMIN DASHBOARD</h2>
   <button type="submit" class="admin_button">Add a new property</button>
   <div class="form_admin">
     <p>NAME OF PROPERTY</p>
      <input type="text" class="form-input">
      <span class="price">PRICE</span><span class="loc">LOCATION</span>
      <span><input type="text" class="price-input"></span><span><input type="text" class="loc-input"></span>
      <p class="des">DESCRIPTION</P>
      <input type="text" class="des-input">
      <button type="submit" class="add">Add</button>
     </div>
     <div>
       <span>
          <div class="img1"></div><br>
          <h3 class="n1"> The Runway room in NewYork</h3><br><h4 class="N1">#100,000 per year</h4>
          <span><button type="submit" class="update1">Update</button></span><span><button type="submit" class="del1">Delete</button></span>
        </span>
        <span>
          <div class="img2"></div><br>
          <h3 class="n2"> The Runway room in NewYork</h3><br><h4 class="N2">#100,000 per year</h4>
          <span><button type="submit" class="update2">Update</button></span><span><button type="submit" class="del2">Delete</button></span>
        </span>
        <span>
          <div class="img3"></div><br>
          <h3 class="n3"> The Runway room in NewYork</h3><br><h4 class="N3">#100,000 per year</h4>
          <span><button type="submit" class="update3">Update</button></span><span><button type="submit" class="del3">Delete</button></span>
        </span>
       </div>
</div>
</template>
<script>
 
</script>
<style scoped>
.admin_button {
  width: 203px;
  height: 50px;
  left: 618px;
  top: 192px;
  background: #66DBB7;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
}
.form_admin {
  position: absolute;
  width: 934px;
  height: 540px;
  left: 219px;
  top: 296px;
  background: #FFFFFF;
  border: 1px solid #888686;
  box-sizing: border-box;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
p {
  position: absolute;
  width: 186px;
  height: 18px;
  left: 45px;
  top: 12px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.form-input {
  position: absolute;
  width: 825px;
  height: 54px;
  left: 45px;
  top: 55px;
  background: #FFFFFF;
  border: 1px solid #888686;
  box-sizing: border-box;
  border-radius: 10px;
}
.price {
  position: absolute;
width: 186px;
height: 18px;
left: 1px;
top: 135px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
color: #000000;
}
.loc {
  position: absolute;
width: 186px;
height: 18px;
left: 503px;
top: 135px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;

color: #000000;
}
.price-input {
  position: absolute;
  width: 405px;
  height: 54px;
  left: 45px;
  top: 160px;
  background: #FFFFFF;
  border: 1px solid #888686;
  box-sizing: border-box;
  border-radius: 10px;
}
.loc-input {
  position: absolute;
  width: 375px;
  height: 54px;
  left: 503px;
  top: 160px;
  background: #FFFFFF;
  border: 1px solid #888686;
  box-sizing: border-box;
  border-radius: 10px;
}
.des {
  position: absolute;
  width: 186px;
  height: 18px;
  left: 5px;
  top: 220px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
}
.des-input {
  position: absolute;
  width: 508px;
  height: 118px;
  left: 45px;
  top: 265px;
  background: #FFFFFF;
  border: 1px solid #888686;
  box-sizing: border-box;
}
.add {
  position: absolute;
  width: 210px;
  height: 52px;
  left: 380px;
  top: 442px;
  background: #66DBB7;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
}
.img1 {
  position: absolute;
  width: 339px;
  height: 196px;
  left: 106px;;
  top: 950px;
  background: url("../assets/Runaway.jpg");
}
.img2 {
  position: absolute;
  width: 339px;
  height: 196px;
  left: 505px;;
  top: 950px;
  background: url("../assets/Runaway.jpg");
}
.img3 {
  position: absolute;
  width: 339px;
  height: 196px;
  left: 906px;;
  top: 950px;
  background: url("../assets/Runaway.jpg");
}
.n1 {
  position: absolute;
  left: 145px;;
  top: 1150px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
}
.n2 {
  position: absolute;
  left: 545px;;
  top: 1150px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
}
.n3 {
  position: absolute;
  left: 946px;;
  top: 1150px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
}
.N1 {
  position: absolute;
left: 145px;
top: 1180px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #888686;
}
.N2 {
  position: absolute;
left: 545px;
top: 1180px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #888686;
}
.N3 {
  position: absolute;
left: 946px;
top: 1180px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #888686;
}
.update1 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 9.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
.del1 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 20.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
.update2 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 38.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
.del2 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 49.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
.update3 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 68.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
.del3 {
  width: 130px;
  height: 41px;
  position: absolute;
  left: 79.73%;
  top: 1300px;
  background: #66DBB7;
  border-radius: 4px;
}
</style>
