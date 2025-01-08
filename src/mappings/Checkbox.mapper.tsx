import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Checkbox } from "@fourkites/elemental-checkbox";

// ❖ Checkbox
interface FigmaCheckboxProps extends BaseFigmaProps {
  State?: "Checked" | "Intermediate" | "Unchecked";
  Size?: "Large" | "Medium";
  Disabled?: "No" | "Yes";
  Label?: "Yes" | "No";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "fbe1c9328393b82a6c35a610345c63b6c0be9b84",
  mapper(figma: FigmaCheckboxProps) {
    const baseProps = {
      size:figma.Size?.toLowerCase() || "medium",
      value:figma.State?.toLowerCase() || "unchecked",
      disabled:figma.Disabled?.toLowerCase() === "yes" || false,
      hideLabel: figma.Label?.toLowerCase() === "no" || false,
      label: figma.$textContent || null,
    }
    return (
      <Checkbox {...baseProps} />
    );
  },
});
