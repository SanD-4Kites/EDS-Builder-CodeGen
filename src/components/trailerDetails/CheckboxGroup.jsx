import React from "react";
import { Checkbox } from "@fourkites/elemental-checkbox";

const checkboxItems = [
  { label: "Audit Trailer", id: "audit" },
  { label: "Trailer Damaged", id: "damaged" },
  { label: "Trailer Out Of Service", id: "outOfService" },
];

export function CheckboxGroup() {
  return (
    <>
      {checkboxItems.map((item) => (
        <Checkbox
          key={item.id}
          size="medium"
          value="unchecked"
          disabled={false}
          label={item.label}
        />
      ))}
    </>
  );
}
