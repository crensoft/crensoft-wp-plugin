import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
// @ts-ignore
import { Button } from "@storybook/react/demo";
import WelcomeLayout from "../src/layouts/WelcomeLayout";
import AppLayout from "../src/components/App/AppLayout";
import PricingLayout from "../src/layouts/PricingLayout";
import SubmitProjectLayout from "../src/layouts/SubmitProjectLayout";
import WorkLayout from "../src/layouts/WorkLayout";
import AboutLayout from "../src/layouts/AboutLayout";
import ContactLayout from "../src/layouts/ContactLayout";

addDecorator(storyFn => <AppLayout>{storyFn()}</AppLayout>);

const menus = [
	[
		{
			title: "Pricing"
		},
		{
			title: "Portfolio"
		},
		{
			title: "About"
		},
		{
			title: "contact us",
			btn: {
				variant: "contained",
				color: "primary"
			}
		}
	]
];

storiesOf("Crensoft", module)
	.add("Welcome Page", () => {
		const hero = {
			height: 500,
			bgColor: "#fff",
			primary: {
				title: "Battle Ready Software.",
				body:
					"Empower your brand with a premium, modern & scalable website. Sites start at $1,500.",
				caption: "No commitment or payment info needed."
			}
		};
		return <WelcomeLayout hero={hero} menus={menus} />;
	})
	.add("Pricing Page", () => {
		return <PricingLayout menus={menus} />;
	})
	.add("Submit Project Page", () => {
		return <SubmitProjectLayout />;
	})
	.add("Work Page", () => {
		return <WorkLayout menus={menus} />;
	})
	.add("About Page", () => {
		return <AboutLayout menus={menus} />;
	})
	.add("Contact Page", () => {
		return <ContactLayout menus={menus} />;
	});

// storiesOf("WelcomePage", module).add("default", () => <WelcomeLayout />);

storiesOf("Button", module)
	.add("with text", () => <Button>Hello Button</Button>)
	.add("with emoji", () => (
		<Button>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));
