import * as React from "react";
import styles from "./ButtonCounter.module.css";
import { Button } from "@fourkites/elemental-atoms";

export function ButtonCounter() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const buttonConfig = [
    {
      theme: "primary",
      variant: "flat",
      label: "Hello",
      onClick: handleIncrement,
      ariaLabel: "Increment counter"
    },
    {
      theme: "danger",
      variant: "solid",
      label: "Danger",
      onClick: handleDecrement,
      ariaLabel: "Decrement counter"
    }
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonConfig.map((config, index) => (
        <Button
          key={`${config.theme}-${index}`}
          size="medium"
          theme={config.theme}
          variant={config.variant}
          className={styles.actionButton}
          onClick={config.onClick}
          aria-label={config.ariaLabel}
        >
          {config.label}
        </Button>
      ))}
      <div className={styles.counterText} role="status" aria-live="polite">
        Count: {count}
      </div>
    </div>
  );
}
