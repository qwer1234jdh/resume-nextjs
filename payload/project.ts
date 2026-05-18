import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '자동 분리수거 시스템 (졸업작품)',
      startedAt: '2025-03',
      endedAt: '2025-12',
      where: '배재대학교',
      descriptions: [
        {
          content:
            'ESP32·HX711 무게센서·스테퍼/서보모터를 활용한 IoT 기반 자동 분리수거 시스템 설계 및 구현',
        },
        {
          content: 'YOLOv8 객체 분류 모델 학습 및 경량화 배포',
          weight: 'MEDIUM',
          descriptions: [
            { content: '라즈베리파이 + NCNN 환경에서 추론 동작 구현' },
            { content: '제한된 엣지 디바이스 자원에서 실시간 추론 최적화' },
          ],
        },
        {
          content: '컨슈머용·관리자용 안드로이드 앱 2종 개발 및 Firebase 백엔드 연동',
          weight: 'MEDIUM',
          descriptions: [
            { content: '센서 데이터 수집 → Firebase → 앱 알림까지 전체 파이프라인 구축' },
          ],
        },
      ],
    },
  ],
};

export default project;
