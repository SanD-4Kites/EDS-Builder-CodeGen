import React from "react";
import { RadioButton } from "@fourkites/elemental-radio-button";
import styles from "./TrailerDetails.module.css";

const radioOptions = [
  { label: "Full", id: "full" },
  { label: "Empty", id: "empty" },
  { label: "Partial", id: "partial" },
];

export function LoadStatusGroup() {
  return (
    <div className={styles.loadStatusContainer}>
      <div className={styles.loadStatusSection}>
        <div className={styles.loadStatusLabel}>Load Status</div>
        <div className={styles.radioGroup}>
          {radioOptions.map((option) => (
            <RadioButton key={option.id} size="medium" label={option.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
