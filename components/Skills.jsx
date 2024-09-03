import React from "react";
import "../styles/skills.css"
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="container-skills">
      <div className="abilities ">
        <h1>
          <span> &lt;/&gt; </span>{t('title-habilities')}
        </h1>
      </div>
    </section>
  );
};

export default Skills;
