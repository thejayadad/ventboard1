

import { Link } from "react-router-dom";


const Header = () =>{
    return (
       <header>
        <h2>The Vent Board</h2>
        <div className="updates">
            <div className="text t1">A place to share thoughts</div>
            <div className="text t2">A place to comment on post</div>
            <div className="text t3">A place to meet friends</div>
        </div>
       </header>
    )
}


export default Header;