<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="IndexPage">
        <div class="IndexPage-Background"></div>
        <div class="IndexPage-Left">
            <div class="IndexPage-Title">探索卡帕多奇亚的天空</div>
            <div class="IndexPage-Description">Refine Your <br>Hot Air Balloon <br> Journey</div>
            <div class="IndexPage-Search">
                <div>了解更多...</div>
                <button>搜索</button>
            </div>
            <div class="IndexPage-Image">
                <div class="IndexPage-Image-Item">
                    <img src="@/assets/1.png" alt="">
                    <img src="@/assets/2.png" alt="">
                    <img src="@/assets/3.png" alt="">
                    <img src="@/assets/4.png" alt="">
                </div>
                <div class="IndexPage-button">
                    <img src="@/assets/CarbonChevronRight.png" alt="">
                </div>
            </div>
        </div>
        <div class="IndexPage-Right">
            <div class="IndexPage-one">
                <div class="IndexPage-one-Title">卡帕多奇亚</div>
                <div class="IndexPage-one-Country">土耳其</div>
                <div class="IndexPage-one-Content">
                    凌晨四点的卡帕多奇亚还浸在墨色里，谷<br>
                    地里的风却已悄悄苏醒。当第一缕晨光刺<br>
                    破云层，三百只色彩斑斓的热气球从峡谷<br>
                    间缓缓升起，你会发现自己正悬浮在另一<br>
                    个星球--脚下是蜂窝状的火山岩，是被风<br>
                    雕刻了百万年的褶皱山峦，是藏在沟壑里<br>
                    的千年石屋，此刻都成了上帝打翻的调色<br>
                    盘。不必追赶时间，因为你正站在时间之<br>
                    上。热气球乘着气流平稳滑翔，晨光把云<br>
                    层染成金红，又透过气囊在舱内投下流动<br>
                    的光斑。当同行的热气球从身边缓缓飘过<br>
                    ，陌生旅人挥手的瞬间，语言成了最多余<br>
                    的东西。你伸手触碰稀薄的空气，仿佛能<br>
                    摸到棉花糖般的云絮，而远处的雪山在阳<br>
                    光下闪着银光，默默见证这场天空的盛<br>
                    宴。等到热气球缓缓降落在旷野，迎接你<br>
                    的是冰镇的香槟和带着泥土气息的掌声。<br>
                    飞行员会笑着为你挂上“空中勇士”的勋<br>
                    章，而地面上，被朝阳照亮的峡谷正升腾<br>
                    起袅袅炊烟。这不是一次简单的飞行，而<br>
                    是一场与天地的对话--在卡帕多奇亚的天<br>
                    空，你会明白，有些风景，注定要站在云<br>
                    端才能看见。
                    </div>
            </div>
            <div class="IndexPage-two">
                <div class="IndexPage-two-Title">
                    <div>订阅</div>
                    <div class="IndexPage-button"><img src="@/assets/CarbonChevronRight.png" alt=""></div>
                </div>
                <div class="IndexPage-two-Item">
                    <div class="IndexPage-two-Price">
                        <div>daily</div>
                        <div>
                            <span>$90</span>/person
                        </div>
                    </div>
                    <div class="IndexPage-two-List">
                        <ul>
                            <li>
                                22 events
                            </li>
                            <li>
                                Special food
                            </li>
                            <li>
                                Tracking videos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.IndexPage{
    width: 100%;
    height: 100vh;
}
.IndexPage-Background{
    z-index: -1;
    position: absolute;

    top: 0;
    left: 50%;

    width: 100%;
    height: 100%;

    transform: translateX(-50%);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('@/assets/OverviewPage.png');
    }

.IndexPage-Left{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    top: 15%;
    left: 5%;
    width: 27%;
}

.IndexPage-Title{
    font-size: 36px;
    font-weight: medium;
    color: #ffffff;
}

.IndexPage-Description{
    font-size: 58px;
    font-weight: 620;
    color: #ffffff;
    line-height: 1.5;
    letter-spacing: -1px;
}

.IndexPage-Search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4px 4px 4px 12px;
    border-radius: 22px;
    margin: 10px 0px;
    width: 100%;
    backdrop-filter: blur(18px);
}

.IndexPage-Search div{
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
}

.IndexPage-Search button{
    font-size: 20px;
    font-weight: medium;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 22px;
    padding: 13px 50px;
    border: none;
}

.IndexPage-Image{
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 22px;
    padding:4px;
    width: 100%;
    gap: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    backdrop-filter: blur(18px);
}

.IndexPage-Image-Item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* gap: 2px; */
}

.IndexPage-Image img{
    justify-content: flex-start;
    padding: 3px;
}

.IndexPage-Right{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 10%;
    right: 5%;
}

.IndexPage-one{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 22px;
    padding: 15px;
    backdrop-filter: blur(18px);
    margin-bottom: 60px;
}

.IndexPage-one-Title{
    font-size: 28px;
    font-weight: medium;
    color: #212121;
    opacity: 0.9;
    align-items: flex-start;
}

.IndexPage-one-Country{
    font-size: 18px;
    font-weight: 400;
    color:rgba(0, 186, 171, 1);
    margin: 2px 0px;
}

.IndexPage-one-Content{
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    opacity: 0.5;
    align-items: center;
    justify-content: center;

    max-height: 200px;
    overflow-y: auto;
    padding-right: 6px;
}

.IndexPage-one-Content::-webkit-scrollbar {
    width: 4px;
}

.IndexPage-one-Content::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.IndexPage-one-Content::-webkit-scrollbar-track {
    background: transparent;
}


.IndexPage-two{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 22px;
    backdrop-filter: blur(18px);
}

.IndexPage-two-Title{
    background-color: #ffffff;
    padding: 2px 16px;
    font-size: 20px;
    font-weight: 500;
    font-family: '微软雅黑';
    color:rgba(56, 56, 56, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.IndexPage-two-Price{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.IndexPage-two-Price span{
    font-size: 28px;
    font-weight: medium;
    color: rgba(0, 186, 171, 1);
}

.IndexPage-two-Item{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 15px 18px;
}

.IndexPage-button{
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.IndexPage-button img{
    width: 24px;
    height: 24px;
}
</style>

