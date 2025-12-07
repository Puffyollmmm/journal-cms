<script setup>
// import Sidebar from '@/components/Sidebar.vue';
import PageSideLayout from '@/components/PageSideLayout.vue';
import GalleryImage from '@/components/GalleryImage.vue';

import Gallery1 from '@/assets/Gallery/1.png'
import Gallery2 from '@/assets/Gallery/2.png'
import Gallery3 from '@/assets/Gallery/3.png'
import Gallery4 from '@/assets/Gallery/4.png'
import Gallery5 from '@/assets/Gallery/5.png'
import Gallery6 from '@/assets/Gallery/6.png'
import Gallery7 from '@/assets/Gallery/7.png'
import Gallery8 from '@/assets/Gallery/8.png'
import Gallery9 from '@/assets/Gallery/9.png'
import Gallery10 from '@/assets/Gallery/10.png'
import Gallery11 from '@/assets/Gallery/11.png'
import Gallery12 from '@/assets/Gallery/12.png'
import Gallery13 from '@/assets/Gallery/13.png'
import Gallery14 from '@/assets/Gallery/14.png'
import Gallery15 from '@/assets/Gallery/15.png'
import Gallery16 from '@/assets/Gallery/16.png'
import Gallery17 from '@/assets/Gallery/17.png'
import Gallery18 from '@/assets/Gallery/18.png'
import Gallery19 from '@/assets/Gallery/19.png'
import Gallery20 from '@/assets/Gallery/20.png'
import Gallery21 from '@/assets/Gallery/21.png'
import Gallery22 from '@/assets/Gallery/22.png'
import Gallery23 from '@/assets/Gallery/23.png'

const GalleryList = [{
    src: Gallery1,
    title: '土耳其',
    score: 4.1,
    desc: '卡帕多奇亚的热气球上，仿佛触摸到了天空的温柔与自由。'
}, {
    src: Gallery2,
    title: '美国加州',
    score: 4.2,
    desc: '阳光、海浪与梦想，加州等你来探索。'
}, {
    src: Gallery3,
    title: '巴西里约热内卢',
    score: 4.7,
    desc: '激情桑巴与山海奇观，里约点燃你的灵魂。'
}, {
    src: Gallery4,
    title: '英国伦敦',
    score: 4.2,
    desc: '穿越古典与现代，伦敦的故事每一刻都在上演。'
}, {
    src: Gallery5,
    title: '中国海南',
    score: 4.5,
    desc: '自由自在自贸港，海风海韵海南岛。'
},{
    src: Gallery6,
    title: '马达加斯加',
    score: 3.7,
    desc: '探秘原始岛屿，邂逅独一无二的生灵。'
}, {
    src: Gallery7,
    title: '奥地利哈尔施塔特',
    score: 3.1,
    desc: '湖畔童话小镇，哈尔施塔特宛如仙境落人间。'
}, {
    src: Gallery8,
    title: '冰岛',
    score: 3.8,
    desc: '宇宙级的浪漫之舞，在世界尽头等你共赴梦幻之约。'
}, {
    src: Gallery9,
    title: '德国慕尼黑',
    score: 3.1,
    desc: '啤酒节的欢腾，历史与现代的巴伐利亚交响。'
}, {
    src: Gallery10,
    title: '印尼巴厘岛',
    score: 3.8,
    desc: '神灵之岛，巴厘岛用海浪、神庙与spa治愈身心。'
},{
    src: Gallery11,
    title: '意大利多洛米蒂',
    score: 3.7,
    desc: '巍峨白云岩，意大利阿尔卑斯的户外天堂。'
}, {
    src: Gallery12,
    title: '捷克布拉格',
    score: 3.1,
    desc: '漫步千塔之城，布拉格将童话照进现实。'
}, {
    src: Gallery13,
    title: '英国白崖',
    score: 3.8,
    desc: '吹着白垩纪的风，遥望对面的法国，感受时间的印记与生命的坚韧。'
}, {
    src: Gallery14,
    title: '冰岛极光',
    score: 3.1,
    desc: '冰岛极光，神秘的自然之美。'
}, {
    src: Gallery15,
    title: '西班牙马略卡岛',
    score: 3.8,
    desc: '地中海蓝与古城风情，马略卡让你沉醉不归。'
},{
    src: Gallery16,
    title: '澳大利亚澳洲',
    score: 3.8,
    desc: '邂逅梦幻粉红湖，澳大利亚赠你一场浪漫奇境。'
},{
    src: Gallery17,
    title: '瑞典',
    score: 3.8,
    desc: '简约设计与自然奇观，瑞典唤醒你的北欧之心。'
},{
    src: Gallery18,
    title: '马尔代夫',
    score: 3.8,
    desc: '踏碎珊瑚海的波光，赴一场与星辰大海的约会。'
},{
    src: Gallery19,
    title: '中国玉龙拉措',
    score: 3.8,
    desc: '雪山圣湖相映，玉龙拉措是藏于川西的秘境眼泪。'
},{
    src: Gallery20,
    title: '印尼火山',
    score: 3.8,
    desc: '穿越云海日出，Bromo 火山仿佛通往异星之境。'
},{
    src: Gallery21,
    title: '新西兰',
    score: 3.8,
    desc: '纯净中土世界，冒险与宁静在此共存。'
},{
    src: Gallery22,
    title: '瑞士卢塞恩湖',
    score: 3.8,
    desc: '湖光山色如诗，卢塞恩湖是瑞士的蓝宝石'
},{
    src: Gallery23,
    title: '瑞士瑞吉山',
    score: 3.8,
    desc: '登顶瑞吉山，俯瞰阿尔卑斯的史诗画卷。'
}]

function handleClick(item, index) {
    if (index === 0) {
    location.replace('/index')
}
}

</script>

<template>
    <page-side-layout>
        <template #background>
            <div class="Background-Main">
                <div class="Background-img" />
            </div>
        </template>

        <div class="Content pt-[158px] px-16">
            <div class="Content-first my-4">
                <div class="Content-first-title my-2">Gallery</div>
                <div class="Content-first-container">
                    <div class="Content-first-image">
                        <GalleryImage @click="handleClick(item, index)" :score="item.score" :desc="item.desc" v-for="(item, index) in GalleryList" :key="item.title" :src="item.src" :title="item.title" />
                        <!-- <img src="@/assets/Gallery/5.png" alt="">
                        <img src="@/assets/Gallery/4.png" alt="">
                        <img src="@/assets/Gallery/3.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt="">
                        <img src="@/assets/Gallery/1.png" alt="">
                        <img src="@/assets/Gallery/1.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt="">
                        <img src="@/assets/Gallery/2.png" alt=""> -->
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