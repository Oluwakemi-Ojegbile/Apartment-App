<template>
    <div class="post-property">
        <div class="sale">Have a property for sale? Reach a larger audience and make fast business transactions<br>
        Lorem Ipsum because I am short of words.</div>

       <button class="post_button">Post a property</button>
    </div>
</template>
 <script>
 export default {
   name: 'post-property'
 }
 </script>
  <style scoped>
.post-property {
    position: absolute;
    width: 1440px;
    height: 210px;
    left: 0px;
    top: 2250px;
    background: url("../assets/post.jpg");
}
.sale {
    width: 876px;
    height: 56px;
    margin: 20px;
    margin-left: 200px;
    margin-top: 30px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
}
.post_button {
    position: absolute;
    width: 130px;
    height: 41px;
    left: 555px;
    background: #66DBB7;
    border-radius: 5px;
}
 </style>