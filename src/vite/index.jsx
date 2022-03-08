/**
 * @Author: fanx
 * @Date: 2022年03月08日 10:40
 * @Description: file content
 */
import { getImgUrl } from "../util/CommonUtil";
import './index.css'

export default () => {

    return (
        <>
            <div>
                <h2>创建Vite app</h2>
                <p>使用命令： yarn: yarn create @vitejs/app npm: npm init @vitejs/app 来创建vite-app</p>
                <p>配置TS: 若创建项目时没有选中react-ts，则需要手动初始化ts,使用命令：npx tsc --init</p>
                <p>然后配置tsconfig.json</p>
                <a href="https://juejin.cn/post/7059236538923614216" target="_blank">其他配置：https://juejin.cn/post/7059236538923614216</a>
                <h3>关于引入图片的处理</h3>
                <p>方式一：利用import.meta.url实现：</p>
                <img src={getImgUrl('test.png')} alt="."/>
                <p>方式二： 在css中引入</p>
                <div className="bg"/>
            </div>
        </>
    )
}
