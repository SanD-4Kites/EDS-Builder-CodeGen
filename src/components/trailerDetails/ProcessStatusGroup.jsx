import React from "react";
import { Checkbox } from "@fourkites/elemental-checkbox";
import styles from "./TrailerDetails.module.css";

export function ProcessStatusGroup({ items, onChange }) {
    const handleCheckboxChange = (item) => (event) => {
        onChange((prev) =>
          prev.map((prevItem) =>
            prevItem.id === item.id
              ? { ...prevItem, checked: event.target.checked ? "checked" : "unchecked" }
              : prevItem
          )
        );
      };
  return (
    <>
      <div className={styles.processStatusLabel}>Process Status</div>
      <div className={styles.checkboxGroup}>
        {items.map((item) => (
          <Checkbox
            key={item.id}
            size="medium"
            label={item.label}
            value={item.checked}
            onChange={handleCheckboxChange(item)}
          />
        ))}
      </div>
    </>
  );
}
