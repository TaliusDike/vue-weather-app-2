<template>
  <main class="container">
    <div class="text-wrapper">
      <h1>Weather Checker App</h1>
      <p>... works under the sun or in the rain.</p>
    </div>
    <div class="button-wrapper">
      <a href="/weather">Check Weather</a>
    </div>
  </main>
</template>

<script>
export default {
}

</script>

<style scoped>
  .container {
    background-image: url('@/assets/bluesky-bg.jpg');
    background-size: cover;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
  }

  .container h1 {
    font-size: 5rem;
  }

  .text-wrapper {
    margin: 0 auto;
  }

  .button-wrapper a {
    text-decoration: none;
    background: #3e84c1;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    
  }

  @media (min-width:320px) and (max-width: 480px) {
    .container h1 {
      font-size: 3rem;
    }
  }
</style>