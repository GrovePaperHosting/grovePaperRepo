<template >
  <div class="has-background-secondary build-container">
    <div class="container is-flex is-flex-direction-column is-justify-content-center has-text-centered">
      <div class="build-container__options">
        <h1 class="build-container__title has-text-primary frunchySerif-font">FAQ</h1>
        <div class="is-flex is-flex-direction-column">
          <!--<div class="dropdown is-active">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>Click me</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Overview
                </a>
                <a href="#" class="dropdown-item">
                  Modifiers
                </a>
                <a href="#" class="dropdown-item">
                  Grid
                </a>
                <a href="#" class="dropdown-item">
                  Form
                </a>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>Click me</span>
                <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Overview
                </a>
                <a href="#" class="dropdown-item">
                  Modifiers
                </a>
                <a href="#" class="dropdown-item">
                  Grid
                </a>
                <a href="#" class="dropdown-item">
                  Form
                </a>
                <a href="#" class="dropdown-item">
                  Elements
                </a>
                <a href="#" class="dropdown-item">
                  Components
                </a>
                <a href="#" class="dropdown-item">
                  Layout
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  More
                </a>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span>Click me</span>
                <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Overview
                </a>
                <a href="#" class="dropdown-item">
                  Modifiers
                </a>
                <a href="#" class="dropdown-item">
                  Grid
                </a>
                <a href="#" class="dropdown-item">
                  Form
                </a>
                <a href="#" class="dropdown-item">
                  Elements
                </a>
                <a href="#" class="dropdown-item">
                  Components
                </a>
                <a href="#" class="dropdown-item">
                  Layout
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  More
                </a>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial"
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
    max-width: 1000px;
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