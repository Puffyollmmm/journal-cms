<script lang="js">

</script>

<template>
    <div class="SidebarLayout">
        <div class="SidebarLayout-title">TravelRoute</div>
        <div class="SidebarLayout-content">
            <div class="SidebarLayout-item" id="SidebarLayout-item">
                <div class="icon-wrapper">
                    <img class="white-icon" src="@/assets/CarbonHome.png" alt="">
                </div>
                <span>Dashboard</span>
            </div>
            <div class="SidebarLayout-item">
                <div class="icon-wrapper">
                    <img src="@/assets/CarbonHome.png" alt="">
                </div>
                <span>Routes</span>
            </div>
            <div class="SidebarLayout-item">
                <div class="icon-wrapper">
                    <img src="@/assets/CarbonHome.png" alt="">
                </div>
                <span>Plans</span>
            </div>
            <div class="SidebarLayout-item">
                <div class="icon-wrapper">
                    <img src="@/assets/CarbonHome.png" alt="">
                </div>
                <span>Settings</span>
            </div>
        </div>
        <div class="SidebarLayout-bottom">
            <img class="user" src="@/assets/user.png" alt="">
            <span>门门满分</span>
            <img class="icon" src="@/assets/CarbonOverflowMenuVertical.png" alt="">
        </div>
    </div>
</template>

<style>

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
}
</style>