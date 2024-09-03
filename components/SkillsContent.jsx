import React, { useState } from "react";
import { skills } from "../lib/utils";
import { useTranslation } from "react-i18next";

const SkillsContent = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [skillDescription, setSkillDescription] = useState("");
  const handleMouseOver = (skillName) => {
    const foundSkill = skills.find((skill) => skill.name === skillName);
    if (foundSkill) {
      setSkillDescription(
        language === "en" ? foundSkill.descriptionEn : foundSkill.description
      );
    } else {
      setSkillDescription("Descrição não encontrada");
    }
  };

  return (
    <section className="content-skills">
      <div className="list-skills">
        <div className="abilities-using">
          <p>{skillDescription ? skillDescription : t("mouse-hover")}</p>
        </div>
        <div className="list-content">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onMouseOver={() => handleMouseOver(skill.name)}
              onMouseLeave={() => {
                setSkillDescription("");
              }}
            >
              <span className="hidd show">
                <i>{skill.path}</i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsContent;
