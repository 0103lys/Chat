import React from "react";
import '../assets/css/common.css';
import '../assets/css/nav.css';

function Nav(){
    return(
        <nav>
            <ul>
                <a href="/Join">회원가입</a>
                <a href="/">로그인</a>
            </ul>
        </nav>

    )
}

export default Nav;