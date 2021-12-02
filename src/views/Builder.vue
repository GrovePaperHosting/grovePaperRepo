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
          <div v-show="selectedCategory === 8">
            <div class="w100 is-flex">
              <div class="add-container">
                <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100">
                  ADD TO CART
                </button>
              </div>
              <div v-if="totalDatesArray.length>0" class="book mx-3">
                <div class="page page0" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    cover
                  </div>
                  <div class="side side1">
                    <Hourly1 :date="{ day: totalDatesArray[0].day, month: totalDatesArray[0].month, dayNumber: totalDatesArray[0].dayNumber}"></Hourly1>
                  </div>
                </div>
                <div class="page" :class="`page${index+1}`" v-for="(page, index) in totalDatesArray" :key="index" @click="flipSelectedPage($event)">
                  <div v-if="(index+1)*2-1 < totalDatesArray.length" class="side side0">
                    <hourly2 :date="{ day: totalDatesArray[(index+1)*2-1].day ,month: totalDatesArray[(index+1)*2-1].month, dayNumber: totalDatesArray[(index+1)*2-1].dayNumber}"></hourly2>
                  </div>
                  <div v-if="(index+1)*2 < totalDatesArray.length" class="side side1">
                    <Hourly1 :date="{ day: totalDatesArray[(index+1)*2].day, month: totalDatesArray[(index+1)*2].month, dayNumber: totalDatesArray[(index+1)*2].dayNumber}"></Hourly1>
                  </div>
                </div>
                <div class="page page4" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <month-memories1></month-memories1>
                  </div>
                  <div class="side side1">
                    <month-memories2></month-memories2>
                  </div>
                </div>
                <div class="page page5" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <month-ideas2></month-ideas2>
                  </div>
                  <div class="side side1">
                    <month-ideas1></month-ideas1>
                  </div>
                </div>
                <div class="page page6" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <blank-month1></blank-month1>
                  </div>
                  <div class="side side1">
                    <blank-month2></blank-month2>
                  </div>
                </div>
                <div class="page page7" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <blank-month1></blank-month1>
                  </div>
                  <div class="side side1">
                    <blank-month2></blank-month2>
                  </div>
                </div>
                <div class="page page8" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <my-year-months2></my-year-months2>
                  </div>
                  <div class="side side1">
                    <my-year-months1></my-year-months1>
                  </div>
                </div>
                <div class="page page9" @click="flipSelectedPage($event)">
                  <div class="side side0">
                    <my-year-days1></my-year-days1>
                  </div>
                  <div class="side side1">
                    <my-year-days2></my-year-days2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="layoutPreselect !== null && selectedCategory !== 8">
            <div>
              <div class="columns">
                <div class="column is-4 p-0 m-0">
                  <div class="is-flex is-justify-content-flex-start ml-3" style="height: 10%">
                    <button @click="layoutPreselect = null" class="button__transparent">
                      <img style="width: 40px; height: 30px"
                           src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                    </button>
                  </div>
                  <div class="mt-3 is-flex is-justify-content-center is-flex-direction-column" style="height: 90%">
                    <h1 class="is-uppercase is-size-1 is-size-3-touch lamango-font lamango-font__spacing3 has-text-weight-light mt-2 ">
                      {{ layoutPreselect.name }}</h1>
                    <div v-if="selectedCategory === 6" class="add-container">
                      <input type="number" class="input"
                             v-model.number="arrayPagesToAdd[Number(selectedSubcategory)][Number(layoutPreselect.id)-1]">
                      <!--                      <input  type="number" class="input" v-model.number="pagesToAdd">-->
                      <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100"
                              @click="selectItemAddPages({category: options[selectedCategory].subcategories[selectedSubcategory].name, subcategory: layoutPreselect})">
                        ADD
                      </button>
                      <a class=" has-text-grey is-size-4 is-underlined" @click="deletePages">Remove</a>
                    </div>
                    <div v-else class="add-container">
                      <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100"
                              @click="selectItem({category: options[selectedCategory].subcategories[selectedSubcategory].name, subcategory: layoutPreselect}, layoutPreselect.id-1)">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
                <div class="column is-8 p-0 m-0">
                  <img style="max-height: 650px" :src="layoutPreselect.urlImgFull">
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="selectedCategory !== 8" class="card is-flex build-container-carrousel-options-container">
            <div class="w100" v-if="options[selectedCategory].type === 'optionsListNested'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered mt-6">
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
              <div class="columns is-multiline is-vcentered w100 is-gapless mt-6">
                <div class="column is-one-fifth"
                     v-for="(option, index) in options[selectedCategory].categoriesOptions"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent w100"
                          @click="selectItem(option, index)">
                    <div class="w100">
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
            <div class="w100 my-6" v-else-if="options[selectedCategory].type === 'formFillPage'">
              <div class="columns">
                <div class="column is-6">
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
                    <textarea class="textarea" type="textarea" row="3" v-model="formValue['Message']"
                              @keyup="formChange(formValue)"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100 is-flex is-justify-content-center my-6"
                 v-else-if="options[selectedCategory].type === 'formDates'">
              <div class="formDates">
                <div class="mt-6">
                  <h1 class="is-uppercase is-size-4 lamango-font has-text-weight-light">Start date </h1>
                  <div class="columns w100 m-0">
                    <div class="column">
                      <b-field>
                        <b-select placeholder="Select a year" v-model="dateValue.startDate['year']"
                                  @click.native="dateChange(dateValue)" expanded>
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
                                  @click.native="dateChange(dateValue)" expanded>
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
                                  @click.native="dateChange(dateValue)" expanded>
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
                            @click.native="dateChange(dateValue)" expanded>
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
            <div class="w100 my-6 holiday-container" v-else-if="options[selectedCategory].type === 'holidays'">
              <div class="columns my-6 is-vcentered">
                <div class="column is-flex is-flex-direction-column">
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'canadian holidays'}"
                      @click="setHolidays({name: 'canadian holidays'})"> canadian holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'us holidays'}"
                      @click="setHolidays({name:'us holidays'})"> us holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'christian holidays'}"
                      @click="setHolidays({name: 'christian holidays'})">christian holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'hindu holidays'}"
                      @click="setHolidays({name: 'hindu holidays'})"> hindu holidays
                  </button>
                </div>
                <div class="column is-flex is-flex-direction-column">
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'jewish holidays'}"
                      @click="setHolidays({name: 'jewish holidays'})"> jewish holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'muslim holidays'}"
                      @click="setHolidays({name: 'muslim holidays'})"> muslim holidays
                  </button>
                  <button
                      class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light m-3 py-2"
                      :class="{'button__selected' : holidaysSelection.name === 'fun holidays'}"
                      @click="setHolidays({name: 'fun holidays'})"> fun holidays
                  </button>
                </div>
              </div>
            </div>
            <div class="w100" v-if="options[selectedCategory].type === 'layoutOptions'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6">
                <div class="column is-one-fifth p-0" v-for="(option, index) in options[selectedCategory].subcategories"
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
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100">
                <div class="columns is-multiline is-vcentered py-6">
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
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6">
                <div class="column is-one-fifth p-0" v-for="(option, index) in options[selectedCategory].subcategories"
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
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100">
                <div class="columns is-multiline is-vcentered py-6">
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
              <div class="is-flex is-flex-direction-column w100" style="padding: 5% 25%">
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-3 py-2"
                    :class="{'button__selected' : holidaysSelection.name === 'Motivational quotes'}"
                    @click="setHolidays({name: 'Motivational quotes'})"> Motivational quotes
                </button>
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2"
                    :class="{'button__selected' : holidaysSelection.name === 'self-care challenges'}"
                    @click="setHolidays({name: 'self-care challenges'})"> self-care challenges
                </button>
                <button
                    class="is-uppercase is-size-5 lamango-font lamango-font__spacing has-text-weight-light mt-6 py-2"
                    :class="{'button__selected' : holidaysSelection.name === 'personal check ins'}"
                    @click="setHolidays({name: 'personal check ins'})"> personal check ins
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="false">
      <table v-if="finalValue.length !== 0" id="my-table" class="w100 p-6">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Selection</th>
        </tr>
        <tr v-for="(singleValue, index) in finalValue" :key="index">
          <td>{{ singleValue.id }}</td>
          <td>{{ carrouselCategories[singleValue.id - 1].name }}</td>
          <td>
            <span v-if="singleValue.selection.category">{{ singleValue.selection.category }}</span>
            <span v-else>N/A</span>
          </td>
          <td>
            <span v-if="singleValue.selection.subcategory">{{ singleValue.selection.subcategory.name }}</span>
            <div v-else-if="singleValue.id == 3">
              <h1><span class="has-text-weight-bold">Name: </span> {{ singleValue.selection.Name }} - </h1>
              <h1><span class="has-text-weight-bold">Email: </span> {{ singleValue.selection.Email }} - </h1>
              <h1><span class="has-text-weight-bold">Telephone: </span> {{ singleValue.selection.Telephone }} - </h1>
              <h1><span class="has-text-weight-bold">Year: </span> {{ singleValue.selection.Year }} - </h1>
              <h1><span class="has-text-weight-bold">Message:  </span> {{ singleValue.selection.Message }}</h1>
            </div>
            <div v-else-if="singleValue.id == 4">
              <h1>Start date: {{ singleValue.selection.startDate.year }} -
                {{ singleValue.selection.startDate.month }}/ </h1>
              <h1>End date: {{ singleValue.selection.endDate.year }} - {{ singleValue.selection.endDate.month }} </h1>
            </div>
            <div v-if="singleValue.id == 7">
              <div v-for="(selection, index) in singleValue.selection" :key="index">
                <span> {{ selection.category }} : {{ selection.subcategory.name }}, pages: {{
                    selection.pages
                  }} /</span>
              </div>
            </div>
            <span v-else>{{ singleValue.selection.name }}</span>
          </td>
        </tr>
      </table>
    </div>
    <button @click="exportPDFDemo">Send PDF</button>
    <template>
    </template>
    <div class="page-counter has-text-centered">
      <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">PAGE COUNT</h1>
      <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2 has-text-primary has-text-weight-bold">
        {{ totalPages }} /242</h1>
      <h1 class="is-uppercase is-size-4 lamango-font lamango-font__spacing3 has-text-weight-light mt-2">Price</h1>
      <h1 class="is-uppercase is-size-5 lamango-font lamango-font__spacing3 has-text-weight-light mt-2 has-text-primary has-text-weight-bold">
        {{ price }}</h1>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import storageRef from "../firebase";
import {init, send} from 'emailjs-com';

init("user_rVFW3uNdwPo3aLyWfIMyo");

import Hourly1 from "../htmlPages/dailyLayouts/hourly/Hourly1";
import Hourly2 from "../htmlPages/dailyLayouts/hourly/Hourly2";
import monthMemories1 from "../htmlPages/Scheduling/monthMemories1";
import monthMemories2 from "../htmlPages/Scheduling/monthMomories2";
import monthIdeas1 from "../htmlPages/Scheduling/monthIdeas/monthIdeas1";
import monthIdeas2 from "../htmlPages/Scheduling/monthIdeas/monthIdeas2";
import blankMonth1 from "../htmlPages/Scheduling/blankMonth/blankMonth1";
import blankMonth2 from "../htmlPages/Scheduling/blankMonth/blankMonth2";
import myYearMonths1 from "../htmlPages/Scheduling/myYearMonths/myYearMonths1";
import myYearMonths2 from "../htmlPages/Scheduling/myYearMonths/myYearMonths2";
import myYearDays1 from "../htmlPages/Scheduling/myYearDays/myYearDays1";
import myYearDays2 from "../htmlPages/Scheduling/myYearDays/myYearDays2";

export default {
  name: "Builder",
  components: {
    Hourly1,
    Hourly2,
    monthMemories1,
    monthMemories2,
    monthIdeas1,
    monthIdeas2,
    blankMonth1,
    blankMonth2,
    myYearMonths1,
    myYearMonths2,
    myYearDays1,
    myYearDays2
  },
  data() {
    return {
      viewReview: false,
      output: [],
      generateTable: false,
      selectedCategory: 0,
      selectedSubcategory: null,
      carrouselCategories: [
        {
          id: '1',
          name: 'Cover',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COVER_BLACK.png?alt=media&token=53768c29-cce4-4428-b85c-8eb6ce650db9',
        },
        {
          id: '2',
          name: 'Coil',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/COIL.png?alt=media&token=3a8cd002-009b-46ef-8897-4820f380a5af',
        },
        {
          id: '3',
          name: 'Fill page',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/FILL%20PAGE.png?alt=media&token=44834095-fd9b-47a9-bca3-e51b103df646',
        },
        {
          id: '4',
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
        },
        {
          name: 'Review & submit',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/REVIEW%20%26%20SUBMIT.png?alt=media&token=60901b2f-c127-45b7-9190-32ba42484855',
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
          type: 'layoutOptions',
          subcategories: [
            {
              name: 'daily',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDailyOption1.png?alt=media&token=28627ec0-b7c1-4b78-8384-89ec58865a69',
              subcategoriesOptions: [
                {
                  name: 'HOURLY',
                  id: 1.1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDailyOption1.png?alt=media&token=28627ec0-b7c1-4b78-8384-89ec58865a69',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily1Big.png?alt=media&token=ba6cf9c0-6952-4128-8a89-0de1d6e9b1a6',
                },
                {
                  name: 'SECTIONAL',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily2.png?alt=media&token=88ad381a-9c3d-41c4-be09-c40474c3a141',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily2Big.png?alt=media&token=d99e7c4a-ab94-4392-b7cb-31f7d84b0208',
                },
                {
                  name: 'REFLECTION',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily3%20(1).png?alt=media&token=218a6a96-2b85-4387-adf7-564ec748d451',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fdaily%2FDaily3Big.png?alt=media&token=52697e17-9590-4ed6-810b-8b49437f67a9',
                }
              ]
            },
            {
              name: 'weekly',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2FDouble1.png?alt=media&token=60e742d2-b9ae-4fe3-9491-b263840a3962',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1.1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 1.2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
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
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FMonth%20at%20a%20Glance3.png?alt=media&token=1952a63d-abe2-46ef-ab50-050c624c17be',
              subcategoriesOptions: [
                {
                  name: 'MONTH-MEMORIES',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance1.png?alt=media&token=9b1ae680-0a62-4a24-b281-7a6a05492538',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance1Big.png?alt=media&token=71287cd5-92d6-4a39-bb3b-3ba8a3cc3373',
                },
                {
                  name: 'MONTH-IDEAS',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance2.png?alt=media&token=4b92ecb0-c9d7-4d35-af6d-58411ee96a4a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance2Big.png?alt=media&token=cf71aa96-d555-4ce4-a0a5-27cdd3e63597',
                },
                {
                  name: 'BLANK MONTH',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance3.png?alt=media&token=d2a7c500-bb55-4a7a-b6b9-2d186e26b1ed',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FMonth%20at%20a%20Glance3Big.png?alt=media&token=de9daf7d-e583-483f-9292-c3bd6713e6a0',
                },
                {
                  name: 'MY YEAR / 365',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts1.png?alt=media&token=88158025-c05c-4f08-93b7-b91a89cfbfee',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts1Big.png?alt=media&token=dc5f37c4-ef05-4d8e-b77e-4c5137c08628',
                },
                {
                  name: 'MY YEAR / 12',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts2.png?alt=media&token=e05e0d38-ee3e-49da-8729-adc2f087c37c',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fscheduling%2FYearly%20Layouts2Big.png?alt=media&token=259b0801-f795-4c26-94aa-5f2d7a155a72',
                }
              ]
            },
            {
              name: 'blank pages',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FLined%20pages1.png?alt=media&token=fa48db3a-393d-46cd-9e86-9b3a57991eeb',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 1.3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'lifestyle',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FList%20Page.png?alt=media&token=716a49e9-9cb8-4073-b5e2-18c65a8c1d29',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'finances',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FBudgeting.png?alt=media&token=d80674a4-6f51-43a3-b2b1-170ffcbb8ba1',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'at home',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FCleaning.png?alt=media&token=f7d8f61f-5a5c-4716-b5f4-d48551fb7744',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'baby',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FBaby1.png?alt=media&token=b54f9ff7-927d-4761-8d61-5a8f51affedd',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'wellness',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FWeekly%20Wellness%20Tracker.png?alt=media&token=a8f4f752-8fac-496b-b7a2-cc3170646d84',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 9,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'meet your goals',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FGoals%20Yearly.png?alt=media&token=d3ce8216-b68c-4c5c-b5e3-b9fe282eb641',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'school - work',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FSchool.png?alt=media&token=864f3f61-0132-48cd-a88f-f3e88ac35c6a',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                }
              ]
            },
            {
              name: 'productivity',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2FProject%20Template.png?alt=media&token=558e1470-7771-4fe5-9e28-056e488d3540',
              subcategoriesOptions: [
                {
                  name: 'Standar',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1.png?alt=media&token=eb97e965-708e-4d2e-b580-b64ff009d569',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble1Big.png?alt=media&token=191787e3-1d2c-477b-9af4-23aebc76f395',
                },
                {
                  name: 'hourly',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2.png?alt=media&token=f34f0813-8529-4458-b480-bd605c73b714',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble2Big.png?alt=media&token=4b446fba-4356-4343-938c-2987f44636e3'
                },
                {
                  name: 'kids - meals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3.png?alt=media&token=ff648f7f-46c1-4f8d-bd3a-a47ac44c5f61',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble3Big.png?alt=media&token=e090d046-2adf-4b28-a374-2e3542fab4b8'
                },
                {
                  name: 'projects',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4.png?alt=media&token=bd661069-e3a2-4e67-ad6a-88226c30c2c4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble4Big.png?alt=media&token=196fc8ca-10df-4e3e-b240-502083996a71'
                },
                {
                  name: 'checklist',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5.png?alt=media&token=2263bea0-5e83-4735-90b4-f8e1684736ad',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble5Big.png?alt=media&token=df546f44-9236-4107-850b-3aee67d54097'
                },
                {
                  name: 'sectional',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6.png?alt=media&token=bd48f976-b61a-46ae-a412-fbb6bb694620',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FDouble6Big.png?alt=media&token=e80821bc-bb57-4271-8c60-701e2b8288e2'
                },
                {
                  name: 'habits',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-1,50b62.appspot.com/o/layout%2Fweekly%2FSingle1.png?alt=media&token=5c277925-ade6-4b14-95e3-a0946069edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle1Big.png?alt=media&token=1b6f7ab7-b4ec-405c-8c25-ff1d47c1df32'
                },
                {
                  name: 'goals - errands',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/layout%2Fweekly%2FSingle2.png?alt=media&token=b2c05573-c0a6-47e8-8bc5-c2bcaedae6ff',
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
          }
        ],
        years: ['2022', '2023', '2024', '2025', '2026']
      },
      pagesToAdd: 0,
      arrayPagesToAdd: [[], [], [], [], [], [], [], [], [], []],
      totalMonths: [],
      weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      totalDatesArray: [{"day":"Saturday","month":"February","dayNumber":1}, {"day":"Saturday","month":"February","dayNumber":2}, {"day":"Saturday","month":"February","dayNumber":3}],
      page: 1,
      timerId: null,
      pagesBook: [],
      leftStack: [],
      rightStack: [],
      currentPage: null
    };
  },
  watch: {
    layoutOption() {
      this.calcTotalPages();
    }
  },
  methods: {
    updatePagesDepth(stack) { // first el = farthest
      for (const [i, page] of stack.entries()) {
        if (stack == this.leftStack) {
          page.style.transform = `rotateY(-180deg) translateZ(${-i}px)`;
        } else {
          page.style.transform = `rotateY(0) translateZ(${i}px)`;
        }
      }
    },
    flipSelectedPage(event){
      if (event.path[1].classList.contains("flip")) { //clicked on left stack page
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
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    },
    async print(index) {
      //const el = import('../htmlPages/dailyLayouts/hourly/Hourly.html');
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      /*      const options = {
              type: 'dataURL'
            }*/
      //console.log('html', htmlv, options);
      /*      const el = this.$refs.printMe1;
            console.log('printMe1', el);
            // add option type to get the image version
            // if not provided the promise will return
            // the canvas.
      /!*      const options = {
              type: 'dataURL'
            }
            this.output = await this.$html2canvas(el, options);*!/
            this.$html2canvas(('.printMe1').get(0)).then( function (canvas) {
              console.log(canvas);
            });*/
      this.output = []
      const node = document.getElementsByClassName("page1");
      const options = {
        type: 'dataURL'
      }
      const start = index;
      for (let i = start; i < start + 1; i++) {
        console.log('node', node[i]);
        const output = await this.$html2canvas(node[i], options);
        console.log('output', output);
        this.output.push(output);
      }
      this.flipbook.flipRight();
      //this.output = await this.$html2canvas(node[0], options);
      /*      domtoimage
                .toPng(node)
                .then(function (dataUrl) {
                  const img = new Image();
                  img.src = dataUrl;
                  console.log(img)
                  //document.body.appendChild(img);
                })
                .catch(function (error) {
                  console.error("oops, something went wrong!", error);
                });*/
    },
    calcTotalDates() {
      this.totalDatesArray = [];
      this.totalMonths.map((element) => {
              for (let y = 1; y <= element.totalDays; y++) {
                const currentDate = new Date(`${element.year}-${element.month}-${y}`);
                this.totalDatesArray.push({
                  day: this.weekday[currentDate.getDay()],
                  month: this.datesValueOptions.month[element.month-1].key,
                  dayNumber: y
                })
                console.log('currentDate', this.weekday[currentDate.getDay()], this.datesValueOptions.month[element.month-1].key, y);
              }
            })
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
      if (this.layoutOption === 'daily') this.totalPages = this.days;
      else if (this.layoutOption === 'weekly') this.totalPages = (Math.ceil(this.days / 7)) * 2;
      if (this.totalPages >= 120) this.price = ((this.totalPages - 120) * 0.1) + 65;
    },
    setDaysAndMonths() {
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
      this.layoutPreselect = null;
    },
    async selectItemAddPages(selection) {
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
      this.totalPages = this.totalPages + Number(this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]);
      this.calcTotalPages();
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: selectionArray}
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.layoutPreselect = null;
    },
    formChange(value) {
      this.$set(this.finalValue, this.selectedCategory, {id: this.selectedCategory + 1, selection: value});
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      //this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: value}
    },
    dateChange(value) {
      this.finalValue[this.selectedCategory] = {};
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.formChange(value);
      if (this.dateValue.startDate.month && this.dateValue.startDate.year && this.dateValue.endDate.month && this.dateValue.endDate.year) this.setDaysAndMonths();
    },
    setHolidays(value) {
      this.holidaysSelection = value;
      this.formChange(value);
    },
    deletePages() {
      this.totalPages = this.totalPages - this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1]
      this.arrayPagesToAdd[Number(this.selectedSubcategory)][Number(this.layoutPreselect.id) - 1] = null;
      const elementPreselect = this.layoutPreselect;
      let addSelection = this.finalValue[6].selection
      this.finalValue[6].selection = addSelection.filter((element) => element.subcategory.id !== elementPreselect.id);
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
    },
    exportPDFDemo() {
      this.print();
      //this.generateReport();
    },
    exportPDF() {
      const ordersRef = storageRef.child('orders');
      const doc = new jsPDF();

      autoTable(doc, {html: '#my-table'})
      const pdf = doc.output('blob');
      /*      const data = new FormData();
            data.append("data" , pdf);*/
      const fileName = `order${Date.now()}`;
      const spaceRef = ordersRef.child(fileName);
      spaceRef.put(pdf)
          .then(function () {
            spaceRef.getDownloadURL()
                .then(function (url) {
                  console.log('url', url);
                  const templateParams = {url}
                  send('service_w81r30t', 'template_92dxr79', templateParams)
                      .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                      }, function (error) {
                        console.log('FAILED...', error);
                      });
                });
            console.log('succesful');

          })
          .catch(() => {
          });
    },
  },
  computed: {
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
}

.page {
  position: absolute;
  width: 45%;
  height: 80%;
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
  width: 80vw;
  height: 70vw;
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
  padding: 1em;
  box-sizing: border-box;
  //box-shadow:1px 1px 1px 0 rgba(0,0,0,0.3);
}

.side1 {
  background-color: white;
  padding: 1em;
  box-sizing: border-box;
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

.image-option {
  width: 100%;
  max-width: 160px;
  height: 160px;
}

.add-container {
  width: 40%;
  margin: 0 auto;

  .add-button {
    border-radius: 25px;
    background-color: #F3D7D3;
    height: 30px
  }
}

button {
  cursor: pointer;
}

.formDates {
  max-width: 600px;
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
  position: absolute;
  bottom: 170px;
  right: 20px;
  background-color: #FDF8F7;
  border: #E5A49A 2px solid;
  padding: 20px 40px;
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
    width: 100%;
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
      padding: 15px 15px 15px 50px;
      width: calc(100vw - 140px);
      height: 100%;
      overflow-y: auto;
      @media #{$mobile} {
        padding: 0;
      }

      &-container {
        background-color: #FCF9F7 !important;
        padding: 10px 5vw;
        min-height: 400px;
        width: 100%;

        .columns {
          width: 100%;
          margin-top: 20px;
          @media #{$mobile} {
            margin-top: 10px;
          }
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
            right: 10px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>