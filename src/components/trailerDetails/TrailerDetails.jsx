import React from "react";
import styles from "./TrailerDetails.module.css";
import { Input } from "@fourkites/elemental-input";
import { Switch } from "@fourkites/elemental-switch";
import { Button } from "@fourkites/elemental-atoms";
import { CheckboxGroup } from "./CheckboxGroup";
import { LoadStatusGroup } from "./LoadStatusGroup";

export function TrailerDetails() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Trailer Details</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.formContent}>
        <label htmlFor="trailerName" className="visually-hidden">
          Trailer Name
        </label>
        <Input
          id="trailerName"
          size="medium"
          placeholder="Placeholder"
          className={styles.inputField}
          label={"Trailer Name"}
        />

        <Switch
          size="large"
          // disabled="no"
          defaultLabel="Empty Pickup"
          className={styles.statusSwitch}
        />

        <div className={styles.sectionLabel}>Process Status</div>
        <div className={styles.checkboxGroup}>
          <CheckboxGroup />
        </div>

        <LoadStatusGroup />
      </div>

      <div className={styles.formFooter}>
        <Button
          theme="danger"
          variant="solid"
          size="medium"
          className={styles.footerButton}
          type="button"
        >
          Cancel
        </Button>
        <Button
          theme="primary"
          variant="solid"
          size="medium"
          className={styles.footerButton}
          type="submit"
          disabled
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
