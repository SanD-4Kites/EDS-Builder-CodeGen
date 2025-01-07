import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { RadioButton } from "@fourkites/elemental-radio-button";

// ❖ Radio Button
interface FigmaRadioButtonProps extends BaseFigmaProps {
  Selected?: "False" | "True";
  Size?: "Large" | "Medium";
  Disabled?: "No" | "Yes";
  Label?: "Yes" | "No";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e842a8c50921c5b04dd295d1e78019116cc83291",
  mapper(figma: FigmaRadioButtonProps) {
    const baseProps = ({
      size: figma.Size?.toLowerCase() || "medium",
      checked: figma.Selected?.toLowerCase() === "true" || false, // to check with team
      disabled: figma.Disabled?.toLowerCase() === "yes" || false,
      hideLabel: figma.Label?.toLowerCase() === "no" || false,
      label: figma.$textContent || null,
    })
    return (
      <RadioButton {...baseProps} />
    );
  },
});
