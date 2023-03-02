<template>
  <main class="container">
    <h1>What About This App?</h1>
    <!-- <div class="image-wrapper">
      <img src="../assets/bright-palmtrees-bg.jpg" alt="cloudy-sky">
    </div> -->
    <div class="text-wrapper">
      <p>This simple weather checking app is completely built using Vue JS framework.
      The app can be used to search for the weather condition in cities around the world in real time. 
      Whether it's raining cats and dogs in Lagos or it's sunny in Philadelphia, be one step ahead because the information is now in your hands.</p>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('@/assets/bright-palmtrees-bg.jpg');
    background-size: cover;

    
    /* background-image: linear-gradient(to bottom, rgba(95, 81, 81, 0.25), rgba(51, 51, 51, 0.75) ); */
  }

  .container h1 {
      margin-top: 35px;
      text-transform: uppercase;
    }

  .image-wrapper img {
    height: 60vh;
    width: 85%;
    margin-top: 10px;
  }

  .text-wrapper p {
    text-align: justify;
    margin: 20px 50px;
    padding: 10px;
    background-color: white;
  }

  @media (min-width:320px) and (max-width: 480px) {
    .container h1 {
      font-size: 25px;
      /* background-color: white; */
      
    }
    .image-wrapper img {
      height: 35vh;
      max-width: 70%;
      margin-top: 20px;
  }

  .text-wrapper p {
    background-color:none;
    /* color: white; */
  }
  }
</style>