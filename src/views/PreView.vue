<template>
  <div class="has-background-secondary build-container">
    <div class="modalCostume has-background-secondary" v-if="openModal === true">
      <button class="modal-close-btn is-large" aria-label="close" @click="openModal=false">x</button>
      <div class="w100" v-if="options[selectedCategory].type === 'optionsListNested'">
        <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered">
          <div class="column is-one-fifth mt-6 p-0"
               v-for="(option, index) in options[selectedCategory].subcategories"
               :key="index">
            <button class="build-container-carrousel-options-container-card button__transparent"
                    @click="selectedSubcategory = index; layoutPreselect = null">
              <div>
                <img class="image-option" width="w100" :src="option.urlImg">
              </div>
              <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                {{ option.name }}</h1>
            </button>
          </div>
        </div>
        <div v-else class="has-text-left w100">
          <h2 class="is-size-4 is-size-5-touch kontuor-font has-text-weight-light is-uppercase mt-4">
            {{ options[selectedCategory].subcategories[selectedSubcategory].name }}</h2>
          <div class="columns is-multiline is-vcentered mt-6">
            <div class="column is-one-fifth p-0"
                 v-for="(option, index) in options[selectedCategory].subcategories[selectedSubcategory].subcategoriesOptions"
                 :key="index">
              <button class="build-container-carrousel-options-container-card button__transparent"
                      @click="selectItem({category: options[selectedCategory].subcategories[selectedSubcategory].name, subcategory: option}, index)">
                <div>
                  <img class="image-option" :src="option.urlImg">
                </div>
                <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                  {{ option.name }}</h1>
                <img v-if="selectedItem === index"
                     class="build-container-carrousel-options-container-card__selected"
                     src="../assets/images/SELECTION.png">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w100" v-else-if="options[selectedCategory].type === 'optionsList'">
        <div class="columns is-multiline is-vcentered w100 is-gapless is-flex">
          <div class="column is-one-fifth" style="height: 100% "
               v-for="(option, index) in options[selectedCategory].categoriesOptions"
               :key="index">
            <button style="height: 100%" class="build-container-carrousel-options-container-card button__transparent w100"
                    @click="selectItem(option, index)">

                <img class="image-option" :src="option.urlImg">
              <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                {{ option.name }}</h1>
              <img v-if="selectedItem === index"
                   class="build-container-carrousel-options-container-card__selected"
                   src="../assets/images/SELECTION.png">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-6 is-flex is-justify-content-center">
      <div class="columns">
        <div class="column is-flex is-flex-direction-column is-narrow">
          <img class="secondaryImage" :src="this.$route.params.preDesignInfo.imagesSrc[1]">
          <img class="secondaryImage" :src="this.$route.params.preDesignInfo.imagesSrc[2]">
          <img class="secondaryImage" :src="this.$route.params.preDesignInfo.imagesSrc[3]">
        </div>
        <div class="column is-narrow">
          <img class="mainImage" :src="this.$route.params.preDesignInfo.imagesSrc[indexImage]">
        </div>
        <div class="column">
          <h1><span class="build-container__title has-text-primary frunchySerif-font">{{ this.$route.params.preDesignInfo.name }}</span>
            <span class="build-container__title has-text-grey frunchySerif-font"> {{ this.$route.params.preDesignInfo.price }}</span></h1>
          <h1 class="build-container__content has-text-text has-text-weight-light">{{ this.$route.params.preDesignInfo.description }}</h1>
          <div class="columns">
            <div class="column">
              <h1 class="is-size-5 lamango-font">COVER</h1>
              <button class="button selectOption" @click="selectedCategory=0; openModal = true">{{selectedCover}}</button>
            </div>
            <div class="column">
              <h1 class="is-size-5 lamango-font">COIL</h1>
              <button class="button selectOption" @click="selectedCategory=1; openModal = true">{{selectedCoil}}</button>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <input type="number" class="input"
                     v-model.number="totalItems">
            </div>
            <div class="column is-8">
              <button class="button add-button" @click="sendEmail" :disabled="totalItems === 0 || selectedCoil === '' || selectedCover ==='' "> ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {init, send} from "emailjs-com";
init("user_rVFW3uNdwPo3aLyWfIMyo");


export default {
  name: "PreView",
  data(){
    return{
      indexImage: 0,
      totalItems: 0,
      selectedCategory: 0,
      selectedSubcategory: null,
      selectedCover: '',
      selectedCoil: '',
      selectedItem: null,
      openModal: false,
      options: [
        {
          name: 'cover',
          id: 1,
          type: 'optionsListNested',
          subcategories: [
            {
              name: 'featured artist',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Mabz-9.png?alt=media&token=df46b3d3-a497-4654-8549-16ff2546bbd4',
              subcategoriesOptions: [
                {
                  name: 'GP X CHALKED BY MABZ',
                  id: 1.1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Mabz-9.png?alt=media&token=df46b3d3-a497-4654-8549-16ff2546bbd4',
                }
              ]
            },
            {
              name: 'gp desigs',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Faces-1.png?alt=media&token=7cfc35cf-a254-4a39-97e3-ee5ae976adc8',
              subcategoriesOptions: [
                {
                  name: 'SISTERHOOD',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Faces-1.png?alt=media&token=7cfc35cf-a254-4a39-97e3-ee5ae976adc8',
                },
                {
                  name: 'LOVE KNOT',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Small-Stripe-4.png?alt=media&token=fce30f84-b73d-47fa-9996-313dc0be6b28'
                },
                {
                  name: 'PAINT NIGHT',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Gems-8.png?alt=media&token=23e7aff4-e947-4c9c-8a06-bd6f9b25e167',
                },
                {
                  name: 'BOLD TYPE',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459',
                }
              ]
            },
            {
              name: 'linen',
              id: 1.3,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Navy-8.png?alt=media&token=51f0b397-1c11-4240-9c0b-b5f03dd4618a',
              subcategoriesOptions: [
                {
                  name: 'JADE',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Green-Linen-5.png?alt=media&token=2a36638c-b0c6-4b9c-a208-74b6700cac91',
                },
                {
                  name: 'NAVY',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Navy-8.png?alt=media&token=51f0b397-1c11-4240-9c0b-b5f03dd4618a'
                },
                {
                  name: 'BALLET SLIPPER',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Pink-1.png?alt=media&token=57a77c4d-22be-494b-a167-ca545b028df5',
                },
                {
                  name: 'RUBY',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Red-Linen5.png?alt=media&token=bb827a6c-2e89-4dce-a2cb-96fc19490f19',
                },
                {
                  name: 'OATMEAL',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Taupe-6.png?alt=media&token=189db223-a731-4d8d-98db-6d9cc93b3204',
                }
              ]

            }
          ]
        },
        {
          name: 'coil',
          id: 2,
          type: 'optionsList',
          categoriesOptions: [
            {
              name: 'Gold',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/coil%2FGrove-Paper-Gems-3.png?alt=media&token=c863395c-bb17-43a7-be98-f97dfae24bde',
            },
            {
              name: 'Rose gold',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/coil%2FGrove-Paper-Pink-2.png?alt=media&token=bc4f4a1b-c42c-4911-bbdc-5d838df2915c',
            },
            {
              name: 'Silver',
              id: 1.3,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/coil%2FGrove-Paper-Navy-4.png?alt=media&token=d415e683-4678-4886-ae08-509d0e6d4e38',
            }
          ]
        },
      ]
    }
  },
  methods:{
    selectItem(selection) {
      if(this.selectedCategory ===0) {
        this.selectedCover = selection.subcategory.name;
      }
      else if (this.selectedCategory ===1) {
        this.selectedCoil = selection.name;
      }
      this.openModal = false;
      this.selectedSubcategory = null;
    },
    sendEmail(){
      const url =  this.$route.params.preDesignInfo.name === 'BABY BOOK'? 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/orders%2Fpre-made%2FBaby%20Book%2C%20Pre-made%20Notebook.pdf?alt=media&token=f726ab4e-26fe-4441-81e1-e2e66fc17cb7':'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/orders%2Fpre-made%2FGoal%20Book%2C%20Pre-made%20Notebook.pdf?alt=media&token=9f13d3df-b445-4897-a553-59158842089b'
      const templateParams = {url, total: this.totalItems, cover: this.selectedCover, coil:this.selectedCoil}
      send('service_w81r30t', 'template_92dxr79', templateParams)
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

          }, function (error) {
            console.log('FAILED...', error);
          });
      this.$router.push({ path: '/pre-design'})
    }
  }
}
</script>

<style scoped lang="scss">
.build-container {
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  display: flex;
  vertical-align: center;
  .modalCostume{
    position: absolute;
    padding: 20px;
    z-index: 99;
    border: #9e9e9e;
    top: 40%;
    left: 30%;
    width: 600px;
    max-width: 100%;
    background-color: #FCF9F7;
    height: 300px;
    .modal-close-btn{
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: none;
      height: 20px;
      width: 20px;
    }
  }
  .add-button {
    border-radius: 0;
    width: 100%;
    color: black;
    font-size: 26px;
    background-color: #F3D7D3;
    height: 40px
  }
  .selectOption{
    background-color: #F7F0F0;
    border-radius: 0px;
    height: 30px;
    width: 140px;
    border: none;
  }
  &__title{
    font-size: 3rem;
  }
  &__content{
    font-size: 1.3rem;
    color: #707070;
  }
  .columns{
    max-width: 800px;
  }
  .mainImage {
    height: 304px;
    width: 304px;
    max-width: 100%;
  }
  .secondaryImage{
    height: 100px;
    width: 100px;
  }
}
</style>