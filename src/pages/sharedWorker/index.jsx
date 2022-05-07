/**
 * @Author: fanx
 * @Date: 2022年05月06日 15:42
 * @Description: file content
 */

import { useEffect } from "react";
import worker_script from './shared-worker';

export default () => {

    const worker = new SharedWorker(worker_script, { name: 'myWorker' });

    useEffect(() => {
        worker.port.onmessage = (e) => {
            console.log('主线程接收到消息：',e.data);
        }
    }, []);

    const handleClick = () => {
        worker.port.postMessage('苹果')
    }

    return (
        <div>
            <h3>SharedWorker</h3>
            <button onClick={handleClick}>发送消息</button>
            <h3></h3>
        </div>
    )
}
