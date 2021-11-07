<template>
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <h1 class="build-container__title has-text-primary frunchySerif-font">PLANNER</h1>
      <div class="build-container__subtitle">
        <h4 class="has-text-text is-size-4 lamango-font">Let’s make a beautiful planer! Scroll down and select through
          each of the options to create the best match for your needs. To learn how to build your own planner, visit our
          Tutorial page.</h4>
      </div>
      <div class="build-container-carrousel is-flex">
        <div class="build-container-carrousel-categories">
          <button @click="selectedCategory = index; selectedSubcategory = null; selectedItem = null"
                  v-for="(category, index) in carrouselCategories" :key="index" class="py-4">
            <img :src="category.urlImg">
            <h1 class="is-uppercase is-size-6 kontuor-font has-text-weight-light">{{ category.name }}</h1>
          </button>
        </div>
        <div class="build-container-carrousel-options">
          <div class="card is-flex build-container-carrousel-options-container">
            <div class="w100" v-if="options[selectedCategory].type === 'optionsListNested'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered">
                <div class="column is-one-fifth" v-for="(option, index) in options[selectedCategory].subcategories"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent" @click="selectedSubcategory = index">
                    <div>
                      <img width="w100" :src="option.urlImg">
                    </div>
                    <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">{{ option.name }}</h1>
                  </button>
                </div>
              </div>
              <div v-else class="has-text-left w100">
                <h2 class="is-size-4 is-size-5-touch kontuor-font has-text-weight-light is-uppercase mt-4">
                  {{ options[selectedCategory].subcategories[selectedSubcategory].name }}</h2>
                <div class="columns is-multiline is-vcentered">
                  <div class="column is-one-fifth"
                       v-for="(option, index) in options[selectedCategory].subcategories[selectedSubcategory].subcategoriesOptions"
                       :key="index">
                    <button class="build-container-carrousel-options-container-card button__transparent" @click="selectItem(option, index)">
                      <div>
                        <img :src="option.urlImg">
                      </div>
                      <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">{{ option.name }}</h1>
                      <img v-if="selectedItem === index"
                           class="build-container-carrousel-options-container-card__selected"
                           src="../assets/images/SELECTION.png">
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100" v-else-if="options[selectedCategory].type === 'optionsList'">
              <div class="columns is-multiline is-vcentered w100 is-gapless">
                <div class="column is-one-fifth"
                     v-for="(option, index) in options[selectedCategory].categoriesOptions"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent w100" @click="selectItem(option, index)">
                    <div class="w100">
                      <img :src="option.urlImg">
                    </div>
                    <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">{{ option.name }}</h1>
                    <img v-if="selectedItem === index"
                         class="build-container-carrousel-options-container-card__selected"
                         src="../assets/images/SELECTION.png">
                  </button>
                </div>
              </div>
            </div>
            <div class="w100 my-6" v-else-if="options[selectedCategory].type === 'formFillPage'">
              <div class="columns">
                <div class="column is-6">
                  <!--                <div class="column is-6" v-for="(field, index) in options[selectedCategory].fields" :key="index">-->
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">name </h1>
                    <input class="input" v-model="formValue['Name']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">year </h1>
                    <input class="input" v-model="formValue['Year']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">email </h1>
                    <b-field>
                      <input class="input" type="email" v-model="formValue['Email']" @keyup="formChange(formValue)">
                    </b-field>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">telephone </h1>
                    <input class="input" v-model="formValue['Telephone']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">message </h1>
                    <textarea class="textarea" type="textarea" row="3" v-model="formValue['Message']" @keyup="formChange(formValue)"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100 m-6" v-else-if="options[selectedCategory].type === 'formDates'">
              <div class="mt-6 mx-6">
                <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">Start month </h1>
                <input class="input" v-model="dateValue['starMonth']" @keyup="formChange(dateValue)">
              </div>
              <div class="mb-6 mt-5 mx-6">
                <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">end month </h1>
                <input class="input" v-model="dateValue['endMonth']" @keyup="formChange(dateValue)">
              </div>
            </div>
            <div class="w100 my-6 holiday-container" v-else-if="options[selectedCategory].type === 'holidays'">
              <div class="columns my-6 is-vcentered">
                <div class="column is-flex is-flex-direction-column">
                    <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'canadian holidays'}" @click="setHolidays('canadian holidays')"> canadian holidays</button>
                    <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'us holidays'}" @click="setHolidays('us holidays')"> us holidays</button>
                    <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'christian holidays'}" @click="setHolidays( 'christian holidays')">christian holidays</button>
                    <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'hindu holidays'}" @click="setHolidays('hindu holidays')"> hindu holidays</button>
                </div>
                <div class="column is-flex is-flex-direction-column">
                  <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'jewish holidays'}" @click="setHolidays('jewish holidays')"> jewish holidays</button>
                  <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'muslim holidays'}" @click="setHolidays('muslim holidays')"> muslim holidays</button>
                  <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2" :class="{'button__selected' : holidaysSelection === 'fun holidays'}" @click="setHolidays('fun holidays')"> fun holidays</button>
                </div>
              </div>
            </div>
            <div class="w100 holiday-container is-flex is-align-items-center" v-else-if="options[selectedCategory].type === 'extras'">
              <div class="is-flex is-flex-direction-column w100" style="padding: 5% 25%">
                <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-3 py-2" :class="{'button__selected' : holidaysSelection === 'Motivational quotes'}" @click="setHolidays('Motivational quotes')"> Motivational quotes</button>
                <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2" :class="{'button__selected' : holidaysSelection === 'self-care challenges'}" @click="setHolidays('self-care challenges')"> self-care challenges</button>
                <button class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2" :class="{'button__selected' : holidaysSelection === 'personal check ins'}" @click="setHolidays('personal check ins')"> personal check ins</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Builder",
  data() {
    return {
      selectedCategory: 0,
      selectedSubcategory: null,
      carrouselCategories: [
        {
          id: '1',
          name: 'Cover',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COVER_BLACK.png?alt=media&token=53768c29-cce4-4428-b85c-8eb6ce650db9',
        },
        {
          name: 'Coil',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COIL.png?alt=media&token=3a8cd002-009b-46ef-8897-4820f380a5af',
        },
        {
          name: 'Fill pag',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/FILL%20PAGE.png?alt=media&token=44834095-fd9b-47a9-bca3-e51b103df646',
        },
        {
          name: 'Dates',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/DATES.png?alt=media&token=eca47e0b-acf3-4a0f-acff-e75f112f73dd',
        },
        {
          name: 'Holidays',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/HOLIDAYS.png?alt=media&token=4db04f69-ab3c-48e6-99a5-a8d7282d6376',
        },
        {
          name: 'Layout options',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/LAYOUT.png?alt=media&token=145dd9d4-4212-403e-a60f-b6f7a7879bfb',
        },
        {
          name: 'Add on pages',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADD%20ON%20PAGES.png?alt=media&token=1d67083e-a111-4da5-bca1-3db1363f59e6',
        },
        {
          name: 'Extras',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/EXTRAS.png?alt=media&token=78261eee-049d-4a89-8adb-b06f835fe70c',
        }
      ],
      selectedItem: null,
      holidaysSelection: '',
      formValue:{},
      dateValue:{},
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
        {
          name: 'Fill page',
          id: 3,
          type: 'formFillPage',
          fields: [
            {
              type: 'text',
              key: 'Name',
              row: 1
            },
            {
              type: 'text',
              key: 'Telephone',
              row: 1
            },
            {
              type: 'text',
              key: 'Year',
              row: 1
            },
            {
              type: 'textarea',
              key: 'Message',
              row: 3
            },
            {
              type: 'text',
              key: 'Email',
              row: 1
            }
          ]
        },
        {
          name: 'dates',
          id: 4,
          type: 'formDates',
        },
        {
          name: 'holidays',
          id: 5,
          type: 'holidays',
        },
        {
          name: 'Layout options',
          id: 6,
          type: 'optionsList',
          categoriesOptions: [
            {
              name: 'daily',
              id: 1.1,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'weekly',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
          ]
        },
        {
          name: 'Add on pages',
          id: 6,
          type: 'optionsList',
          categoriesOptions: [
            {
              name: 'scheduling',
              id: 1.1,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'blank pages',
              id: 1.1,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'lifestyle',
              id: 1.1,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'finances',
              id: 1.1,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'at home',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'baby',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'wellness',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'meet your goals',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'school work',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            },
            {
              name: 'productivity',
              id: 1.2,
              urlImg: '../assets/images/COIL.png',
            }
          ]
        },
        {
          name: 'Extras',
          id: 7,
          type: 'extras',
        },
      ],
      finalValue: []
    };
  },
  methods: {
    selectItem(selection, index) {
      this.selectedItem = index;
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection}
    },
    formChange(value) {
      this.$set(this.finalValue, this.selectedCategory, {id: this.selectedCategory + 1, selection: value});
      console.log('formChange', this.finalValue);
      //this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: value}
    },
    setHolidays(value){
      console.log('setHolidays', value);
      this.holidaysSelection = value;
      this.formChange (value);
    }
  }
}
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
}

.holiday-container{
  button{
    background-color: #FAF0EC;
    border-radius: 0px;
    border: none;
  }
  .button__selected{
    background-color: #F3D7D3 !important;
  }
}

.build-container {
  min-height: 90vh;
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;

  &__title {
    font-size: 4rem;
  }

  &__subtitle {
    padding: 0 15%;
  }

  &-carrousel {
    width: 90vw;
    margin: 0 5%;
    height: 80vh;

    &-categories {
      width: 140px;
      height: 100%;
      overflow-y: auto;

      button {
        border: none;
        background: none;
      }

      img {
        width: 70px;
        height: 70px;
      }
    }

    &-options {
      padding: 15px;
      width: calc(100vw - 140px);
      height: 100%;
      overflow-y: auto;

      &-container {
        background-color: #FCF9F7 !important;
        padding: 10px 5vw;
        min-height: 400px;
        width: 100%;

        .columns {
          width: 100%;
        }

        .button__transparent {
          border: none;
          background: none;
        }

        &-card {
          width: 100%;
          max-width: 250px;
          height: 200px;
          position: relative;
          //margin-top: 15px;

          &__selected {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>