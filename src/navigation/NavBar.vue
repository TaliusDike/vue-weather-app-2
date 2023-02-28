<template>
    <nav class="nav-container">
        <div class="nav-links">
            <router-link class="nav-link" active-class="active" to="/"> Home </router-link>
        </div>

        <div class="nav-links">
            <router-link class="nav-link" active-class="active" to="/about"> About </router-link>
        </div>
    
        <div class="nav-links">
            <router-link class="nav-link" active-class="active" to="/weather"> Weather App </router-link>
        </div>
    </nav>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style scoped>
 
 .nav-container {
    display: flex;
    justify-content: space-evenly;
   background: black;
   padding: 10px;
 }

 .nav-links {
    background-color: white;
    
    text-decoration: none;
    padding: 2px 5px;
 }

 .nav-link {
    font-size: 15px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
 }

.active {
    font-weight: bolder;
    color: green;
}




 
 
 </style>