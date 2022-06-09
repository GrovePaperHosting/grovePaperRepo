<template>
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <h1 class="build-container__title has-text-primary frunchySerif-font">PLANNER</h1>
      <div class="build-container__subtitle">
        <h4 class="has-text-text is-size-4 lamango-font">Let's make a beautiful planer! Scroll down and select through
          each of the options to create the best match for your needs. To learn how to build your own planner, visit our
          <a class="link" href="/tutorial"> Tutorial page </a>.</h4>
        <div class="page-counter is-flex is-justify-content-space-around my-3 mx-6">
          <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">PAGE
            COUNT:
            <span
                class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2 has-text-primary has-text-weight-bold">
              {{ totalPages }} /242
            </span>
          </h1>
          <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">Price:
            <span
                class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2 has-text-primary has-text-weight-bold">
              ${{ price }}
            </span>
          </h1>
        </div>
      </div>
      <div :class="`modal ${loadingPDF? 'is-active':'' }`">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="content is-flex is-justify-content-center">
            <div style="max-width: 80%; width: 500px">
              <h1 class="has-text-primary has-text-weight-light" style="font-size: 4rem !important;"> Generating...</h1>
              <progress class="progress is-primary" :value="pdfProgress" max="100">{{ pdfProgress }}%</progress>
              <h3 class="has-text-weight-light is-size-4"> Your customized planner will take a few minutes to generate
                and add to your cart. Please do not refresh this page.</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="build-container-carrousel is-flex">
        <div class="build-container-carrousel-categories">
          <button
              @click="selectedCategory = index; selectedSubcategory = null; selectedItem = null; layoutPreselect = null;"
              v-for="(category, index) in carrouselCategories" :key="index" class="py-4"
              :disabled="(category.key === 'review' && (typeof (finalValue[0]) !== 'object' && typeof (finalValue[1]) !== 'object' || typeof (finalValue[2]) !== 'object' || typeof (finalValue[3]) !== 'object' || typeof (finalValue[5]) !== 'object')) || (category.key === 'layout' && !validDate)">
            <img v-show="selectedCategory === index" :src="category.urlImgBlack" :class="category.key">
            <img v-show="selectedCategory !== index" :src="category.urlImg" :class="category.key">
            <h1 class="is-uppercase is-size-6 kontuor-font has-text-weight-light">{{ category.name }}</h1>
          </button>
        </div>
        <div class="build-container-carrousel-options">
          <div v-show="selectedCategory === 8">
            <div class="w100">
              <div class="add-container my-3 is-flex is-justify-content-space-around">
                <div class="is-flex is-justify-content-space-between">
                  <button class="button add-button frunchySerif-font" @click="antes">PREVIOUS</button>
                  <span
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light has-text-primary has-text-weight-bold mx-3  ">
                    <input type="number" class="mx-3"> /242
                  </span>
                  <button class="button add-button frunchySerif-font" @click="despues">NEXT</button>
                </div>
                <button class="button add-button frunchySerif-font is-size-4"
                        @click="exportPDFDemo">
                  ADD TO CART
                </button>
              </div>
              <div v-if="pagesBookStructure.length>0" class="book mx-1">
                <div class="page" style="max-width: 522px;max-height: 684px; min-width: 375px" :class="`page${index}`"
                     v-for="(page, index) in pagesBookStructure" :key="index"
                     @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <div>
                      <component :is="`${page[0].type}`" :data="page[0].data" class="pdf"></component>
                    </div>
                  </div>
                  <div class="side side1">
                    <div>
                      <component v-if="page.length>1" :is="`${page[1].type}`" :data="page[1].data" :index="index"
                                 class="pdf"></component>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="layoutPreselect !== null && selectedCategory !== 8"
               class="card is-flex build-container-carrousel-options-container p-2">
            <div class="columns m-0">
              <div class="column is-3 p-2 m-0">
                <div class="is-flex is-justify-content-flex-start ml-3 mt-2" style="height: 10%">
                  <button @click="layoutPreselect = null" class="button__transparent">
                    <img style="width: 40px; height: 30px"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                  </button>
                </div>
                <div class="is-flex is-justify-content-center is-flex-direction-column" style="height: 90%">
                  <h1 class="is-uppercase is-size-2 is-size-4-touch lamango-font lamango-font__spacing3 has-text-weight-light" style="line-height: 95%;">
                    {{ layoutPreselect.name }}</h1>
                  <div v-if="selectedCategory === 6" class="add-container">
                    <!--<input type="number" class="input"
                           v-model.number="arrayPagesToAdd[Number(selectedSubcategory)][Number(layoutPreselect.id)-1]">-->
                    <!--                      <input  type="number" class="input" v-model.number="pagesToAdd">-->
                    <button
                        class="button addOnPagesButton frunchySerif-font is-size-5 mt-3 p-1 w100 is-uppercase"
                        :class="{'button__selected' : this.addOnsPosition === 'addWeekly'}"
                        @click="selectItemAddPagesWeekly({category: options[selectedCategory].subcategories[selectedSubcategory].key, subcategory: layoutPreselect}, 'addWeekly')">
                      Add Weekly
                    </button>
                    <button
                        class="button addOnPagesButton frunchySerif-font is-size-5 mt-3 p-1 w100 is-uppercase"
                        :class="{'button__selected' : this.addOnsPosition === 'addMonthly'}"
                        @click="selectItemAddPagesMonthly({category: options[selectedCategory].subcategories[selectedSubcategory].key, subcategory: layoutPreselect}, 'addMonthly')">
                      Add Monthly
                    </button>
                    <button
                        class="button addOnPagesButton frunchySerif-font is-size-5 mt-3 p-1 w100 is-uppercase"
                        :class="{'button__selected' : this.addOnsPosition === 'addEnd'}"
                        @click="showInput( 'addEnd')">
                      Add at the End of the Planner
                    </button>
                    <button
                        class="button addOnPagesButton frunchySerif-font is-size-5 mt-3 p-1 w100 is-uppercase"
                        :class="{'button__selected' : this.addOnsPosition === 'addBeginning'}"
                        @click="showInput('addBeginning')">
                      Add at the Beginning of the Planner
                    </button>
                    <input v-if="this.addOnsPosition === 'addEnd'||this.addOnsPosition === 'addBeginning'" type="number"
                           class="input mt-3"
                           v-model.number="arrayPagesToAdd[Number(selectedSubcategory)][Number(layoutPreselect.id)-1]">
                    <div class="is-flex is-justify-content-center">
                      <a v-if="this.addOnsPosition === 'addEnd'||this.addOnsPosition === 'addBeginning'"
                         class=" has-text-grey is-size-4 is-underlined mx-3"
                         @click="addPages({category: options[selectedCategory].subcategories[selectedSubcategory].key, subcategory: layoutPreselect})">Add</a>
                      <a class=" has-text-grey is-size-4 is-underlined mx-3" @click="deletePages">Remove</a></div>
                  </div>
                  <div v-else class="add-container">
                    <button class="button add-button frunchySerif-font is-size-4 mt-3 w100"
                            @click="selectItem({category: options[selectedCategory].subcategories[selectedSubcategory].name, subcategory: layoutPreselect}, layoutPreselect.id-1)">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
              <div class="column is-9 p-0 m-0 is-flex is-align-items-center is-justify-content-center">
                <img style="max-height: 650px; height: 100%" :src="layoutPreselect.urlImgFull">
              </div>
            </div>
          </div>
          <div v-else-if="selectedCategory !== 8" class="card is-flex build-container-carrousel-options-container">
            <div class="w100" v-if="options[selectedCategory].type === 'optionsListNested'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered" style="height: 100%">
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
              <div v-else class="has-text-left w100" style="height: 100%">
                <div class="is-flex">
                  <button @click="selectedSubcategory = null" class="button__transparent mt-2 mr-3 p-2">
                    <img style="width: 40px; height: 30px"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                  </button>
                  <h2 class="is-size-4 is-size-5-touch kontuor-font has-text-weight-light is-uppercase mt-4">
                    {{ options[selectedCategory].subcategories[selectedSubcategory].name }}</h2></div>
                <div class="columns is-multiline is-vcentered" style="height: 100%">
                  <div class="column is-one-fifth p-0"
                       v-for="(option, index) in options[selectedCategory].subcategories[selectedSubcategory].subcategoriesOptions"
                       :key="index">
                    <button class="build-container-carrousel-options-container-card button__transparent"
                            @click="selectItem({category: options[selectedCategory].subcategories[selectedSubcategory].name, subcategory: option}, index)">
                      <div style="position: relative">
                        <img class="image-option" :src="option.urlImg">
                        <img v-if="selectedItem === index"
                             class="build-container-carrousel-options-container-card__selected"
                             src="../assets/images/SELECTION.png">
                      </div>
                      <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                        {{ option.name }}</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100" v-else-if="options[selectedCategory].type === 'optionsList'">
              <div class="columns is-multiline is-vcentered w100 is-gapless" style="height: 100%">
                <div class="column is-one-fifth"
                     v-for="(option, index) in options[selectedCategory].categoriesOptions"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent w100"
                          @click="selectItem(option, index)">
                    <div class="w100" style="position: relative">
                      <img class="image-option" :src="option.urlImg">
                      <img v-if="selectedItem === index"
                           class="build-container-carrousel-options-container-card__selected"
                           src="../assets/images/SELECTION.png">
                    </div>
                    <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                      {{ option.name }}</h1>
                  </button>
                </div>
              </div>
            </div>
            <div class="w100 m-6 is-flex is-align-items-center"
                 v-else-if="options[selectedCategory].type === 'formFillPage'">
              <div class="columns">
                <div class="column is-6">
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">name </h1>
                    <input class="input" maxlength="38" v-model="formValue['Name']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">year </h1>
                    <input class="input" maxlength="11" v-model="formValue['Year']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">email </h1>
                    <b-field>
                      <input class="input" maxlength="39" type="email" v-model="formValue['Email']"
                             @keyup="formChange(formValue)">
                    </b-field>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">telephone </h1>
                    <input class="input" maxlength="12" v-model="formValue['Telephone']" @keyup="formChange(formValue)">
                  </div>
                  <div class="w100">
                    <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">message </h1>
                    <b-field>
                      <textarea class="textarea" maxlength="152" type="textarea" row="3" v-model="formValue['Message']"
                                @keyup="formChange(formValue)"></textarea>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100 is-flex is-justify-content-center is-align-items-center m-6"
                 v-else-if="options[selectedCategory].type === 'formDates'">
              <div class="formDates">
                <div class="mt-6">
                  <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">Start date </h1>
                  <div class="columns w100 m-0">
                    <div class="column">
                      <b-field>
                        <b-select placeholder="Select a year" v-model="dateValue.startDate['year']"
                                  @input="dateChange(dateValue)" expanded>
                          <option v-for="(yearOption, index) in datesValueOptions.years" :key="index"
                                  :value="yearOption">
                            {{ yearOption }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                    <div class="column">
                      <b-field>
                        <b-select placeholder="Select a month" v-model="dateValue.startDate['month']"
                                  @input="dateChange(dateValue)" expanded>
                          <option v-for="(monthOption, index) in datesValueOptions.month" :key="index"
                                  :value="monthOption.value">
                            {{ monthOption.key }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>
                </div>
                <div class="mb-6 mt-5">
                  <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">end date </h1>
                  <div class="columns w100 m-0">
                    <div class="column">
                      <b-field>
                        <b-select :disabled="(!dateValue.startDate.year || !dateValue.startDate.month)"
                                  placeholder="Select a year" v-model="dateValue.endDate['year']"
                                  @input="dateChange(dateValue)" expanded>
                          <option v-for="(yearOption, index) in endYearDate" :key="index"
                                  :value="yearOption">
                            {{ yearOption }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                    <div class="column">
                      <b-field>
                        <b-select
                            :disabled="(!dateValue.startDate.year || !dateValue.startDate.month || !dateValue.endDate.year)"
                            placeholder="Select a month" v-model="dateValue.endDate['month']"
                            @input="dateChange(dateValue)" expanded>
                          <option v-for="(monthOption, index) in endMonthDate" :key="index"
                                  :value="monthOption.value">
                            {{ monthOption.key }}
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100 m-6 holiday-container is-flex is-align-items-center"
                 v-else-if="options[selectedCategory].type === 'holidays'">
              <div class="columns my-6 is-vcentered">
                <div class="column is-flex is-flex-direction-column">
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'canadianHolidays'}"
                      @click="setHolidays('canadianHolidays')"> canadian holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'usHolidays'}"
                      @click="setHolidays('usHolidays')"> us holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'christianHolidays'}"
                      @click="setHolidays('christianHolidays')">christian holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'hinduHolidays'}"
                      @click="setHolidays('hinduHolidays')"> hindu holidays
                  </button>
                </div>
                <div class="column is-flex is-flex-direction-column">
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'jewishHolidays'}"
                      @click="setHolidays('jewishHolidays')"> jewish holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'muslimHolidays'}"
                      @click="setHolidays('muslimHolidays')"> muslim holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : this.holidaysSelection === 'funHolidays'}"
                      @click="setHolidays('funHolidays')"> fun holidays
                  </button>
                </div>
              </div>
            </div>
            <div class="w100" v-if="options[selectedCategory].type === 'layoutOptions'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6"
                   style="height: 100%">
                <div class="column is-one-fifth p-0" v-for="(option, index) in options[selectedCategory].subcategories"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent"
                          @click="selectedSubcategory = index; layoutOption = options[selectedCategory].subcategories[index].name; layoutPreselect = null; pagesBookStructure = []">
                    <div>
                      <img class="image-option" width="w100" :src="option.urlImg">
                    </div>
                    <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                      {{ option.name }}</h1>
                  </button>
                </div>
              </div>
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100"
                   style="height: 100%">
                <button @click="selectedSubcategory = null" class="button__transparent mt-2 mr-3 p-2">
                  <img style="width: 40px; height: 30px"
                       src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                </button>
                <div class="columns is-multiline is-vcentered py-2" style="height: 100%">
                  <div class="column is-one-fifth p-0"
                       v-for="(option, index) in options[selectedCategory].subcategories[selectedSubcategory].subcategoriesOptions"
                       :key="index">
                    <button class="build-container-carrousel-options-container-card button__transparent"
                            @click="layoutPreselect = option">
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
            <div class="w100" v-if="options[selectedCategory].type === 'addOptions'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6"
                   style="height: 100%">
                <div class="column is-one-fifth-desktop is-one-third-tablet p-0"
                     v-for="(option, index) in options[selectedCategory].subcategories"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent"
                          @click="selectedSubcategory = index; layoutOption = options[selectedCategory].subcategories[index].name; layoutPreselect = null">
                    <div>
                      <img class="image-option" width="w100" :src="option.urlImg">
                    </div>
                    <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">
                      {{ option.name }}</h1>
                  </button>
                </div>
              </div>
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100"
                   style="height: 100%">
                <button @click="selectedSubcategory = null" class="button__transparent mt-2 mr-3 p-2">
                  <img style="width: 40px; height: 30px"
                       src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                </button>
                <div class="columns is-multiline is-vcentered py-6" style="height: 100%">
                  <div class="column is-one-fifth p-0"
                       v-for="(option, index) in options[selectedCategory].subcategories[selectedSubcategory].subcategoriesOptions"
                       :key="index">
                    <button class="build-container-carrousel-options-container-card button__transparent"
                            @click="layoutPreselect = option">
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
            <div class="w100 holiday-container is-flex is-align-items-center"
                 v-else-if="options[selectedCategory].type === 'extras'">
              <div v-if="checkInOn" class="w100">
                <div class="is-flex is-justify-content-flex-start ml-3 mt-2 w100" style="height: 10%">
                  <button @click="checkInOn = false" class="button__transparent">
                    <img style="width: 40px; height: 30px"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                  </button>
                </div>
                <div class="is-flex is-flex-direction-column w100" style="padding: 5% 25%">
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-3 py-2"
                      :class="{'button__selected' : this.extrasSelection === 'commitTo'}"
                      @click="setExtras('commitTo')"> Commit to
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-5 py-2"
                      :class="{'button__selected' : this.extrasSelection === 'focusOn'}"
                      @click="setExtras('focusOn')"> Focus on
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-5 py-2"
                      :class="{'button__selected' : this.extrasSelection === 'feeling'}"
                      @click="setExtras('feeling')"> feeling
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-5 py-2"
                      :class="{'button__selected' : this.extrasSelection === 'productivity'}"
                      @click="setExtras('productivity')"> productivity
                  </button>
                </div>
              </div>
              <div v-else class="is-flex is-flex-direction-column w100" style="padding: 5% 25%">
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-3 py-2"
                    :class="{'button__selected' : this.extrasSelection === 'Motivational quotes'}"
                    @click="setExtras('Motivational quotes')"> Motivational quotes
                </button>
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2"
                    :class="{'button__selected' : this.extrasSelection === 'self-care challenges'}"
                    @click="setExtras('self-care challenges')"> self-care challenges
                </button>
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2"
                    :class="{'button__selected' : this.extrasSelection === 'personal check ins'}"
                    @click="checkInOn = true"> personal check ins
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :message="modalMessage" :show-modal="showModal" @closeModal="showModal = false">
      <div class="w100 is-flex is-justify-content-center">
        <button class="button button__transparent come-back-button frunchySerif-font is-size-4 mb-3"
                @click="showModal = false">
          RETURN TO BUILDER
        </button>
      </div>
    </modal>
    <!--<div style="max-width: 522px;max-height: 684px" v-for="(page, index) in pagesBookStructure" :key="index">
          <component :is="`${page[0].type}`" :data="page[0].data" class="pdf1"></component>
          <component v-if="page.length>1" :is="`${page[1].type}`" :data="page[1].data" class="pdf1"></component>
    </div>-->
    <!--<dailyhourly1 class="pdf1" :data="{}"></dailyhourly1>-->

  </div>
</template>

<script>
import jsPDF from 'jspdf';
import storageRef from "../firebase";
import {init} from 'emailjs-com';
//import * as html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

init("user_rVFW3uNdwPo3aLyWfIMyo");

import fillpage from "../htmlPages/fillPage/fillPage";
import dailyHourly1 from "../htmlPages/dailyLayouts/hourly/Hourly1";
import dailyHourly2 from "../htmlPages/dailyLayouts/hourly/Hourly2";
import dailyReflection1 from "../htmlPages/dailyLayouts/reflection/dailyReflection1";
import dailyReflection2 from "../htmlPages/dailyLayouts/reflection/dailyReflection2";
import dailySectional1 from "../htmlPages/dailyLayouts/sectional/dailySectional1";
import dailySectional2 from "../htmlPages/dailyLayouts/sectional/dailySectional2";
import weeklyStandard1 from "../htmlPages/weeklyLayout/standard/Standard1";
import weeklyStandard2 from "../htmlPages/weeklyLayout/standard/Standard2";
import weeklyChecklist1 from "../htmlPages/weeklyLayout/checklist/weeklyChecklist1";
import weeklyChecklist2 from "../htmlPages/weeklyLayout/checklist/weeklyChecklist2";
import weeklyGoalsErrands1 from "../htmlPages/weeklyLayout/goalserrands/weeklyGoalserrands1";
import weeklyGoalsErrands2 from "../htmlPages/weeklyLayout/goalserrands/weeklyGoalerrands2";
import weeklyHabits1 from "../htmlPages/weeklyLayout/habits/weeklyHabits1";
import weeklyHabits2 from "../htmlPages/weeklyLayout/habits/weeklyHabits2";
import weeklyHourly1 from "../htmlPages/weeklyLayout/hourly/weeklyHourly1";
import weeklyHourly2 from "../htmlPages/weeklyLayout/hourly/weeklyHourly2";
import weeklyKidsMeals1 from "../htmlPages/weeklyLayout/kidsmeals/kidsmeals1";
import weeklyKidsMeals2 from "../htmlPages/weeklyLayout/kidsmeals/kidsmeals2";
import weeklyProjects1 from "../htmlPages/weeklyLayout/project/weeklyProjects1";
import weeklyProjects2 from "../htmlPages/weeklyLayout/project/weeklyProjects2";
import weeklySectional1 from "../htmlPages/weeklyLayout/sectional/weeklySectional1";
import weeklySectional2 from "../htmlPages/weeklyLayout/sectional/weeklySectional2";
import schedulingMonthMemories1 from "../htmlPages/Scheduling/monthMemories/monthMemories1";
import schedulingMonthMemories2 from "../htmlPages/Scheduling/monthMemories/monthMemories2";
import schedulingMonthIdeas1 from "../htmlPages/Scheduling/monthIdeas/monthIdeas1";
import schedulingMonthIdeas2 from "../htmlPages/Scheduling/monthIdeas/monthIdeas2";
import schedulingBlankMonth1 from "../htmlPages/Scheduling/blankMonth/blankMonth1";
import schedulingBlankMonth2 from "../htmlPages/Scheduling/blankMonth/blankMonth2";
import schedulingMyYearMonths1 from "../htmlPages/Scheduling/myYearMonths/myYearMonths1";
import schedulingMyYearMonths2 from "../htmlPages/Scheduling/myYearMonths/myYearMonths2";
import schedulingMyYearDays1 from "../htmlPages/Scheduling/myYearDays/myYearDays1";
import schedulingMyYearDays2 from "../htmlPages/Scheduling/myYearDays/myYearDays2";
import blankPagesBlank1 from "../htmlPages/blankPages/blank/blank1";
import blankPagesBlank2 from "../htmlPages/blankPages/blank/blank2";
import blankPagesBlankDays1 from "../htmlPages/blankPages/blankDays/blankDays1";
import blankPagesBlankDays2 from "../htmlPages/blankPages/blankDays/blankDays2";
import blankPagesDotted1 from "../htmlPages/blankPages/dotted/dotted1";
import blankPagesDotted2 from "../htmlPages/blankPages/dotted/dotted2";
import blankPagesGrid1 from "../htmlPages/blankPages/Grid/grid1";
import blankPagesGrid2 from "../htmlPages/blankPages/Grid/grid2";
import blankPagesLined1 from "../htmlPages/blankPages/lined/lined1";
import blankPagesLined2 from "../htmlPages/blankPages/lined/lined2";
import blankPagesTwoColumns1 from "../htmlPages/blankPages/twoColumns/twoColumns1";
import blankPagesTwoColumns2 from "../htmlPages/blankPages/twoColumns/twoColumns2";
import blankPagesBucketList1 from "../htmlPages/lifestyle/bucketList/bucketList1";
import blankPagesBucketList2 from "../htmlPages/lifestyle/bucketList/bucketList2";
import FillPage from "../htmlPages/FillPage";
import Hourly1 from "../htmlPages/dailyLayouts/hourly/Hourly1";
import lifestyleReading1 from "../htmlPages/lifestyle/reading/reading1";
import lifestyleReading2 from "../htmlPages/lifestyle/reading/reading2";
import lifestyleBucketList1 from "../htmlPages/lifestyle/bucketList/bucketList1";
import lifestyleBucketList2 from "../htmlPages/lifestyle/bucketList/bucketList2";
import lifestyleMyLists1 from "../htmlPages/lifestyle/myList/myList1";
import lifestyleMyLists2 from "../htmlPages/lifestyle/myList/myList2";
import lifestyleIdeas1 from "../htmlPages/lifestyle/ideas/ideas1";
import lifestyleIdeas2 from "../htmlPages/lifestyle/ideas/ideas2";
import lifestylePasswordTacker1 from "../htmlPages/lifestyle/passwordTracker/passwordTracker1";
import lifestylePasswordTacker2 from "../htmlPages/lifestyle/passwordTracker/passwordTracker2";
import lifestylePasswordTracker1 from "../htmlPages/lifestyle/passwordTracker/passwordTracker1";
import lifestylePasswordTracker2 from "../htmlPages/lifestyle/passwordTracker/passwordTracker2";
import lifestyleSocialMediaTracking1 from "../htmlPages/lifestyle/socialMediaTracking/socialMediaTracking1";
import lifestyleSocialMediaTracking2 from "../htmlPages/lifestyle/socialMediaTracking/socialMediaTracking2";
import lifestyleSocialMediaPlanning1 from "../htmlPages/lifestyle/socialMediaPlanning/socialMediaPlanning1";
import lifestyleSocialMediaPlanning2 from "../htmlPages/lifestyle/socialMediaPlanning/socialMediaPlanning2";
import financesGifting1 from "../htmlPages/finances/gifting/gifting1";
import financesGifting2 from "../htmlPages/finances/gifting/gifting2";
import financesBudgeting1 from "../htmlPages/finances/budgeting/budgeting1";
import financesBudgeting2 from "../htmlPages/finances/budgeting/budgeting2";
import financesExpenseTracker1 from "../htmlPages/finances/expenseTracker/expenseTracker1";
import financesExpenseTracker2 from "../htmlPages/finances/expenseTracker/expenseTracker2";
import atHomeCleaning1 from "../htmlPages/atHome/cleaning/cleaning1";
import atHomeCleaning2 from "../htmlPages/atHome/cleaning/cleaning2";
import atHomeHomeMaintenance1 from "../htmlPages/atHome/homeMaintenance/homeMaintenance1";
import atHomeHomeMaintenance2 from "../htmlPages/atHome/homeMaintenance/homeMaintenance2";
import babyBabyTracker11 from "../htmlPages/baby/babyTracker/babyTracker1";
import babyBabyTracker12 from "../htmlPages/baby/babyTracker/babyTracker2";
import babyBabyTracker21 from "../htmlPages/baby/babyTracker2/babyTracker21";
import babyBabyTracker22 from "../htmlPages/baby/babyTracker2/babyTracker22";
import babyBabyMonthly1 from "../htmlPages/baby/babyMonthly/babyMonthly1";
import babyBabyMonthly2 from "../htmlPages/baby/babyMonthly/babyMonthly2";
import wellnessDailyGratitude1 from "../htmlPages/wellness/dailyGratitude/dailyGratitude1";
import wellnessDailyGratitude2 from "../htmlPages/wellness/dailyGratitude/dailyGratitude2";
import wellnessFitness1 from "../htmlPages/wellness/fitness/fitness1";
import wellnessFitness2 from "../htmlPages/wellness/fitness/fitness2";
import wellnessMeasurements1 from "../htmlPages/wellness/measurements/measurements1";
import wellnessMeasurements2 from "../htmlPages/wellness/measurements/measurements2";
import wellnessMonthlyGratitude1 from "../htmlPages/wellness/monthlyGratitude/monthlyGratitude1";
import wellnessMonthlyGratitude2 from "../htmlPages/wellness/monthlyGratitude/monthlyGratitude2";
import wellnessMood1 from "../htmlPages/wellness/mood/mood1";
import wellnessMood2 from "../htmlPages/wellness/mood/mood2";
import wellnessOnTheMenu1 from "../htmlPages/wellness/onTheMenu/onTheMenu1";
import wellnessOnTheMenu2 from "../htmlPages/wellness/onTheMenu/onTheMenu2";
import wellnessReflection1 from "../htmlPages/wellness/reflection/reflection1";
import wellnessReflection2 from "../htmlPages/wellness/reflection/reflection2";
import wellnessWeeklyWellness1 from "../htmlPages/wellness/weeklyWellness/weeklyWellness1";
import wellnessWeeklyWellness2 from "../htmlPages/wellness/weeklyWellness/weeklyWellness2";
import meetYourGoals30DayChallenge1 from "../htmlPages/meetYourGoals/30DayChallenge/30DayChallenge1";
import meetYourGoals30DayChallenge2 from "../htmlPages/meetYourGoals/30DayChallenge/30DayChallenge2";
import meetYourGoalsHabitTracker1 from "../htmlPages/meetYourGoals/habitTracker/habitTracker1";
import meetYourGoalsHabitTracker2 from "../htmlPages/meetYourGoals/habitTracker/habitTracker2";
import meetYourGoalsMonthlyGoals1 from "../htmlPages/meetYourGoals/monthlyGoals/monthlyGoals1";
import meetYourGoalsMonthlyGoals2 from "../htmlPages/meetYourGoals/monthlyGoals/monthlyGoals2";
import meetYourGoalsMonthlyHabits1 from "../htmlPages/meetYourGoals/monthlyHabits/monthlyHabits1";
import meetYourGoalsMonthlyHabits2 from "../htmlPages/meetYourGoals/monthlyHabits/monthlyHabits2";
import meetYourGoalsMyGoals1 from "../htmlPages/meetYourGoals/myGoals/myGoals1";
import meetYourGoalsMyGoals2 from "../htmlPages/meetYourGoals/myGoals/myGoals2";
import schoolWorkAssignments1 from "../htmlPages/schoolWork/assignments/assignments1";
import schoolWorkAssignments2 from "../htmlPages/schoolWork/assignments/assignments2";
import schoolWorkMeetingNotes1 from "../htmlPages/schoolWork/meetingNotes/meetingNotes1";
import schoolWorkMeetingNotes2 from "../htmlPages/schoolWork/meetingNotes/meetingNotes2";
import schoolWorkSchool1 from "../htmlPages/schoolWork/school/school1";
import schoolWorkSchool2 from "../htmlPages/schoolWork/school/school2";
import productivityProjects1 from "../htmlPages/productivity/projects/projects1";
import productivityProjects2 from "../htmlPages/productivity/projects/projects2";
import productivityTaskTriage1 from "../htmlPages/productivity/taskTriage/taskTriage1";
import productivityTaskTriage2 from "../htmlPages/productivity/taskTriage/taskTriage2";
import productivityToDo1 from "../htmlPages/productivity/toDo/toDo1";
import productivityToDo2 from "../htmlPages/productivity/toDo/toDo2";
import calendar28monday1 from "../htmlPages/calendar/28Dias/lunes/lunes1";
import calendar28monday2 from "../htmlPages/calendar/28Dias/lunes/lunes2";
import calendar28tuesday1 from "../htmlPages/calendar/28Dias/martes/martes1";
import calendar28tuesday2 from "../htmlPages/calendar/28Dias/martes/martes2";
import calendar28wednesday1 from "../htmlPages/calendar/28Dias/miercoles/miercoles1";
import calendar28wednesday2 from "../htmlPages/calendar/28Dias/miercoles/miercoles2";
import calendar28thursday1 from "../htmlPages/calendar/28Dias/jueves/jueves1";
import calendar28thursday2 from "../htmlPages/calendar/28Dias/jueves/jueves2";
import calendar28friday1 from "../htmlPages/calendar/28Dias/viernes/viernes1";
import calendar28friday2 from "../htmlPages/calendar/28Dias/viernes/viernes2";
import calendar28saturday1 from "../htmlPages/calendar/28Dias/sabado/sabado1";
import calendar28saturday2 from "../htmlPages/calendar/28Dias/sabado/sabado2";
import calendar28sunday1 from "../htmlPages/calendar/28Dias/domingo/domingo1";
import calendar29thursday1 from "../htmlPages/calendar/29Dias/jueves/jueves1";
import calendar29thursday2 from "../htmlPages/calendar/29Dias/jueves/jueves2";
import calendar28sunday2 from "../htmlPages/calendar/28Dias/domingo/domingo2";
import calendar30monday1 from "../htmlPages/calendar/30Dias/lunes/lunes1";
import calendar30monday2 from "../htmlPages/calendar/30Dias/lunes/lunes2";
import calendar30tuesday1 from "../htmlPages/calendar/30Dias/martes/martes1";
import calendar30tuesday2 from "../htmlPages/calendar/30Dias/martes/martes2";
import calendar30wednesday1 from "../htmlPages/calendar/30Dias/miercoles/miercoles1";
import calendar30wednesday2 from "../htmlPages/calendar/30Dias/miercoles/miercoles2";
import calendar30thursday1 from "../htmlPages/calendar/30Dias/jueves/jueves1";
import calendar30thursday2 from "../htmlPages/calendar/30Dias/jueves/jueves2";
import calendar30friday1 from "../htmlPages/calendar/30Dias/viernes/viernes1";
import calendar30friday2 from "../htmlPages/calendar/30Dias/viernes/viernes2";
import calendar30saturday1 from "../htmlPages/calendar/30Dias/sabado/sabado1";
import calendar30saturday2 from "../htmlPages/calendar/30Dias/sabado/sabado2";
import calendar30sunday1 from "../htmlPages/calendar/30Dias/domingo/domingo1";
import calendar30sunday2 from "../htmlPages/calendar/30Dias/domingo/domingo2";
import calendar31monday1 from "../htmlPages/calendar/31Dias/lunes/lunes1";
import calendar31monday2 from "../htmlPages/calendar/31Dias/lunes/lunes2";
import calendar31tuesday1 from "../htmlPages/calendar/31Dias/martes/martes1";
import calendar31tuesday2 from "../htmlPages/calendar/31Dias/martes/martes2";
import calendar31wednesday1 from "../htmlPages/calendar/31Dias/miercoles/miercoles1";
import calendar31wednesday2 from "../htmlPages/calendar/31Dias/miercoles/miercoles2";
import calendar31thursday1 from "../htmlPages/calendar/31Dias/jueves/jueves1";
import calendar31thursday2 from "../htmlPages/calendar/31Dias/jueves/jueves2";
import calendar31friday1 from "../htmlPages/calendar/31Dias/viernes/viernes1";
import calendar31friday2 from "../htmlPages/calendar/31Dias/viernes/viernes2";
import calendar31saturday1 from "../htmlPages/calendar/31Dias/sabado/sabado1";
import calendar31saturday2 from "../htmlPages/calendar/31Dias/sabado/sabado2";
import calendar31sunday1 from "../htmlPages/calendar/31Dias/domingo/domingo1";
import calendar31sunday2 from "../htmlPages/calendar/31Dias/domingo/domingo2";
import endPage from "../htmlPages/endPage/endPage";
import modal from "../components/Modal";

export default {
  name: "Builder",
  components: {
    modal,
    Hourly1,
    FillPage,
    fillpage,
    dailyHourly1,
    dailyHourly2,
    weeklyStandard1,
    weeklyStandard2,
    dailyReflection1,
    dailyReflection2,
    dailySectional1,
    dailySectional2,
    weeklyChecklist1,
    weeklyChecklist2,
    weeklyGoalsErrands1,
    weeklyGoalsErrands2,
    weeklyHabits1,
    weeklyHabits2,
    weeklyProjects1,
    weeklyProjects2,
    weeklyHourly1,
    weeklyHourly2,
    weeklyKidsMeals1,
    weeklyKidsMeals2,
    weeklySectional1,
    weeklySectional2,
    schedulingMonthMemories1,
    schedulingMonthMemories2,
    schedulingMonthIdeas1,
    schedulingMonthIdeas2,
    schedulingBlankMonth1,
    schedulingBlankMonth2,
    schedulingMyYearMonths1,
    schedulingMyYearMonths2,
    schedulingMyYearDays1,
    schedulingMyYearDays2,
    blankPagesBlank1,
    blankPagesBlank2,
    blankPagesBlankDays1,
    blankPagesBlankDays2,
    blankPagesDotted1,
    blankPagesDotted2,
    blankPagesGrid1,
    blankPagesGrid2,
    blankPagesLined1,
    blankPagesLined2,
    blankPagesTwoColumns1,
    blankPagesTwoColumns2,
    blankPagesBucketList1,
    blankPagesBucketList2,
    lifestyleIdeas1,
    lifestyleIdeas2,
    lifestyleReading1,
    lifestyleReading2,
    lifestyleBucketList1,
    lifestyleBucketList2,
    lifestyleMyLists1,
    lifestyleMyLists2,
    lifestylePasswordTacker1,
    lifestylePasswordTacker2,
    lifestylePasswordTracker1,
    lifestylePasswordTracker2,
    lifestyleSocialMediaTracking1,
    lifestyleSocialMediaTracking2,
    lifestyleSocialMediaPlanning1,
    lifestyleSocialMediaPlanning2,
    financesBudgeting1,
    financesBudgeting2,
    financesExpenseTracker1,
    financesExpenseTracker2,
    financesGifting1,
    financesGifting2,
    atHomeCleaning1,
    atHomeCleaning2,
    atHomeHomeMaintenance1,
    atHomeHomeMaintenance2,
    babyBabyTracker11,
    babyBabyTracker12,
    babyBabyTracker21,
    babyBabyTracker22,
    babyBabyMonthly1,
    babyBabyMonthly2,
    wellnessDailyGratitude1,
    wellnessDailyGratitude2,
    wellnessFitness1,
    wellnessFitness2,
    wellnessMeasurements1,
    wellnessMeasurements2,
    wellnessMonthlyGratitude1,
    wellnessMonthlyGratitude2,
    wellnessMood1,
    wellnessMood2,
    wellnessOnTheMenu1,
    wellnessOnTheMenu2,
    wellnessReflection1,
    wellnessReflection2,
    wellnessWeeklyWellness1,
    wellnessWeeklyWellness2,
    meetYourGoals30DayChallenge1,
    meetYourGoals30DayChallenge2,
    meetYourGoalsHabitTracker1,
    meetYourGoalsHabitTracker2,
    meetYourGoalsMonthlyGoals1,
    meetYourGoalsMonthlyGoals2,
    meetYourGoalsMonthlyHabits1,
    meetYourGoalsMonthlyHabits2,
    meetYourGoalsMyGoals1,
    meetYourGoalsMyGoals2,
    schoolWorkAssignments1,
    schoolWorkAssignments2,
    schoolWorkMeetingNotes1,
    schoolWorkMeetingNotes2,
    schoolWorkSchool1,
    schoolWorkSchool2,
    productivityProjects1,
    productivityProjects2,
    productivityTaskTriage1,
    productivityTaskTriage2,
    productivityToDo1,
    productivityToDo2,
    calendar28monday1,
    calendar28monday2,
    calendar28tuesday1,
    calendar28tuesday2,
    calendar28wednesday1,
    calendar28wednesday2,
    calendar28thursday1,
    calendar28thursday2,
    calendar28friday1,
    calendar28friday2,
    calendar28saturday1,
    calendar28saturday2,
    calendar28sunday1,
    calendar28sunday2,
    calendar29thursday1,
    calendar29thursday2,
    calendar30monday1,
    calendar30monday2,
    calendar30tuesday1,
    calendar30tuesday2,
    calendar30wednesday1,
    calendar30wednesday2,
    calendar30thursday1,
    calendar30thursday2,
    calendar30friday1,
    calendar30friday2,
    calendar30saturday1,
    calendar30saturday2,
    calendar30sunday1,
    calendar30sunday2,
    calendar31monday1,
    calendar31monday2,
    calendar31tuesday1,
    calendar31tuesday2,
    calendar31wednesday1,
    calendar31wednesday2,
    calendar31thursday1,
    calendar31thursday2,
    calendar31friday1,
    calendar31friday2,
    calendar31saturday1,
    calendar31saturday2,
    calendar31sunday1,
    calendar31sunday2,
    endPage,
  },
  data() {
    return {
      //components: [Hourly1, Hourly2],
      loadingPDF: false,
      viewReview: false,
      output: [],
      generateTable: false,
      selectedCategory: 0,
      selectedSubcategory: null,
      extrasSelection: '',
      checkInOn: '',
      modalMessage: '',
      showModal: false,
      carrouselCategories: [
        {
          id: '1',
          name: 'Cover',
          key: 'cover',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COVER.png?alt=media&token=e58a0902-810b-4565-8d46-c457b733e4bc',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COVER_BLACK.png?alt=media&token=53768c29-cce4-4428-b85c-8eb6ce650db9'
        },
        {
          id: '2',
          name: 'Coil',
          key: 'coil',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COIL.png?alt=media&token=3a8cd002-009b-46ef-8897-4820f380a5af',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COIL_BLACK.png?alt=media&token=94d27f8b-45e7-4b59-9e70-58d4d15a42a7'
        },
        {
          id: '3',
          name: 'Fill page',
          key: 'fillPage',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/FILL%20PAGE.png?alt=media&token=44834095-fd9b-47a9-bca3-e51b103df646',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/FILL%20PAGE_BLACK.png?alt=media&token=82177c6d-25a6-4bc6-8895-3eb2a30945db'
        },
        {
          id: '4',
          name: 'Dates',
          key: 'dates',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/DATES.png?alt=media&token=eca47e0b-acf3-4a0f-acff-e75f112f73dd',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/DATES_BLACK.png?alt=media&token=52808cb6-0773-4bea-8ccc-70a1bd2bad98'
        },
        {
          name: 'Holidays',
          key: 'holidays',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/HOLIDAYS.png?alt=media&token=4db04f69-ab3c-48e6-99a5-a8d7282d6376',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/HOLIDAYS_BLACK.png?alt=media&token=be49dadd-1461-4714-8c70-f9fffc7c5d91'
        },
        {
          name: 'Layout options',
          key: 'layout',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/LAYOUT.png?alt=media&token=145dd9d4-4212-403e-a60f-b6f7a7879bfb',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/LAYOUT_BLACK.png?alt=media&token=1583ddb5-1d91-4675-ae7c-8eb071d8454c'
        },
        {
          name: 'Add on pages',
          key: 'addOnPages',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADD%20ON%20PAGES.png?alt=media&token=1d67083e-a111-4da5-bca1-3db1363f59e6',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADD%20ON%20PAGES_BLACK.png?alt=media&token=190bab72-fd27-44f1-aa76-5fe8efaa3ddb'
        },
        {
          name: 'Extras',
          key: 'extras',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/EXTRAS.png?alt=media&token=78261eee-049d-4a89-8adb-b06f835fe70c',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/EXTRAS_BLACK.png?alt=media&token=12b39ac9-dd66-44dd-8d3d-832c3be460c8'
        },
        {
          name: 'Review & submit',
          key: 'review',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/REVIEW%20%26%20SUBMIT.png?alt=media&token=60901b2f-c127-45b7-9190-32ba42484855',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADDITIONAL%20PAGES_BLACK.png?alt=media&token=a8bf4286-15bd-4d19-b273-42c402bc17da'
        }
      ],
      layoutPreselect: null,
      selectedItem: null,
      holidaysSelection: '',
      formValue: {},
      dateValue: {
        startDate: {},
        endDate: {}
      },
      options: [
        {
          name: 'cover',
          id: 1,
          type: 'layoutOptions',
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
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Mabz-1.jpg?alt=media&token=d1380b83-10d3-43c2-b1ff-d119aaa02d7f',
                }
              ]
            },
            {
              name: 'gp designs',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Faces-1.png?alt=media&token=7cfc35cf-a254-4a39-97e3-ee5ae976adc8',
              subcategoriesOptions: [
                {
                  name: 'SISTERHOOD',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Faces-1.png?alt=media&token=7cfc35cf-a254-4a39-97e3-ee5ae976adc8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Faces-1.png?alt=media&token=7cfc35cf-a254-4a39-97e3-ee5ae976adc8',
                },
                {
                  name: 'LOVE KNOT',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Small-Stripe-4.png?alt=media&token=fce30f84-b73d-47fa-9996-313dc0be6b28',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Small-Stripe-4.png?alt=media&token=fce30f84-b73d-47fa-9996-313dc0be6b28'
                },
                {
                  name: 'PAINT NIGHT',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Gems-8.png?alt=media&token=23e7aff4-e947-4c9c-8a06-bd6f9b25e167',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Gems-8.png?alt=media&token=23e7aff4-e947-4c9c-8a06-bd6f9b25e167',
                },
                {
                  name: 'BOLD TYPE',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459',
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
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Green-Linen-5.png?alt=media&token=2a36638c-b0c6-4b9c-a208-74b6700cac91',
                },
                {
                  name: 'NAVY',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Navy-8.png?alt=media&token=51f0b397-1c11-4240-9c0b-b5f03dd4618a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Navy-8.png?alt=media&token=51f0b397-1c11-4240-9c0b-b5f03dd4618a'
                },
                {
                  name: 'BALLET SLIPPER',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Pink-1.png?alt=media&token=57a77c4d-22be-494b-a167-ca545b028df5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Pink-1.png?alt=media&token=57a77c4d-22be-494b-a167-ca545b028df5',
                },
                {
                  name: 'RUBY',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Red-Linen5.png?alt=media&token=bb827a6c-2e89-4dce-a2cb-96fc19490f19',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Red-Linen5.png?alt=media&token=bb827a6c-2e89-4dce-a2cb-96fc19490f19',
                },
                {
                  name: 'OATMEAL',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Taupe-6.png?alt=media&token=189db223-a731-4d8d-98db-6d9cc93b3204',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Taupe-6.png?alt=media&token=189db223-a731-4d8d-98db-6d9cc93b3204',
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
          type: 'layoutOptions',
          subcategories: [
            {
              name: 'daily',
              key: 'daily',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDailyOption1.png?alt=media&token=28627ec0-b7c1-4b78-8384-89ec58865a69',
              subcategoriesOptions: [
                {
                  name: 'hourly',
                  key: 'Hourly',
                  id: 1.1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDailyOption1.png?alt=media&token=28627ec0-b7c1-4b78-8384-89ec58865a69',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily1Big.png?alt=media&token=ba6cf9c0-6952-4128-8a89-0de1d6e9b1a6',
                },
                {
                  name: 'sectional',
                  key: 'Sectional',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily2.png?alt=media&token=88ad381a-9c3d-41c4-be09-c40474c3a141',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily2Big.png?alt=media&token=d99e7c4a-ab94-4392-b7cb-31f7d84b0208',
                },
                {
                  name: 'reflection',
                  key: 'Reflection',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily3%20(1).png?alt=media&token=218a6a96-2b85-4387-adf7-564ec748d451',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily3Big.png?alt=media&token=52697e17-9590-4ed6-810b-8b49437f67a9',
                }
              ]
            },
            {
              name: 'weekly',
              key: 'weekly',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDouble1.png?alt=media&token=60e742d2-b9ae-4fe3-9491-b263840a3962',
              subcategoriesOptions: [
                {
                  name: 'standard',
                  key: 'Standard',
                  id: 1.1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  key: 'Hourly',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  key: 'KidsMeals',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  key: 'Projects',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  key: 'Checklist',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  key: 'Sectional',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  key: 'Habits',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  key: 'GoalsErrands',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
          ]
        },
        {
          name: 'Add on pages',
          id: 7,
          type: 'addOptions',
          subcategories: [
            {
              name: 'scheduling',
              key: 'scheduling',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FMonth%20at%20a%20Glance3.png?alt=media&token=1952a63d-abe2-46ef-ab50-050c624c17be',
              subcategoriesOptions: [
                {
                  name: 'MONTH-MEMORIES',
                  key: 'MonthMemories',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance1.png?alt=media&token=9b1ae680-0a62-4a24-b281-7a6a05492538',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance1Big.png?alt=media&token=71287cd5-92d6-4a39-bb3b-3ba8a3cc3373',
                },
                {
                  name: 'MONTH-IDEAS',
                  key: 'MonthIdeas',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance2.png?alt=media&token=4b92ecb0-c9d7-4d35-af6d-58411ee96a4a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance2Big.png?alt=media&token=cf71aa96-d555-4ce4-a0a5-27cdd3e63597',
                },
                {
                  name: 'BLANK MONTH',
                  key: 'BlankMonth',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance3.png?alt=media&token=d2a7c500-bb55-4a7a-b6b9-2d186e26b1ed',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance3Big.png?alt=media&token=de9daf7d-e583-483f-9292-c3bd6713e6a0',
                },
                {
                  name: 'MY YEAR / 365',
                  key: 'MyYearDays',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts1.png?alt=media&token=88158025-c05c-4f08-93b7-b91a89cfbfee',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts1Big.png?alt=media&token=dc5f37c4-ef05-4d8e-b77e-4c5137c08628',
                },
                {
                  name: 'MY YEAR / 12',
                  key: 'MyYearMonths',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts2.png?alt=media&token=e05e0d38-ee3e-49da-8729-adc2f087c37c',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts2Big.png?alt=media&token=259b0801-f795-4c26-94aa-5f2d7a155a72',
                }
              ]
            },
            {
              name: 'blank pages',
              key: 'blankPages',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FLined%20pages1.png?alt=media&token=fa48db3a-393d-46cd-9e86-9b3a57991eeb',
              subcategoriesOptions: [
                {
                  name: 'Lined',
                  key: 'Lined',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FLined%20pages1.png?alt=media&token=eace18ff-3e59-4b2e-8e92-d242460c0112',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FLined%20pages1%402x.png?alt=media&token=99e6a822-cb99-4aaf-9c29-7c37ef99cf3f',
                },
                {
                  name: 'Two Columns',
                  key: 'TwoColumns',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FLined%20pages2.png?alt=media&token=2139d76c-9cb9-4796-97da-369fa778a828',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FLined%20pages2%402x.png?alt=media&token=50c0983c-9329-438f-a5ad-8623d9e5322a'
                },
                {
                  name: 'Dotted',
                  key: 'Dotted',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FDot%20paper.png?alt=media&token=bd43b7e9-aa27-4d90-9764-e8d4e9e9295b',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FDot%20paper%402x.png?alt=media&token=e5133d18-8845-44ce-9cfc-4d982bd3bf0b'
                },
                {
                  name: 'Grid',
                  key: 'Grid',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FGrid%20paper.png?alt=media&token=5ca4e9a3-3d10-4ae8-8f8f-aeec200ec045',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FGrid%20paper%402x.png?alt=media&token=3f7b25e4-78d9-47e8-84a9-ac7c044c011f'
                },
                {
                  name: 'Blank',
                  key: 'Blank',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20paper.png?alt=media&token=deccd829-53fa-4061-8c4b-d64581102843',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20paper%402x.png?alt=media&token=776ca063-7296-4fa2-b8f3-23d1d863d9eb'
                },
                {
                  name: 'Blank Days',
                  key: 'BlankDays',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20Days.png?alt=media&token=652f2362-75f9-4bf7-acea-f006a3f70165',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20Days%402x.png?alt=media&token=ca4aaa76-be05-43e2-b519-d4d0655f9a8c'
                }
              ]
            },
            {
              name: 'lifestyle',
              key: 'lifestyle',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FList%20Page.png?alt=media&token=716a49e9-9cb8-4073-b5e2-18c65a8c1d29',
              subcategoriesOptions: [
                {
                  name: 'Bucket List',
                  key: 'BucketList',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FBucket.png?alt=media&token=09d0d51b-e913-4621-acd2-6e214df93e46',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FBucket%402x.png?alt=media&token=1fc81da4-9f58-4702-9475-4039f12e8b25',
                },
                {
                  name: 'Reading',
                  key: 'Reading',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FReading1.png?alt=media&token=34ded4d3-4eb8-4705-9e96-66c02d50e9e9',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FReading1%402x.png?alt=media&token=9b825985-fd4b-491b-8b0f-d3027342284a'
                },
                {
                  name: 'Ideas',
                  key: 'Ideas',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FIdeas.png?alt=media&token=50ebda90-4204-47c5-8671-704b6461c454',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FIdeas%402x.png?alt=media&token=009f0ba8-907b-4667-a1b2-e33b7c2b9e50'
                },
                {
                  name: 'My Lists',
                  key: 'MyLists',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FList%20Page.png?alt=media&token=22924166-34b1-4b22-b977-e661acdd94e0',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FList%20Page%402x.png?alt=media&token=5217afd1-6719-4de4-a026-f8b7cdb6d701'
                },
                {
                  name: 'Password Tacker',
                  key: 'PasswordTacker',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FPassword%20Tracker-01.png?alt=media&token=ad60440c-2124-4a3d-898d-3989569bf203',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FPassword%20Tracker-01%402x.png?alt=media&token=2eee8be6-8d6f-4ce7-b610-aabde6ebbfde'
                },
                {
                  name: 'Social Media Tracking',
                  key: 'SocialMediaTracking',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FSocial%20Media2.png?alt=media&token=e04c61cf-e914-44a9-a63a-f7bbcb0b4326',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FSocial%20Media2%402x.png?alt=media&token=1cbe09ab-28d1-4768-9f0e-37889e9102c1'
                },
                {
                  name: 'Social Media Planning',
                  key: 'SocialMediaPlanning',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FSocial%20Media1.png?alt=media&token=5e9e4991-9efc-411d-9e92-484a609b9917',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Flife-style%2FSocial%20Media1%402x.png?alt=media&token=186c020e-c5a5-41f8-9f22-be78cdd84468'
                }
              ]
            },
            {
              name: 'finances',
              key: 'finances',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FBudgeting.png?alt=media&token=d80674a4-6f51-43a3-b2b1-170ffcbb8ba1',
              subcategoriesOptions: [
                {
                  name: 'Budgeting',
                  key: 'Budgeting',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FBudgeting.png?alt=media&token=9bf6e349-9990-4fe9-bf67-7c1ec3ce386f',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FBudgeting%402x.png?alt=media&token=981f9655-a61f-4313-a911-a39d1d7c8165',
                },
                {
                  name: 'Expense Tracker',
                  key: 'ExpenseTracker',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FExpenses.png?alt=media&token=957e4568-e2c6-47bd-9c61-9ee596281f1d',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FExpenses%402x.png?alt=media&token=6aeea236-514d-4ead-bdc8-b8920a00f688'
                },
                {
                  name: 'Gifting',
                  key: 'Gifting',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FGifting.png?alt=media&token=5475e8dd-4af7-4625-82be-4e726a37b61a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Ffinances%2FGifting%402x.png?alt=media&token=d6f38082-dbc4-424a-a98d-744da7b07ec5'
                }

              ]
            },
            {
              name: 'at home',
              key: 'atHome',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FCleaning.png?alt=media&token=f7d8f61f-5a5c-4716-b5f4-d48551fb7744',
              subcategoriesOptions: [
                {
                  name: 'Cleaning',
                  key: 'Cleaning',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fat-home%2FCleaning.png?alt=media&token=cc986876-c3e7-4193-9b68-91c724ae9855',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fat-home%2FCleaning.png?alt=media&token=8983682f-b37a-49f8-8d69-83b6d67549f5',
                },
                {
                  name: 'Home Maintenance',
                  key: 'HomeMaintenance',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fat-home%2FHome%20Maintenance.png?alt=media&token=7cbb6e6e-85a3-4c01-a987-f5cf12b67c12',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fat-home%2FHome%20Maintenance%402x.png?alt=media&token=41f16a16-918a-47ff-ab94-52537b7445f6'
                }
              ]
            },
            {
              name: 'baby',
              key: 'baby',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FBaby1.png?alt=media&token=b54f9ff7-927d-4761-8d61-5a8f51affedd',
              subcategoriesOptions: [
                {
                  name: 'Baby Tracker',
                  key: 'BabyTracker1',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby1.png?alt=media&token=375d93af-e9c7-41f3-9a38-45b32e12bf5d',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby1%402x.png?alt=media&token=489a4f97-b9de-4554-acd9-ab417fd26b1b',
                },
                {
                  name: 'Baby Tracker 2',
                  key: 'BabyTracker2',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby2.png?alt=media&token=d7a3e684-8368-4daf-aacf-f957a5beab60',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby2%402x.png?alt=media&token=c48b3cfe-095d-40c8-b48c-5d4218867f3f'
                },
                {
                  name: 'Baby Monthly',
                  key: 'BabyMonthly',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby3.png?alt=media&token=dcdca4f6-f0a3-4b41-9b90-91f7a9dcfa7b',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby%20Monthly.png?alt=media&token=2bbe40c9-512b-40ff-b178-d32c3e38ff40'
                }
              ]
            },
            {
              name: 'wellness',
              key: 'wellness',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FWeekly%20Wellness%20Tracker.png?alt=media&token=a8f4f752-8fac-496b-b7a2-cc3170646d84',
              subcategoriesOptions: [
                {
                  name: 'Weekly Wellness',
                  key: 'WeeklyWellness',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeekly%20Wellness%20Tracker.png?alt=media&token=f6cdb103-a420-46d8-9c15-177eccdbbc3f',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeekly%20Wellness%20Tracker%402x.png?alt=media&token=d88f8210-d187-4d56-91e3-a20f33cb3b2c',
                },
                {
                  name: 'Mood',
                  key: 'Mood',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FMood%20Tracker.png?alt=media&token=d35aafb9-6a19-4a24-9f2b-8cb16377d972',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FMood%20Tracker%402x.png?alt=media&token=69685866-52c2-4cd7-a83f-bfd7559e72e9'
                },
                {
                  name: 'Fitness',
                  key: 'Fitness',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FFitness.png?alt=media&token=1ca61372-f041-4b8e-bfad-e3a9f91729f8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FFitness%402x.png?alt=media&token=000c7811-fe64-4c98-9edd-4e2eea188141'
                },
                {
                  name: 'On The Menu',
                  key: 'OnTheMenu',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeekly%20Meals_Groceries.png?alt=media&token=6e8b350d-d749-4936-aa85-f471403716a1',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeekly%20Meals_Groceries%402x.png?alt=media&token=7a2ad6be-edee-4c54-8bc8-8613f3c58f45'
                },
                {
                  name: 'Measurements',
                  key: 'Measurements',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeight_Measurements-01-01.png?alt=media&token=996aab01-a63e-490b-9aaa-afebfac98377',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FWeight_Measurements-01-01%402x.png?alt=media&token=556b7897-8d22-417e-80b9-232dd02d1428'
                },
                {
                  name: 'Monthly Gratitude',
                  key: 'MonthlyGratitude',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FGratitude1.png?alt=media&token=e5d73c17-6a2e-4a8f-b113-f75079bc00bc',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FGratitude1%402x.png?alt=media&token=c34aeac4-fd03-4c03-8c7d-6877f717ad51'
                },
                {
                  name: 'Daily Gratitude',
                  key: 'DailyGratitude',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FGratitude2.png?alt=media&token=14b265a9-0782-4af7-88c5-23c5711fa594',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FGratitude2%402x.png?alt=media&token=8512da6f-c2b6-4b8f-ba93-885695e605e3'
                },
                {
                  name: 'Reflection',
                  key: 'Reflection',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FReflection.png?alt=media&token=ff2bfb1a-84db-4002-9b60-4fd1875e015f',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FReflection%402x.png?alt=media&token=929e349a-5f4b-4fd0-9269-43e8ba0eeb60'
                }
              ]
            },
            {
              name: 'meet your goals',
              key: 'meetYourGoals',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FGoals%20Yearly.png?alt=media&token=d3ce8216-b68c-4c5c-b5e3-b9fe282eb641',
              subcategoriesOptions: [
                {
                  name: '30 Day Challenge',
                  key: '30DayChallenge',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2F30%20Day%20Challenge.png?alt=media&token=c726da55-550f-4ca8-9b7b-995746d694f2',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2F30%20Day%20Challenge%402x.png?alt=media&token=f4ab23aa-bb9f-4a9a-84d9-473fb693aca0',
                },
                {
                  name: 'My Goals',
                  key: 'MyGoals',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals.png?alt=media&token=f7e17d84-e021-4495-947d-9fe8b9031cdf',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals%402x.png?alt=media&token=526fcec3-7a74-42bc-90e6-97d9b18f6744'
                },
                {
                  name: 'Monthly Goals',
                  key: 'MonthlyGoals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals%20Yearly.png?alt=media&token=21c3cbda-575c-4d52-8899-7b02e15a679e',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals%20Yearly%402x.png?alt=media&token=54ff7d98-9bfe-44f2-832c-1a14059d8eba'
                },
                {
                  name: 'Habit Tracker',
                  key: 'HabitTracker',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FHabit%20Tracker2.png?alt=media&token=0b935a97-7156-433d-91c6-4b0c4dede10b',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FHabit%20Tracker2%402x.png?alt=media&token=33aa4457-7b59-4d13-9fb2-f1c1aa221c63'
                },
                {
                  name: 'Monthly Habits',
                  key: 'MonthlyHabits',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FHabit%20Tracker1.png?alt=media&token=bae58915-0619-4ee1-a6d8-e05ab05a07de',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FHabit%20Tracker1%402x.png?alt=media&token=70a78273-e083-4420-9862-1c873624d43f'
                }
              ]
            },
            {
              name: 'school - work',
              key: 'schoolWork',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FSchool.png?alt=media&token=864f3f61-0132-48cd-a88f-f3e88ac35c6a',
              subcategoriesOptions: [
                {
                  name: 'Meeting Notes',
                  key: 'MeetingNotes',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FMeeting%20Notes%20Template.png?alt=media&token=df37f23b-5bb6-4a1d-ae80-23fc2d99b12b',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FMeeting%20Notes%20Template%402x.png?alt=media&token=a3e44d3c-971f-481d-97ed-c24626b4243e',
                },
                {
                  name: 'Assignments',
                  key: 'Assignments',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FAssignment%20Tracker.png?alt=media&token=3d2bfc99-98f9-42b3-a3f6-b9feda04da00',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FAssignment%20Tracker%402x.png?alt=media&token=bcaf3607-fbb4-4e8e-9b46-0b75a976a183'
                },
                {
                  name: 'School',
                  key: 'School',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FSchool.png?alt=media&token=3160d1c5-6587-42fc-b14e-39632a971ed1',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fschool-work%2FSchool%402x.png?alt=media&token=7212c095-0ce9-4ecc-98f4-36660ce25202'
                }
              ]
            },
            {
              name: 'productivity',
              key: 'productivity',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FProject%20Template.png?alt=media&token=558e1470-7771-4fe5-9e28-056e488d3540',
              subcategoriesOptions: [
                {
                  name: 'Projects',
                  key: 'Projects',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FProject%20Template.png?alt=media&token=219d87eb-972e-4234-9b6c-9cb13cb39bae',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FProject%20Template%402x.png?alt=media&token=4130cc86-2987-4c03-ac40-e82954a1f248',
                },
                {
                  name: 'Task Triage',
                  key: 'TaskTriage',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FTask%20Triage.png?alt=media&token=6ab0a423-2566-4362-ae0a-3b522d6d7dd7',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FTask%20Triage%402x.png?alt=media&token=266dd137-0842-45cc-9228-679351000bc6'
                },
                {
                  name: 'To Do',
                  key: 'ToDo',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FTo%20do.png?alt=media&token=23dc0ca3-9018-4fb8-9dce-3567a50a955a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fproductivity%2FTo%20do%402x.png?alt=media&token=10609314-deda-4294-8253-7698c7ddf50c'
                }
              ]
            },
          ]
        },
        {
          name: 'Extras',
          id: 7,
          type: 'extras',
        },
        {
          name: 'review',
          id: 8,
          type: 'review',
        },
      ],
      finalValue: [],
      days: 0,
      weeks: 0,
      totalPages: 0,
      holidayStructure: {},
      holidayStructureSelection: {},
      holidayStructureFinal: {},
      formerValue: '',
      formerValueHoliday: 0,
      price: 65,
      layoutOption: 'daily',
      datesValueOptions: {
        month: [
          {
            key: 'January',
            value: '01'
          },
          {
            key: 'February',
            value: '02'
          },
          {
            key: 'March',
            value: '03'
          },
          {
            key: 'April',
            value: '04'
          },
          {
            key: 'May',
            value: '05'
          },
          {
            key: 'June',
            value: '06'
          },
          {
            key: 'July',
            value: '07'
          },
          {
            key: 'August',
            value: '08'
          },
          {
            key: 'September',
            value: '09'
          },
          {
            key: 'October',
            value: '10'
          },
          {
            key: 'November',
            value: '11'
          },
          {
            key: 'December',
            value: '12'
          },
        ],
        years: ['2022', '2023', '2024', '2025', '2026']
      },
      pagesToAdd: 0,
      arrayPagesToAdd: [[], [], [], [], [], [], [], [], [], []],
      totalMonths: [],
      weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      totalDatesArray: [{"day": "Saturday", "month": "February", "dayNumber": 1}, {
        "day": "Saturday",
        "month": "February",
        "dayNumber": 2
      }, {"day": "Saturday", "month": "February", "dayNumber": 3}],
      page: 1,
      timerId: null,
      pagesBook: [],
      leftStack: [],
      rightStack: [],
      currentPage: null,
      pagesBookStructure: [],
      pdfProgress: 1,
      validDate: false,
      blankDaysCounter: 0,
      addOnsPosition: '',
    };
  },
  watch: {
    layoutOption() {
      this.calcTotalPages();
    }
  },
  methods: {
    getPrice(pages) {
      const finalValue = this.$store.getters.getListPrices.filter(element => {
        if (element.pages == pages) {
          return element.price;
        }
      })
      return finalValue[0];
    },
    async exportHTMLToPDF() {
      this.loadingPDF = true;
      /*const opt = {
        margin:       [0,0],
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 2 },
        //html2canvas: { dpi: 192, scale:4 },
        html2canvas:  { scale: 4 },
        //html2canvas:  { dpi: 192, letterRendering: true },
        //jsPDF:        { unit: 'px', format: [294, 385.3] },
        jsPDF:        { unit: 'in', format: [5.4375, 7.125] },
      };*/
      const opt = {
        filename: 'myfile.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 4},
        jsPDF: {unit: 'in', format: [7.25, 9.5]}
      };
      let pages = document.getElementsByClassName('pdf');
      console.log('pages', pages);
      pages = Array.from(pages);
      const doc = new jsPDF(opt.jsPDF);
      //const pageSize = jsPDF.getPageSize(opt.jsPDF);
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const pageImage = await html2pdf().from(page).set(opt).outputImg();
        if (i != 0) {
          doc.addPage();
        }
        this.pdfProgress = ((i * 100) / pages.length) + 1;
        console.log('i', page, this.pdfProgress, pageImage)
        doc.addImage(pageImage.src, 0, 0, 7.25, 9.5);
      }

      // This can be whatever output you want. I prefer blob.
      //doc.save();
      const pdf = doc.output('blob');

      const self = this;
      const ordersRef = storageRef.child('orders');
      const fileName = `order${Date.now()}`;
      const spaceRef = ordersRef.child(fileName);
      spaceRef.put(pdf)
          .then(function () {
            spaceRef.getDownloadURL()
                .then(async function (url) {
                  console.log('url', url);
                  const item = {
                    priceId: self.getPrice(self.totalPages).priceId,
                    price: self.getPrice(self.totalPages).price,
                    name: `${self.finalValue[0].selection.subcategory.name} 'PLANNER'`,
                    amount: 1,
                    imgUrl: self.finalValue[0].selection.subcategory.urlImg,
                    pdfUrl: url
                  }
                  let totalValue = self.$store.getters.getTotalPrice;
                  const cartElements = self.$store.getters.getCartItems;
                  cartElements.push(item);
                  try {
                    await self.$store.commit('SET_CART_ITEMS', cartElements);
                  } catch (e) {
                    console.log('error', e);
                  } finally {
                    self.$store.commit('SET_TOTAL_PRICES', (totalValue + item.price));
                    self.$store.commit('SET_FINAL_VALUE', []);
                    self.$emit('showCart');
                    self.loadingPDF = false;
                    self.viewReview = false;
                    self.selectedCategory = 0;
                    self.selectedSubcategory = null;
                    self.layoutPreselect = null;
                    self.selectedItem = null;
                    self.holidaysSelection = '';
                    self.formValue = {};
                    self.dateValue = {
                      startDate: {},
                      endDate: {}
                    };
                    self.days = 0;
                    self.weeks = 0;
                    self.totalPages = 0;
                    self.price = 65;
                    self.layoutOption = 'daily';
                    self.pagesToAdd = 0;
                    self.arrayPagesToAdd = [[], [], [], [], [], [], [], [], [], []];
                    self.totalMonths = [];
                    self.page = 1;
                    self.timerId = null;
                    self.pagesBook = [];
                    self.leftStack = [];
                    self.rightStack = [];
                    self.currentPage = null;
                    self.pagesBookStructure = [];
                    self.pdfProgress = 1;
                    self.validDate = false;
                    self.blankDaysCounter = 0;
                    self.loadingPDF = false;
                  }
                  /*                  const templateParams = {url}
                                    send('service_w81r30t', 'template_92dxr79', templateParams)
                                        .then(function (response) {
                                          console.log('SUCCESS!', response.status, response.text);
                                        }, function (error) {
                                          console.log('FAILED...', error);
                                        });*/
                });
            console.log('succesful');
          })
          .catch(() => {
          });
      //doc.save();
      //console.log('pdffffff', pdf);
      //return pdf;
    },

    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },
    updatePagesDepth(stack) { // first el = farthest
      for (const [i, page] of stack.entries()) {
        if (stack == this.leftStack) {
          page.style.transform = `rotateY(-180deg)`;
          page.style.zIndex = i;
          //page.style.transform = `rotateY(-180deg) translateZ(${-i}px)`;
        } else {
          //page.style.transform = `rotateY(0))`;
          page.style.zIndex = i;
          page.style.transform = `rotateY(0) translateZ(1px)`;
        }
      }
    },
    antes() {
      this.currentPage = this.leftStack.pop();
      this.rightStack.push(this.currentPage);
      this.currentPage.classList.remove("flip");
      this.updatePagesDepth(this.rightStack);
    },
    despues() {
      this.currentPage = this.rightStack.pop();
      this.leftStack.push(this.currentPage);
      this.currentPage.classList.add("flip");
      this.updatePagesDepth(this.leftStack);
    },
    flipSelectedPage(event) {
      if (event.path[1].classList.contains("flip") || event.path[2].classList.contains("flip") || event.path[3].classList.contains("flip")) { //clicked on left stack page
        this.currentPage = this.leftStack.pop();
        this.rightStack.push(this.currentPage);
        this.currentPage.classList.remove("flip");
        this.updatePagesDepth(this.rightStack);
      } else { // clicked on right stack page
        this.currentPage = this.rightStack.pop();
        this.leftStack.push(this.currentPage);
        this.currentPage.classList.add("flip");
        this.updatePagesDepth(this.leftStack);
      }
    },
    calcBookStructure() {
      this.pagesBookStructure = [];
      const type = `${this.finalValue[5].selection.category}${this.finalValue[5].selection.subcategory.key}`
      this.pagesBookStructure[0] = [{type: 'fillpage', category: 'fillpage', data: this.finalValue[2].selection}];
      if (this.layoutOption === 'daily') {
        this.totalDatesArray.map((element) => {
          const firstMonthDate = new Date(`${element.year}-${element.monthNumber}-1`);
          if (element.dayNumber === 1 && this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 1) {
            this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
                layoutType: this.layoutOption,
                monthBefore: element.monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[element.monthNumber - 2].key,
                monthAfter: element.monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[element.monthNumber].key
              },
              //type: `calendar${ new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}1`,
              type: `calendar${new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}1`,
              category: 'calendar'
            };
            this.pagesBookStructure.push([{
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
                layoutType: this.layoutOption,
                monthBefore: element.monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[element.monthNumber - 2].key,
                monthAfter: element.monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[element.monthNumber].key
              },
              //type: `calendar${ new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}2`,
              type: `calendar${new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}2`,
              category: 'calendar'
            }])
          }
          if (element.dayNumber === 2 && this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 1) {
            this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
                layoutType: this.layoutOption,
                monthBefore: element.monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[element.monthNumber - 2].key,
                monthAfter: element.monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[element.monthNumber].key
              },
              type: `calendar${new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}1`,
              category: 'calendar'
            };
            this.pagesBookStructure.push([{
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
                layoutType: this.layoutOption,
                monthBefore: element.monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[element.monthNumber - 2].key,
                monthAfter: element.monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[element.monthNumber].key
              },
              type: `calendar${new Date(element.year, element.monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}2`,
              category: 'calendar'
            }])
          }
          if (this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 1) {
            this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
              },
              type: `${type}1`,
              category: this.finalValue[5].selection.category
            };
          } else if (this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 2) {
            this.pagesBookStructure.push([{
              data: {
                ...element,
                holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${element.month}${element.year}`] : this.holidayStructure[`${element.month}${element.year}`],
              },
              type: `${type}2`,
              category: this.finalValue[5].selection.category
            }])
          }
        })
        if (this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 2) {
          const currentDate = new Date(`${this.totalMonths[this.totalMonths.length - 1].year}-${this.totalMonths[this.totalMonths.length - 1].month + 1}-1`);
          this.pagesBookStructure.push(
              [{
                data: {
                  day: this.weekday[currentDate.getDay()],
                  month: this.totalMonths[this.totalMonths.length - 1].month === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[this.totalMonths[this.totalMonths.length - 1].month].key,
                  dayNumber: 1,
                  //holidays: this.holidayStructureFinal != {}? this.holidayStructureFinal[`${element.month}${element.year}`]: this.holidayStructure[`${element.month}${element.year}`],
                },
                type: `${type}2`,
                category: this.finalValue[5].selection.category
              }]
          )
        }
      } else {
        while (this.totalDatesArray[0].day !== 'Monday') {
          let primerDia = (new Date(`${this.totalDatesArray[0].year}-${this.totalDatesArray[0].monthNumber}-${this.totalDatesArray[0].dayNumber}`));
          let diaMilis = 24 * 60 * 60 * 1000;
          let diaAnterior = new Date(primerDia.getTime() - diaMilis);
          this.totalDatesArray.unshift({
            day: this.weekday[diaAnterior.getUTCDay()],
            month: this.datesValueOptions.month[diaAnterior.getMonth()].key,
            monthNumber: diaAnterior.getMonth() + 1,
            dayNumber: diaAnterior.getUTCDate(),
            year: diaAnterior.getFullYear()
          })
        }
        const totalDaysGroup = Math.ceil((this.totalDatesArray.length) / 7);
        for (let y = 0; y < totalDaysGroup; y++) {
          let daysGroup = this.totalDatesArray.slice((y * 7), (y * 7 + 7));
          let i = 1;
          while (daysGroup.length < 7) {
            const currentDate = new Date(`${this.totalMonths[this.totalMonths.length - 1].year}-${this.totalMonths[this.totalMonths.length - 1].month}-${i}`);
            const nextDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));
            daysGroup.push(
                {
                  day: this.weekday[nextDate.getUTCDay()],
                  month: this.datesValueOptions.month[nextDate.getUTCMonth()].key,
                  monthNumber: nextDate.getUTCMonth() + 1,
                  year: nextDate.getUTCFullYear(),
                  dayNumber: i
                }
            )
            i++;
          }
          daysGroup.map((element) => {
            if (element.dayNumber === 1 && daysGroup[0].dayNumber === 1) {
              const firstMonthDate = new Date(`${element.year}-${element.monthNumber}-1`);
              this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
                data: {
                  ...daysGroup,
                  holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${daysGroup[6].month}${daysGroup[6].year}`] : this.holidayStructure[`${daysGroup[6].month}${daysGroup[6].year}`],
                  layoutType: this.layoutOption,
                  monthBefore: daysGroup[6].monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[daysGroup[6].monthNumber - 2].key,
                  monthAfter: daysGroup[6].monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[daysGroup[6].monthNumber].key
                },
                type: `calendar${new Date(daysGroup[6].year, daysGroup[6].monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}1`,
                category: 'calendar'
              };
              this.pagesBookStructure.push([{
                data: {
                  ...daysGroup,
                  holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${daysGroup[6].month}${daysGroup[6].year}`] : this.holidayStructure[`${daysGroup[6].month}${daysGroup[6].year}`],
                  layoutType: this.layoutOption,
                  monthBefore: daysGroup[6].monthNumber === 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[daysGroup[6].monthNumber - 2].key,
                  monthAfter: daysGroup[6].monthNumber === 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[daysGroup[6].monthNumber].key
                },
                type: `calendar${new Date(daysGroup[6].year, daysGroup[6].monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}2`,
                category: 'calendar'
              }])
            }
          });
          if (this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 1) {
            this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
              data: daysGroup,
              type: `${type}1`,
              category: this.finalValue[5].selection.category
            };
          }
          this.pagesBookStructure.push([{
            data: this.pagesBookStructure[this.pagesBookStructure.length - 1][1].data,
            type: `${type}2`,
            category: this.finalValue[5].selection.category
          }]);
          daysGroup.map((element) => {

            if (element.dayNumber === 1 && daysGroup[0].dayNumber !== 1) {
              const firstMonthDate = new Date(`${element.year}-${element.monthNumber}-1`);
              this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
                data: {
                  ...daysGroup,
                  holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${daysGroup[daysGroup.length - 1].month}${daysGroup[daysGroup.length - 1].year}`] : this.holidayStructure[`${daysGroup[daysGroup.length - 1].month}${daysGroup[daysGroup.length - 1].year}`],
                  layoutType: this.layoutOption,
                  monthBefore: daysGroup[6].monthNumber == 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[daysGroup[6].monthNumber - 2].key,
                  monthAfter: daysGroup[6].monthNumber == 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[daysGroup[6].monthNumber].key
                },
                type: `calendar${new Date(daysGroup[daysGroup.length - 1].year, daysGroup[daysGroup.length - 1].monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}1`,
                category: 'calendar'
              };
              this.pagesBookStructure.push([{
                data: {
                  ...daysGroup,
                  holidays: this.holidaysSelection != '' ? this.holidayStructureFinal[`${daysGroup[daysGroup.length - 1].month}${daysGroup[daysGroup.length - 1].year}`] : this.holidayStructure[`${daysGroup[daysGroup.length - 1].month}${daysGroup[daysGroup.length - 1].year}`],
                  layoutType: this.layoutOption,
                  monthBefore: daysGroup[6].monthNumber == 1 ? this.datesValueOptions.month[11].key : this.datesValueOptions.month[daysGroup[6].monthNumber - 2].key,
                  monthAfter: daysGroup[6].monthNumber == 12 ? this.datesValueOptions.month[0].key : this.datesValueOptions.month[daysGroup[6].monthNumber].key
                },
                type: `calendar${new Date(daysGroup[daysGroup.length - 1].year, daysGroup[daysGroup.length - 1].monthNumber, 0).getDate()}${(this.weekday[firstMonthDate.getDay()]).toLowerCase()}2`,
                category: 'calendar'
              }])
            }
          });
        }
      }
      this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
        type: 'endPage',
        category: 'fillpage',
        data: this.finalValue[2].selection
      }
      this.$store.commit('SET_PAGES_BOOK_STRUCTURE', this.pagesBookStructure);
    },
    calcTotalDates() {
      this.totalDatesArray = [];
      this.totalMonths.map((element) => {
        for (let y = 1; y <= element.totalDays; y++) {
          const currentDate = new Date(`${element.year}-${element.month}-${y}`);
          this.totalDatesArray.push({
            day: this.weekday[currentDate.getUTCDay()],
            month: this.datesValueOptions.month[element.month - 1].key,
            monthNumber: element.month,
            dayNumber: y,
            year: currentDate.getFullYear()
          })
        }
      })
      //this.calcBookStructure();
      this.calcHolidaysStandard();
      this.pagesBook = Array.from(document.querySelectorAll(".book .page"));
      this.rightStack = Array.from(this.pagesBook).reverse();
      this.updatePagesDepth(this.rightStack);
    },
    calcMonthsArray() {
      const numberOfYears = this.dateValue.endDate.year - this.dateValue.startDate.year;
      for (let x = 0; x < numberOfYears + 1; x++) {
        let start = (x == 0 || (this.dateValue.endDate.year == this.dateValue.startDate.year) ? this.dateValue.startDate.month : 1);
        let finish = (x == numberOfYears || (this.dateValue.endDate.year == this.dateValue.startDate.year) ? this.dateValue.endDate.month : 12);
        for (let y = start; y <= finish; y++) {
          const month = Number(y);
          const year = Number(this.dateValue.startDate.year) + x;
          const totalDays = new Date(year, month, 0).getDate();
          this.totalMonths.push({month, year, totalDays})
        }
      }
      this.calcTotalDates();
    },
    calcTotalPages() {
      if (this.layoutOption === 'daily') this.totalPages = (this.days) + 2;
      else if (this.layoutOption === 'weekly') this.totalPages = ((Math.ceil(this.days / 7)) * 4) + 2;
      if (this.totalPages % 2 !== 0) this.totalPages = this.totalPages + 1;
      if (this.totalPages >= 120) this.price = ((this.totalPages - 120) * 0.1) + 65;
    },
    setDaysAndMonths() {
      if (this.dateValue.endDate.month && this.dateValue.endDate.year && this.dateValue.startDate.month && this.dateValue.startDate.year) this.validDate = true;
      const startDate = new Date(`${this.dateValue.startDate.year}-${this.dateValue.startDate.month}-01`).getTime();
      const endDate = new Date(`${this.dateValue.endDate.year}-${this.dateValue.endDate.month}-01`).getTime();
      this.days = (endDate - startDate) / (1000 * 60 * 60 * 24);
      this.calcTotalPages();
      this.calcMonthsArray();
    },
    selectItem(selection, index) {
      this.selectedItem = index;
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection};
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      if (this.selectedCategory == 5) this.calcBookStructure();
      this.layoutPreselect = null;
    },
    selectItemAddPagesWeekly(selection, addOnsPosition) {
      this.addOnsPosition = addOnsPosition;
      let structureArray = [...this.pagesBookStructure];
      let counter = 1;
      structureArray.map((element, index) => {
        if (element[0].type.substring(0, 5) === 'daily' || element[1].type.substring(0, 5) === 'daily') {
          if (element[0].data.day === 'Saturday') {
            let newElements = [...this.$store.getters.getPagesBookStructure[index + counter], ...this.$store.getters.getPagesBookStructure[index + counter + 1]];
            newElements.splice(1, 0, {
              data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 1 : 'addOnPages',
              type: `${selection.category}${selection.subcategory.key}1`,
              category: 'addOnPages'
            }, {
              data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 2 : 'addOnPages',
              type: `${selection.category}${selection.subcategory.key}2`,
              category: 'addOnPages'
            });
            newElements = [[newElements[0], newElements[1]], [newElements[2], newElements[3]], [newElements[4], newElements[5]]]
            this.pagesBookStructure.splice(index + counter, 2, ...newElements);
            this.totalPages = this.totalPages + 2;
            if (index > 2) counter = counter + 1;
            this.layoutPreselect = null;
          } else if (element[1].data.day === 'Saturday') {
            let newElements = [...this.$store.getters.getPagesBookStructure[index + counter + 1], ...this.$store.getters.getPagesBookStructure[index + counter + 2]];
            newElements.splice(1, 0, {
              data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 1 : 'addOnPages',
              type: `${selection.category}${selection.subcategory.key}1`,
              category: 'addOnPages'
            }, {
              data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 2 : 'addOnPages',
              type: `${selection.category}${selection.subcategory.key}2`,
              category: 'addOnPages'
            });
            newElements = [[newElements[0], newElements[1]], [newElements[2], newElements[3]], [newElements[4], newElements[5]]]
            this.pagesBookStructure.splice(index + counter + 1, 2, ...newElements);
            this.totalPages = this.totalPages + 2;
            if (index > 2) counter = counter + 1;
            this.layoutPreselect = null;
          }
        } else if (element[1].type.substring(0, 6) === 'weekly') {
          let newElements = [...this.$store.getters.getPagesBookStructure[index + counter], ...this.$store.getters.getPagesBookStructure[index + counter + 1]];
          newElements.splice(1, 0, {
            data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 1 : 'addOnPages',
            type: `${selection.category}${selection.subcategory.key}1`,
            category: 'addOnPages'
          }, {
            data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 2 : 'addOnPages',
            type: `${selection.category}${selection.subcategory.key}2`,
            category: 'addOnPages'
          });
          newElements = [[newElements[0], newElements[1]], [newElements[2], newElements[3]], [newElements[4], newElements[5]]]
          this.pagesBookStructure.splice(index + counter, 2, ...newElements);
          this.totalPages = this.totalPages + 2;
          counter = counter + 1;
          this.layoutPreselect = null;
          this.addOnsPosition = '';
        }
      })
    },
    selectItemAddPagesMonthly(selection, addOnsPosition) {
      this.addOnsPosition = addOnsPosition;
      let structureArray = [...this.pagesBookStructure];
      let counter = 0;
      structureArray.map((element, index) => {
        if (element[1].category === 'calendar') {

          let newElements = [...this.$store.getters.getPagesBookStructure[index + counter], ...this.$store.getters.getPagesBookStructure[index + counter + 1]];
          newElements.splice(1, 0, {
            data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 1 : 'addOnPages',
            type: `${selection.category}${selection.subcategory.key}1`,
            category: 'addOnPages'
          }, {
            data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? 2 : 'addOnPages',
            type: `${selection.category}${selection.subcategory.key}2`,
            category: 'addOnPages'
          });
          newElements = [[newElements[0], newElements[1]], [newElements[2], newElements[3]], [newElements[4], newElements[5]]]
          this.pagesBookStructure.splice(index + counter, 2, ...newElements);
          this.totalPages = this.totalPages + 2;
          counter = counter + 1;
          this.layoutPreselect = null;
          this.addOnsPosition = '';
        }
      });
    },
    showInput(addOnsPosition) {
      this.addOnsPosition = addOnsPosition;
    },
    addPages(selection) {
      if (this.addOnsPosition === 'addEnd') this.selectItemAddPages(selection);
      else if (this.addOnsPosition === 'addBeginning') this.selectItemAddPagesBefore(selection)
    },
    async selectItemAddPages(selection) {
      //this.leftStack = [];
      /*      this.pagesBook = Array.from(document.querySelectorAll(".book .page"));
            this.rightStack = Array.from(this.pagesBook).reverse();
            this.updatePagesDepth(this.rightStack);*/
      let selectionArray = [];
      const layoutPreselect = this.layoutPreselect;
      this.pagesBookStructure[this.pagesBookStructure.length - 1].pop();
      if (this.finalValue[this.selectedCategory]) {
        if (Object.prototype.hasOwnProperty.call(this.finalValue[this.selectedCategory], 'selection')) {
          selectionArray = this.finalValue[this.selectedCategory].selection;
        }
      }
      selectionArray = selectionArray.filter((element) => {
        if (element.subcategory === layoutPreselect) this.totalPages = this.totalPages - element.pages;
        return element.subcategory !== layoutPreselect;
      });
      selectionArray.push({
        ...selection,
        pages: this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]
      });
      for (let x = 0; x < this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]; x++) {

        if (this.pagesBookStructure[this.pagesBookStructure.length - 1].length === 1) {
          if (`${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays') {
            this.blankDaysCounter = this.blankDaysCounter + 1;
          }
          this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
            data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? this.blankDaysCounter : 'addOnPages',
            type: `${selection.category}${selection.subcategory.key}1`,
            category: 'addOnPages'
          };
        }
        this.pagesBookStructure.push([{
          data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? this.blankDaysCounter + 1 : 'addOnPages',
          type: `${selection.category}${selection.subcategory.key}2`,
          category: 'addOnPages'
        }])
        if (`${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays') {
          this.blankDaysCounter = this.blankDaysCounter + 1;
        }
      }
      this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
        type: 'endPage',
        category: 'fillpage',
        data: this.finalValue[2].selection
      }
      this.totalPages = this.totalPages + (Number(this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]) * 2);
      this.calcTotalPages();
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: selectionArray}
      this.$store.commit('SET_PAGES_BOOK_STRUCTURE', this.pagesBookStructure);
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.layoutPreselect = null;
      this.addOnsPosition = '';
    },

    async selectItemAddPagesBefore(selection) {
      let selectionArray = [];
      const layoutPreselect = this.layoutPreselect;
      if (this.finalValue[this.selectedCategory]) {
        if (Object.prototype.hasOwnProperty.call(this.finalValue[this.selectedCategory], 'selection')) {
          selectionArray = this.finalValue[this.selectedCategory].selection;
        }
      }
      selectionArray = selectionArray.filter((element) => {
        if (element.subcategory === layoutPreselect) this.totalPages = this.totalPages - element.pages;
        return element.subcategory !== layoutPreselect;
      });
      selectionArray.push({
        ...selection,
        pages: this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]
      });
      for (let x = 0; x < this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]; x++) {
        if (`${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays') {
          this.blankDaysCounter = this.blankDaysCounter + 1;
        }
        this.pagesBookStructure[0][0] = {
          data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? this.blankDaysCounter : 'addOnPages',
          type: `${selection.category}${selection.subcategory.key}2`,
          category: 'addOnPages'
        };

        this.pagesBookStructure.unshift([{
          data: `${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays' ? this.blankDaysCounter + 1 : 'addOnPages',
          type: `${selection.category}${selection.subcategory.key}1`,
          category: 'addOnPages'
        }])
        this.pagesBookStructure[0].unshift({
          type: 'fillpage',
          category: 'fillpage',
          data: this.finalValue[2].selection
        });
        if (`${selection.category}${selection.subcategory.key}` === 'blankPagesBlankDays') {
          this.blankDaysCounter = this.blankDaysCounter + 1;
        }
      }
      this.pagesBookStructure[this.pagesBookStructure.length - 1][1] = {
        type: 'endPage',
        category: 'fillpage',
        data: this.finalValue[2].selection
      }
      this.totalPages = this.totalPages + (Number(this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]) * 2);
      this.calcTotalPages();
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: selectionArray}
      this.$store.commit('SET_PAGES_BOOK_STRUCTURE', this.pagesBookStructure);
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.layoutPreselect = null;
      this.addOnsPosition = '';
    },

    formChange(value) {
      this.$set(this.finalValue, this.selectedCategory, {id: this.selectedCategory + 1, selection: value});
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
    },
    dateChange(value) {
      this.validDate = false;
      this.finalValue[this.selectedCategory] = {};
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.formChange(value);
      if (this.dateValue.startDate.month && this.dateValue.startDate.year && this.dateValue.endDate.month && this.dateValue.endDate.year) this.setDaysAndMonths();
    },
    setHolidays(value) {
      this.holidaysSelection = value;
      this.formChange(value);
      this.calcHolidaysSelection();
    },
    calcHolidaysStandard() {
      this.holidayStructure = {};
      this.totalDatesArray.map(element => {
        Reflect.set(this.holidayStructure, `${element.month}${element.year}`, this.$store.state.standardHolidays[element.year][element.month.toLowerCase()] ? this.$store.state.standardHolidays[element.year][element.month.toLowerCase()] : {})
      });
    },
    calcHolidaysSelection() {
      this.totalDatesArray.map(element => {
        if (this.formerValue !== element.month.toLowerCase()) {
          this.formerValue = element.month.toLowerCase();
          Reflect.set(this.holidayStructureSelection, `${element.month}${element.year}`, this.$store.state[this.holidaysSelection][element.year][element.month.toLowerCase()] ? this.$store.state[this.holidaysSelection][element.year][element.month.toLowerCase()] : {})
        }
      });
      this.calcTotalHoliday();
    },
    calcTotalHoliday() {
      //this.holidayStructureFinal = Object.assign({}, this.holidayStructure);
      Object.keys(this.holidayStructure).map((month) => {
        Object.keys(this.holidayStructureSelection).map((monthSelection) => {
          if (monthSelection === month) {
            this.holidayStructureFinal[month] = {...this.holidayStructureSelection[month], ...this.holidayStructure[month]}
            Object.keys(this.holidayStructure[month]).map((holiday) => {
              Object.keys(this.holidayStructureSelection[month]).map((newHoliday) => {
                if (holiday == newHoliday) {
                  const newArrayHolidays = this.holidayStructureSelection[month][newHoliday].concat(this.holidayStructure[month][holiday])
                  Reflect.set(this.holidayStructureFinal[month], newHoliday, newArrayHolidays);
                }
              })
            })
          }
        })
      })
      this.$store.commit('SET_HOLIDAY_STRUCTURE_FINAL', this.holidayStructureFinal);
    },
    setExtras(value) {
      this.extrasSelection = value;
      //this.checkInOn = '';
      this.$store.commit('SET_EXTRA_SELECTION', value)
    },
    deletePages() {
      this.totalPages = this.totalPages - this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]
      this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1] = null;
      const elementPreselect = this.layoutPreselect;
      let addSelection = this.finalValue[6].selection
      this.finalValue[6].selection = addSelection.filter((element) => element.subcategory.id !== elementPreselect.id);
      this.pagesBookStructure = this.pagesBookStructure.filter((element) => element.type !== `${this.layoutOption}${elementPreselect.key}`);
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
    },
    exportPDFDemo() {
      if (this.totalPages >= 120 && this.totalPages <= 242) {
        this.exportHTMLToPDF();
      } else {
        this.showModal = true;
        this.modalMessage = 'Your product must have between 120 and 242 pages. Return to the builder to edit your selection.'
      }
    },
  },
  computed: {
    pagesBookStructureRender() {
      let pagesBookStructureRender = this.pagesBookStructure;
      pagesBookStructureRender.shift();
      return pagesBookStructureRender;
    },
    endMonthDate() {
      if (this.dateValue.startDate.year === this.dateValue.endDate.year) {
        const monthSelected = this.dateValue.startDate.month
        return this.datesValueOptions.month.filter((month => {
              if (month.value > monthSelected)
                return month;
            })
        )
      }
      return this.datesValueOptions.month;
    },
    endYearDate() {
      if (this.dateValue.startDate.year) {
        const yearSelected = this.dateValue.startDate.year
        return this.datesValueOptions.years.filter((year => {
              if (year >= yearSelected)
                return year;
            })
        )
      }
      return this.datesValueOptions.years;
    }
  },
  updated() {
    this.pagesBook = Array.from(document.querySelectorAll(".book .page"));
    this.rightStack = Array.from(this.pagesBook).reverse();
    this.updatePagesDepth(this.rightStack);
  },
  mounted() {
    //this.setDaysAndMonths();
    this.calcTotalPages();
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/breakpoints";


html, body {
  min-height: 100vh
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.book {
  position: relative;
  transform-style: preserve-3d;
  max-width: 522px;
  min-width: 350px;
  max-height: 684px;
}

.page {
  position: absolute;
  width: 45%;
  height: fit-content;
  top: 0;
  left: 50%;
  transform-style: preserve-3d;
}

.side {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.side0 {
  transform: none;
}

.side1 {
  transform: rotateY(180deg);
}

.flip { /*do nothing, its used by js*/
}

/*
preserntaiton
*/
body {
  background: slategray;
}

.book {

  max-width: 1044px;
  max-height: 684px;
  perspective: 800px;
}

.page {
  transition: transform 1s;
  transform-origin: left center;
}

.side0 {
  background-color: white;
  //padding: 1em;
  //box-sizing: border-box;
  //box-shadow:1px 1px 1px 0 rgba(0,0,0,0.3);
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);

}

.side1 {
  background-color: white;
  //padding: 1em;
  //box-sizing: border-box;
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.3);
}

.page:first-of-type .side0 {
  box-shadow: -10px 0 10px -6px rgba(0, 0, 0, 0.3);
}

.page:last-of-type .side1 {
  z-index: 0;
  box-shadow: 10px 0 10px -6px rgba(0, 0, 0, 0.3);
}

/*
.flip-panel {
  display: block;
  position: relative;
  width: 522px;
  height: 684px;
  margin: 20px 50%;
  perspective: 1200px;
}

.panel {
  transition: z-index 1s ease-in-out 1s;
}

.panel,
.panel .front,
.panel .back {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  -moz-transform-style: preserve-3d;
  -moz-transition: -moz-transform 1s;
  transform-style: preserve-3d;
  transition: transform 1s, box-shadow 1s;
}

.panel .front {
  z-index: 2;
  -moz-transform: rotateY(0deg);
  -moz-transform-origin: left;
  transform: rotateY(0deg);
  transform-origin: left;
  backface-visibility: hidden;
  box-shadow: 0px 1px 0px lightgrey;
}

.panel .back {
  left: -100%;
  z-index: 1;
  -moz-transform: rotateY(180deg);
  -moz-transform-origin: right;
  transform: rotateY(180deg);
  transform-origin: right;
  backface-visibility: hidden;
  box-shadow: 2px 1px 2px lightgrey;
}

.panel .front:hover {
  -moz-transform: rotateY(-25deg);
  -moz-transform-origin: left;
  transform: rotateY(-25deg);
  transform-origin: left;
  box-shadow: 4px 4px 12px rgb(100,100,100);
}

.panel.open {
  z-index: 1;
}

.panel.open .front {z-index
  z-index: 1;
  -moz-transform: rotateY(-180deg);
  -moz-transform-origin: left;
  transform: rotateY(-180deg);
  transform-origin: left;
}

.panel.open .back {
  z-index: 2;
  -moz-transform: rotateY(0deg);
  -moz-transform-origin: right;
  transform: rotateY(0deg);
  transform-origin: right;
}
*/
.textarea {
  font-size: 1.5rem;
}

.cover {
  width: 76px !important;
  height: 96px !important;
}

.coil {
  width: 76px !important;
  height: 98px !important;
}

.fillPages {
  width: 73px !important;
  height: 94px !important;
}

.dates {
  width: 104px !important;
  height: 68px !important;
}

.holidays {
  width: 78px !important;
  height: 94px !important;
}

.layout {
  width: 94px !important;
  height: 76px !important;
}

.addOnPages {
  width: 64px !important;
  height: 98px !important;
}

.extras {
  width: 88px !important;
  height: 92px !important;
}

.review {
  width: 96px !important;
  height: 60px !important;
}

.add-container {
  width: 70%;
  margin: 0 auto;

  .addOnPagesButton {
    background-color: #FAF0EC;
    height: fit-content;
    white-space: break-spaces;
    line-height: 95%;

  }

  .add-button {
    border-radius: 25px;
    background-color: #F3D7D3;
    height: 30px
  }

  .button__selected {
    background-color: #F3D7D3 !important;
  }
}

button {
  cursor: pointer;
}

.formDates {
  max-width: 800px;
  width: 100%;
}

.holiday-container {
  button {
    background-color: #FAF0EC;
    border-radius: 0px;
    border: none;
  }

  .button__selected {
    background-color: #F3D7D3 !important;
  }
}

.page-counter {
  //position: absolute;
  //bottom: 170px;
  //right: 20px;
  background-color: #FDF8F7;
  border: #E5A49A 2px solid;
  //padding: 20px 40px;
}

.build-container {
  min-height: 90vh;
  height: fit-content;
  background-color: #FFFFFF !important;
  padding-bottom: 144px;

  &__title {
    font-size: 4rem;
  }

  &__subtitle {
    padding: 0 15%;
  }

  &-carrousel {
    width: 100%;
    height: 80vh;

    &-categories {
      width: 150px;
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
      padding: 5px 15px 5px 30px;
      width: calc(100vw - 40px);
      height: 100%;
      overflow-y: auto;
      @media #{$mobile} {
        padding: 0;
      }

      &-container {
        background-color: #FFFFFF !important;
        padding: 10px 20px;
        min-height: 460px;
        height: 100%;
        width: 100%;
        overflow-y: auto;

        .columns {
          width: 100%;
          /*margin-top: 20px;*/
          @media #{$mobile} {
            margin-top: 10px;
          }
        }

        &-card {
          width: 100%;
          max-width: 250px;
          height: 240px;
          position: relative;
          //margin-top: 15px;

          &__selected {
            position: absolute;
            top: -18px;
            right: -18px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>