<template>
  <div class="card-wrapper">
    <product-card
        v-for="(item,index) in getProductItemStore"
        :key="index"
        :title="item.nameProduct"
        :description="item.descriptionProduct"
        :url="item.urlProduct"
        :price="item.priceProduct"
        :id="item.id"
    />
  </div>

</template>

<script>
import ProductCard from "@/components/cardWrapper/productCard";
export default {
  name: "cardWrapper",
  components: {ProductCard},
  mounted() {
    if(localStorage.getItem('productArray')) {
      this.$store.dispatch('getProductItemStore', JSON.parse(localStorage.getItem('productArray')))
    }

  },
  computed: {
    getProductItemStore () {
      return this.$store.state.productItemStore.data
    }
  }
}
</script>

<style lang="sass" scoped>
.card-wrapper
  display: flex
  flex-wrap: wrap
  gap: 16px
@media (max-width: 1024px)
  .card-wrapper
    flex-direction: column
    justify-content: center
</style>
