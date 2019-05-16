export default {
    name: "Skills",
    data() {
      return {
        name: 'Coursetro',
        btnState: true,
        skills:[
          {
            'skill':'Vue dev',
          },
          {
              'skill': 'React dev'
          }
        ],
        showAlert: true,  // Add this,
        cssObject: {
          bold: false
        },
        skill:'',
      }
    },
    props: {
  
   },
   methods: {
     updateName: function() {
       this.btnState = !this.btnState;
     },
     toggleBoldClass: function () {
       this.cssObject.bold = !this.cssObject.bold
     },
     addSkill() {
       this.skills.push({
         skill: this.skill
       });
       this.skill = '';
     }
   }
  };