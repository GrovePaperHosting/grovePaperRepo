<template>
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">MY CART</h1>
        <div class="columns">
          <div class="column is-8">
            <hr class="hr"/>
            <div>
              <cart-element v-for="(element, index) in this.$store.getters.getCartItems" :key="index" :index="index"
                            :cart-element-info="element"></cart-element>
            </div>
          </div>
          <div class="column is-4" style="position: relative">
            <div class="resume-total">
              <hr class="hr"/>
              <div class="has-text-left my-4">
                <h1 class="freight-big-pro-font has-text-grey is-size-4">TOTAL</h1>
                <!--                <div class="is-flex is-justify-content-space-between">
                                  <h1 class="freight-big-pro-font has-text-grey is-size-6">SUBTOTAL</h1>
                                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                                </div>
                                <div class="is-flex is-justify-content-space-between">
                                  <h1 class="freight-big-pro-font has-text-grey is-size-6">SHIPPING</h1>
                                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                                </div>
                                <div class="is-flex is-justify-content-space-between">
                                  <h1 class="freight-big-pro-font has-text-grey is-size-6">TAXES</h1>
                                  <h1 class="freight-big-pro-font has-text-grey is-size-5">$xxx</h1>
                                </div>-->
                <hr class="hr--2"/>
              </div>
              <div class="has-text-right">
                <h1 class="freight-big-pro-font has-text-grey is-size-4">${{ $store.getters.getTotalPrice }}</h1>
              </div>
              <button
                  :class="`button button__transparent is-warning add-button frunchySerif-font is-size-4 mt-3 w100 ${loading? '':'is-loading'}`"
                  @click="initialize" style="height: 30px; border-radius: 0">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartElement from "../components/CartElement";
import axios from "axios";

export default {
  name: "MyCart",
  data() {
    return {
      loading: true,
      items:
          [
            {
              price_data: {
                currency: 'cad',
                product_data: {
                  name: 'T-shirt',
                },
                unit_amount: 2000,
              },
              quantity: 1,
            },
            {
              price_data: {
                currency: 'cad',
                product_data: {
                  name: 'T-shirt',
                },
                unit_amount: 2000,
              },
              quantity: 2,
            },
          ],
    }
  },
  components: {
    CartElement
  },
  methods: {
    async initialize() {
      this.loading = true
/*      const itemsInit = [{
        priceId: "price_1KYAgxFyy65ZlNKVwGdRikPv",
        price: 20,
        name: "GP X CHALKED BY MABZ 'PLANNER'",
        amount: 3,
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Mabz-9.png?alt=media&token=df46b3d3-a497-4654-8549-16ff2546bbd4",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/orders%2Forder1646270845305?alt=media&token=34870463-4fe8-4c4b-a842-eac9f55dd542"
      }, {
        priceId: "price_1KYAgxFyy65ZlNKVwGdRikPv",
        price: 20,
        name: "JADE 'PLANNER'",
        amount: 1,
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Green-Linen-5.png?alt=media&token=2a36638c-b0c6-4b9c-a208-74b6700cac91",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/orders%2Forder1646270976825?alt=media&token=1cfe014c-e9d3-4da2-9c02-677cfa9aab50"
      }];*/
      const items = this.$store.getters.getCartItems.map(element => {
        return {price: element.priceId, quantity: element.amount}
      })
      try {
        const response = await axios.post('http://localhost:4242/create-checkout-session',
            {items},
            {
              headers: {"Content-Type": "application/json"}
            });
        window.location.href = response.data.url
      } catch (e) {
        console.log('error', e);
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.resume-total {
  position: sticky;
  top: 180px;
  width: 100%;
}

.giftCard {
  min-width: 150px;
}

.columns {
  max-width: 100%;
}

.build-container {
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  display: flex;
  vertical-align: center;

  .hr {
    margin: 0;
    height: 4px;
    background-color: #F9EAE6;

    &--2 {
      margin: 0;
      height: 2px !important;
      background-color: #F9EAE6;
    }
  }

  &__title {
    font-size: 4rem;
  }

  &__options {
    max-width: 1000px;
    //margin: auto;
    width: 100%;
    padding: 2%;

    .column {
      .planner {
        img {
          width: 230px;
          max-width: 100%;
          height: 180px;
        }
      }

      img {
        width: 180px;
        height: 180px;
        max-width: 100%;

      }
    }
  }
}
</style>