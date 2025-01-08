import React from "react";
import { RadioButton } from "@fourkites/elemental-radio-button";
import styles from "./TrailerDetails.module.css";

export function LoadStatusGroup({items, selectedID, onChange}) {
  const handleRadioChange = (id) => (event) => {
    if (event.target.checked) {
      onChange(id);
    }
  };
  return (
    <div className={styles.loadStatusContainer}>
      <div className={styles.loadStatusSection}>
        <div className={styles.loadStatusLabel}>Load Status</div>
        <div className={styles.radioGroup}>
          {items.map(({id, label}) => (
            <RadioButton key={id} checked={id === selectedID} size="medium" label={label} onChange={handleRadioChange(id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
