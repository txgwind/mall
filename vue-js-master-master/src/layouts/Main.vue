<template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/About">About</v-link>
        <v-link href="/About2">About2</v-link>
      </li>
    </ul>
    <slot></slot>
    <header class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-xs-5 header-logo">
              <br>
              <a href="index.html"><img src="../../static/img/logo.png" alt="" class="img-responsive logo"></a>
            </div>
            <div class="col-md-7">
              <nav class="navbar navbar-default">
                <div class="container-fluid nav-bar">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                      <li><a class="menu active" v-scroll-to="{ 
                          el: '#home',
                          easing: [.6, .80, .30, 1.9],
                          duration: 2000 
                      }">Home</a></li>
                      <li>
                      <a class="menu" v-scroll-to="{ 
                          el: '#about',
                          easing: [.6, .80, .30, 1.9],
                          duration: 2000 
                      }">about us</a>
                      </li>
                      <li><a class="menu" v-scroll-to="{ 
                          el: '#service',
                          easing: [.6, .80, .30, 1.9],
                          duration: 2000 
                      }">our services </a></li>
                      <li><a class="menu" v-scroll-to="{ 
                          el: '#team',
                          easing: [.6, .80, .30, 1.9],
                          duration: 2000 
                      }">our team</a></li>
                      <li><a class="menu" v-scroll-to="{ 
                          el: '#contact',
                          easing: [.6, .80, .30, 1.9],
                          duration: 2000 
                      }"> contact us</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
    </header>
  </div>
</template>
<script>
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      VLink
    }
  }
</script>

<style>
</style>
