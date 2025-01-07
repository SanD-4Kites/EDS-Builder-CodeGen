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
    const typeMapping = {
      destructive: "danger"
    };
    
    function mapType(type: string) {
      const lowerCaseType = type?.toLowerCase();
      return typeMapping[lowerCaseType] || lowerCaseType;
    }

    const baseProps = {
      theme: mapType(figma.Type),
      variant: 'solid',
      size: figma.Size?.toLowerCase(),
    };

    if(figma.Variant?.toLowerCase() === 'text + icon'){
      return (
        <Button
          id={'textIcon'}
          {...baseProps}
        >
          {figma.$children[0].$children[0].$textContent}
        </Button>
      );
    }
    return (
      <Button {...baseProps}>
        {figma.$children}
      </Button>
    );
  },
});
