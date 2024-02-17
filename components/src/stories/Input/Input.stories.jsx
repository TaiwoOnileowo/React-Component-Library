import React from "react";
import Input from "./Input";

export default {
  title: "COMPONENTS/Form/INPUT",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const SmallInput = {
  args: {
    placeholder: "Small",
    size: "small",
   
  },
};
export const MediumInput = {
  args: {
    placeholder: "Medium",
    size: "medium",
    
  },
};
export const LargeInput = {
  args: {
    placeholder: "Large",
    size: "large",
    
  },
};
