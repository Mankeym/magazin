<template>
  <div class="page">
    <h1 class="page__title">Добавление товара</h1>
    <div class="page__container">
      <add-form />
    </div>
  </div>
</template>

<script>

import AddForm from "@/components/addForm/addForm";
export default {
  name: 'App',
  components: {AddForm}
}
</script>

<style lang="sass" scoped>
@import "fonts"
.page
  display: flex
  flex-direction: column
  gap: 16px
  max-width: 1440px
  width: 100%
  height: 100%
  margin: 0 auto
.page__title
  font-family: 'Source Sans Pro', sans-serif
  font-style: normal
  font-weight: 600
  font-size: 28px
  line-height: 35px
  margin: 0
</style>
