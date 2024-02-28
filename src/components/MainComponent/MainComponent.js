import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ published, unPublished, centerContent }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.wrapper}>
        <div
          className={classes.column}
          style={{ "--border": published.border }}
        >
          <div className={classes.headingContainer}>
            <h2
              className={classes.heading}
              style={{ "--color": published.headingColor }}
            >
              {published.heading}
            </h2>
          </div>
          <div className={classes.viewPoints}>
            {published.viewPoints.map((el, i) => (
              <div className={classes.infoContainer} key={i}>
                <p className={classes.info} style={{ "--color": el.infoColor }}>
                  {el.info}
                </p>{" "}
                <div className={classes.viewPointContainer} key={i}>
                  <p
                    className={classes.viewPoint}
                    style={{ "--color": el.viewPointColor }}
                  >
                    {el.viewPoint}
                  </p>
                </div>{" "}
              </div>
            ))}
          </div>
          <div className={classes.approachContainer}>
            <div
              className={classes.approachWrapper}
              style={{ "--bg": published.approach.bg }}
            >
              <p
                className={classes.label}
                style={{ "--color": published.approach.labelColor }}
              >
                {published.approach.label}
              </p>{" "}
              <p
                className={classes.info}
                style={{ "--color": published.approach.infoColor }}
              >
                {published.approach.info}
              </p>
              <div className={classes.curve}></div>
            </div>
          </div>
        </div>{" "}
        <div
          className={classes.centerContent}
          style={{
            "--color": centerContent.titleColor,
            "--bg": centerContent.bg,
            "--border": centerContent.border,
          }}
        >
          <h3
            className={classes.title}
            style={{
              "--color": centerContent.titleColor,
            }}
          >
            {centerContent.title}
          </h3>
        </div>
        <div
          className={[classes.column, classes.unPublished].join(" ")}
          style={{ "--border": unPublished.border }}
        >
          <div className={classes.headingContainer}>
            <h2
              className={classes.heading}
              style={{ "--color": unPublished.headingColor }}
            >
              {unPublished.heading}
            </h2>
          </div>
          <div className={classes.viewPoints}>
            {unPublished.viewPoints.map((el, i) => (
              <div className={classes.infoContainer} key={i}>
                <p className={classes.info} style={{ "--color": el.infoColor }}>
                  {el.info}
                </p>{" "}
                <div className={classes.viewPointContainer} key={i}>
                  <p
                    className={classes.viewPoint}
                    style={{ "--color": el.viewPointColor }}
                  >
                    {el.viewPoint}
                  </p>
                </div>{" "}
              </div>
            ))}
          </div>
          <div className={classes.approachContainer}>
            <div
              className={classes.approachWrapper}
              style={{ "--bg": unPublished.approach.bg }}
            >
              <p
                className={classes.label}
                style={{ "--color": unPublished.approach.labelColor }}
              >
                {unPublished.approach.label}
              </p>{" "}
              <p
                className={classes.info}
                style={{ "--color": unPublished.approach.infoColor }}
              >
                {unPublished.approach.info}
              </p>{" "}
              <div className={classes.curve}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
