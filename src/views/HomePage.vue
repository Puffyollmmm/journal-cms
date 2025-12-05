<script setup>
import Sidebar from '@/components/Sidebar.vue';
import PageSideLayout from '@/components/PageSideLayout.vue';
</script>

<template>
    <page-side-layout>
        <template #side>
            <Sidebar />
        </template>

        <template #background>
            <div class="Background-img"></div>
        </template>

        <div class="Content flex">
            <div class="Content-search-box">
                <img class="search-icon" src="@/assets/CarbonSearch.png" alt="">
                <input type="search" placeholder="Feeling like going anywhere?">
            </div>
            <div class="Content-first">
                <div class="Content-first-title">Gallery</div>
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
            <div class="Content-second">
                <div class="Content-second-title">
                    <span>
                        Recommend
                    </span>
                    <div class="Content-second-logo">
                        Based on your location
                    </div>
                </div>
                <div class="Content-recommend-box">
                    <div class="recommend-scroll">
                        <div class="Content-recommend">
                            <img src="@/assets/Recommend/1.png" alt="">
                            <div class="Content-recommend-item">
                                <div class="Content-recommend-item-name">
                                    <span>都江堰景区</span>
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
                                    <span>青城山景区</span>
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
                                    <span>九寨沟</span>
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
                                    <span>黄龙九寨</span>
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
    </page-side-layout>
</template>


<style scoped>
.Background-img {
    position: absolute;

    inset: 0;

    background-image: url('@/assets/HomePage.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(12px);
}

.Content {
    /* position: fixed; */
    top: 0;
    left: 13%;
    width: 87%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
}

.Content-first-title {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    letter-spacing: 0px;
    line-height: 26.52px;
    padding: 0 20px;
}

.Content-first-image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;

    padding: 18px 20px 18px 20px;
    border-radius: 18px;
    border: 1px solid rgba(239, 239, 239, 1);
    gap: 5px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.25) transparent;

    background: rgba(255, 255, 255, 0.5);
}

.Content-first-image img {
    border-radius: 28px;
    border: 1px solid rgba(239, 239, 239, 1);
    opacity: 1;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
    font-size: 20px;
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
    opacity: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* width: calc(100% - 30px); */
    margin-top: 10px;
    margin-left: 20px;
    flex-wrap: nowrap;

    padding: 16px 20px;
    border-radius: 18px;
    border: 1px solid rgba(239, 239, 239, 1);
    width: 97%;
    gap: 12px;

    background: rgba(255, 255, 255, 0.5);

    overflow-x: hidden;

    scrollbar-gutter: stable both-edges;
}

.Content-recommend {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 0 10px;
    border-radius: 18px;
    background-color: #ffffff;

    margin: 0px 0px 10px 0px;
    gap: 16px;
}

.recommend-scroll {
    max-height: 260px;
    /* 你想要的可视高度 */
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
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

/* .recommend-scroll::-webkit-scrollbar {
    width: 4px;
}

.recommend-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.recommend-scroll::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.18);
    border-radius: 10px;
}

.recommend-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.30);
} */

/* ========== 全局滑动条（深色简洁风） ========== */

/* 横向/纵向通用滚动条宽度 */
.Content-first-image::-webkit-scrollbar,
.recommend-scroll::-webkit-scrollbar {
    width: 6px;
    /* 纵向 */
    height: 6px;
    /* 横向 */
}

/* 滚动条轨道背景 */
.Content-first-image::-webkit-scrollbar-track,
.recommend-scroll::-webkit-scrollbar-track {
    background: transparent;
}

/* 滚动条滑块 */
.Content-first-image::-webkit-scrollbar-thumb,
.recommend-scroll::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    /* 深色 */
    border-radius: 8px;
}

/* 滑块 hover 更深一点 */
.Content-first-image::-webkit-scrollbar-thumb:hover,
.recommend-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.55);
}
</style>