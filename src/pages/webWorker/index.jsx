/**
 * @Author: fanx
 * @Date: 2022年05月06日 15:42
 * @Description: file content
 */

import { useEffect } from "react";
import worker_script from './worker-code';

export default () => {

    const worker = new Worker(worker_script, { name: 'myWorker' });

    useEffect(() => {

        console.log(worker);
        worker.onmessage = (event) => {
            console.log('主线程接收到了消息：',event.data)
        }
    }, []);

    const handleClick = () => {
        worker.postMessage('这是一条主线程发送的消息')
    }

    return (
        <div>
            <h3>web worker的用法</h3>
            <button onClick={handleClick}>发送消息</button>
        </div>
    )
}
