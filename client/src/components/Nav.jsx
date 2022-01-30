import React from "react";
import '../assets/css/common.css';
import '../assets/css/nav.css';

function Nav(){
    return(
        <nav className="nav">
            <ul className="ul">
                <li><a href="/Join">회원가입</a></li>
                <li><a href="/">로그인</a></li>
            </ul>
        </nav>

    )
}

export default Nav;