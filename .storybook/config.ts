import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import "../src/common.scss";

// should only be added once
// best place is in config.js
addDecorator(withA11y);
addDecorator(withKnobs);

function loadStories() {
	require("../stories");
	// You can require as many stories as you need.
}

configure(loadStories, module);
