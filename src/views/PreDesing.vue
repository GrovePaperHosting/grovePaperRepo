<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">PRE-DESIGNED PLANNER</h1>
        <!--<h4 class="has-text-text is-size-3 lamango-font">Choose which product you'd like to customize today.</h4>-->
        <div class="columns is-vcentered is-8 mt-6 p-3">
          <div class="column">
            <router-link :to="{ name: 'PreView', params: { preDesignInfo: goalsBookInfo }}"><img src="../../public/assets/images/goalsBook.png" alt="Notebook"></router-link>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> GOALS BOOK</h2>
          </div>
          <div class="column">
            <router-link :to="{ name: 'PreView', params: {preDesignInfo: babyBookInfo}}"><img src="../../public/assets/images/predesingPlanner.png" alt="Notebook"></router-link>
            <h2 class="is-size-4 kontuor-font has-text-weight-light"> BABY BOOK</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Build",
  data(){
    return{
      babyBookInfo:{
        name: 'BABY BOOK',
        price: '$77',
        imagesSrc: ['https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals%20Yearly.png?alt=media&token=0ec339d5-1031-4e5d-852b-21d9df2d3a8d', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals.png?alt=media&token=393d0191-defb-43c8-8f05-bb2815347221https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals.png?alt=media&token=393d0191-defb-43c8-8f05-bb2815347221', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FBlank%20Days.png?alt=media&token=58792679-a7fc-4619-b029-7dfdf3488857','https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FReflection.png?alt=media&token=34b8f624-56b4-4a94-9efd-ee159dcc07de'],
        description: "Keep track of all of your little ones’ milestones with this pre-designed planner thought out just for you! Select a cover and coil and enjoy all of your baby’s most important info in one place."
      },
      goalsBookInfo:{
        name: 'GOALS BOOK',
        price: '$77',
        imagesSrc: ['https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals%20Yearly.png?alt=media&token=0ec339d5-1031-4e5d-852b-21d9df2d3a8d', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals.png?alt=media&token=393d0191-defb-43c8-8f05-bb2815347221https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FGoals.png?alt=media&token=393d0191-defb-43c8-8f05-bb2815347221', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FBlank%20Days.png?alt=media&token=58792679-a7fc-4619-b029-7dfdf3488857','https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/preMade-Goals%2FReflection.png?alt=media&token=34b8f624-56b4-4a94-9efd-ee159dcc07de'],
        description: "Meet your goals with this beautiful pre-designed planner ready for you to use with all of our best goal-planning content. Select a cover and coil and get ready to set your action plan in motion!"
      },

    }
  }
}
</script>

<style scoped lang="scss">
.giftCard{
  min-width: 150px;
}
.columns{
  max-width: 100%;
}
.build-container{
  min-height: calc(100vh - 2.8rem);
  height: fit-content;
  background-color: #FCF9F7 !important;
  padding-bottom: 144px;
  display: flex;
  vertical-align: center;
  &__title{
    font-size: 4rem;
  }
  &__options{
    max-width: 800px;
    margin: auto;
    width: 100%;
    padding: 2%;
    .column{
      .planner {
        img {
          width: 230px;
          max-width: 100%;
          height: 180px;
        }
      }
      img{
        width: 180px;
        height: 180px;
        max-width: 100%;

      }
    }
  }
}
</style>