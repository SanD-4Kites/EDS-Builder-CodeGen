import React, { useState } from "react";
import styles from "./TrailerDetails.module.css";
import { Input } from "@fourkites/elemental-input";
import { Switch } from "@fourkites/elemental-switch";
import { Button } from "@fourkites/elemental-atoms";
import { ProcessStatusGroup } from "./ProcessStatusGroup";
import { LoadStatusGroup } from "./LoadStatusGroup";

const processStatusItems = [
  { label: "Audit Trailer", id: "audit", checked: false },
  { label: "Trailer Damaged", id: "damaged", checked: false },
  { label: "Trailer Out Of Service", id: "outOfService", checked: false },
];

const loadStatusItems = [
  { label: "Full", id: "full" },
  { label: "Empty", id: "empty" },
  { label: "Partial", id: "partial" },
];

export function TrailerDetails() {
  const [trailerName, setTrailerName] = useState("");
  const [isEmptyPickup, setIsEmptyPickup] = useState(false);
  const [processStatus, setProcessStatus] = useState(processStatusItems);
  const [loadStatus, setLoadStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      'Trailer Name': trailerName,
      'Empty Pickup': isEmptyPickup,
      'Process Status': processStatus.filter((item) => item.checked === "checked").map((item) => item.label),
      'Load Status': loadStatus,
    };
    alert(`Form Data:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Trailer Details</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.formContent}>
        <Input
          id="trailerName"
          size="medium"
          placeholder="Placeholder"
          className={styles.inputField}
          label={"Trailer Name"}
          required={true}
          value={trailerName}
          onChange={(e) => setTrailerName(e.target.value)}
        />

        <Switch
          size="large"
          defaultLabel="Empty Pickup"
          className={styles.statusSwitch}
          checked={isEmptyPickup}
          onChange={(e) => setIsEmptyPickup(!isEmptyPickup)}
        />

        <ProcessStatusGroup items={processStatus} onChange={setProcessStatus} />
        
        <LoadStatusGroup items={loadStatusItems} selectedID={loadStatus} onChange={setLoadStatus} />
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
          disabled={trailerName.length < 1}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}