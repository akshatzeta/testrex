import React from 'react';
import { Switch } from "@material-tailwind/react";

export function SwitchCustomStyles({ checked, onChange }) {
  return (
    <Switch
      id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-[#2ec946]"
      containerProps={{
        className: "w-11 h-6",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none",
      }}
      checked={checked}
      onChange={onChange}
    />
  );
}
