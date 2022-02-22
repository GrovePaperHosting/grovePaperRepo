<template>
  <div class="is-flex is-flex-direction-row my-2">
    <img :src="cartElementInfo.imgUrl">
    <div class="has-text-left ml-2">
      <h1 class="freight-big-pro-font has-text-black is-size-5"> {{cartElementInfo.name}}</h1>
      <h1 class="freight-big-pro-font has-text-grey is-size-6">${{cartElementInfo.price}}</h1>
      <input type="number" class="input" style="width: 60px ; height: 30px" v-model="amount" @change="setElementsCart()" min="0">
      <div><a class="has-text-grey is-size-6 is-underlined" @click="removeElementCart(cartElementInfo.id)">Remove</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartElement",
  data() {
    return {
      amount: this.cartElementInfo.amount,
      amount2: null
    };
  },
  props:{
    cartElementInfo:{
      type: Object
    },
    index:{
      type: Number
    }
  },
  methods:{
    setElementsCart(){
      let cartElements = this.$store.getters.getCartItems;
      console.log('cartElements', cartElements[this.index]);
      cartElements[this.index].amount = this.amount;
      this.$store.commit('SET_CART_ITEMS', cartElements);
    },
    removeElementCart(id){
      let cartElements = this.$store.getters.getCartItems;
      cartElements = cartElements.filter((element)=>{
        return element.id !== id;
      })
      this.$store.commit('SET_CART_ITEMS', cartElements);
    }
  }
}
</script>

<style scoped>
 img{
   width: 140px;
   border: #F2D2CD 1px solid;
 }
 input{
   font-size: 1rem !important;
 }
</style>