<template>
  <div class="relative w-screen flex justify-center">
    <transition name="fade" mode="out-in" appear>
      <form
        @submit.prevent="checkFormAndSignup"
        class="px-20 py-10 w-full max-w-lg flex flex-col flex-shrink-0 justify-center items-center shadow-lg rounded-lg"
      >
        <section id="form-header">
          <h1
            class="mt-4 mb-1 text-2xl text-gray-800 tracking-wider font-bold"
          >Test Form and Validation</h1>
          <h1
            class="mb-4 text-md text-gray-600 tracking-wider font-medium"
          >Please fill in the required field</h1>
        </section>
        <section id="form-input" class="w-full">
          <div class="mt-2 w-full h-24">
            <h1 class="label">First Name</h1>
            <input class="text-input" v-model="firstname" placeholder="Johny" />
            <h6 class="err">{{err.firstname}}</h6>
          </div>
          <div class="mt-2 w-full h-24">
            <h1 class="label">Last Name</h1>
            <input class="text-input" v-model="lastname" placeholder="Walking to the bar" />
            <h6 class="err">{{err.lastname}}</h6>
          </div>
          <div class="mt-2 w-full h-24">
            <h1 class="label">E-mail</h1>
            <input type="email" class="text-input" v-model="email" placeholder="Your E-mail" />
            <h6 class="err">{{err.email}}</h6>
          </div>
          <div class="mt-2 w-full h-24">
            <h1 class="label">Password</h1>
            <input
              type="password"
              class="text-input"
              v-model="password"
              placeholder="6 Characters or Longer"
            />
            <h6 class="err">{{err.password}}</h6>
          </div>
          <div class="mt-2 w-full h-24">
            <h1 class="label">Verify Password</h1>
            <input
              type="password"
              class="text-input"
              v-model="repassword"
              placeholder="Re-Enter your password"
            />
            <h6 class="err">{{err.repassword}}</h6>
          </div>
          <div class="mt-2 w-full h-24">
            <h1 class="label">Gender</h1>
            <select class="text-input" name="gender" id="gender" v-model="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <hr class="mt-8 w-11/12 shadow-sm opacity-50" />
          <button type="submit" class="btn">Submit</button>
        </section>
        <section id="form-result">
          <div class="mt-8 py-8" v-if="showResult">
            <h3 class="font-bold">Result</h3>
            <h4>First Name : {{firstname}}</h4>
            <h4>Last Name : {{lastname}}</h4>
            <h4>Email : {{email}}</h4>
            <h4>Gender : {{gender}}</h4>
          </div>
        </section>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      repassword: null,
      gender: "male",

      showResult: false,

      err: {
        firstname: "",
        lastname: "",
        password: "",
        repassword: "",
        email: "",
      },
    };
  },
  methods: {
    checkFormAndSignup() {
      let isInvalid = false;

      this.showResult = false;

      this.err.firstname = "";
      this.err.lastname = "";
      this.err.password = "";
      this.err.repassword = "";
      this.err.email = "";

      if (
        !this.checkForm(this.email, /^[A-Za-z0-9_]+@[A-Za-z]+[.][a-zA-Z]+$/)
      ) {
        this.err.email = "Invalid Email";
        isInvalid = true;
      }
      if (!this.checkForm(this.password, /^[A-Za-z0-9]{6,20}$/)) {
        this.err.password = "Invalid Password";
        isInvalid = true;
      }
      if (!this.checkForm(this.repassword, /^[A-Za-z0-9]{6,20}$/)) {
        this.err.repassword = "Invalid Repassword";
        isInvalid = true;
      }
      if (!this.checkForm(this.firstname, /^[A-Za-z]+$/)) {
        this.err.firstname = "Invalid Firstname";
        isInvalid = true;
      }
      if (!this.checkForm(this.lastname, /^[A-Za-z]+$/)) {
        this.err.lastname = "Invalid Lastname";
        isInvalid = true;
      }

      if (isInvalid) {
        return;
      } else {
        this.showResult = true;
      }
    },
    checkForm(inputString, regexp) {
      if (inputString === "" || inputString === null) return false;

      return regexp.test(inputString) ? true : false;
    },
  },
};
</script>

<style scoped>
form {
  font-family: "Raleway";
}

.text-input {
  @apply px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-wide rounded-full border border-gray-100;
}
.text-input:focus {
  outline: none;
  @apply shadow-outline;
}
.label {
  @apply mt-5 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full;
}
.btn {
  @apply w-full h-12 mt-8 mb-8 bg-gray-800 text-gray-100 text-lg font-semibold tracking-wider rounded-full;
}
.err {
  @apply w-full mt-1 ml-4 text-left text-xs tracking-wider text-red-600 self-start;
}
.fade-enter-active,
fade-leave-active {
  transition: all 1.2s ease;
}
.fade-enter,
fade-leave-to {
  opacity: 0;
}
</style>