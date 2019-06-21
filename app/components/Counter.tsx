import * as React from "react";
import { Link } from "react-router-dom";

let styles = require("./Counter.scss");

export function Counter() {
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {0}
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={() => {}} data-tclass="btn">
          <i className="fa fa-plus" />
        </button>
        <button className={styles.btn} onClick={() => {}} data-tclass="btn">
          <i className="fa fa-minus" />
        </button>
        <button className={styles.btn} onClick={() => {}} data-tclass="btn">
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => () => {}}
          data-tclass="btn"
        >
          async
        </button>
      </div>
    </div>
  );
}

export default Counter;
