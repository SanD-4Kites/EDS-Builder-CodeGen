import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "@fourkites/elemental-switch";

// ❖ Switch
interface FigmaSwitchProps extends BaseFigmaProps {
  State?: "Off" | "On";
  Size?: "Large" | "Medium";
  Label?: "No" | "Yes";
  Disabled?: "No" | "Yes";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "7cde0b7f4ae846b9c97478e820eb110b1d1286ad",
  mapper(figma: FigmaSwitchProps) {
    const baseProps = {
      size: figma.Size?.toLowerCase() || "medium",
      disabled: figma.Disabled?.toLowerCase() || "no",
      defaultLabel: figma.Label?.toLowerCase() === "yes" ? figma?.$textContent : "",
      checked: figma.State?.toLowerCase() === "on" || false, // check with team once
    }
    return (
      <Switch {...baseProps} />
    );
  },
});
