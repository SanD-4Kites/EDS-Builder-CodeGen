import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button } from "@fourkites/elemental-atoms";

// ❖ Solid Button
interface FigmaSolidButtonProps extends BaseFigmaProps {
  Type?: "Primary" | "Secondary" | "Tertiary" | "Destructive";
  Variant?:
    | "Text Only"
    | "Icon + Text"
    | "Text + Icon"
    | "Dropdown"
    | "Icon + Dropdown"
    | "Split"
    | "Icon + Split"
    | "Icon Only"
    | "Icon Dropdown";
  Size?: "Medium" | "Small" | "Large";
  State?: "Default" | "Hover" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "c9542eb16e3bed549aab38310ed6299153957d30",
  mapper(figma: FigmaSolidButtonProps) {
    return (
      <Button
        size={figma.Size?.toLowerCase()}
        theme={figma.Type?.toLowerCase()}
        variant={figma.Variant?.toLowerCase()}
      />
    );
  },
});
