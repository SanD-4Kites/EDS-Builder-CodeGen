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
    return (
      <Checkbox
        size={figma.Size?.toLowerCase() || "medium"}
        checked={figma.State === "Checked"}
        indeterminate={figma.State === "Intermediate"}
        disabled={figma.Disabled === "Yes"}
        hideLabel
      />
    );
  },
});
