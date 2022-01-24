
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-select
    v-model="selectedCar"
    :items="cars"
    :rules="[v => !!v || 'Please select atleast one car.']"
    label="Select Car"
    required
    ></v-select> 
    
<!-- start date component starts -->
<v-layout>
  <v-menu
  v-model="startDate"
  :close-on-content-click="false"
  :nudge-right="40"
  transition="scale-transition"
  offset-y
  min-width="200px"
  max-width="300px"
  > 

  <template v-slot:activator="{ on }">
      <v-text-field
        label="Start Date"
        readonly
        :value="fromDateDisp"
        v-on="on"
      ></v-text-field> 
  </template> 

      <v-date-picker
        locale="en-in"
        v-model="startDateVal"
        no-title
        @input="startDate = false"
      ></v-date-picker>   
      
  </v-menu>
</v-layout>

<!-- start date component ends  -->

  <v-layout>
    <v-menu
    v-model="endDate"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="200px"
    max-width="300px"
    > 

      <template v-slot:activator="{ on }">
          
          <v-text-field
            label="End Date"
            readonly
            :value="endDateDisp"
            v-on="on"
          ></v-text-field> 

      </template>  

        <v-date-picker
          locale="en-in"
          v-model="endDateVal"
          no-title
          @input="endDate = false"
        ></v-date-picker>        

    </v-menu>  
  </v-layout>

  <v-layout>
    <v-menu
    v-model="startTime"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="200px"
    max-width="300px"
    >
      <template v-slot:activator="{ on }">
          <v-text-field
          label="Start Time"
          readonly
          :value="startTimeDisp"
          v-on="on"
          >
          </v-text-field>
      </template>
    <!-- time -->
      <v-time-picker
        ampm-in-title
        format="24hr"
        v-model="startTimeVal"
        @input="startTime = false"
      >
      </v-time-picker>
    </v-menu>
  </v-layout>


  <v-layout>
    <v-menu
    v-model="endTime"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="200px"
    max-width="300px"
    >
      <template v-slot:activator="{ on }">
          <v-text-field
          label="End Time"
          readonly
          :value="endTimeDisp"
          v-on="on"
        
          >
          </v-text-field>
      </template>
    <!-- time -->
      <v-time-picker
        ampm-in-title
        format="24hr"
        v-model="endTimeVal"
        @input="endTime = false"
      >
      </v-time-picker>
    </v-menu>
  </v-layout>























    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      @change="createJson"
      required
    ></v-checkbox> 

    {{j}}
     
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      cars: ['Innova', 'Swift Dezire'], 
      selectedCar: '', 
      date: null,
      menu: false, 
      modal: false, 
      startDateVal: null, 
      startDate: null, 
      endDateVal: null, 
      endDate: null ,
      startTime: null,
      startTimeVal: null, 
      endTime: null, 
      endTimeVal: null, 
      j:'', 
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      createJson() { 
        
        if(this.checkbox) {
        this.j = JSON.stringify({
          "car": this.selectedCar, 
          "startDate": this.startDateVal, 
          "endDate": this.endDateVal, 
          "stTime": this.startTimeVal, 
          "edTime": this.endTimeVal, 
        })
        } else {
          this.j=null
        }

        return this.j 
      }
      
    },

    computed: {
      fromDateDisp() {
        return this.startDateVal
      }, 
      endDateDisp() {
        return this.endDateVal
      }, 
      startTimeDisp() {
        return this.startTimeVal
      }, 
      endTimeDisp() {
        return this.endTimeVal
      }
    }
  }
</script>

<!--
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
--> 