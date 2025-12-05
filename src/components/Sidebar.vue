<script lang="js"></script>

<template>
  <div class="SidebarLayout w-full h-full flex flex-col py-2 px-2 gap-4">
    <div class="SidebarLayout-Title">
      <h1 class="text-center">TravelRoute</h1>
    </div>
    <div class="SidebarLayout-Content py-2 px-2 flex-1 flex flex-col gap-2">
      <div class="SidebarLayout-Item !bg-white">
        <div class="icon-wrapper">
          <img
            class="white-icon"
            src="@/assets/CarbonHome.png"
            alt="Dashboard"
          />
        </div>
        <span>Dashboard</span>
      </div>
      <div class="SidebarLayout-Item">
        <div class="icon-wrapper">
          <img src="@/assets/CarbonHome.png" alt="Routes" />
        </div>
        <span>Routes</span>
      </div>
      <div class="SidebarLayout-Item">
        <div class="icon-wrapper">
          <img src="@/assets/CarbonHome.png" alt="Plans" />
        </div>
        <span>Plans</span>
      </div>
      <div class="SidebarLayout-Item">
        <div class="icon-wrapper">
          <img src="@/assets/CarbonHome.png" alt="Settings" />
        </div>
        <span>Settings</span>
      </div>
    </div>
    <div class="SidebarLayout-Bottom bg-white rounded-full flex items-center gap-2 h-[48px] overflow-hidden">
      <img class="w-12 h-12 mt-1" src="@/assets/user.png" alt="UserAvatar" />
      <span class="flex-1 truncate op-85">门门满分</span>
      <img class="w-4 h-4 mr-4" src="@/assets/CarbonOverflowMenuVertical.png" alt="" />
    </div>
  </div>
</template>

<style>
.SidebarLayout-Item {
  &:hover {
    background: #afafaf30
  }
  padding: 0.25rem 0.25rem;

  display: flex;

  gap: 0.5rem;
  color: #000;
  cursor: pointer;
  user-select: none;
  align-items: center;
  border-radius: 16px;
}

.SidebarLayout-Item .icon-wrapper {
  display: flex;

  width: 1.5rem;
  height: 1.5rem;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: black;
}

.SidebarLayout-Title h1 {
  font-size: 32px;
  font-weight: bold;
  background-image: linear-gradient(
    90deg,
    rgba(104, 161, 222, 1) 0%,
    rgba(63, 217, 206, 0.75) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.SidebarLayout {
  background: rgba(239, 239, 239, 0.5);
  backdrop-filter: blur(18px);
}

/* 
.SidebarLayout{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    left: 0;
    top: 0;
    width: 13%;
    height: 100%;;
}

.SidebarLayout-title{
    top: 5%;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-top: 20px;
}

.SidebarLayout-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    width: 90%;
    margin-bottom: 260px;
}

.SidebarLayout-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 5px;
    border-radius: 18px;
    height: 32px;
    width: 100%;
    gap: 6px;
}

.SidebarLayout-item:hover{
    background-color: #ffffff;
}

#SidebarLayout-item{
    background-color: #ffffff;
}

.SidebarLayout-item span{
    font-size: 20px;
    padding: 0 10px;
    font-weight: medium;
    color: #000;
}

.icon-wrapper{
    background-color: rgb(0, 0, 0);
    width: 32px;
    height: 32px;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.white-icon {
    filter: brightness(0) invert(1);
    width: 18px;
    height: 18px;
}

.SidebarLayout-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 0px 2px;
    border-radius: 32px;
    height: 60px;
    width: 90%;
    margin-bottom: 20px;
    gap: 15px;
}

.SidebarLayout-bottom span{
    font-size: 16px;
    font-weight: medium;
    color: #000;
}

.user{
    width: 48px;
    height: 48px;
}

.icon{
    width: 18px;
    height: 18px;
} */
</style>
