import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import {Button} from "@fourkites/elemental-atoms";

// ❖ Flat Button
interface FigmaFlatButtonProps extends BaseFigmaProps {
  Type?: "primary" | "secondary" | "danger" | "tertiary";
  Variant?:
    | "Text Only"
    | "Icon + Text"
    | "Text + Icon"
    | "Dropdown"
    | "Icon + Dropdown"
    | "Icon Only"
    | "Icon Dropdown";
    Size?: "small" | "medium" | "large";
    State?: "Default" | "Hover" | "Pressed";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "585dec8628d6ef119cad89a3e0905deb77c60ab4",
  mapper(figma: FigmaFlatButtonProps) {
    const themeMapping = {
      primary: 'primary',
      destructive: 'danger',
    }
    const type = figma.Type?.toLowerCase();
    return (
      <Button
        size={figma.Size?.toLowerCase()}
        theme={themeMapping[type] || type} 
        variant={'flat'}
      >
        {figma.$textContent}
      </Button>
    );
  },
});
