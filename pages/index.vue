<template lang="pug">
  Loading(v-if="!swapi")
  div(v-else)
    Header
    main(:class="{dark: darkTheme}")
      form
        InputSearch(class="search" @search="searchCharacters")
      .search-content
        Character(
          v-for="({name, birth_year, gender, height, films}, index) in swapi.results"
          :key="name"
          :id="getCharacterId(name)"
          :name="name"
          :birth_year="birth_year"
          :gender="gender"
          :height="height"
          :films="films.length"
          @show-details="showDetails"
        )
      Pagination(
        :pageSize="swapi.results.length"
        :count="swapi.count" class="pagination"
        @change-page-to="getCharactersPage"
      )
</template>

<script>
// eslint-disable-next-line
import CharacterId from './../data/character-ids.json';
// eslint-disable-next-line
import { mapGetters } from 'vuex';

export default {
  name: 'CharacterListPage',

  methods: {
    async showDetails(id) {
      this.$router.push(`/characters/${id}`);
    },

    searchCharacters(searchText) {
      setTimeout(async () => {
        const { data } = await this.$axios.get(`https://swapi.dev/api/people?search=${encodeURIComponent(searchText)}`);

        this.swapi = data;
      }, 500);
    },

    async getCharactersPage(page = 1) {
      const { data } = await this.$axios.get(`https://swapi.dev/api/people?page=${page}`);

      this.page = page;
      this.swapi = { ...data };
    },
  },

  data: () => ({
    swapi: null,
    page: 1,
  }),

  computed: {
    getCharacterId() {
      return (name) => CharacterId[name];
    },

    ...mapGetters('theme', ['darkTheme']),
  },

  async mounted() {
    this.getCharactersPage();
  },
};
</script>

<style lang="styl" scoped>
main
  display flex
  flex-direction column
  align-items center
  justify-content center

  background-color whitesmoke

  form
    margin-top -6%
    width 90%

    @media (min-width: 600px)
      margin-top -1.7%
      width 50%

  .search-content
    display flex
    justify-content center
    width 100%
    flex-wrap wrap
    margin-top 100px
    gap 32px

    @media (min-width: 600px)
      margin-top 180px

  .pagination
    margin 50px 0px

.dark
  background-color black
</style>
