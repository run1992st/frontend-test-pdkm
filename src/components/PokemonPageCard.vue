<template>
  <div class="relative lg:px-2 lg:py-4 xl:px-4 xl:py-8 w-1/6">
    <div class="w-full h-full">
      <div class="flex flex-col items-center justify-center" v-if="imageSrc && name">
        <div class="absolute w-full flex h-48 items-end justify-center overflow-hidden">
          <!-- Sequence 1 Ball fall , Sequence 2 Ball poped -->
          <span id="drop" v-if="isBallShow">
            <PokemonPageCardPokeball v-if="!isPoped" />
            <PokemonPageCardBallpop v-if="isPoped" />
          </span>
        </div>
        <!-- Sequence 3 Pokemon Sprite enter enlarged -->
        <img
          id="scale-in"
          class="min-w-full h-16 lg:h-32 xl:h-40 w-full object-contain"
          :src="imageSrc"
        />
        <p v-show="!isBallShow"
          class="mt-2 h-4 lg:h-6 w-full text-xs lg:text-base tracking-wider font-semibold text-gray-800"
        >{{name}}</p>
      </div>

      <div v-if="!imageSrc || !name" class="relative">
        <div class="gradient h-16 lg:h-32 xl:h-40 w-full rounded-md"></div>
        <p class="gradient mt-2 h-4 lg:h-6 w-full rounded-md"></p>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonPageCardPokeball from "./PokemonPageCardPokeball";
import PokemonPageCardBallpop from "./PokemonPageCardBallpop";
export default {
  name: "PokemonPageCard",
  components: { PokemonPageCardPokeball, PokemonPageCardBallpop },
  props: {
    imageSrc: String,
    name: String,
    
  },
  data() {
    return {
      isBallShow:true,
      isPoped: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isPoped = true;
    }, 2600);
    setTimeout(() => {
      this.isBallShow=false
    }, 2800);
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #fafafa, #e4e4e4, #c7c5c5, #d6d6d6);
  opacity: 0.35;
  background-size: 200% 200%;
  animation: gradient 4s infinite;
}

#drop {
  animation-name: throw;
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-iteration-count: forwards;
}
#scale-in {
  transform: scale(0);
  animation: scale 1.4s ease forwards;
  animation-delay: 3s;
}

@keyframes gradient {
  0% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes throw {
  0% {
    transform: translateY(-200px) rotate(0deg);
  }
  33% {
    transform: translateY(-32px) rotate(0deg);
  }
  36% {
    transform: translateY(-34px) rotate(0deg);
  }
  40% {
    transform: translateY(-30px) rotate(0deg);
  }
  43% {
    transform: translateY(-35px) rotate(0deg);
  }
  46% {
    transform: translateY(-30px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(0deg);
  }
  60% {
    transform: translateY(-30px) rotate(-40deg);
  }
  66% {
    transform: translateY(-30px) rotate(40deg);
    opacity: 1;
  }
  72% {
    transform: translateY(-30px) rotate(-40deg);
    opacity: 0;
  }
  78% {
    transform: translateY(-30px) rotate(40deg);
    opacity: 1;
  }
  84% {
    transform: translateY(-30px) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateY(-30px) rotate(0deg);
    opacity: 1;
  }
}

@keyframes scale {
  from {
    transform-origin: bottom;
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 0.99;
    transform: scale(1);
  }
}
</style>