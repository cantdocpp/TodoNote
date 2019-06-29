<template>
  <div class="homepage">
    <div class="home__title"></div>
    <TodoSvg />
    <div class="home__content">
      <p>Do you have any new task to do today ?</p>
      <p>Click <router-link :to="{ name: 'theTask', params: {section: 'today'} }">here</router-link> to make a new task </p>
    </div>
  </div>
</template>

<script>
  import TodoSvg from '../component/TodoSvg'

  export default {
    data() {
      return {
        
      }
    },

    components: {
      TodoSvg
    }
  }
</script>

<style lang="scss" scoped>
    .homepage {
      margin-top: 8px;
    }

    .home__content {
      margin-top: 30px;
      font-size: 14px;
      font-weight: 500;

      p {
        text-align: center
      }
    }

    svg {
      width: 50%;
      height: 50%;
      display: block;
      margin: auto
    }

    @media only screen and (max-width: 768px) {
      svg {
        width: 70%;
        height: 70%
      }
    }
</style>

