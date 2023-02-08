import { Clear, ContactMail, Send } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import "./ContactUs.css";


function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">

            <form>
                <ContactMail fontSize="medium" />

                <Typography variant="h5" className="Headline">Contact Us</Typography>

                <TextField label="neme" variant="outlined" className="TextBox" />

                <TextField type="email" label="email" variant="outlined" className="TextBox" />

                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<Send />}>Send</Button>
                    <Button color="secondary" type="reset" startIcon={<Clear />} >Clear</Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default ContactUs;
