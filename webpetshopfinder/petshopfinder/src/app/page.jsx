'use client'

import Image from "next/image";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import background from "../../public/dog_logo4.png"
import '@fontsource/roboto/700.css';
import TextFields from "../components/TextField";

export default function Home() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: theme.spacing(0.1),
      }}
    >
      
      <Image src={background} alt="dog" width={isSmallerScreen ? 200 : 400} height={isSmallerScreen ? 200 : 400} />
      <Typography variant={isSmallerScreen ? "h3" : "h2"} color="white" style={{ fontFamily: 'Pacifico', fontWeight: 500, letterSpacing: 2, marginBottom: 10, marginTop: -50}}>PetShopFinder</Typography>
      <Typography align="center">O aplicativo para buscar os melhores preços para seus pets!</Typography>
      <TextFields />
    </Box>
  );
}
