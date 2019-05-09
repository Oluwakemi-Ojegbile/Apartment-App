<template>
  <nav class="navigation">
    <div class="navigation__menu">
      <span class="link__wrapper">
        <router-link class="link" to="/">Home</router-link>
      </span>
      <span class="link__wrapper"> 
        <router-link class="link" to="/properties">Properties</router-link>
      </span>
      <span class="link__wrapper"> 
        <router-link class="link" to="/admin">Admin</router-link>
      </span>
      <span class="link__wrapper"> 
        <router-link class="link" to="/login">Login</router-link>
      </span>
      <span class="link__wrapper">
        <router-link class="link" to="/signin">Sign up</router-link>
      </span>
      <span class="link__wrapper">
        <router-link class="link" to="/services">Services</router-link>
      </span>
      <span class="link__wrapper">
        <router-link class="link" to="/about">About</router-link>
      </span>
      <span class="link__wrapper">
        <router-link class="link" to="/Contact">Contact</router-link>
      </span>
    </div>
    <div>
      <button class="navbar__button">
        Post a property
      </button> 
    </div>
  </nav>
</template>
  <style scoped>
 .navigation {
   background: #354A5F;
   padding: 1.8em;
   display: flex;
   justify-content: space-between;
 }
 .navigation__menu {
   display: flex;
   align-content: center;
   justify-content: center;
   flex: 1;
 }
 .link {
   color: #fcfcfc;
   padding: 0.5 3em;
   text-decoration: none;
 }
 .link__wrapper {
   padding: 0.5em 1em;
 }
 .navbar__button {
   background: #66DBB7;
   border: none;
   padding: 0.65em 1em;
   border-radius: 5px;
   color: #ffffff;
 }
 @media (max-width: 760px) {
  .navigation {
    background: black;
  }
  .navbar__button {
    background: green;
  }
}
 </style>