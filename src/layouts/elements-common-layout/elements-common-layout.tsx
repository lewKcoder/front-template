import { Component } from "./types";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ElementsCommonLayout: Component = (props) => {
  const { children } = props;

  return (
    <>
      <div className={styles.to_home}>
        <Link href={"/"} className={styles.link}></Link>
      </div>

      {children}
    </>
  );
};
