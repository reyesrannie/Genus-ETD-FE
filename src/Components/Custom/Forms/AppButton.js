import style from "./style";
import { Button, Box } from "@mui/material";

function AppButton({ name, variant, onClick, color }) {
  return (
    <Box sx={style().buttonContainer}>
      <Button
        type="submit"
        color={color}
        variant={variant}
        sx={style().button}
        onClick={onClick}
      >
        {name}
      </Button>
    </Box>
  );
}

export default AppButton;
