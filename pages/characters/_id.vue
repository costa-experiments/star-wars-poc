<template lang="pug">
  Loading(v-if="!character")
  .character-details(v-else)
    h4(@click="$router.back()") BACK
    .character-details-content
      img(
        :src="require(`~/assets/images/characters/${$route.params.id}.jpg`)"
        alt="character image"
        width="250"
        class="character-image"
      )
      .character-description
        h2 {{character.name}}
        .character-description-item
          strong Gender
          span {{character.gender}}
        .character-description-item
          strong Hair color
          span {{character.hair_color}}
        .character-description-item
          strong Eyes color
          span {{character.eye_color}}
        .character-description-item
          strong Height
          span {{character.height}} cm
        .character-description-item
          strong Mass
          span {{character.mass}} kg
        .character-description-item
          strong Skin color
          span {{character.skin_color}}
        .character-description-item
          .movies
            strong Movies
            span(v-for="film in character.films") <br /> {{ film.title }}

</template>

<script>
export default {
  name: 'CharacterDetailsPage',

  data: () => ({
    character: null,
  }),

  methods: {
    async getCharacterData(id) {
      const { data } = await this.$axios.get(`/people/${id}`);

      const films = await this.getFilms(data);

      this.character = { ...data, films };
    },

    async getFilms(data) {
      const requestFilmsAggregated = data.films.map((film) => this.$axios.get(film));

      const response = await Promise.all(requestFilmsAggregated);

      return response
        .map((e) => e.data)
        .flat();
    },
  },

  async mounted() {
    this.getCharacterData(this.$route.params.id);
  },
};
</script>

<style lang="styl" scoped>

.character-details
  background-image url('~assets/images/mandalorian-wallpaper.jpg')
  background-position center
  background-repeat no-repeat
  background-size cover

  height 100vh
  width 100vw

  display flex
  justify-content center
  align-items center

  h4
    position absolute
    top 60px
    left 60px
    font-size 2rem
    font-family 'Bungee Inline', cursive

  h4:hover
    cursor: pointer

  .character-image
    border-radius 12px
    margin-right 46px
    width 150px
    margin-bottom 32px

    @media (min-width: 600px)
      width 250px
      margin-bottom 0px

  .character-details-content
    display flex
    align-items center
    justify-content center
    flex-direction column

    @media (min-width: 600px)
      flex-direction row

    border-radius 24px

    height 60vh
    width 60vw

    .character-description-item
      margin-top 12px

    h2
      font-size 1.7rem
      margin-bottom 28px
      color #9d6500

      @media (min-width: 600px)
        font-size 3rem

    h2, strong, span
      font-family 'Bungee Inline', cursive

    strong
      color #9d6500
      font-size 1rem
      margin-right 16px

      @media (min-width: 600px)
        font-size 1.4rem

    span
      color orange
      font-size 1rem

      @media (min-width: 600px)
        font-size 1.4rem

    .movies
      span
        font-size 1rem
</style>
