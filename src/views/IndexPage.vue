<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="IndexPage">
        <div class="IndexPage-Background"></div>
        <div class="IndexPage-Left">
            <div class="IndexPage-Title">探索卡帕多奇亚的天空</div>
            <div class="IndexPage-Description">Where the Skies<br>Reveal an Ancient<br>Landscape</div>
            <!-- <div class="IndexPage-Book">
                <button>订阅行程</button>
            </div> -->
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
                <div class="IndexPage-one-Date">
                    <div>头像</div>
                    <div class="IndexPage-one-score">
                        <div class="IndexPage-button">
                            <img src="@/assets/CarbonStarFilled.png" alt="">
                        </div>
                        <div><span>4.7</span>/5</div>
                    </div>
                </div>
                <div class="IndexPage-one-Content">
                    谷地当第一缕晨光刺破云层，三百只色彩斑<br>
                    斓的热气球从峡谷间缓缓升起，脚下是蜂窝<br>
                    状的火山岩，被风雕刻了百万年的褶皱山峦<br>
                    ，是藏在沟壑里的千年石屋，此刻都成了上<br>
                    帝打翻的调色盘。
                </div>
                <button>查看攻略</button>
            </div>
            <div class="IndexPage-two">
                <div class="IndexPage-two-Title">
                    <div>开始规划你的旅程</div>
                    <div class="IndexPage-button"><img src="@/assets/CarbonChevronRight.png" alt=""></div>
                </div>
                <div class="IndexPage-two-Item">
                    <div class="IndexPage-two-Price">
                        <div>daily</div>
                        <div>
                            <span>$60</span>/person
                        </div>
                    </div>
                    <div class="IndexPage-two-List">
                        <ul>
                            <li>
                                Choose Adventure
                            </li>
                            <li>
                                Special food
                            </li>
                            <li>
                                Solo & Group Trips
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
    font-size: 54px;          /* 稍微小一点更高级 */
    font-weight: 620;
    color: #ffffff;
    line-height: 1.5;        /* 超重要：紧凑的行高 */
    letter-spacing: -1px;
}

.IndexPage-Book{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 22px;
    padding: 3px;
    backdrop-filter: blur(18px);
}

.IndexPage-Book button:hover {
    background-color: rgba(255, 255, 255, 0.8); /* 鼠标移入变亮 */
}

.IndexPage-Book button{
    font-size: 20px;
    font-weight: medium;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000000;
    border: none;
    border-radius: 22px;
    padding: 10px 55px 10px 55px;
    backdrop-filter: blur(18px);
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

.IndexPage-one button{
    font-size: 20px;
    font-weight: medium;
    background-color: rgba(0, 186, 171, 1);
    color: #ffffff;
    border: none;
    border-radius: 16px;
    padding: 14px 95px 14px 100px;
    margin: 8px 0px 0px 0px;
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

.IndexPage-one-Date{
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    opacity: 0.5;
    margin: 2px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.IndexPage-one-score{
    display: flex;
    justify-content: center;
    align-items: center;
}



.IndexPage-one-Content{
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
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
    font-size: 18px;
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

.IndexPage-two-List{
    font-size: 14px;

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

