/**
 * @Author: fanx
 * @Date: 2022年05月07日 15:34
 * @Description: file content
 */



const worker_code = () => {

    console.log('shared worker loaded...');

    self.onconnect = function(e) {
        const port_0 = e.ports[0];
        port_0.onmessage = function(e) {
            console.log(e.data);
            port_0.postMessage("加工苹果" + e.data);
        }
    }
}

let code = worker_code.toString();

code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code],{ type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);



export default  worker_script;
