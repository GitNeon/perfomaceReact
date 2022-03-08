import { Link } from "react-router-dom";

export default () => {

    return (
        <div>
            <h1 style={{ marginBlockStart: 0 }}>快速导航</h1>
            <nav>
                <Link to="/vite">vite的使用</Link>
            </nav>
        </div>
    )
}
