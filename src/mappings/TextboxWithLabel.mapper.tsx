import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Input } from "@fourkites/elemental-input";

// ❖ Textbox with Label
interface FigmaTextboxWithLabelProps extends BaseFigmaProps {
  Size?: "Medium" | "Large" | "Small";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "db6a7ef190fb1ae111ab294ceb797e304d1abee4",
  mapper(figma: FigmaTextboxWithLabelProps) {
    const baseProps = {
      size: figma.Size?.toLowerCase() || "small",
    }
    return (
      <Input {...baseProps}>
        {figma.$textContent || null}
      </Input>
    );
  },
});
