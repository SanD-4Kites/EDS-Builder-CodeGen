import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Input } from "@fourkites/elemental-input";

// ❖ Textbox
interface FigmaTextboxProps extends BaseFigmaProps {
  Variants?:
    | "Base"
    | "With Country Picker"
    | "With Icon"
    | "With Indicator"
    | "With Unit Picker";
  Size?: "Large" | "Medium" | "Small";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a0172e3b4c8464ef033624ea09712b06bb7bf645",
  mapper(figma: FigmaTextboxProps) {
    return (
      <Input size={figma.Size?.toLowerCase()} />
    );
  },
});
