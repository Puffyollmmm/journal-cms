<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="IndexPage">
        <div class="IndexPage-Background"></div>
        <div class="IndexPage-Left">
            <div class="IndexPage-Left-Title">发现你的下一个港湾</div>
            <div class="IndexPage-Left-Description">Discover Your<br>Next Haven</div>
            <div class="IndexPage-Left-Content">Book incredible hotels and resorts at unbeatable prices.Your dream vacation is just a few clicks away.</div>
            <div class="IndexPage-Left-Search">
                <div>了解更多...</div>
                <button>搜索</button>
            </div>
            <div class="IndexPage-Left-Image">
                <div class="IndexPage-Left-Image-Item">
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
            <div class="IndexPage-First">
                <div class="IndexPage-First-Title">EDITION Istanbul Hotel</div>
                <div class="IndexPage-First-Hotel">
                    <span>伊斯坦布尔艾迪逊酒酒店</span>
                    <div class="IndexPage-First-Score">
                        <div class="IndexPage-button">
                            <img src="@/assets/CarbonStarFilled.png" alt="">
                        </div>
                        <span>4.7</span>/5
                    </div>
                </div>
                <div class="IndexPage-First-Image">
                    <img src="@/assets/Hotel/2.png" alt="">
                </div>
                <button>查看更多</button>
            </div>
            <div class="IndexPage-Second">
                <div class="IndexPage-Second-Title">
                    <div>订阅</div>
                    <div class="IndexPage-button"><img src="@/assets/CarbonChevronRight.png" alt=""></div>
                </div>
                <div class="IndexPage-Second-Item">
                    <div class="IndexPage-Second-Price">
                        <div>daily</div>
                        <div>
                            <span>$50</span>/room
                        </div>
                    </div>
                    <div class="IndexPage-Second-List">
                        <ul>
                            <li>
                                King bed
                            </li>
                            <li>
                                Special food
                            </li>
                            <li>
                                With balcony
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
    background-image: url('@/assets/Hotel/7.png');
    }

.IndexPage-Left{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    top: 15%;
    left: 6%;
    width: 27%;
}

.IndexPage-Left-Title{
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;
}

.IndexPage-Left-Description{
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 84.86px;

    background: linear-gradient(190deg, #ffffff, #83B9F2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    line-height: 1.5;
    letter-spacing: -1px;
    display: inline-block;
}

.IndexPage-Left-Content{
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
}

.IndexPage-Left-Search{
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

.IndexPage-Left-Search div{
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
}

.IndexPage-Left-Search button{
    font-size: 20px;
    font-weight: medium;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 22px;
    padding: 13px 50px;
    border: none;
}

.IndexPage-Left-Image{
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

.IndexPage-Left-Image-Item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* gap: 2px; */
}

.IndexPage-Left-Image img{
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

.IndexPage-First{
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

.IndexPage-First button{
    font-size: 20px;
    font-weight: medium;
    background-color: rgba(0, 186, 171, 1);
    color: #ffffff;
    border: none;
    border-radius: 16px;
    padding: 14px 112px 14px 112px;
    margin: 8px 0px 0px 0px;
}

.IndexPage-First-Title{
    font-size: 28px;
    font-weight: 500;
    color: #212121;
    opacity: 0.9;
    align-items: flex-start;
}

.IndexPage-First-Hotel{
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.IndexPage-First-Hotel > span{
    font-size: 16px;
    color: rgba(0, 186, 171, 1);
    opacity: 0.9;
    align-items: flex-start;
}

.IndexPage-First-Score{
    display: flex;
    justify-content: center;
    align-items: center;
}

.IndexPage-First-Country{
    font-size: 18px;
    font-weight: 400;
    color:rgba(0, 186, 171, 1);
    margin: 2px 0px;
}

.IndexPage-First-Date{
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

.IndexPage-First-score{
    display: flex;
    justify-content: center;
    align-items: center;
}


.IndexPage-First-Image{
    width: 300px;
    height: 160px;
    border-radius: 10px;
    padding: 0px;
    overflow: hidden;
    margin: 12px 0px;
}

.IndexPage-First-Image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.IndexPage-Second{
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

.IndexPage-Second-Title{
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

.IndexPage-Second-Price{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.IndexPage-Second-Price span{
    font-size: 28px;
    font-weight: 550;
    color: rgba(0, 186, 171, 1);
}

.IndexPage-Second-Item{
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


