import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Chip } from "@fourkites/elemental-chip";

// ❖ Basic Chip
interface FigmaBasicChipProps extends BaseFigmaProps {
  Type?:
    | "Text Only"
    | "Closable"
    | "Draggable"
    | "Close + Drag"
    | "Icon + Text"
    | "Custom - Text"
    | "Custom - Closable"
    | "Custom - Icon + Close";
  Size?: "Medium" | "Small" | "Large";
  State?: "Default" | "Hover" | "Selected" | "Error" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "33114d5f0e4a35d466630927dfccaabc35bb6b7a",
  mapper(figma: FigmaBasicChipProps) {
    const baseProps = {
      size: figma.Size?.toLowerCase() || "small",
      theme: "light"
    }
    return (
      <Chip {...baseProps}>
        {figma.$textContent || null}
      </Chip>
    );
  },
});
