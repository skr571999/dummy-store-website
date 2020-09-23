import React, { useState } from "react";

import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            width: "25ch",
        },
        w100: {
            width: "100%",
        },
    })
);

interface PasswordFieldViewProps {
    password: any;
    handleChange: any;
    error?: any;
}

const PasswordFieldView: React.FC<PasswordFieldViewProps> = ({
    password,
    handleChange,
    error,
}) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <FormControl
            className={clsx(classes.textField, classes.w100)}
            variant="outlined"
        >
            <InputLabel htmlFor="outlined-adornment-password" required>
                Password
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange("password")}
                required
                error={error}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={85}
            />
            <FormHelperText>{error ? "Error" : ""}</FormHelperText>
        </FormControl>
    );
};

export default PasswordFieldView;
