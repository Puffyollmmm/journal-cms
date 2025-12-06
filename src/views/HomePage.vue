<script setup>
// import Sidebar from '@/components/Sidebar.vue';
import PageSideLayout from '@/components/PageSideLayout.vue';
</script>

<template>
    <page-side-layout>
        <template #background>
            <div class="Background-Main">
                <div class="Background-img" />
            </div>
        </template>

        <div class="Content pt-[158px] px-4">
            <div class="Content-first my-4">
                <div class="Content-first-title my-2">Gallery</div>
                <div class="Content-first-container">
                    <div class="Content-first-image">
                        <img src="@/assets/Gallery/5.png" alt="">
                        <img src="@/assets/Gallery/4.png" alt="">
                        <img src="@/assets/Gallery/3.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt="">
                        <img src="@/assets/Gallery/1.png" alt="">
                        <img src="@/assets/Gallery/1.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="Content-second my-4">
                <div class="Content-second-title my-2">
                    <span>
                        Recommend
                    </span>
                    <div class="Content-second-logo">
                        Based on your location
                    </div>
                </div>
                <div class="Content-recommend-box">
                    <div class="Content-recommend-container">
                        <div class="recommend-scroll">
                        <div class="Content-recommend">
                            <img src="@/assets/Recommend/1.png" alt="">
                            <div class="Content-recommend-item">
                                <div class="Content-recommend-item-name">
                                    <h3>都江堰景区</h3>
                                    <span>四川成都</span>
                                </div>
                                <span class="Content-recommend-item-distance">
                                    3.5km
                                </span>
                            </div>
                        </div>
                        <div class="Content-recommend">
                            <img src="@/assets/Recommend/2.png" alt="">
                            <div class="Content-recommend-item">
                                <div class="Content-recommend-item-name">
                                    <h3>青城山景区</h3>
                                    <span>四川成都</span>
                                </div>
                                <span class="Content-recommend-item-distance">
                                    9.5km
                                </span>
                            </div>
                        </div>
                        <div class="Content-recommend">
                            <img src="@/assets/Recommend/3.png" alt="">
                            <div class="Content-recommend-item">
                                <div class="Content-recommend-item-name">
                                    <h3>九寨沟</h3>
                                    <span>四川阿坝州</span>
                                </div>
                                <span class="Content-recommend-item-distance">
                                    35km
                                </span>
                            </div>
                        </div>
                        <div class="Content-recommend">
                            <img src="@/assets/Recommend/4.png" alt="">
                            <div class="Content-recommend-item">
                                <div class="Content-recommend-item-name">
                                    <h3>黄龙九寨</h3>
                                    <span>四川阿坝州</span>
                                </div>
                                <span class="Content-recommend-item-distance">
                                    55km
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </page-side-layout>
</template>

<style scoped>
.Background-Main {
    position: absolute;

    inset: 0;

    background-color: #efefef;
}

.Background-img {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 50%;

    background-image: url('@/assets/background/holder.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, #00000000 100%);
}

.Content {
    position: relative;

    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;

    gap: 1rem;

    /* overflow-y: auto; */
}

.Content-search-box {
    margin-top: 20px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Content-search-box input {
    width: 95%;
    margin: 0px 5px;
    height: 36px;
    padding-left: 40px;
    border: 1.8px solid #8d8d8d;
    border-radius: 18px;
    background-color: transparent;
    font-size: 16px;
    font-weight: medium;
    color: #000;
    background-color: #ffffff;
}

.search-icon {
    position: absolute;
    left: calc(50% - 47.5% + 18px);
    transform: translateY(-50%);
    pointer-events: none;
    width: 20px;
    height: 20px;
    top: 48%;
}

.Content-first {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    overflow: hidden;
}

.Content-first-title {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    letter-spacing: 0px;
    line-height: 26.52px;
    padding: 0 20px;
}

.Content-first-image {
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;

    padding: 0.5rem 0.5rem;
    border-radius: 28px;
    border: 1px solid rgba(239, 239, 239, 1);
    gap: 5px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.25) transparent;

    border-radius: 28px;
    backdrop-filter: blur(18px) saturate(180%);
}

.Content-first-container {
    position: relative;

    width: 100%;

    overflow: hidden;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.5);
}


.Content-first-container::before {
    z-index: 1;
    content: "";
    position: absolute;

    top: 0;
    right: 0;

    width: 20px;
    height: 100%;

    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.75) 20%, #00000000);
}

.Content-first-image img {
    border-radius: 28px;
    border: 1px solid rgba(239, 239, 239, 0.5);
    opacity: 1;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.125);
}

/* .Content-first-image::-webkit-scrollbar {
    height: 4px;
}

.Content-first-image::-webkit-scrollbar-track {
    background: transparent;
}

.Content-first-image::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.25);
    border-radius: 4px;
}

.Content-first-image::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.35);
} */

.Content-second {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.Content-second-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.Content-second-title span {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    padding: 0 20px;
    letter-spacing: 0px;
    line-height: 26.52px;
}

.Content-second-logo {
    height: 20px;
    font-size: 10px;
    font-weight: medium;
    color: #000;
    padding: 3px 6px;
    letter-spacing: 0px;
    line-height: 13.26px;
    background-color: rgba(63, 217, 206, 0.75);
    border-radius: 8px;
}

.Content-recommend-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    border-radius: 28px;
    width: 100%;

    background: rgba(255, 255, 255, 0.5);

    overflow: hidden;

    border-radius: 28px;
    backdrop-filter: blur(18px) saturate(180%);
}

.Content-recommend-container {
    position: relative;
    display: flex;

    width: 100%;

    flex-direction: column;
}

.Content-recommend-container::before {
    z-index: 1;
    content: "";
    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 20px;

    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75) 20%, #00000000);
}


.Content-recommend {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90px;
    color: #000;
    padding: 0 10px;
    border-radius: 28px;
    background-color: #ffffffA0;

    margin: 0px 0px 10px 0px;
    gap: 16px;
}

.recommend-scroll {
    max-height: 340px;
    overflow-y: auto;
    width: 100%;

    padding: 1rem 0.5rem;
}

.Content-recommend-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.Content-recommend-item-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}

.Content-recommend-item-distance {
    font-size: 16px;
    font-weight: medium;
    color: #000;
    padding: 0 25px;
}
</style>