import { Link } from "react-router-dom";

export default () => {

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ marginBlockStart: 0 }}>快速导航</h1>
            <nav>
                <ul>
                    <li><Link to="/vite">vite的使用</Link></li>
                    <li><Link to="/webWorker">web worker的使用</Link></li>
                    <li><Link to="/webWorkerHook">webWorkerHook计算斐波那契数列</Link></li>
                </ul>
            </nav>
        </div>
    )
}
