<template>
    <div class="sign-up">
        <h1 class="sign">Sign Up to get the latest offers in your inbox</h1>

       <div class="form_group">
            <span>
                <input type="text" class="form_input" placeholder="     Email"> 
            </span>
            <span>
                <button type="submit" class="form_button ">SEARCH</button>
            </span>
        </div> 
    </div>
</template>
 <script>
 export default {
   name: 'sign-up',
 }
 </script>
<style scoped>
.sign-up {
    position: absolute;
    width: 1350px;
    height: 208px;
    left: 0px;
    top: 1364px;
    background: #354A5F;
}
.sign {
    width: 350px;
    height: 28px;
    margin: 20px;
    margin-left: 470px;
    top: 1393px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}
.form_group {
    width: 791px;
    height: 92px;
    margin: 20px;
    margin-left: 300px;
    top: 1450px;
    background: #FFFFFF;
}
.form_input {
    width: 554px;
    height: 41px;
    left: 368px;
    top: 100px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;
}
.form_button {
    position: absolute;
    width: 130px;
    height: 41px;
    left: 937px;
    top: 100px;
    background: #66DBB7;
    border-radius: 4px;
}
</style>
