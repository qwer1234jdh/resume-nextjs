import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '전자공학을 전공하며 하드웨어와 소프트웨어 양쪽을 함께 다루는 엔지니어로 성장해왔습니다. C언어로 마이크로컨트롤러 제어와 메모리 단위의 동작 원리를 익혔고, Python으로 데이터 처리 및 AI 모델 개발을, Java와 HTML로는 응용 계층에서의 사용자 환경까지 경험했습니다. 한 가지 언어에 머무르지 않고 시스템의 어느 계층이든 필요한 곳에 손을 댈 수 있다는 점이 강점입니다.',
    '특히 졸업작품으로 ESP32와 HX711 무게센서, 스테퍼·서보모터를 활용한 자동 분리수거 시스템을 직접 설계·구현했습니다. YOLOv8 객체 분류 모델을 학습시켜 라즈베리파이·NCNN 환경으로 경량화 배포하는 과정에서, 제한된 자원 위에서 AI를 동작시키는 임베디드 환경 특유의 제약 조건을 체득했습니다. 또한 컨슈머용·관리자용 두 개의 안드로이드 앱과 Firebase 백엔드를 연동해 센서 데이터부터 사용자 알림까지 이어지는 전체 파이프라인을 책임졌습니다.',
    '하드웨어, 펌웨어, 통신, 응용 계층을 모두 이해하고 연결할 수 있는 임베디드 엔지니어로 기여하고 싶습니다.',
  ],
  sign: '전대호',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
