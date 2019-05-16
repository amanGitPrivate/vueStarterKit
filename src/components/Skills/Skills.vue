<template>
  <div class="skills">
    {{name}}
    {{btnState ? 'Button is disabled' : 'Button is now enabled'}}
    <button v-on:click="updateName" v-bind:disabled="btnState">Change Name</button>
    <div class='skill holder' v-on:click="updateName" >
      <ul>
        <li v-for='(data, index) in skills' :key={index}>{{index}} {{data.skill}}</li>
      </ul>
      <!-- Add these 2 lines -->
      <p v-if="skills.length >= 1">You have more than 1 skill</p>
      <p v-else>You have less than or equal to 1 skill</p>

      <div v-bind:class="{ alert: !showAlert}">
        alert true me yellow
      </div>
      <div v-bind:class="cssObject" v-on:click="toggleBoldClass">
        here it is added by oject
      </div>
    </div>
    <form v-on:submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill you have.." v-model="skill">
    </form>
    {{skill}}
  </div>
</template>

<script src="./script.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./skill.css' scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
