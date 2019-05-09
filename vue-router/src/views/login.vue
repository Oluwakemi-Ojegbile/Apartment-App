<template>
  <div class="login">
    <form class="form-box">
      <label class="username">Username:</label><br>
      <input type="text" name="username" id="username">
      <label class="password">Password</label>
      <input type="password" name="password" id="password">
      <button type="submit" class="Log">Login</button>
    </form>
  </div>
</template>
<script>
 
</script>
<style scoped>
.login {
  position: absolute;
    width: 1350px;
    height: 648px;
    padding: 1.8em;
    top:10%;
    display: flex;
    justify-content: space-between;
    background: url("../assets/Login.jpg");
}
.form-box {
background: #354A5F;
  border-radius: 10px;
  padding: 2em;
  margin: auto;
  height: 250px;
  width: 400px;
  height: 400px;
}
.username {
  position: absolute;
  width: 66px;
  height: 18px;
  left: 500px;
  top: 160px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  color: #000000;
}
#username {
  position: absolute;
  width: 400px;
  height: 30px;
  left: 500px;
  top:185px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
}
.password {
  position: absolute;
  width: 66px;
  height: 18px;
  left: 500px;
  top: 240px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  color: #000000;
}
#password {
  position: absolute;
  width: 400px;
  height: 30px;
  left: 500px;
  top: 265px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
}
.Log {
  position: absolute;
  width: 130px;
  height: 41px;
  left: 650px;
  top: 400px;
  background: #66DBB7;
  border-radius: 4px;
}
</style>