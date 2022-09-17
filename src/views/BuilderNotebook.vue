<template>
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <h1 class="build-container__title has-text-primary frunchySerif-font">NOTEBOOK</h1>
      <div class="build-container__subtitle">
        <h4 class="has-text-text is-size-4 lamango-font">Let's make a beautiful notebook! Scroll down and select through
          each of the options to create the best match for your needs. To learn how to build your own notebook, visit our
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
              <progress class="progress" :value="pdfProgress" max="100">{{ pdfProgress }}%</progress>
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
              :disabled="(category.key === 'review' && (typeof (finalValue[0]) !== 'object' && typeof (finalValue[1]) !== 'object' || typeof (finalValue[2]) !== 'object' || typeof (finalValue[3]) !== 'object')) ">
            <img v-show="selectedCategory === index" :src="category.urlImgBlack" :class="category.key">
            <img v-show="selectedCategory !== index" :src="category.urlImg" :class="category.key">
            <h1 class="is-uppercase is-size-6 kontuor-font has-text-weight-light">{{ category.name }}</h1>
          </button>
        </div>
        <div class="build-container-carrousel-options">
          <div v-show="selectedCategory === 4">
            <div class="w100 is-flex">
              <div class="add-container" style="width: 30% ">
                <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100"
                        @click="exportPDFDemo">
                  ADD TO CART
                </button>
              </div>
              <div v-if="pagesBookStructure.length>0" class="book mx-3">
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
                    <h1 class="is-uppercase is-size-1 is-size-3-touch lamango-font lamango-font__spacing3 has-text-weight-light">
                      {{ layoutPreselect.name }}</h1>
                    <div class="add-container">
                      <input type="number" class="input"
                             v-model.number="arrayPagesToAdd[Number(selectedSubcategory)][Number(layoutPreselect.id)-1]">
                      <!--                      <input  type="number" class="input" v-model.number="pagesToAdd">-->
                      <button class="button button__transparent add-button frunchySerif-font is-size-4 mt-3 w100"
                              @click="selectItemAddPages({category: options[selectedCategory].subcategories[selectedSubcategory].key, subcategory: layoutPreselect})">
                        ADD
                      </button>
                      <a class=" has-text-grey is-size-4 is-underlined" @click="deletePages">Remove</a>
                    </div>
                  </div>
                </div>
                <div class="column is-8 p-0 m-0">
                  <img style="max-height: 650px; height: 100%" :src="layoutPreselect.urlImgFull">
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="selectedCategory !== 8" class="card is-flex build-container-carrousel-options-container">
            <div class="w100" v-if="options[selectedCategory].type === 'layoutOptions'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6" style="height: 100%">
                <div class="column is-one-fifth p-0" v-for="(option, index) in options[selectedCategory].subcategories"
                     :key="index">
                  <button class="build-container-carrousel-options-container-card button__transparent"
                          @click="selectedSubcategory = index; layoutOption = options[selectedCategory].subcategories[index].name; layoutPreselect = null; pagesBookStructure = []">
                    <div>
                      <img class="image-option" width="w100" :src="option.urlImg">
                    </div>
                    <h1 class="is-uppercase is-size-5 champagne-limousines-font mt-2">
                      {{ option.name }}</h1>
                  </button>
                </div>
              </div>
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100" style="height: 100%">
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
                      <h1 class="is-uppercase is-size-6 champagne-limousines-font mt-2">
                        {{ option.name }}</h1>
                      <img v-if="selectedItem === index"
                           class="build-container-carrousel-options-container-card__selected"
                           src="../assets/images/SELECTION.png">
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                <div class="is-flex">
                  <button @click="selectedSubcategory = null" class="button__transparent mt-2 mr-3 p-2">
                    <img style="width: 40px; height: 30px"
                         src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                  </button>
                  <h2 class="is-size-4 is-size-5-touch kontuor-font has-text-weight-light is-uppercase mt-4">
                    {{ options[selectedCategory].subcategories[selectedSubcategory].name }}</h2></div>
                <div class="columns is-multiline is-vcentered mt-6">
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
              <div class="columns is-multiline is-vcentered w100 is-gapless mt-6">
                <div class="column is-one-fifth mt-6"
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
            <div class="w100 my-6" v-else-if="options[selectedCategory].type === 'formFillPage'">
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
                    <textarea class="textarea" maxlength="152" type="textarea" row="3" v-model="formValue['Message']"
                              @keyup="formChange(formValue)"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="w100" v-if="options[selectedCategory].type === 'addOptions'">
              <div v-if="selectedSubcategory === null" class="columns is-multiline is-vcentered py-6">
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
              <div v-else-if="selectedSubcategory !== null && layoutPreselect === null" class="has-text-left w100">
                <button @click="selectedSubcategory = null" class="button__transparent mt-2 mr-3 p-2">
                  <img style="width: 40px; height: 30px"
                       src="https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/back-arrow.svg?alt=media&token=618e7c36-7a15-4f2f-b088-36d8323a72e7">
                </button>
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
          </div>
        </div>
      </div>
    </div>
    <template>
    </template>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import storageRef from "../firebase";
import {init} from 'emailjs-com';
import html2pdf from 'html2pdf.js';

init("user_rVFW3uNdwPo3aLyWfIMyo");

import fillpage from "../htmlPages/fillPage/fillPage";
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
import endPage from "../htmlPages/endPage/endPage";

export default {
  name: "Builder",
  components: {
    Hourly1,
    FillPage,
    fillpage,
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
    endPage,

  },
  data() {
    return {
      loadingPDF: false,
      output: [],
      selectedCategory: 0,
      selectedSubcategory: null,
      extrasSelection: '',
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
          name: 'Add on pages',
          key: 'addOnPages',
          urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADD%20ON%20PAGES.png?alt=media&token=1d67083e-a111-4da5-bca1-3db1363f59e6',
          urlImgBlack: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/ADD%20ON%20PAGES_BLACK.png?alt=media&token=190bab72-fd27-44f1-aa76-5fe8efaa3ddb'
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
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Mabz-9.png?alt=media&token=df46b3d3-a497-4654-8549-16ff2546bbd4',
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
          name: 'Add on pages',
          id: 7,
          type: 'addOptions',
          subcategories: [
            {
              name: 'scheduling',
              key: 'scheduling',
              id: 1.1,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-32.png?alt=media&token=09b9f4cf-c706-4251-99a6-d005209c32a8',
              subcategoriesOptions: [
                {
                  name: 'MONTH-MEMORIES',
                  key: 'MonthMemories',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-32.png?alt=media&token=09b9f4cf-c706-4251-99a6-d005209c32a8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-32.png?alt=media&token=09b9f4cf-c706-4251-99a6-d005209c32a8',
                },
                {
                  name: 'MONTH-IDEAS',
                  key: 'MonthIdeas',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FmonthIdeas%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-31.png?alt=media&token=54b90ac8-b716-4c43-9d05-96f38a97eef4',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FmonthIdeas%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-31.png?alt=media&token=54b90ac8-b716-4c43-9d05-96f38a97eef4',
                },
                {
                  name: 'BLANK MONTH',
                  key: 'BlankMonth',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FblankMonth%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-30.png?alt=media&token=9ae66aab-dd8e-4bb4-af4f-0fcd1dd6de53',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2FblankMonth%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-30.png?alt=media&token=9ae66aab-dd8e-4bb4-af4f-0fcd1dd6de53',
                },
                {
                  name: 'MY YEAR / 365',
                  key: 'MyYearDays',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2Fyear365%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-33.png?alt=media&token=2bfa3179-79cc-4eb4-af9d-549509735257',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2Fyear365%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-33.png?alt=media&token=2bfa3179-79cc-4eb4-af9d-549509735257',
                },
                {
                  name: 'MY YEAR / 12',
                  key: 'MyYearMonths',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2Fyear12%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-34.png?alt=media&token=cc690dc7-029d-4765-90cc-3cf24e8ac6c9',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fscheduling%2Fyear12%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-34.png?alt=media&token=cc690dc7-029d-4765-90cc-3cf24e8ac6c9',
                }
              ]
            },
            {
              name: 'blank pages',
              key: 'blankPages',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Flined%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-10.png?alt=media&token=e31539f9-907b-47ad-8904-97ae35d3840f',
              subcategoriesOptions: [
                {
                  name: 'Lined',
                  key: 'Lined',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Flined%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-10.png?alt=media&token=e31539f9-907b-47ad-8904-97ae35d3840f',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Flined%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-10.png?alt=media&token=e31539f9-907b-47ad-8904-97ae35d3840f',
                },
                {
                  name: 'Two Columns',
                  key: 'TwoColumns',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2FtwoColumns%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-11.png?alt=media&token=1519a77f-c274-4715-a263-692b5490edc5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2FtwoColumns%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-11.png?alt=media&token=1519a77f-c274-4715-a263-692b5490edc5'
                },
                {
                  name: 'Dotted',
                  key: 'Dotted',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fdotted%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-08.png?alt=media&token=5c074e62-a225-40b5-a6e1-8713e6db7af6',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fdotted%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-08.png?alt=media&token=5c074e62-a225-40b5-a6e1-8713e6db7af6'
                },
                {
                  name: 'Grid',
                  key: 'Grid',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fgrid%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-09.png?alt=media&token=2d3f1d57-a1e8-4ddb-a396-4cbc8a9e68d2',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fgrid%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-09.png?alt=media&token=2d3f1d57-a1e8-4ddb-a396-4cbc8a9e68d2'
                },
                {
                  name: 'Blank',
                  key: 'Blank',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fblank%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-06.png?alt=media&token=c916ee0e-16a1-48a5-836c-b796e9182e89',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2Fblank%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-06.png?alt=media&token=c916ee0e-16a1-48a5-836c-b796e9182e89'
                },
                {
                  name: 'Blank Days',
                  key: 'BlankDays',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2FblankDays%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-07.png?alt=media&token=6e1e33b0-3262-4ae1-b19e-9b0fbe0cff74',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fblank%2FblankDays%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-07.png?alt=media&token=6e1e33b0-3262-4ae1-b19e-9b0fbe0cff74'
                }
              ]
            },
            {
              name: 'lifestyle',
              key: 'lifestyle',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Fbucket%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-15.png?alt=media&token=76cf21f7-1a92-4ff9-901e-1196299000b0',
              subcategoriesOptions: [
                {
                  name: 'Bucket List',
                  key: 'BucketList',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Fbucket%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-15.png?alt=media&token=76cf21f7-1a92-4ff9-901e-1196299000b0',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Fbucket%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-15.png?alt=media&token=76cf21f7-1a92-4ff9-901e-1196299000b0',
                },
                {
                  name: 'Reading',
                  key: 'Reading',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Freading%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-19.png?alt=media&token=8df54291-b1b6-43e5-a8d5-495e90b197d6',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Freading%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-19.png?alt=media&token=8df54291-b1b6-43e5-a8d5-495e90b197d6'
                },
                {
                  name: 'Ideas',
                  key: 'Ideas',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Fideas%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-16.png?alt=media&token=b822e595-1875-4758-b091-da73a38ed394',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2Fideas%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-16.png?alt=media&token=b822e595-1875-4758-b091-da73a38ed394'
                },
                {
                  name: 'My Lists',
                  key: 'MyLists',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FmyList%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-17.png?alt=media&token=40110620-a297-4961-8f15-cc193de87876',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FmyList%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-17.png?alt=media&token=40110620-a297-4961-8f15-cc193de87876'
                },
                {
                  name: 'Password Tracker',
                  key: 'PasswordTacker',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FpasswordTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-18.png?alt=media&token=9246f904-3ee3-4554-a0cb-9986ecab0a26',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FpasswordTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-18.png?alt=media&token=9246f904-3ee3-4554-a0cb-9986ecab0a26'
                },
                {
                  name: 'Social Media Tracking',
                  key: 'SocialMediaTracking',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FsocialMediaTracking%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-20.png?alt=media&token=cc9805d0-2fb3-4941-9647-526d0971cf40',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FsocialMediaTracking%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-20.png?alt=media&token=cc9805d0-2fb3-4941-9647-526d0971cf40'
                },
                {
                  name: 'Social Media Planning',
                  key: 'SocialMediaPlanning',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FsocialMediaPlanning%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-21.png?alt=media&token=8d8d9a4f-68ed-472f-9ac2-2af6ebee8061',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FlifeStyle%2FsocialMediaPlanning%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-21.png?alt=media&token=8d8d9a4f-68ed-472f-9ac2-2af6ebee8061'
                }
              ]
            },
            {
              name: 'finances',
              key: 'finances',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2Fbudgeting%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-12.png?alt=media&token=0e6d4f81-2576-4469-b528-79fa8ac136f3',
              subcategoriesOptions: [
                {
                  name: 'Budgeting',
                  key: 'Budgeting',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2Fbudgeting%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-12.png?alt=media&token=0e6d4f81-2576-4469-b528-79fa8ac136f3',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2Fbudgeting%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-12.png?alt=media&token=0e6d4f81-2576-4469-b528-79fa8ac136f3',
                },
                {
                  name: 'Expense Tracker',
                  key: 'ExpenseTracker',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2FexpenseTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-13.png?alt=media&token=9b823f49-068d-4048-ad48-685bb6af3fef',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2FexpenseTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-13.png?alt=media&token=9b823f49-068d-4048-ad48-685bb6af3fef'
                },
                {
                  name: 'Gifting',
                  key: 'Gifting',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2Fgifting%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-14.png?alt=media&token=3809c968-ab90-483a-92ca-717bee8cc51b',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Ffinances%2Fgifting%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-14.png?alt=media&token=3809c968-ab90-483a-92ca-717bee8cc51b'
                }

              ]
            },
            {
              name: 'at home',
              key: 'atHome',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FatHome%2Fcleaning%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-01.png?alt=media&token=a8ed89d8-3bf3-4bf2-a2ac-929c4d8ce259',
              subcategoriesOptions: [
                {
                  name: 'Cleaning',
                  key: 'Cleaning',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FatHome%2Fcleaning%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-01.png?alt=media&token=a8ed89d8-3bf3-4bf2-a2ac-929c4d8ce259',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FatHome%2Fcleaning%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-01.png?alt=media&token=a8ed89d8-3bf3-4bf2-a2ac-929c4d8ce259',
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
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-03.png?alt=media&token=246ed66f-f68e-420f-ae7f-fe3c6e8feb34',
              subcategoriesOptions: [
                {
                  name: 'Baby Tracker',
                  key: 'BabyTracker1',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-03.png?alt=media&token=246ed66f-f68e-420f-ae7f-fe3c6e8feb34',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-03.png?alt=media&token=246ed66f-f68e-420f-ae7f-fe3c6e8feb34',
                },
                {
                  name: 'Baby Tracker 2',
                  key: 'BabyTracker2',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyTracker2%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-04.png?alt=media&token=56f4a676-f52a-4e9f-85fe-86777ef13311',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyTracker2%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-04.png?alt=media&token=56f4a676-f52a-4e9f-85fe-86777ef13311'
                },
                {
                  name: 'Baby Monthly',
                  key: 'BabyMonthly',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyMonthly%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-05.png?alt=media&token=151d2d9f-e614-47b9-a488-15e7755488e7',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FbabyTrackers%2FbabyMonthly%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-05.png?alt=media&token=151d2d9f-e614-47b9-a488-15e7755488e7'
                }
              ]
            },
            {
              name: 'wellness',
              key: 'wellness',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FwellnessTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-44.png?alt=media&token=a658f0b3-6482-434f-a08c-63e10a6d2cf5',
              subcategoriesOptions: [
                {
                  name: 'Weekly Wellness',
                  key: 'WeeklyWellness',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FwellnessTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-44.png?alt=media&token=a658f0b3-6482-434f-a08c-63e10a6d2cf5',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FwellnessTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-44.png?alt=media&token=a658f0b3-6482-434f-a08c-63e10a6d2cf5',
                },
                {
                  name: 'Mood',
                  key: 'Mood',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2Fmood%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-41.png?alt=media&token=194e5b86-967a-48fd-859a-51a8d2093981',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2Fmood%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-41.png?alt=media&token=194e5b86-967a-48fd-859a-51a8d2093981'
                },
                {
                  name: 'Fitness',
                  key: 'Fitness',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2Ffitness%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-38.png?alt=media&token=d6f40c40-159a-470f-9960-24f809e484b7',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2Ffitness%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-38.png?alt=media&token=d6f40c40-159a-470f-9960-24f809e484b7'
                },
                {
                  name: 'On The Menu',
                  key: 'OnTheMenu',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FonTheMenu%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-42.png?alt=media&token=43942177-cc67-4f10-ba83-5f34c9eddfa8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FonTheMenu%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-42.png?alt=media&token=43942177-cc67-4f10-ba83-5f34c9eddfa8'
                },
                {
                  name: 'Measurements',
                  key: 'Measurements',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FweightMeasurements%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-45.png?alt=media&token=ae2735c1-8707-46dd-9dde-4d0476a56627',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FweightMeasurements%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-45.png?alt=media&token=ae2735c1-8707-46dd-9dde-4d0476a56627'
                },
                {
                  name: 'Monthly Gratitude',
                  key: 'MonthlyGratitude',
                  id: 6,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FmonthlyGratitud%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-39.png?alt=media&token=bbc7a47d-2cdf-4a83-a682-aaf485b6299c',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FmonthlyGratitud%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-39.png?alt=media&token=bbc7a47d-2cdf-4a83-a682-aaf485b6299c'
                },
                {
                  name: 'Daily Gratitude',
                  key: 'DailyGratitude',
                  id: 7,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FdailyGratitud%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-40.png?alt=media&token=125b44de-d8ee-4ee7-8e3c-f3685c7eb967',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fwellness%2FdailyGratitud%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-40.png?alt=media&token=125b44de-d8ee-4ee7-8e3c-f3685c7eb967'
                },

              ]
            },
            {
              name: 'meet your goals',
              key: 'meetYourGoals',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2F30DayChallenge%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-22.png?alt=media&token=98c4e6d6-341d-4954-883f-2831d7b11d1c',
              subcategoriesOptions: [
                {
                  name: '30 Day Challenge',
                  key: '30DayChallenge',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2F30DayChallenge%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-22.png?alt=media&token=98c4e6d6-341d-4954-883f-2831d7b11d1c',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2F30DayChallenge%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-22.png?alt=media&token=98c4e6d6-341d-4954-883f-2831d7b11d1c',
                },
                {
                  name: 'My Goals',
                  key: 'MyGoals',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMyGoals%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-23.png?alt=media&token=7fc0c8d7-7381-417b-8e4d-a9aee16fdba8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMyGoals%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-23.png?alt=media&token=7fc0c8d7-7381-417b-8e4d-a9aee16fdba8'
                },
                {
                  name: 'Monthly Goals',
                  key: 'MonthlyGoals',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMonthlyGoals%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-26.png?alt=media&token=e65340f7-96eb-4cb2-bb5a-72e95daafad7',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMonthlyGoals%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-26.png?alt=media&token=e65340f7-96eb-4cb2-bb5a-72e95daafad7'
                },
                {
                  name: 'Habit Tracker',
                  key: 'HabitTracker',
                  id: 4,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FHabitTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-26.png?alt=media&token=8b7c7c77-cc0f-47c3-adb4-7ab21951b30f',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FHabitTracker%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-26.png?alt=media&token=8b7c7c77-cc0f-47c3-adb4-7ab21951b30f'
                },
                {
                  name: 'Monthly Habits',
                  key: 'MonthlyHabits',
                  id: 5,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMonthlyHabits%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-25.png?alt=media&token=f590dc4a-4352-491e-832a-a767594d8492',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2FMonthlyHabits%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-25.png?alt=media&token=f590dc4a-4352-491e-832a-a767594d8492'
                },
                {
                  name: 'Reflection',
                  key: 'Reflection',
                  id: 8,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2Freflection%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-43.png?alt=media&token=7fd4495e-432b-4fa5-8abd-2e120ab157d9',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FmeetYourGoals%2Freflection%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-43.png?alt=media&token=7fd4495e-432b-4fa5-8abd-2e120ab157d9'
                }
              ]
            },
            {
              name: 'school - work',
              key: 'schoolWork',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FMeetingNotes%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-36.png?alt=media&token=244d83df-a090-4ada-a3bf-ddc7bd710a47',
              subcategoriesOptions: [
                {
                  name: 'Meeting Notes',
                  key: 'MeetingNotes',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FMeetingNotes%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-36.png?alt=media&token=244d83df-a090-4ada-a3bf-ddc7bd710a47',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FMeetingNotes%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-36.png?alt=media&token=244d83df-a090-4ada-a3bf-ddc7bd710a47',
                },
                {
                  name: 'Assignments',
                  key: 'Assignments',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FAssignments%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-35.png?alt=media&token=96bf2069-5782-40e2-a734-d908a33025e8',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FAssignments%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-35.png?alt=media&token=96bf2069-5782-40e2-a734-d908a33025e8'
                },
                {
                  name: 'School',
                  key: 'School',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FSchool%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-37.png?alt=media&token=7c1b0767-0f0a-4164-b68e-0feda0cde5c6',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2FschoolAndWork%2FSchool%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-37.png?alt=media&token=7c1b0767-0f0a-4164-b68e-0feda0cde5c6'
                }
              ]
            },
            {
              name: 'productivity',
              key: 'productivity',
              id: 1.2,
              urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FProjects%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-27.png?alt=media&token=ef9a3665-697c-4264-8cbf-f507258a301a',
              subcategoriesOptions: [
                {
                  name: 'Projects',
                  key: 'Projects',
                  id: 1,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FProjects%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-27.png?alt=media&token=ef9a3665-697c-4264-8cbf-f507258a301a',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FProjects%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-27.png?alt=media&token=ef9a3665-697c-4264-8cbf-f507258a301a',
                },
                {
                  name: 'Task Triage',
                  key: 'TaskTriage',
                  id: 2,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FTaskTriage%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-28.png?alt=media&token=c0784fcf-a736-4696-bed1-a9c4012dd87d',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FTaskTriage%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-28.png?alt=media&token=c0784fcf-a736-4696-bed1-a9c4012dd87d'
                },
                {
                  name: 'To Do',
                  key: 'ToDo',
                  id: 3,
                  urlImg: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FToDo%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-29.png?alt=media&token=1653fe41-1b11-43b1-9090-952839db47a0',
                  urlImgFull: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-9a219.appspot.com/o/addOns%2Fproductivity%2FToDo%2FWorking%20File%20Add%20Ons%20Previews%20Test%20Building%20Up-29.png?alt=media&token=1653fe41-1b11-43b1-9090-952839db47a0'
                }
              ]
            },
          ]
        },

        {
          name: 'review',
          id: 5,
          type: 'review',
        },
      ],
      finalValue: [],
      totalPages: 0,
      price: 65,
      layoutOption: '',
      pagesToAdd: 0,
      arrayPagesToAdd: [[], [], [], [], [], [], [], [], [], []],
      page: 1,
      pagesBook: [],
      leftStack: [],
      rightStack: [],
      currentPage: null,
      pagesBookStructure: [],
      pdfProgress: 1,
      validDate: false,
      blankDaysCounter: 0,
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
    setExtras(value) {
      this.extrasSelection = value;
      this.$store.commit('SET_EXTRA_SELECTION', value)
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
                    name: `${self.finalValue[0].selection.subcategory.name} 'NOTEBOOK'`,
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
                    self.loadingPDF = false;
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
                    self.totalPages = 0;
                    self.price = 65;
                    self.layoutOption = 'daily';
                    self.pagesToAdd = 0;
                    self.arrayPagesToAdd = [[], [], [], [], [], [], [], [], [], []];
                    self.totalMonths = [];
                    self.page = 1;
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
    updatePagesDepth(stack) { // first el = farthest
      for (const [i, page] of stack.entries()) {
        if (stack == this.leftStack) {
          page.style.transform = `rotateY(-180deg)`;
          page.style.zIndex = i;
        } else {
          page.style.zIndex = i;
          page.style.transform = `rotateY(0) translateZ(1px)`;
        }
      }
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
                  //document.body.apcategory: 'layout'pendChild(img);
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
            month: this.datesValueOptions.month[element.month - 1].key,
            dayNumber: y
          })
          //console.log('currentDate', this.weekday[currentDate.getDay()], this.datesValueOptions.month[element.month-1].key, y);
        }
      })
      //this.calcBookStructure();
      this.pagesBook = Array.from(document.querySelectorAll(".book .page"));
      this.rightStack = Array.from(this.pagesBook).reverse();
      this.updatePagesDepth(this.rightStack);
    },
    selectItem(selection, index) {
      this.selectedItem = index;
      this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection};
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.layoutPreselect = null;
    },
    calcTotalPages() {
      if (this.totalPages % 2 !== 0) this.totalPages = this.totalPages + 1;
      if (this.totalPages >= 120) this.price = ((this.totalPages - 120) * 0.1) + 65;
    },
    async selectItemAddPages(selection) {
      let selectionArray = [];
      const layoutPreselect = this.layoutPreselect;
      if (this.pagesBookStructure.length===0) this.pagesBookStructure[0] = [{type: 'fillpage', category: 'fillpage', data: this.finalValue[2].selection}];
      else this.pagesBookStructure[this.pagesBookStructure.length - 1].pop();
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
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      this.layoutPreselect = null;
    },
    formChange(value) {
      this.$set(this.finalValue, this.selectedCategory, {id: this.selectedCategory + 1, selection: value});
      this.$store.commit('SET_FINAL_VALUE', this.finalValue);
      //this.finalValue[this.selectedCategory] = {id: this.selectedCategory + 1, selection: value}
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
      this.exportHTMLToPDF();
    },
  },
  updated() {
    this.pagesBook = Array.from(document.querySelectorAll(".book .page"));
    this.rightStack = Array.from(this.pagesBook).reverse();
    this.updatePagesDepth(this.rightStack);
  },
  mounted() {
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
  background-color: #FDF8F7;
  border: #E5A49A 2px solid;
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
        background-color: #FFFFFF !important;
        padding: 10px 5vw;
        min-height: 420px;
        width: 100%;

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