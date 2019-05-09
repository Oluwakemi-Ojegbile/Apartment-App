<template>
  <header class="page_header">
    <div class="header__form">
      <h1>Find the perfect home for you.</h1>
      <form action="POST">
        <div class="form__row">
          <label class="location">Location:</label><br>
          <input type="text" name="location" class="form__input">
        </div>
        <div class="form__row">
          <span class="form-group">
            <input type="text" name="location" id="location" class="form-input"> 
          </span>
          <span class="form_group">
            <input type="text" name="location" id="location" class="form_input"> 
          </span>
        </div>
        <button type="submit" class="form__button">SEARCH</button>
      </form>
    </div>
    
  </header>
</template>
<script>
 export default {
   name: 'pageHeader',
 }
</script>
<style>
.page_header {
  height: 600px;
  background: url("../assets/Background.png");
  text-align: center;
  display: flex;
  margin: auto;
}
.header__form {
  background: #ffffff;
  border-radius: 10px;
  padding: 2em;
  margin: auto;
  height: 250px;
}
.location {
  position: absolute;
  width: 66px;
  height: 18px;
  left: 443px;
  top: 310px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
.form__input {
  position: absolute;
  width: 450px;
  height: 30px;
  left: 443px;
  top: 330px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
}
h1 {
  margin-top: 0%;
}
.form-input {
  position: absolute;
  width: 220px;
  height: 30px;
  left: 443px;
  top: 390px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
}
.form_input {
  position: absolute;
  width: 220px;
  height: 30px;
  left: 690px;
  top: 390px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
}
.form__button {
  position: absolute;
  width: 130px;
  height: 41px;
  left: 600px;
  top: 450px;
  background: #66DBB7;
  border-radius: 4px;
}
</style>