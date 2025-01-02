import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import {Button} from "@fourkites/elemental-atoms";

// ❖ Solid Button
interface FigmaSolidButtonProps extends BaseFigmaProps {
  Type?: "primary" | "secondary" | "danger" | "tertiary";
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
  Size?: "small" | "medium" | "large";
  State?: "Default" | "Hover" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "983a91cf5b65f6bf18f0e2787bb52b09aefd25db",
  mapper(figma: FigmaSolidButtonProps) {

    const themeMapping = {
      primary: 'primary',
      destructive: 'danger',
    }

    return (
      <Button
        size={figma.Size?.toLowerCase()}
        theme={themeMapping[figma.Type?.toLowerCase()] || figma.Type?.toLowerCase()}
        variant={'solid'}
      >
        {figma.$textContent}
      </Button>
    );
  },
});
