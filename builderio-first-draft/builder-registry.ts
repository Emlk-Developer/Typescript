"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import SelectDropdown from "./components/SelectDropdown/SelectDropdown";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    }
  ],
});

Builder.registerComponent(HeroBanner, {
  name: "HeroBanner",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true
    },
    {
      name: "subHeading",
      type: "string"
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
    },
    {
    name: 'altText',
    type: 'string',
  }
  ],
});

Builder.registerComponent(SelectDropdown, {
  name: "SelectDropdown",
  inputs: [
    {
      name: "selectTitle",
      type: "string",
    },
    {
      name: "selectOptions",
      type: "string",
      enum: ['Employed','Self Employed' ,'Unemployed' ,'Retired','Household Duties'],
      defaultValue: "Employed"
    },
    {
      name:"placeHolder",
      type: "string",
      defaultValue: "select.."
    }
  ],
});
