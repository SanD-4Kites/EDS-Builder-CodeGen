import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Button, PlusIcon } from "@fourkites/elemental-atoms";

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
  componentKey: "xxxxxx",
  mapper(figma: FigmaSolidButtonProps) {
    if(figma.Variant?.toLowerCase() === 'text + icon'){
      return (
        <Button
          size={figma.Size?.toLowerCase()}
          theme={figma.Type?.toLowerCase()}
          variant="icon-text"
        >
          {figma.$children[0]}
        </Button>
      );
    }
    return (
      <Button
        size={figma.Size?.toLowerCase()}
        theme={figma.Type?.toLowerCase()}
        variant={figma.Variant?.toLowerCase()}
      />
    );
  },
});