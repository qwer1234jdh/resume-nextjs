import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'HTML',
      level: 1,
    },
  ],
};

const osEnvironment: ISkill.Skill = {
  category: 'OS / Environment',
  items: [
    {
      title: 'Linux',
      level: 2,
    },
  ],
};

const devTools: ISkill.Skill = {
  category: 'Dev Tools',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'Arduino IDE',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, osEnvironment, devTools],
  tooltip: '1: 기초 수준\n2: 실습·프로젝트 경험 수준\n3: 독립 개발 가능 수준',
};

export default skill;
