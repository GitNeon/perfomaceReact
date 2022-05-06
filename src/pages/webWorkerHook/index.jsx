/**
 * @Author: fanx
 * @Date: 2022年05月06日 19:42
 * @Description: file content
 */
import React, { useState }                      from "react";
import { useWebWorkerFromScript } from "react-webworker-hook";

function GenerateFibonacci() {

    const [data = 0, postData] = useWebWorkerFromScript(`
        const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2));
        onmessage = ({ data }) => {
          postMessage(fib(data));
        };
    `);

    const [count, setCount] = useState(0);

    return (
        <div>
            {`fibonacci for ${count}: ${data}`}
            <button
                onClick={() => {
                    setCount(count + 1);
                    postData(count);
                }}
            >
                计算
            </button>
        </div>
    );
}

export default GenerateFibonacci;
