import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile_image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '배재대학교 전자공학과 전대호',
    small: '(코딩을 잘하고 싶은 학생입니다)',
  },
  contact: [
    {
      title: 'jeondaeho205@gmail.com',
      link: 'mailto:jeondaeho205@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '연락 부탁드립니다',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
  ],
  notice: {
    title: '구직 중입니다. 연락 주세요!',
    icon: faBell,
  },
};

export default profile;
