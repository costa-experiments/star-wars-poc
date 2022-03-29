<template lang="pug">
  .character(@click="showDetails" :class="{'dark-character': darkTheme}")
    .image
    .more-information
      img(
        src="~assets/icons/information-icon-dark.svg"
        alt="information icon"
        height="30"
        width="30"
      )
    .information
      .title
        strong {{name}}
      .description
        .description-item
          strong Gender:&nbsp;
          span {{gender}}
        .description-item
          strong Height:&nbsp;
          span {{height}} cm
        .description-item
          strong Number of films:&nbsp;
          span {{films}}
        .description-item
          strong Birth year:&nbsp;
          span {{birth_year}}
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex';

export default {
  name: 'TheCharacter',

  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },

  methods: {
    showDetails() {
      this.$emit('show-details', this.id);
    },
  },

  props: {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    height: {
      type: String,
      require: true,
    },
    films: {
      type: Number,
      require: true,
    },
    birth_year: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="styl" scoped>
.character
  display flex
  flex-direction column
  position relative

  background-color white

  height 400px
  width 90%

  @media (min-width: 600px)
    width 400px

  border-radius 20px

  box-shadow 1px 1px 10px 1px rgba(0,0,0,0.1)

  .image
    background-image url('~assets/images/fallen-stars.jpg')
    height 40%
    border-radius 20px

  .more-information
    position absolute

    display flex
    align-items center
    justify-content center

    right 26px
    bottom 55%

    height 40px
    width 40px

    background-color white
    box-shadow 1px 1px 1px 1px rgba(0,0,0,0.1)
    border-radius 100%

  .information
    height 60%
    background-color white
    border-radius 20px

    .title
      display flex
      justify-content center

      margin-bottom 48px

      strong
        font-family 'Bungee Inline', cursive;
        font-size 1.4rem
        color black

        margin-top 20px

    .description
      margin-left 16px

      display flex
      flex-direction column

      gap 12px

      span, strong
        font-size 1.2rem
        color black
        text-transform capitalize

.character:hover
  cursor pointer

.dark-character
  background-color #141414

  .more-information
    background-color black

  .information
    background-color #141414

    .title
      strong
        color #a9a9a9

  .description
    .description-item
      strong, span
        color gray
</style>
