import React from "react";
import { FieldGroup, Label } from "app/common";

export function RegisterStep1() {
	return (
		<div className="Register-step1">
			<FieldGroup>
				<Label htmlFor="firstname">First name</Label>
				<input type="text" name="firstname" />
			</FieldGroup>
			<FieldGroup>
				<Label htmlFor="lastname">Last name</Label>
				<input type="text" name="lastname" />
			</FieldGroup>
			<FieldGroup>
				<Label htmlFor="email">Email</Label>
				<input type="email" name="email" />
			</FieldGroup>
		</div>
	);
}
