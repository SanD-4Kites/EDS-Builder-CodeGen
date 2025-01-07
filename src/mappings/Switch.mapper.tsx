import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "@fourkites/elemental-switch";

// ❖ Switch
interface FigmaSwitchProps extends BaseFigmaProps {
  Size?: "Large" | "Medium";
  State?: "Off - Left selected" | "On - Right selected";
  Disabled?: "No" | "Yes";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "1d7e1a7c82093d92615d75a761e731685b4e5d75",
  mapper(figma: FigmaSwitchProps) {
    const baseProps = {
      size: figma.Size?.toLowerCase() || "medium",
      disabled: figma.Disabled?.toLowerCase() || "no",
    }
    return (
      <Switch {...baseProps}>
        {figma.$children || null}
      </Switch>
    );
  },
});
