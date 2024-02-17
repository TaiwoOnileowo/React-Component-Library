
import React from "react";
import CombinedForm from "./CombinedForm";

export default {
  title: "COMPONENTS/Form/COMBINED FORM",
  component: CombinedForm,
  tags: ["autodocs"],
  argTypes: {
    onFormSubmit: { action: "formSubmitted" },
  },
  args: {
    name: "Taiwo",
    email: "taiwo@example.com",
    message: "Hello, this is a default message.",
  },
};

const Template = (args) => <CombinedForm {...args} />;

export const CombinedForms = Template.bind({});
