import {
  ArrowRightIcon,
  ChevronDownIcon,
  ClockIcon,
  Button,
} from "@fourkites/elemental-atoms";
import { Builder } from "@builder.io/react";
import { MapIcon, PlusIcon } from "@fourkites/elemental-atoms";
import App from "./App";
import Counter from "./components/Counter/Counter";
import Heading from "./components/Heading";

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [{ name: "title", type: "text" }],
  image:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "variant",
      type: "string",
      options: ["solid", "outline", "flat"],
    },
    {
      name: "theme",
      type: "string",
      options: ["primary", "secondary", "danger", "tertiary"],
    },
    {
      name: "size",
      type: "string",
      options: ["small", "medium", "large"],
    },
    {
      name: "uppercase",
      type: "boolean",
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(MapIcon, {
  name: "MapIcon",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "fill",
      type: "string",
    },
    {
      name: "iconClass",
      type: "string",
    },
    {
      name: "secondaryFill",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(PlusIcon, {
  name: "PlusIcon",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "fill",
      type: "string",
    },
    {
      name: "iconClass",
      type: "string",
    },
    {
      name: "secondaryFill",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(ArrowRightIcon, {
  name: "ArrowRightIcon",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "fill",
      type: "string",
    },
    {
      name: "iconClass",
      type: "string",
    },
    {
      name: "secondaryFill",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(ChevronDownIcon, {
  name: "ChevronDownIcon",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "fill",
      type: "string",
    },
    {
      name: "iconClass",
      type: "string",
    },
    {
      name: "secondaryFill",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(ClockIcon, {
  name: "ClockIcon",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "fill",
      type: "string",
    },
    {
      name: "iconClass",
      type: "string",
    },
    {
      name: "secondaryFill",
      type: "string",
    },
    {
      name: "size",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});
Builder.registerComponent(App, {
  name: "App",
});
