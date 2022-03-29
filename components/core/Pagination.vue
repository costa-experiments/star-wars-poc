<template lang="pug">
  .pagination
    .pages(
      v-for="number in numberOfPages"
      :key="number"
      :class="{current: current === number}"
      @click="changePageTo(number)"
    )
      span(:class="{dark: darkTheme}") {{number}}
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex';

export default {
  name: 'ThePagination',

  props: {
    count: {
      type: Number,
      require: true,
    },
    pageSize: {
      type: Number,
      require: true,
    },
  },

  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },

  data: () => ({
    current: 1,
    numberOfPages: 0,
  }),

  watch: {
    count() {
      this.setNumberOfPages();
    },
  },

  methods: {
    changePageTo(page) {
      this.current = page;

      this.$emit('change-page-to', page);
    },

    setNumberOfPages() {
      this.numberOfPages = Math.ceil(this.count / this.pageSize);
    },
  },

  mounted() {
    this.setNumberOfPages();
  },
};
</script>

<style lang="styl" scoped>
.pagination
  display flex
  gap 12px

  .current
    background-color orange
    border-radius 5px

  .pages
    padding 10px

    span
      font-weight bold
      font-size 16px
      color black

    .dark
      color white

  .pages:hover
    cursor: pointer
</style>
