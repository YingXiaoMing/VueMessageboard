<template>
    <header class="main-header">
        <a href="#" class="logo">
            <div class="logo-lg">
                <div class="header_img">
                    <img src="https://pictrue-1256199976.cos.ap-guangzhou.myqcloud.com/message.png"/>
                </div>
                <div class="header_top">
                    <b>留言板</b>
                </div>
            </div>
        </a>
    </header>
</template>
<script>
import Vue from "vue";
export default {
    
}
</script>
<style lang="less">
.main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    z-index: 999;
    background-color: #ffffff;
    .logo {
        -webkit-transition: width 0.3s ease-in-out;
        display: block;
        height: 63px;
        line-height: 63px;
        font-size: 20px;
        padding: 6px 6px;
        text-align: center;
        width: 220px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 300;
        overflow: hidden;
        text-decoration: none;
        .logo-lg {
            display:block;
            height: 51px;
            line-height: 51px;
            .header_img {
                float: left;
                width: 51px;
                height: 100%;
            }
            img {
                display: block;
                width: 51px;
                height: 51px;
            }
            b {
                text-align: center;
                line-height: 32px;
                height: 32px;
                color: #1296db;
            }
            .header_top {
                position: relative;
                float: left;
                text-align: center;
                width: 147px;
                margin-left: 10px;
                .version {
                    height: 16px;
                    line-height: 16px;
                    text-align: right;
                    font-size: 14px;
                    color: #333;
                }
            }
        }
    }
}
</style>


