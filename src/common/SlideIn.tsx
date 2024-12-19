import React from "react";
import styles from "./SlideIn.module.css";

const SlideIn = ({
  open,
  // setOpen,
  children,
  contentStyle,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
}) => {
  // console.log("open", open);
  return (
    <div
      data-overlay-state={open ? "open" : ""}
      className={styles["drawer__overlay"]}
    >
      <div
        className={styles["drawer__main"]}
        data-drawer-state={open ? "open" : ""}
      >
        <div className={styles["drawer__content"]} style={contentStyle}>
          {children}
          {/* <div style={{ height: 800 }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default SlideIn;
