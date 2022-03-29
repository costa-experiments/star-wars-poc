<template lang="pug">
  .input-wrapper(:class="{'dark-input-wrapper': darkTheme}")
    img(
      src="~assets/icons/search-icon-dark.svg"
      width="20"
      height="20"
      class="search-icon"
      @click="search"
    )
    input(
      type="text"
      placeholder="Search..."
      v-model="value"
      @input="search"
    )
    img(
      src="~assets/icons/close-icon-dark.svg"
      width="10"
      :class="{'close-icon-show': value, 'close-icon': true}"
      @click="clear"
    )
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex';

export default {
  name: 'InputText',

  computed: {
    ...mapGetters('theme', ['darkTheme']),
  },

  methods: {
    search() {
      this.$emit('search', this.value);
    },

    clear() {
      this.value = '';
      this.search('search', '');
    },
  },

  data: () => ({
    value: '',
  }),
};
</script>

<style lang="styl" scoped>
.input-wrapper
  display flex
  justify-content center
  align-items center

  width 100%

  background-color white

  box-shadow: 1px 1px 1px rgba(0 0 0,.1)
  border-radius 10px

  .search-icon
    margin 0px 16px

  .close-icon
    margin 0px 16px
    opacity 0

  .close-icon:hover {
    cursor: pointer;
  }

  .close-icon-show
    opacity 1

  input
    width 100%
    padding: 20px 0px;
    border none

    color black
    font-size: 14pt

  input:focus, textarea:focus, select:focus
    outline transparent

.dark-input-wrapper
  background-color #141414

  input
    background-color #141414
    color white
</style>
