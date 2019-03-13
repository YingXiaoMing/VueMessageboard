<template>
    <aside class="main-sidebar">
        <router-link :to="{name: 'add'}">新增留言</router-link>
        <router-link :to="{name: 'search'}">查询留言</router-link>
    </aside>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.main-sidebar {
    background-color: #fff;
    position: fixed;
    top: 63px;
    left: 0;
    bottom: 0;
    height: clac(100vh-20px);
    width: 220px;
    z-index: 810;
    -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    a{
        display: block;
        box-sizing: border-box;
        width: 220px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        padding: 20px 0;
        text-align: center;
        height: 60px;
        color: #333;
    }
}
</style>


