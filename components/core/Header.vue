<template lang="pug">
  header(:class="{dark: darkTheme}")
    .nav
      img(
        :src="moonIconSource"
        class="change-theme"
        alt="moon image"
        width="40"
        height="40"
        @click="enableDarkTheme"
      )
      img(
        :src="logoImageSource"
        class="logo"
        alt="star wars logo"
        height="100"
        width="220"
      )
      img(
        :src="sunIconSource"
        class="change-theme"
        alt="sun logo"
        width="40"
        height="40"
        @click="disableDarkTheme"
      )
</template>

<script>
// eslint-disable-next-line
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheHeader',

  methods: {
    ...mapActions('theme', ['enableDarkTheme', 'disableDarkTheme']),
  },

  computed: {
    logoImageSource() {
      // eslint-disable-next-line
      return require(`~/assets/icons/star-wars-logo${this.darkTheme ? '-dark' : ''}.svg`);
    },

    moonIconSource() {
      // eslint-disable-next-line
      return require(`~/assets/icons/moon${this.darkTheme ? '-active' : ''}-icon.svg`);
    },

    sunIconSource() {
      // eslint-disable-next-line
      return require(`~/assets/icons/sun${!this.darkTheme ? '-active' : ''}-icon.svg`);
    },

    ...mapGetters('theme', ['darkTheme']),
  },
};
</script>

<style lang="styl" scoped>
header
  background-image url('~assets/images/mandalorian-wallpaper.jpg')
  background-attachment fixed
  background-position center
  background-repeat no-repeat
  background-size cover

  min-height 500px
  background-color black

  display flex
  justify-content center

  @media (min-width: 600px)
    min-height 700px

  .nav
    display flex
    align-items center
    justify-content space-between
    padding 0px 24px
    width 100%
    height 100px

    .logo
      height 50px
      width 110px

      @media (min-width: 600px)
        height 100px
        width 220px

    .change-theme
      height 32px
      width 32px

      @media (min-width: 600px)
        height 40px
        width 40px

    .change-theme:hover
      cursor pointer

.dark
  mask-image linear-gradient(to top, transparent 5%, black 100%)
</style>
