<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Kashiful Haque
      </h1>
      <div class="links">
        <a
          href="https://github.com/kashifulhaque"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <a
          href="https://old.ifkash.xyz"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Old website
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/resume%2FMy%20CV%20-%20updated.pdf?alt=media&token=5047c340-8a3b-416c-bb35-6cad92257afd"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Resume
        </a>
        <a
          href="https://leetcode.com/ifkash"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          LeetCode
        </a>
        <a
          href="http://linkedin.com/in/kashifulhaque"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
