"use client"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useStore } from "./State";

type Props = {}
interface languagesState {
  setLanguage: (language: string) => void;
}

export default function LanguageSwitch({}: Props) {

  const engBio = () => {
    setLanguage('eng');
  }
 
  const hunBio = () => {
    setLanguage('hun')
  }
 
  const setLanguage = useStore((state: languagesState) => state.setLanguage);
  return (
    <div className="absolute left-8 top-3 shadow-lg">
        <Box>
            <ButtonGroup size="small" aria-label="small button group">
                <Button onClick={hunBio} key="one" color="secondary">HUN</Button>
                <Button onClick={engBio} key="two" color="secondary">ENG</Button>
            </ButtonGroup>
        </Box>
    </div>
  )
}