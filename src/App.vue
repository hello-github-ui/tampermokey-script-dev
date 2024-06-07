<template>

    <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu :default-openeds="[]" @select="handleSelect">

                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>入门篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="万能视频倍速播放" title="万能视频倍速播放">万能视频倍速播放</el-menu-item>
                            <el-menu-item index="使用脚本向页面上添加新元素" title="使用脚本向页面上添加新元素">使用脚本向页面上添加新元素</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <Bell />
                            </el-icon>中级篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">Option 1</el-menu-item>
                            <el-menu-item index="2-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <Star />
                            </el-icon>高级篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">Option 1</el-menu-item>
                            <el-menu-item index="3-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon>
                                <Operation />
                            </el-icon>工程篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">Option 1</el-menu-item>
                            <el-menu-item index="4-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="5">
                        <template #title>
                            <el-icon>
                                <ForkSpoon />
                            </el-icon>实战篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">Option 1</el-menu-item>
                            <el-menu-item index="5-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="6">
                        <template #title>
                            <el-icon>
                                <Grid />
                            </el-icon>原理篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="6-1">Option 1</el-menu-item>
                            <el-menu-item index="6-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-sub-menu index="7">
                        <template #title>
                            <el-icon>
                                <Notification />
                            </el-icon>补充篇
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="7-1">Option 1</el-menu-item>
                            <el-menu-item index="7-2">Option 2</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>


                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-main>
                <div id="editor">
                    <article id="view-area" class="markdown-body"></article>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>




// 下面在 vue3 中使用 选项式 API 风格

export default {
    // data() 返回的属性将会成为响应式的状态
    // 并且暴露在 `this` 上
    data () {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(20).fill(item)
        }
    },

    // methods 是一些用来更改状态与触发更新的函数
    // 它们可以在模板中作为事件处理器绑定
    methods: {
        increment () {
            this.count++
        },
        /* 处理选中事件，让其在main中显示相应的文档 */
        handleSelect (key, keyPath) {
            // console.log(`key: ${key}, keyPath: ${keyPath}`);
            // console.log('请求路径:', '/文档/' + key + '.md');
            let file = "./文档/" + key + ".md";
            // console.log(`file: ${file}, type: ${typeof (file)}`)
            axios
                .get(file, {
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                        // 添加其他需要的请求头
                    },
                    withCredentials: true
                })
                .then(response => {
                    // this.markdown = response.data;
                    // console.log("已读取到数据: ", response.data);
                    // document.querySelector(".markdown").innerHTML = response.data;
                    // markdown 转 HTML方式渲染，代码参考自: https://blog.csdn.net/Dreamy_LIN/article/details/106304182
                    let md = response.data;
                    let converter = new showdown.Converter(); // 增加拓展table
                    converter.setOption("tables", true); // 启用表格选项，从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用
                    let view = converter.makeHtml(md);
                    document.getElementById("view-area").innerHTML = view;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },

    // 生命周期钩子会在组件生命周期的各个不同阶段被调用
    // 例如这个函数就会在组件挂载完成后被调用
    mounted () {
        // console.log(`The initial count is ${this.count}.`);
    },
}


</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
