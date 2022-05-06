/**
 * @Author: fanx
 * @Date: 2022年05月06日 15:53
 * @Description: file content
 */
const worker_code = () => {

    // 向主线程发送一条消息
    self.postMessage('worker loaded successfully...');

    // 监听主线程发来的信息
    self.onmessage = (e) => {
        console.log('接收到的event:',e);
        let result = `从主线程接收到的数据 ${e.data}`;
        self.postMessage(result)
    }
}

let code = worker_code.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
console.log(code);

const blob = new Blob([code],{ type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default  worker_script;
