<template>
  <div class="relative">
    <section id="form-container">
      <transition name="fade" mode="out-in" appear>
        <section  key="signup" id="signup" class="flex justify-center w-full">
          <form @submit.prevent="checkFormAndSignup" class="flex justify-center w-full px-2 py-2">
            <div
              id="form-container"
              class="px-20 py-10 w-full max-w-lg flex flex-col flex-shrink-0 justify-center items-center shadow-lg rounded-lg"
            >
              <h1
                class="mt-4 mb-1 text-2xl text-gray-800 tracking-wider font-bold"
              >Welcome New Member</h1>
              <h1
                class="mb-4 text-md text-gray-600 tracking-wider font-medium"
              >Please fill in the required field</h1>
              <h1
                class="mt-6 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full"
              >Username</h1>
              <input
                class="px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-widest rounded-full shadow-tinted border border-gray-100 focus:shadow-outline"
                v-model="username"
                placeholder="Your Username"
              />
              <h1
                class="mt-5 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full"
              >Password</h1>
              <input
                type="password"
                class="px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-widest rounded-full shadow-tinted border border-gray-100 focus:shadow-outline"
                v-model="password"
                placeholder="6 Characters or Longer"
              />

              <h1
                class="mt-5 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full"
              >Re-Password</h1>
              <input
                type="password"
                class="px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-widest rounded-full shadow-tinted border border-gray-100 focus:shadow-outline"
                v-model="repassword"
                placeholder="Re-Enter your password"
              />

              <h1
                class="mt-8 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full"
              >First Name</h1>
              <input
                class="px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-wide rounded-full shadow-tinted border border-gray-100 focus:shadow-outline"
                v-model="firstname"
                placeholder="Johny"
              />

              <h1
                class="mt-5 ml-3 font-semibold tracking-wider text-gray-700 text-left w-full"
              >Last Name</h1>
              <input
                class="px-6 h-10 mt-1 w-full bg-gray-100 font-semibold text-gray-700 text-lg tracking-widest rounded-full shadow-tinted border border-gray-100 focus:shadow-outline"
                v-model="lastname"
                placeholder="Walking to the bar"
              />
              <hr class="mt-8 w-11/12 shadow-sm opacity-50" />
              <button
                type="submit"
                class="w-full h-12 mt-8 mb-8 bg-gray-800 text-gray-100 text-lg font-semibold tracking-wider rounded-full"
              >Sign Up</button>
              <button class="mb-8 mt-4" @click.prevent="form='signin'">
                <span class="tracking-wide">
                  Already have an account?
                  <span
                    class="font-extrabold tracking-wide underline"
                  >Click here.</span>
                </span>
              </button>
            </div>
          </form>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      repassword: null,
      firstname: null,
      lastname: null,
      form: "signin",
      validity: null,
      err: null,
    };
  },
  methods: {
    checkForm(inputString, regexp) {
      console.log(
        "checkForm->",
        inputString,
        "   result : ",
        regexp.test(inputString)
      );
      return regexp.test(inputString) ? true : false;
    },
  },
};
</script>

<style>
form {
  font-family: "Raleway";
}
.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.6s ease;
}
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0.82, 0.165, 1),
    opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(-50%);
}
</style>