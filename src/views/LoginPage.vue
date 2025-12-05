<template>
  <div class="LoginPage absolute inset-0">
    <div class="LoginPage-Background absolute inset-0 -z-1">
      <div class="LoginPage-Background-Image absolute inset-0"></div>
    </div>

    <div
      class="LoginPage-Main flex gap-8 absolute top-1/2 left-1/2"
    >
      <div class="LoginPage-MainAside flex-1">
        <div class="LoginPage-MainAside-Content" />
      </div>

      <div class="LoginPage-MainContent w-[320px] gap-8 flex py-4 flex-col items-center justify-center">
        <h1 class="LoginPage-MainContent-Title relative mb-4 text-5xl text-center text-black">Login</h1>

        <form class="LoginPage-MainContentForm flex flex-col gap-4">
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button
            type="submit"
            class="bg-blue-500 my-2 h-[44px] border-none text-white py-2 rounded-lg"
          >
            Submit
          </button>
          <p class="text-center text-black/60">Don't have an account? <a class="text-green" href="#">Register</a></p>
        </form>

        <div class="LoginPage-MainContentFooter w-full px-4 flex flex-col gap-4">
          <button class="flex items-center gap-2 w-full bg-white/50 h-[44px] justify-center rounded-lg border-none">
            <img src="https://api.iconify.design/ic:baseline-apple.svg" alt="Apple" />
            <span>Authorize through Apple</span>
          </button>
          <button class="flex items-center gap-2 w-full bg-white/50 h-[44px] justify-center rounded-lg border-none">
            <img src="https://api.iconify.design/mdi:github.svg" alt="Apple" />
            <span>Authorize through Github</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes main-enter {
  from {
    filter: blur(10px);
    transform: translate(-50%, -50%) scale(1.25);
  }

  to {
    filter: blur(0);
    transform: translate(-50%, -50%) scale(1);
  }
}

.LoginPage-MainContent-Title::before {
  z-index: -1;
  content: "";
  position: absolute;

  left: -5%;
  bottom: 4px;

  width: 110%;
  height: 8px;

  opacity: 0.75;
  border-radius: 18px;
  background-color: #17B9A6;
}

.LoginPage-MainAside-Content {
  background-image: url("./../assets/background/travel.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 100%;
}

.LoginPage-Background-Image {
  filter: blur(18px) saturate(180%);

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./../assets/background/auth.png");

  transform: scale(1.05)
}

.LoginPage-MainContentForm input {
  padding: 0.75rem 1.25rem;

  width: 280px;

  border: none;
  border-radius: 8px;

  font-size: 1rem;
}

.LoginPage-MainContentForm label {
  font-weight: 600;
  color: #000000A0;
}

.LoginPage-Background {
  background-image: linear-gradient(to bottom, #018dce 0%, #027eb400 100%);
}

.LoginPage-Main {
  padding: 1rem;

  width: 1020px;
  height: 620px;

  border-radius: 25px;
  border: 1px solid #afafaf;
  background-color: #efefef10;
  backdrop-filter: blur(18px) saturate(180%);

  filter: blur(10px);
  transform: translate(-50%, -50%) scale(1.25);
  animation: main-enter .75s cubic-bezier(0.86, 0, 0.07, 1) forwards;
}

.LoginPage-MainAside {
  padding: 1rem;

  border-radius: 22px;
  background-color: #efefef50;
}

@media screen and (min-width:1200px) {
  .LoginPage-Main {
    width: 820px;
    height: 560px;
  }

  .LoginPage-MainContent-Title {
    margin-top: 0.5rem;
    font-size: 36px;
  }
}
</style>
