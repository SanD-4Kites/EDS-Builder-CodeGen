import * as React from "react";
import styles from "./ButtonWithIcon.module.css";
import { Button } from "@fourkites/elemental-atoms";
import { PlusIcon } from "@fourkites/elemental-atoms";

export function ButtonWithIcon() {
  return (
    <Button size="medium" theme="primary" variant="icon-text">
      <div className={styles.buttonContent}>
        <div className={styles.buttonLabel}>Label</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2805b3191b3549f1b2e4d0fa38b8811d/39c65497b58ab61019550e65b606faecca94b2bebb979d90fba7da16b527f3ee?apiKey=2805b3191b3549f1b2e4d0fa38b8811d&"
          className={styles.buttonIcon}
          alt=""
        />
      </div>
    </Button>
  );
}
