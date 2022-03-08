import { defineConfig } from 'vite'
import react            from '@vitejs/plugin-react'
import * as path        from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 配置需要使用的插件列表
  plugins: [react()],
  // 在生产中服务时的基本公共路径
  base: './',
  // 静态资源服务的文件夹,与assetsDir的区别就是，public下的文件资源不会被打包和hash
  // 而是直接复制到打包目录,public 中的资源不应该被 JavaScript 文件引用,如果有需要还是要放到assetsDir下面
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'), // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
    }
  },
  // 引入第三方的配置,强制预构建插件包
  // optimizeDeps: {
  //   include: ['axios'],
  // },
  // 打包配置
  build: {
    target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    sourcemap: false, // 构建后是否生成 source map 文件
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions: {
      //去除 console debugger
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // 本地运行配置，及反向代理配置
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 3000, // 指定服务器端口
    open: false, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: { // 为开发服务器配置自定义代理规则
      // 选项写法
      '/api': {
        target: 'http://192.168.xxx.xxx:xxxx', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
