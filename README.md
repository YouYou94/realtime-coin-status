# 실시간 코인 현황 (Realtime Coin Status)

실시간으로 코인의 현황을 보여주는 간단한 기능을 하는 웹페이지입니다. 배포를 통해 서비스화를 시키기보다는 본인의 NextJS 학습을 위한 토이 프로젝트입니다.
Next 프레임워크에 대한 이해와 SSR 및 Pre-Rendering 등을 학습하여 기존 CSR의 긴 초기 로딩 시간과 SEO에 취약하다는 단점을 보완하였습니다. 추후 jsx로 작성된 파일을 타입스크립트로 변환하여 정적 타이핑 언어에 대해 학습하였습니다.

</br>
</br>

## 기간

&nbsp; _22.12.05 ~ 22.12.14_

</br>
</br>

## 사용 방법
1. 실행
```
npm run dev
```

</br>
</br>

## 사용 기술

Javascript | Typescript | styled-components | Next

</br>
</br>

## 프로젝트를 통해 배운 점
- CSR의 경우 모든 js 파일을 로드하고 사용자가 웹을 보는 방식이며, 이것은 초기 로딩 시간이 길고 SEO에 취약하다는 단점을 가지고 있습니다. NextJS의 `pre-rendering`과 `SSR`을 통해 프로젝트를 구현함으로써, **초기 로딩 시간을 줄이고 SEO에 용이하게 하여 CSR의 단점을 극복**하였습니다.

- 외부 API 통신을 하여 데이터를 불러올 때, API KEY 같은 중요한 정보가 URL에 노출된다면 이는 사용자가 쉽게 API KEY 정보를 알 수 있습니다. 이를 방지하고 중요한 정보를 **은닉화**하고자 NextJS에서 제공하는 `rewrites`라는 설정 속성을 통하여 링크 정보를 masking하여 URL을 통해 노출될 수 있는 정보 관리를 용이하게 하였습니다.

- 초기 구현 시 jsx를 통해 구현하였으며 완성 후 정적 타입을 지원하는 `타입스크립트`로 변환하였습니다. 타입스크립트를 통해 코드를 구현한다면, **컴파일 단계에서 오류를 포착**할 수 있고 명시적인 타입 지정을 통해 **개발자의 의도를 명확하게 코드로 기술**할 수 있다는 장점을 학습할 수 있었습니다.