import React from "react";
import { WebsiteLayout } from "../../layouts";
import { Button, ButtonDanger, ButtonCancel } from "../../../appbase";

export function StyleGuide() {
	return (
		<WebsiteLayout>
			<button>Submit</button>
			<br />
			<Button>Cancel</Button>
			<br />
			<Button size="lg">LG Cancel</Button>
			<br />
			<Button size="md">MD Cancel</Button>
			<br />
			<Button size="sm">SM Cancel</Button>
			<br />
			<Button size="xs">XS Cancel</Button>
			<hr />
			<ButtonDanger size="sm">Danger</ButtonDanger>
			<br />
			<Button pill={true}>Cancel</Button>
		</WebsiteLayout>
	);
}
