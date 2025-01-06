import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { PlusIcon } from "@fourkites/elemental-atoms";

// ❖ Plus
interface FigmaPlusProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "5a86b8dcdce23de062689b6dbd83956e8da5ecd9",
  mapper(figma: FigmaPlusProps) {
    return <PlusIcon />;
  },
});