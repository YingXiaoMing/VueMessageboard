<template>
    <div class="wrapper fixed">
        <navbar></navbar>
        <sidebar></sidebar>
        <div class="content-wrapper">
            <section class="content">
                <keep-alive>
                    <router-view :key="key"></router-view>
                </keep-alive>
            </section>
        </div>
    </div>
</template>
<script>
import { Navbar,Sidebar } from "./component";
export default {
    name: 'home',
    components: {
        Navbar,
        Sidebar
    },
    computed: {
        key() {
            return this.$route.fullPath
        }
    }

}
</script>
<style lang="less">
html {
    background-color: #F5F5F5;
    font-size: 14px;
    min-width: 300px;
    width: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
}
body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
}
.content-wrapper {
    margin-left: 220px;
    padding-top: 63px;
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    .content {
        padding: 10px 10px;
    }
}
</style>


