import React, { useMemo } from "react";
import { SkillsData } from "./SkillsData";
import { Button, Container, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import G from "../../assets/images/SkillsImages/GraphQL.png";
import SelectedSkills from "./selectedSkills";
const SkillsButtons = ({ selectedSkills }) => {
  const selectedSkillsData = useMemo(
    () =>
      selectedSkills == ""
        ? SkillsData
        : SkillsData.filter((skills) => skills.type == selectedSkills),
    [selectedSkills, SkillsData]
  );
  const UnSelectedSkillsData = useMemo(
    () => SkillsData.filter((skills) => skills.type !== selectedSkills),
    [selectedSkills, SkillsData]
  );

  return (
    <Container>
      {selectedSkills == "" ? (
        <SelectedSkills skills={selectedSkillsData} />
      ) : (
        <>
          <SelectedSkills  skills={selectedSkillsData} />
          <SelectedSkills disable={true} skills={UnSelectedSkillsData} />
        </>
      )}
    </Container>
  );
};

export default SkillsButtons;
