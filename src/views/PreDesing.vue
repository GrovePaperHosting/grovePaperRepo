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
        imagesSrc: ['https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby3.png?alt=media&token=dcdca4f6-f0a3-4b41-9b90-91f7a9dcfa7b','https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fbaby%2FBaby1.png?alt=media&token=375d93af-e9c7-41f3-9a38-45b32e12bf5d', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20Days.png?alt=media&token=652f2362-75f9-4bf7-acea-f006a3f70165','https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20paper.png?alt=media&token=deccd829-53fa-4061-8c4b-d64581102843'],
        description: "Keep track of all of your little ones’ milestones with this pre-designed planner thought out just for you! Select a cover and coil and enjoy all of your baby’s most important info in one place."
      },
      goalsBookInfo:{
        name: 'GOALS BOOK',
        price: '$77',
        imagesSrc: ['https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals%20Yearly.png?alt=media&token=21c3cbda-575c-4d52-8899-7b02e15a679e', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fmeet-your-goals%2FGoals.png?alt=media&token=f7e17d84-e021-4495-947d-9fe8b9031cdf', 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fblank-pages%2FBlank%20Days.png?alt=media&token=652f2362-75f9-4bf7-acea-f006a3f70165','https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/add-pages%2Fwellness%2FReflection.png?alt=media&token=ff2bfb1a-84db-4002-9b60-4fd1875e015f'],
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