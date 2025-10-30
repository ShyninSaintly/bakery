import {Form,Button, FieldError, Input, Label, TextField} from "react-aria-components";

export const LoginPage = () => {
    return (
        <Form>
            <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input />
                <FieldError />
            </TextField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};