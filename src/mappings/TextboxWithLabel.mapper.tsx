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
      placeholder: figma?.$children[1]?.$children[0]?.$children[0]?.$textContent || "Placeholder",
      label: (figma?.$children[0]?.$children[0]?.$textContent || "Label"),
      required: figma?.$findOne(n => n.name === 'Component Label')?.$children?.[0]?.$textContent === "Yes" || true,
    }
    return (
      <Input {...baseProps} />
    );
  },
});
