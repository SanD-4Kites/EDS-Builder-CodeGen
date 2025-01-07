import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "@fourkites/elemental-switch";

// ❖ Switch with Dual Label
interface FigmaSwitchWithDualLabelProps extends BaseFigmaProps {
  SIze?: "Large" | "Medium";
  State?: "Off - Left selected" | "On - Right selected";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "9242a880b0bdb8648890688f8bc36c2440c261cb",
  mapper(figma: FigmaSwitchWithDualLabelProps) {
    const baseProps = {
      size: figma.SIze?.toLowerCase() || "medium",
    }
    return (
      <Switch {...baseProps}>
        {figma.$children || null}
      </Switch>
    );
  },
});
