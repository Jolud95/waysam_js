import styles from "./Paginator.module.css";
import React from "react";


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanges(p)
                             }}>{p}</span>
            })}
        </div>
    </div>
}
export default Paginator;