import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

interface GenderFieldViewProps {
    handleChange: any;
    gender: any;
}

const GenderFieldView: React.FC<GenderFieldViewProps> = ({
    handleChange,
    gender,
}) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="gender1"
                row
                value={gender}
                onChange={handleChange("gender")}
            >
                <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                />
                <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                />
                <FormControlLabel
                    value="other"
                    control={<Radio color="primary" />}
                    label="Other"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default GenderFieldView;
