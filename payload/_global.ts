import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '전대호 이력서';
const description = '하드웨어부터 응용 계층까지 다루는 임베디드 엔지니어 전대호의 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '전대호 이력서 미리보기',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '대호',
        lastName: '전',
        username: 'jeondaeho',
        gender: 'male',
      },
    },
  },
};
