const projects = [
 {
  "id": "match",
  "type": "recommendation",
  "art": "match",
  "label": "RECOMMENDATION / DEPLOYMENT",
  "title": "Link:D Match",
  "subtitle": "상품과 인플루언서를 연결하는 추천 서비스",
  "date": "2026 봄",
  "status": "캡스톤 금상 · 팀 성과",
  "role": "추천 점수 · 로그 수집 · AWS 배포",
  "tags": [
   "BGE-M3",
   "LightFM",
   "FastAPI",
   "AWS"
  ],
  "repo": "https://github.com/kookmin-sw/2026-capstone-21",
  "summary": "상품 설명과 인플루언서 콘텐츠의 의미적 적합도, 영향력, 사용자 선호를 함께 반영하는 매칭 서비스입니다.",
  "sections": [
   [
    "문제 정의",
    "쇼핑몰은 상품에 맞는 인플루언서를 직접 탐색하고 비교해야 합니다. 상품의 특성과 콘텐츠의 적합도를 연결해 탐색 부담을 줄이는 서비스를 개발했습니다."
   ],
   [
    "개인 기여",
    "키워드 기반 인플루언서 데이터 수집과 JSON 전달, 영향력·벡터 유사도·LightFM 개인화 점수 산출, 행동 로그 수집과 가중합을 담당했습니다. API 통합은 팀원들과 함께 진행했고 AWS 배포를 맡았습니다."
   ],
   [
    "추천 파이프라인",
    "상품 설명 → BGE-M3 임베딩 → 영향력·유사도·개인화 점수 결합 → 밴딧 기반 가중치 조정 → 추천 API와 화면."
   ],
   [
    "팀의 서비스 결과",
    "공개 README 기준 프로필 5,488개, 게시물 65,612개를 구축했으며 평균 추천 응답 지연은 약 1.8초입니다. 5인 Pickple 팀으로 2026 국민대학교 소프트웨어융합대학 캡스톤 디자인 금상을 수상했습니다."
   ],
   [
    "운영 문제와 연구 질문",
    "임베딩 모델의 OOM에 대응해 스왑, 배치 축소, 경량화와 저장 경로 조정을 검토하고 서버 배포를 완료했습니다. 초기 사용자 로그와 GPU 자원이 제한돼 개인화 품질을 충분히 검증하기 어려웠습니다. 운영 가능한 서비스와 검증 가능한 실험을 함께 설계하는 데 관심을 갖게 됐습니다."
   ],
   [
    "후속 데이터 수집과 운영 기록",
    "비공개 후속 저장소에서도 HTTPS 인증서·도메인 연결과 프로젝트 구조 문서 작성 커밋이 확인됩니다. 라프디 데이터 처리 프로젝트에서는 인스타그램·유튜브·네이버 블로그 수집기를 분리하고 URL 정규화, 공통 결과 스키마, 중간 저장과 오류 결과 출력 경로를 구성했습니다."
   ]
  ],
  "note": "데이터 규모와 지연은 팀 공개 지표입니다. 데이터 분류와 프론트엔드는 각 담당 팀원이 수행했으며, 개인 기여와 팀 성과를 구분했습니다.",
  "links": [
   [
    "프로젝트 코드",
    "https://github.com/kookmin-sw/2026-capstone-21"
   ],
   [
    "프로젝트 소개",
    "https://kookmin-sw.github.io/2026-capstone-21/"
   ],
   [
    "후속 크롤링 코드 · 비공개",
    "https://github.com/yujalabs-dev/lafd-data-processing"
   ]
  ],
  "kind": "project",
  "outcome_kind": "팀 수상 · 서비스 구현",
  "outcome": "캡스톤 금상 · 공개 팀 지표 기준 평균 추천 응답 약 1.8초"
 },
 {
  "id": "mdae",
  "type": "recommendation",
  "art": "mdae",
  "label": "WORKING PAPER / RECOMMENDATION",
  "title": "MDAE · 양측 콜드스타트 추천 논문",
  "subtitle": "마스킹 듀얼타워 오토엔코더로 인플루언서–제품 매칭",
  "date": "2026 · 작성 중",
  "status": "원고·실험·Figure 작업",
  "role": "원고·평가 검토 · 모델 설명 · 발표와 Figure",
  "tags": ["Masked Autoencoder", "Two-Tower", "BPR", "Cold-start"],
  "repo": null,
  "summary": "인플루언서와 제품 양측이 모두 신규인 콜드스타트 상황에서, 마스킹 듀얼타워 오토엔코더로 공유 표현을 학습해 매칭하는 추천 논문 작업입니다.",
  "sections": [
   ["연구 질문", "행동 로그가 거의 없는 신규 인플루언서와 신규 제품에도 텍스트·범주·수치 특성과 공유 투영으로 유효한 매칭 점수를 만들 수 있는지를 다룹니다."],
   ["제안 개요 · 원고 기준", "수치·범주·텍스트 특성을 인코딩하는 듀얼타워에 마스킹 오토인코더를 결합하고, 두 개의 공유 projection과 양방향 BPR로 인플루언서↔제품 선호를 함께 학습하는 구조입니다."],
   ["개인 기여", "한·영 원고 검토와 문단별 정리, 전처리·마스킹·공유 투영·양방향 BPR·평가 조건 설명, 모델 구조와 결과표 Figure 제작, 10분 발표와 패널토크 준비를 맡았습니다."],
   ["산출물", "영어·한국어 원고, 그림 후보 19개와 편집용 자료, 고유 참고 논문 67편의 조사 기록을 정리했습니다. Cold–Cold 평가와 공유 projection은 현재 원고 기준으로 구분해 과거 초안 수치와 합산하지 않았습니다."]
  ],
  "note": "작성 중인 논문입니다. 저자 순서·투고처·심사·게재 여부는 확정하지 않았고, 파일명에 특정 학술지가 있다는 사실만으로 투고·접수를 단정하지 않았습니다. 수집 자료 기준 요약이며 실험을 재실행하지 않았습니다.",
  "links": [],
  "kind": "research",
  "outcome_kind": "원고·Figure 작업",
  "outcome": "한·영 원고와 그림 후보 19개·참고 논문 67편 정리, 발표·패널토크 준비 · 투고·게재 미확정"
 },
 {
  "id": "feduf",
  "type": "recommendation",
  "art": "feduf",
  "label": "WORKING PAPER / FEDERATED UNLEARNING",
  "title": "FedUF · 연합 순차추천 언러닝 논문",
  "subtitle": "탈퇴 사용자·삭제 구매의 흔적을 지우는 언러닝",
  "date": "2026.10–11 · 작성 중",
  "status": "원고·실험·선행연구 검토",
  "role": "연구 자료·실험 결과 검토 · 문헌 조사 · 평가 해석",
  "tags": ["Federated Learning", "SASRec", "Machine Unlearning", "Membership Inference"],
  "repo": null,
  "summary": "연합 순차추천 모델에서 탈퇴한 사용자나 삭제된 구매의 흔적을 줄이는 언러닝(FedUF, Federated Uprooting of Footprints) 연구입니다. 삭제 사용자의 기울기로 고른 아이템 임베딩과 시퀀스 인코더를 함께 편집하고 남은 사용자로 보수 학습합니다.",
  "sections": [
   ["연구 질문", "중앙 서버가 원본 데이터를 보지 못하는 연합 환경에서, 특정 사용자·구매 흔적을 전체 재학습 없이 제거하면서 남은 사용자 성능을 지킬 수 있는지를 다룹니다."],
   ["제안 개요 · 원고 기준", "삭제 사용자의 기울기로 영향이 큰 아이템 임베딩 행을 고르고 시퀀스 인코더와 함께 편집한 뒤 남은 사용자로 보수적으로 재학습하는 흔적 기반 언러닝 절차입니다. 초기 원고 제목은 ‘Where Do Deleted Users Hide? …’이며 최종 제목은 미확정입니다."],
   ["개인 기여", "제안서·사전등록·MAIN/MAIN2 실험과 추가 공격·대조 자료를 검토하고, 타깃 외 선행연구 조사, 연합학습 라운드·epoch, 공격 AUC 해석 등 평가 해석을 정리했습니다."],
   ["평가 축 · 수치 비공개", "사용자 삭제 성공률, 망각까지의 정지 라운드, U-LiRA 같은 멤버십 추론 공격 AUC로 ‘잊었는지’를 측정하는 실험·분석이 있습니다. 구체 수치는 초안별로 달라 비공개 기록으로 두었고, 저장된 분석 보고서 기준이며 재실행하지 않았습니다."],
   ["남은 쟁점", "약한 망각 기준의 빠른 회복과 재학습 모델과의 구별 불가능성은 다릅니다. 강한 공격·추가 학습 후 재부상, 로컬 다중 스텝, 구매 한 건 삭제에서의 한계가 남아 있습니다."]
  ],
  "note": "작성 중인 논문입니다. 코드 작성 분담·저자 등재·순서·투고 여부는 확정하지 않았고, 과거 초안의 저자 표기를 현재 저자 명단으로 간주하지 않았습니다. 저장된 분석·원고 자료 기준 요약입니다.",
  "links": [],
  "kind": "research",
  "outcome_kind": "원고·실험 검토",
  "outcome": "제안·사전등록·실험·선행연구로 이어지는 자료 검토와 평가 해석 · 저장된 분석 기준, 투고·게재 미확정"
 },
 {
  "id": "recommendation",
  "type": "recommendation",
  "art": "research",
  "label": "GRAPH LEARNING / EXPERIMENTS",
  "title": "추천모델 재현과 적용",
  "subtitle": "행동 그래프와 텍스트를 매칭 도메인에 적용",
  "date": "2026 여름",
  "status": "재현 및 실험 기록",
  "role": "모델 재현 · 공통 실행기 · 임베딩 추론",
  "tags": [
   "HGIB",
   "BGE-M3",
   "RecBole-PJF",
   "Graph"
  ],
  "repo": "https://github.com/molba2see/hgib",
  "summary": "쇼핑몰과 인플루언서의 행동 신호를 추천모델 입력으로 구성하고 선행연구 모델의 도메인 적용과 베이스라인 비교를 진행했습니다.",
  "sections": [
   [
    "문제와 접근",
    "조회, 상세 확인, 지원, 홍보와 주문 등 여러 행동을 보조 그래프로 활용하고, 승인된 지원을 목표 신호로 다루는 매칭 문제입니다."
   ],
   [
    "구현 기록",
    "HGIB 저장소의 link_d 로더는 쇼핑몰을 사용자 노드, 인플루언서를 아이템 노드로 구성합니다. 소개·카테고리·제목·캡션·해시태그를 BGE-M3로 인코딩하고 통계 특성과 결합하는 경로가 구현되어 있습니다."
   ],
   [
    "베이스라인 실험",
    "RecBole-PJF 기반 저장소에 BPR, NeuMF, LightGCN 등의 실행 경로와 결과 CSV를 관리했습니다. 2026년 8월 10일 단일 실행에서 Test Recall@5는 BPR 0.2653, NeuMF 0.2097, LightGCN 0.2283으로 기록됐습니다."
   ],
   [
    "비공개 코드에서 확인한 확장",
    "HGIB·MBCGCN·RecBole을 공통 run.py에서 실행하도록 구성하고, MBCGCN 입력 변환과 RecBole atomic 파일 생성 경로를 정리했습니다. 별도 추론 모듈에서는 인플루언서와 상품의 수치·범주·텍스트 특성을 결합해 MaskedAEEncoder의 임베딩을 산출하는 함수를 제공합니다."
   ],
   [
    "연구 자료 정리",
    "MDAE 관련 원고 검토, 참고 논문 리서치, 모델 구조와 결과표의 Figure 제작 자료를 관리했습니다. 현재 원고와 이전 설계의 차이를 문서로 구분했습니다. 논문 조사·시각화 작업 기록이며, 저자 등재나 게재 성과가 확인된 상태는 아닙니다."
   ],
   [
    "평가의 범위",
    "저장소 기본 설정은 사용자별 80/10/10 무작위 분할, uni20 샘플링 평가, seed 2020, Recall@5 기반 모델 선택입니다. 실행 시 설정이 덮어써질 수 있어 단일 실행 결과를 다른 실험 조건이나 전체 후보 랭킹과 직접 비교하지 않습니다."
   ],
   [
    "다음 연구 질문",
    "신규 인플루언서와 시간 순서 분할에서도 텍스트·그래프 결합의 이득이 유지되는지 검증하고 싶습니다. 행동 채널과 특성을 각각 제거하는 실험, 반복 시드의 평균 및 분산 보고를 계획하고 있습니다."
   ]
  ],
  "note": "HGIB와 MBCGCN은 선행연구 코드 기반 재현·적용 프로젝트입니다. 원 논문의 모델 제안이나 게재 실적을 개인 성과로 주장하지 않습니다.",
  "links": [
   [
    "HGIB 코드",
    "https://github.com/molba2see/hgib"
   ],
   [
    "결과 CSV",
    "https://github.com/molba2see/RecBole/blob/main/results/full_run_retry/model_results.csv"
   ],
   [
    "기본 평가 설정",
    "https://github.com/molba2see/RecBole/blob/main/recbole_pjf/properties/overall.yaml"
   ],
   [
    "통합 모델 실행 코드 · 비공개",
    "https://github.com/molba2see/model_inference"
   ],
   [
    "임베딩 추론 모듈 · 비공개",
    "https://github.com/molba2see/inference"
   ],
   [
    "연구·Figure 작업 자료 · 비공개",
    "https://github.com/molba2see/lafd2"
   ]
  ],
  "kind": "research",
  "outcome_kind": "재현 · 실험 관리",
  "outcome": "HGIB 도메인 적용, 3개 베이스라인 결과 비교와 공통 실행·추론 경로 구성"
 },
 {
  "id": "persona",
  "type": "language",
  "art": "language",
  "label": "LANGUAGE MODELS / POST-TRAINING",
  "title": "페르소나 파인튜닝",
  "subtitle": "서로 다른 대화 페르소나를 유지하는 모델",
  "date": "2025.06–08",
  "status": "5인 팀 · 최종 발표",
  "role": "일부 페르소나 학습 전담 · 최종 발표",
  "tags": [
   "Ko-gemma",
   "LoRA",
   "SFT",
   "DPO"
  ],
  "repo": null,
  "summary": "멀티턴 대화에서 두 페르소나를 일관되게 유지하도록 학습하며, 프롬프트와 SFT·DPO 조건을 비교했습니다.",
  "sections": [
   [
    "개인 기여",
    "일부 페르소나의 파인튜닝을 전담하고 GPU 기반 학습·추론·평가의 흐름을 경험했습니다. 관련 논문 7편과 선행연구 코드를 학습했으며 최종 발표 대본 작성과 발표를 맡았습니다."
   ],
   [
    "팀의 학습 설계",
    "AI Hub 한국어 대화를 정제하고 GPT-4o mini로 페르소나별 응답을 생성해 chosen/rejected 선호쌍을 구성했습니다. Ko-gemma 기반의 두 페르소나와 세 학습 조건을 조합한 6개 모델을 비교했습니다."
   ],
   [
    "평가 기록",
    "팀 발표 기록상 8:1:1 분할과 1,500개 평가 사례를 사용했습니다. GPT-4o mini 평가에 문맥·논리 30%, 문법 10%, 컨셉 유지 60%를 적용했고, 추론 예제 5세트에 대해 사람의 순위 평가도 진행했습니다."
   ],
   [
    "관찰과 다음 검증",
    "팀 내부 평가에서 최종 채택 모델이 가장 좋은 총점과 평균 순위를 얻었다고 보고했습니다. 데이터의 과제 적합도가 중요하다는 문제의식을 얻었습니다. 후속 실험에서는 평가자 편향과 응답 길이·제시 순서 효과, 새로운 질문과 긴 대화의 일반화를 검증하고자 합니다."
   ]
  ],
  "note": "평가 설계와 결과는 팀의 기록입니다. 사람 평가의 응답자 수와 원점수에 대한 확인 없이 개선율을 제시하지 않았습니다.",
  "links": [
   [
    "발표 및 학습 기록",
    "https://app.notion.com/p/e389082a41fc8357ad3201fa4a604413"
   ]
  ],
  "kind": "project",
  "outcome_kind": "팀 비교 실험",
  "outcome": "두 페르소나 × 세 학습 조건의 6개 모델 비교 · 일부 모델 학습과 최종 발표 담당"
 },
 {
  "id": "ppc",
  "type": "language",
  "art": "financial",
  "label": "PERSONALIZATION / GENERATION",
  "title": "Personal Port Color",
  "subtitle": "사용자 성향에 따른 금융 보고서 생성",
  "date": "2025",
  "status": "4인 팀장 · 컨퍼런스",
  "role": "크롤링 · 파인튜닝 · 시연 · 발표 주도",
  "tags": [
   "LLaMA",
   "PEFT",
   "RAG",
   "Crawling"
  ],
  "repo": "https://github.com/molba2see/Personal-Port-Color",
  "summary": "보유 종목과 수량으로 투자 성향을 분류하고, 뉴스와 재무 정보를 연결해 종목별 보고서를 생성하는 서비스입니다.",
  "sections": [
   [
    "개인 기여",
    "LLM 팀장으로 크롤링 파이프라인, 파인튜닝, 시연 사이트 제작과 컨퍼런스 발표를 주도했습니다. 4인 팀에서 성향 분류·데이터 수집·보고서 생성을 시연 가능한 형태로 연결했습니다."
   ],
   [
    "데이터와 모델",
    "Nasdaq100 티커 기반 Yahoo Finance 뉴스·재무 정보를 수집하고 뉴스 본문을 GPT API로 요약해 벡터 DB에 저장했습니다. 변동성, 최대 낙폭, 시장 민감도와 산업 집중도 지표를 성향 분류에 활용했습니다."
   ],
   [
    "결과",
    "Llama-3-8B-Instruct를 기반으로 성향·기업 정보·뉴스를 입력하고 보고서 구조를 지정했습니다. 안정형·중립형·공격형 입력을 시연했고, D&A·X:AI·WINK 연합 컨퍼런스에서 발표했습니다."
   ],
   [
    "연구로 확장할 질문",
    "수치와 인용 근거의 일치, 성향 조건의 준수와 뉴스 시점의 적절성을 별도로 평가하고자 합니다. 베이스 모델, 파인튜닝 모델, 검색 결합 모델을 동일 조건에서 비교하면 검색과 학습의 기여를 분리할 수 있습니다."
   ]
  ],
  "note": "제한된 기업 범위의 보고서 생성에 집중한 프로젝트이며, 투자 수익률 개선이나 금융 판단의 정확도를 검증한 결과는 아닙니다.",
  "links": [
   [
    "프로젝트 코드",
    "https://github.com/molba2see/Personal-Port-Color"
   ],
   [
    "최종 발표 PDF",
    "https://drive.google.com/file/d/1_7gyQNyCLge4HwthdG3da3VPoyUkFMX1/view"
   ]
  ],
  "kind": "project",
  "outcome_kind": "서비스 시연 · 발표",
  "outcome": "성향별 종목 보고서 생성 시연 · 4인 팀장으로 연합 컨퍼런스 발표"
 },
 {
  "id": "sign",
  "type": "language",
  "art": "sign",
  "label": "ACCESSIBILITY / LANGUAGE & MOTION",
  "title": "한국수어 AI",
  "subtitle": "한국어에서 글로스로, 글로스에서 동작으로",
  "date": "2026",
  "status": "진행 중",
  "role": "언어·모션 실험 파이프라인 구축",
  "tags": [
   "ke-t5",
   "LoRA",
   "VQ-VAE",
   "KSL"
  ],
  "repo": "https://github.com/molba2see/adv-pj-a",
  "summary": "한국어 글로스 변환과 동작 생성을 분리해 다루는 접근성 프로젝트입니다. 검색과 학습 경로를 비교할 파이프라인을 구축하고 있습니다.",
  "sections": [
   [
    "활동과 관심의 연결",
    "2024년부터 수어동아리 손말사랑회에서 활동하고, 2025년부터 2년 임기의 부회장을 맡고 있습니다. 수어 동아리 활동과 한국수어 AI 프로젝트 경험을 함께 소개합니다."
   ],
   [
    "연구 목표",
    "한국어의 의미를 수어 글로스와 동작으로 연결하고자 합니다. 언어 단계의 단어 선택·어순과 모션 단계의 신체·손 표현을 각각 검증하는 것이 목표입니다."
   ],
   [
    "언어 모듈",
    "KETI-AIR/ke-t5-small 전체 SFT·LoRA 경로와 사전·유사 예시·문법서 RAG를 구성했습니다. 문법 자질 기반 검색, 동일 원문 그룹 분할과 유사 예시 제외 조건이 코드에 포함되어 있습니다."
   ],
   [
    "모션 모듈",
    "수어 데이터용 VQ-VAE 및 T5 LoRA 학습·추론 경로가 있습니다. 기본 표현은 신체와 양손 67개 키포인트이며 2D 또는 3D 좌표 배열을 출력합니다."
   ],
   [
    "검증 계획",
    "WER, Exact Match와 token-F1으로 글로스의 어휘·어순 오류를 분석하고, 검색 없음·사전·예시·문법·전체 조건을 비교하고자 합니다. 수어 사용자 검토를 통해 동작의 의미 전달도 평가하고 싶습니다."
   ]
  ],
  "note": "코드와 실험 파이프라인을 구축하는 단계입니다. 글로스 정확도 향상이나 완성된 수어 아바타 서비스의 성과로 제시하지 않습니다.",
  "links": [
   [
    "언어 파이프라인",
    "https://github.com/molba2see/adv-pj-a/blob/main/llm/README.md"
   ],
   [
    "모션 학습 경로",
    "https://github.com/molba2see/adv-pj-a/blob/main/avatar/SIGN_MOTION_LORA.md"
   ]
  ],
  "kind": "project",
  "outcome_kind": "파이프라인 구축 · 진행 중",
  "outcome": "글로스 SFT·LoRA·RAG 및 모션 학습 경로 구축 · 성능 검증 진행 전"
 },
 {
  "id": "customs",
  "type": "language",
  "art": "customs",
  "label": "DOMAIN ADAPTATION / UX",
  "title": "HS코드 분류 챗봇",
  "subtitle": "관세 도메인 데이터를 활용한 분류 지원",
  "date": "2025.04–07",
  "status": "경진대회 프로젝트",
  "role": "LLM 파인튜닝 · UX 설계",
  "tags": [
   "Fine-tuning",
   "Domain Data",
   "UX"
  ],
  "repo": null,
  "summary": "품목 설명에서 HS코드를 분류하도록 언어모델을 조정하고, 비전공자도 사용할 수 있도록 입력과 경험을 설계했습니다.",
  "sections": [
   [
    "문제 정의",
    "품목을 분류하려면 방대한 법 조항과 판례를 참고해야 합니다. 사용자의 자연어 설명을 바탕으로 분류를 돕는 서비스를 기획했습니다."
   ],
   [
    "개인 기여",
    "관세청 공공데이터 활용 경진대회 프로젝트에서 법 조항·판례를 활용한 LLM 파인튜닝과 UX 설계를 맡아 챗봇을 완성했습니다."
   ],
   [
    "공공데이터 기반 서비스 설계",
    "관세청 HS 부호, 환율, 품목별 수출입 수량·금액 데이터를 연결해 HS코드 추정, 예상 원가 산출과 수입 추세 비교를 제공하는 서비스를 기획했습니다. 노션 역할표에서는 BERT 계열 및 발전형 모델의 선행연구 조사를 맡은 것으로 확인됩니다. 원가·추세 비교는 기획 범위이며 모두 구현된 기능으로 제시하지 않습니다."
   ],
   [
    "연구 확장",
    "HS코드 계층별 분류 정확도와 근거 문서 일치 여부를 평가하고 싶습니다. 입력이 불충분할 때 추가 질문을 생성하거나 판단을 유보하는 절차도 연구할 수 있습니다."
   ]
  ],
  "note": "프로젝트 참여와 구현 경험을 소개합니다. 확인되지 않은 정량 성능이나 경진대회 수상 실적은 추가하지 않았습니다.",
  "links": [
   [
    "기획 및 데이터 검토 기록",
    "https://app.notion.com/p/1cb9082a41fc80188c2ef70021208e59"
   ],
   [
    "공공데이터 서비스 설계",
    "https://app.notion.com/p/a119082a41fc82cc8da3016e825dbb72"
   ]
  ],
  "competition": true,
  "kind": "project",
  "outcome_kind": "챗봇 구현",
  "outcome": "HS코드 분류 지원 챗봇 완성 · 파인튜닝과 UX 담당"
 },
 {
  "id": "os",
  "type": "software",
  "art": "software",
  "label": "SOFTWARE / STRUCTURED RECORDS",
  "title": "Portfolio OS",
  "subtitle": "프로젝트와 활동을 재사용 가능한 데이터로",
  "date": "개인 프로젝트",
  "status": "개발 중",
  "role": "포트폴리오 데이터 모델 · API",
  "tags": [
   "FastAPI",
   "SQLAlchemy",
   "SQLite"
  ],
  "repo": "https://github.com/molba2see/portfolio-os",
  "summary": "포트폴리오 정보를 구조화하고 여러 문서 형식에 재사용하기 위한 개인 개발 프로젝트입니다.",
  "sections": [
   [
    "현재 구현 범위",
    "README 기준 FastAPI·SQLAlchemy 2·SQLite 기반 프로젝트, 활동, 교육, 스킬 등의 CRUD API를 제공합니다. 공통 태그·타임스탬프와 상태 확인 및 대시보드 요약 엔드포인트가 포함되어 있습니다."
   ],
   [
    "설계 방향",
    "데이터 모델과 서비스 계층을 분리해 여러 출력 형식이 같은 정보를 재사용하는 방향을 다룹니다."
   ],
   [
    "후속 개발 계획",
    "GitHub·Notion 연동과 README·CV 자동 생성은 후속 개발 계획으로 구분되어 있습니다."
   ]
  ],
  "note": "구현된 API와 예정된 연동·생성 기능을 구분한 개발 프로젝트입니다.",
  "links": [
   [
    "프로젝트 코드",
    "https://github.com/molba2see/portfolio-os"
   ]
  ],
  "kind": "project",
  "outcome_kind": "API 구현",
  "outcome": "프로젝트·활동·교육 데이터 CRUD와 대시보드 요약 API 구현"
 },
 {
  "id": "weather",
  "type": "analysis",
  "art": "research",
  "label": "DATA ANALYSIS / EXPERIMENTS",
  "title": "날씨 빅데이터 콘테스트",
  "subtitle": "기상 데이터로 일별 119 신고 수요 예측",
  "date": "2025.05–06",
  "status": "대회 참여 · 팀 모델 채택",
  "role": "LightGBM 실험 · 튜닝 · 분석 방법 정리",
  "tags": [
   "LightGBM",
   "Feature Selection",
   "Tuning",
   "RMSE"
  ],
  "repo": null,
  "summary": "기상청 기상 데이터와 부산 지역 119 신고 데이터를 결합해 신고 건수를 예측한 팀 프로젝트입니다.",
  "sections": [
   [
    "문제와 데이터",
    "기온·강수·풍속·습도 등 기상 요인과 지역·신고 유형 정보를 사용해 일별 신고 수요를 예측하고, 소방 자원 배치에 활용할 수 있는 분석을 목표로 했습니다."
   ],
   [
    "개인 기여",
    "작성자가 이은진으로 등록된 Random Forest, 딥러닝, LightGBM 튜닝 실험 기록이 있습니다. 최종 공모안에서는 분석 방법 부분을 담당했으며, 변수 선택과 하이퍼파라미터 탐색 및 최종 LightGBM 학습 과정을 정리했습니다."
   ],
   [
    "기록된 결과",
    "2025년 6월 10일 LightGBM 튜닝 항목에 실제 RMSE 0.77과 채택 표시가 있습니다. 팀 최종 공모안에는 RMSE 0.76으로 기재돼 있어 두 기록을 구분합니다. 원본 제출 결과를 재검증한 수치는 아닙니다."
   ],
   [
    "검증에서 배운 점",
    "무작위 검증과 미래 시점 예측의 차이, 범주형 인코딩과 변수 선택 과정의 누수 여부를 점검하는 것이 중요합니다. 남겨진 코드의 인코딩 단계에는 추가 확인이 필요해 일반화가 입증됐다고 단정하지 않습니다."
   ]
  ],
  "note": "RMSE는 노션에 저장된 실험 기록입니다. 최종 순위·수상과 공식 평가 점수는 확인되지 않았습니다.",
  "links": [
   [
    "대회 작업 공간",
    "https://app.notion.com/p/1fd9082a41fc8071beb5e16cb2684cf5"
   ],
   [
    "본인 LightGBM 실험",
    "https://app.notion.com/p/20e9082a41fc80ad8e3cd814644430ed"
   ]
  ],
  "competition": true,
  "kind": "project",
  "outcome_kind": "저장된 실험 · 팀 채택",
  "outcome": "본인 LightGBM 튜닝 기록 RMSE 0.77 · 팀 채택 표시"
 },
 {
  "id": "shipping",
  "type": "analysis",
  "art": "research",
  "label": "DATA ANALYSIS / EXPERIMENTS",
  "title": "스마트 해운물류 AI 챌린지",
  "subtitle": "이상신호 감지 기반 비정상 작동 진단",
  "date": "2025.09",
  "status": "대회 참여 · 4인 팀",
  "role": "RF·MLP·TabNet·FT-Transformer 실험",
  "tags": [
   "Tabular ML",
   "Macro-F1",
   "TabNet",
   "FT-Transformer"
  ],
  "repo": null,
  "summary": "센서 특성으로 21개 작동 상태를 분류하는 문제를 다루고, 트리 모델과 신경망의 검증·제출 결과를 비교했습니다.",
  "sections": [
   [
    "개인 기여",
    "노션 사용자와 실험 작성자를 대조해 본인 실험을 확인했습니다. RF와 Grid Search, 팀원의 피처 엔지니어링을 활용한 MLP 튜닝, TabNet의 폴드 선택, FT-Transformer 시드 변경 실험을 기록했습니다."
   ],
   [
    "실험 결과",
    "본인 MLP 기록에는 eval 0.8565와 public 0.81058이 남아 있습니다. TabNet 단일 Fold 2 실험은 eval 0.8625, public 0.80127로 기록됐습니다. 각각 검증값과 공개 평가 기록이며 최종 성적이 아닙니다."
   ],
   [
    "관찰",
    "검증 점수가 더 높은 단일 폴드를 제출해도 공개 점수는 낮아질 수 있었습니다. 폴드 선택과 앙상블, 시드의 변화가 실제 일반화에 미치는 영향을 비교하는 경험을 쌓았습니다."
   ]
  ],
  "note": "팀원의 모델과 피처 설계를 모두 개인 성과로 계산하지 않았습니다. 일부 노션 첨부 블록은 읽을 수 없어 해당 구현의 세부 사항은 확정하지 않았습니다.",
  "links": [
   [
    "대회 작업 공간",
    "https://app.notion.com/p/2679082a41fc80b39633feb961498dd3"
   ],
   [
    "본인 MLP 기록",
    "https://app.notion.com/p/2719082a41fc80e79345d070ad79930a"
   ],
   [
    "본인 TabNet 기록",
    "https://app.notion.com/p/2739082a41fc8027af57fcb74a78952e"
   ]
  ],
  "competition": true,
  "kind": "project",
  "outcome_kind": "저장된 제출 실험",
  "outcome": "본인 MLP 기록 public 0.81058 · 폴드·시드별 검증과 제출 점수 비교"
 },
 {
  "id": "kopis",
  "type": "recommendation",
  "art": "research",
  "label": "RECOMMENDATION / DESIGN",
  "title": "KOPIS 빅데이터 공모전",
  "subtitle": "대형 공연과 소규모 공연을 연결하는 패스권",
  "date": "2025.07",
  "status": "제5회 공모전 · 제안 설계",
  "role": "배경·필요성 · 데이터 활용·분석 방법 설계",
  "tags": [
   "KOPIS",
   "Text Embedding",
   "Clustering",
   "Service Design"
  ],
  "repo": null,
  "summary": "공연예술통합전산망 데이터를 이용해 앵커 공연과 인근 서브 공연을 묶는 문화예술 패스 서비스를 제안했습니다.",
  "sections": [
   [
    "개인 기여",
    "7월 30일 최종 회의 문서에서 은진 담당으로 표시된 배경 및 필요성, 분석·개발 결과 도출 방법을 정리했습니다. 공연 데이터 필드의 활용, 임베딩·군집화와 패키지 구성의 분석 흐름을 설계했습니다."
   ],
   [
    "서비스 설계",
    "공연명·장르·출연진 정보를 임베딩하고, KMeans로 테마를 묶은 뒤 DBSCAN으로 위치 제약을 고려하는 접근을 제안했습니다. 앵커 공연 전후 3일과 반경 40km 조건으로 서브 공연을 연결하는 구조입니다."
   ],
   [
    "제안 범위와 연구 질문",
    "LSTM·TFT 수요 예측과 강화학습 가격 설정은 제안서의 후속 설계입니다. 실제 구현·성능 결과로 표시하지 않습니다. 인기 공연과 소규모 공연을 연결하면서 수요와 문화 접근성을 함께 고려하는 추천 문제에 관심을 가졌습니다."
   ]
  ],
  "note": "최종 회의의 제안 문서를 근거로 합니다. 완성된 서비스, 매출 개선이나 수상 결과는 확인되지 않았습니다.",
  "links": [
   [
    "공모전 기록",
    "https://app.notion.com/p/22d9082a41fc80339519c256a93cd5f6"
   ],
   [
    "최종 제안·개인 담당 부분",
    "https://app.notion.com/p/23a9082a41fc80beb740c3db7db429fd"
   ]
  ],
  "competition": true,
  "kind": "project",
  "outcome_kind": "서비스 제안",
  "outcome": "공연 패스권 제안서의 배경·필요성과 분석 방법 설계 · 구현 성과와 구분"
 },
 {
  "id": "agent",
  "type": "language",
  "art": "language",
  "label": "AI SYSTEMS / WORKFLOWS",
  "title": "라프디 AI 에이전트",
  "subtitle": "추천·문서 검색·제안서 생성의 워크플로우",
  "date": "2026.08",
  "status": "구현 기록 · 코드 비공개",
  "role": "추천 추론 통합 · 에이전트 워크플로우",
  "tags": [
   "Django",
   "RAG",
   "Recommendation",
   "Workflow"
  ],
  "repo": "https://github.com/molba2see/lafd",
  "summary": "상품 추천과 브랜드 문서 검색, 제안서 생성이 연결되는 AI 워크플로우를 구성한 개발 프로젝트입니다.",
  "sections": [
   [
    "코드와 기여 근거",
    "개인 저장소 lafd와 조직 저장소 lafd-ai-agent에서 본인 커밋 및 공통 구현을 확인했습니다. 두 저장소는 연관된 작업으로 묶고 별도 프로젝트 실적으로 중복 계산하지 않습니다."
   ],
   [
    "구현 범위",
    "플래너, 추천·제안서 서비스, 브랜드 문서 검색과 워크플로우 실행 경로가 있습니다. Django ORM과 분리된 데이터베이스 라우터, React 화면과 배포 구성을 문서화했습니다."
   ],
   [
    "추천과 서비스의 연결",
    "기존 예측 점수를 조회하고, 신규 상품은 임베딩·유사도 검색 경로로 처리하도록 구성했습니다. 제품별 점수와 수행 시간을 기록하고, 사용자가 선택한 추천 결과를 제안서 생성으로 연결하는 흐름을 다뤘습니다."
   ],
   [
    "연구로 확장할 질문",
    "추천의 품질과 생성 문서의 근거 일치, 실행 실패와 승인 흐름을 각각 평가하고 싶습니다. 연구 모델을 서비스에 넣을 때 필요한 상태 관리와 설명 가능성에 관심이 있습니다."
   ]
  ],
  "note": "비공개 코드의 구조와 커밋을 근거로 기능을 요약했습니다. 고객 데이터·내부 문서·메일 내용은 포함하지 않았으며 운영 성능은 검증하지 않았습니다.",
  "links": [
   [
    "개인 개발 코드 · 비공개",
    "https://github.com/molba2see/lafd"
   ],
   [
    "조직 프로젝트 · 비공개",
    "https://github.com/yujalabs-dev/lafd-ai-agent"
   ]
  ],
  "competition": false,
  "kind": "project",
  "outcome_kind": "워크플로우 구현",
  "outcome": "추천·브랜드 문서 검색·제안서 생성과 실행 상태 관리 경로 통합"
 },
 {
  "id": "music",
  "type": "analysis",
  "art": "sign",
  "label": "DATA ANALYSIS / EXPERIMENTS",
  "title": "모여락 · 음악 분석과 합주 피드백",
  "subtitle": "곡별 악기 특징에서 합주 구간 피드백까지",
  "date": "2026.08–10",
  "status": "팀 프로젝트 · 코드 비공개",
  "role": "보컬·베이스 분석 · 통합·피드백 구현 기록",
  "tags": [
   "Demucs",
   "librosa",
   "DTW",
   "Basic Pitch",
   "Parallel Processing"
  ],
  "repo": "https://github.com/D-X-W-Service-2/moyeorock-ai",
  "summary": "악기별 음악 특징을 곡 단위로 통합하고, 원곡과 합주 녹음의 차이를 시간대별 확인 후보로 제공하는 프로젝트입니다. 처리 속도와 변화 탐지를 실험하고, 정렬이 불확실한 경우에는 판단을 보류하도록 설계했습니다.",
  "sections": [
   [
    "프로젝트 목표",
    "밴드의 곡 선택과 합주 연습을 연결하고자 합니다. 곡의 악기별 특징과 난이도 후보를 추천 입력으로 제공하고, 합주 뒤에는 다시 들어볼 구간과 근거를 제시합니다. 추천과 합주 피드백은 별도 파이프라인으로 다룹니다."
   ],
   [
    "개인 기여와 확인 범위",
    "GitHub의 eunjin 디렉터리와 본인 커밋에서 보컬·베이스 전처리와 특징 추출을 확인했습니다. 이후 conference의 작업 폴더에서 다섯 악기 통합 전처리, 속도 최적화, 합주 피드백 시제품과 발표 자료를 확인했습니다. 후속 작업은 프로젝트 구현 기록으로 소개합니다."
   ],
   [
    "다섯 악기 통합 전처리",
    "보컬·베이스·드럼·건반·기타 결과를 song_features_v1 JSON으로 통합합니다. Demucs 6-stem 분리를 한 번 수행해 공유하고 독립 분석을 병렬 실행합니다. 악기별 실패 상태와 계산에 사용한 특징을 남기며, 검수가 필요한 건반 후보는 난이도 추천 입력에서 제외합니다."
   ],
   [
    "속도 최적화와 실측",
    "동일한 2분 14초 음원에서 처리 시간이 132초에서 35.4초로 줄었습니다. RTX A5000과 CPU 8코어, 가중치 캐시가 준비된 환경의 각 1회 측정입니다. 네 분석에 각각 2 CPU 스레드를 배분해 경합을 줄였습니다. 전체 곡 평균은 아니며, 4-stem에서 6-stem으로 바뀌면서 특징값 차이도 발생해 별도 검증이 필요합니다."
   ],
   [
    "합주 피드백 시제품",
    "영상에서 오디오를 추출하고 chroma·DTW로 원곡과 합주를 정렬합니다. MFCC·RMS·시간 맵·onset과 stem 상대 에너지로 음 구성, 누락, 박자와 밸런스 차이 후보를 찾고, 선택적으로 Basic Pitch ONNX 음표 후보를 교차 확인합니다. 결과에는 원곡·합주 시간대와 근거 수치가 포함됩니다."
   ],
   [
    "실패 분석과 판단 보류",
    "라이브 버전 비교에서 시간 정렬이 한 지점에 몰리며 후보 28개가 생성된 사례를 확인했습니다. 정렬 품질 조건을 추가해 review_required로 보류합니다. 동일 음원의 피아노 음표 오탐에는 독립적인 음향 차이가 같은 구간에 있을 때만 후보를 표시하는 조건을 적용했습니다. 후보가 없다는 결과와 연주가 정확하다는 판단을 구분했습니다."
   ],
   [
    "통제 평가 결과",
    "개발에 사용하지 않은 3곡의 30초 구간에 음 대체 3건, 무음 3건, 220ms 박자 이동 3건, 기타 증폭 2건을 주입해 11건을 탐지했습니다. 성공 기준은 기대 유형의 후보가 정답 구간과 1초 이상 겹치는 것입니다. 동일 음원 비교 3건에서는 후보가 없었습니다. 보고서를 원시 평가 JSON의 요약과 대조했습니다."
   ],
   [
    "서비스 연결과 다음 검증",
    "합주 업로드 API, 비동기 작업, 영상 타임라인 화면과 연주자 피드백 수집은 후속 계획입니다. 실제 밴드 녹음의 정렬 오차·악기별 오탐률·조언 유용성, 파인튜닝 전후 추천 성능을 검증해야 합니다. 영상의 시각적 연주 동작 분석은 현재 포함되지 않습니다."
   ]
  ],
  "note": "11/11은 인위적 변화에 대한 작은 통제 평가이며 실제 합주 정확도가 아닙니다. 난이도 점수는 휴리스틱으로 사람의 정답 라벨 검증 전입니다. 서버의 후속 파일은 아직 GitHub에 올라가지 않아 아래 링크에는 초기 개인 분석 코드만 보일 수 있습니다.",
  "links": [
   [
    "본인 음악 분석 코드 · 비공개",
    "https://github.com/D-X-W-Service-2/moyeorock-ai/tree/main/eunjin"
   ]
  ],
  "competition": false,
  "metrics": [
   [
    "132 → 35.4초",
    "한 곡 전처리 · 동일 입력"
   ],
   [
    "11 / 11",
    "주입한 변화 탐지 · 보지 않은 3곡"
   ],
   [
    "3 / 3",
    "동일 음원에서 후보 없음"
   ]
  ],
  "kind": "project",
  "outcome_kind": "실측 · 통제 평가",
  "outcome": "한 곡 전처리 132→35.4초 · 인위적 변화 11/11 탐지, 실제 합주 정확도 미평가"
 },
 {
  "id": "moa",
  "type": "software",
  "art": "moa",
  "label": "LOCAL AI AGENT / FILE WORKFLOW",
  "title": "모아 · 파일 라이프사이클 에이전트",
  "subtitle": "아이폰 캡처와 강의자료를 맥에서 정리하는 로컬 에이전트",
  "date": "2026 가을",
  "status": "팀 프로젝트 · 시연 구현",
  "role": "파일 분류 흐름 · Mac 에이전트와 웹 연동",
  "tags": ["Qwen3-1.7B", "macOS Vision", "Django", "iCloud Drive"],
  "repo": "https://github.com/molba2see/KCC_agent",
  "summary": "다운로드와 캡처 파일을 내용·출처·폴더 지침으로 분류하고, 사용자의 승인과 되돌리기를 연결하는 macOS 로컬 에이전트 및 웹 화면입니다.",
  "sections": [
   ["문제 정의", "강의자료, 아이폰 캡처, 설치 파일이 다운로드와 바탕화면에 쌓일 때 필요한 자료를 찾기 어렵습니다. 파일마다 내용을 확인하고 정리해야 하는 반복 작업을 줄이고자 했습니다."],
   ["구현 흐름", "iCloud로 들어온 캡처는 macOS Vision OCR과 Qwen3-1.7B로 이름을 정하고, 폴더별 지침과 문서 본문·다운로드 출처를 바탕으로 분류합니다. 처음 보는 강의실은 사용자에게 목적 폴더를 물은 뒤 규칙으로 기억합니다."],
   ["승인과 복구", "애매한 파일은 모아서 물어보고, 이동과 설치 파일 보관은 기록을 남겨 되돌릴 수 있게 했습니다. 웹은 Django API와 Mac 브리지를 통해 분류 대기, 명령 기록, 복구 상태를 보여 줍니다."],
   ["설계에서 배운 점", "파일 속 지시문을 실행 지침으로 받아들이지 않도록 입력을 검증하고, 모델이 직접 삭제나 셸 명령을 수행하지 않게 권한을 나눴습니다. 모델 판단과 사람이 확인할 수 있는 실행 기록을 함께 다루는 경험이었습니다."]
  ],
  "note": "저장소의 구현 및 시연 문서를 기준으로 정리했습니다. 실제 Mac 폴더와 iCloud 계정은 연결·권한 설정이 필요하며, 서비스 규모의 운영 성능은 주장하지 않습니다.",
  "links": [["프로젝트 코드와 시연", "https://github.com/molba2see/KCC_agent"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "에이전트 시연",
  "outcome": "캡처·강의자료 분류, 사용자 승인과 되돌리기, 웹 상태 연결"
 },
 {
  "id": "hymate",
  "type": "software",
  "art": "vehicle",
  "label": "VEHICLE APP / CONTEXTUAL FEEDBACK",
  "title": "Hy! mate · 초보운전 동승 코치",
  "subtitle": "차량 신호와 실도로 경로를 이용한 운전 연습 앱",
  "date": "2026.11",
  "status": "5인 팀 · 차량용 앱 구현",
  "role": "앱 개발 · 차량 신호 기반 판정과 화면 구현",
  "tags": ["Kotlin", "Jetpack Compose", "Pleos Vehicle SDK", "OSRM"],
  "repo": "https://github.com/molba2see/Hymate",
  "summary": "초보운전자가 혼자 운전할 때 차량 조작을 조용히 확인하고, 정차 중 피드백과 주차 후 리포트로 학습할 수 있도록 만든 차량용 앱입니다.",
  "sections": [
   ["문제 정의", "운전 연습에서 동승자의 조언이 사라지면 어떤 조작을 잘했는지, 놓쳤는지 알기 어렵습니다. 주행 중 화면 조작을 요구하지 않고 차량 데이터로 연습을 돕는 방식을 택했습니다."],
   ["개인 기여", "5인 팀에서 앱 개발을 맡아 Kotlin·Jetpack Compose 화면과 차량 신호를 이용한 기능 구현에 참여했습니다. 기획·PO·PM 등 팀 역할과 구분해 기록합니다."],
   ["주행과 피드백", "OSRM과 OpenStreetMap으로 실제 도로 경로를 탐색하고 회전·합류 지점을 판정에 연결했습니다. 방향지시등, 전조등, 와이퍼, 차속 등 수신 가능한 신호를 읽고, 정차 중 한 건의 음성 피드백과 주차 후 근거가 있는 리포트를 제공합니다."],
   ["안전과 평가 범위", "주행 중에는 화면과 음성 개입을 제한합니다. 차량이 알 수 없는 상황이나 지원하지 않는 신호는 추측해 실패로 판정하지 않고 자가 확인으로 넘기며, 오판은 이의를 제기할 수 있도록 설계했습니다."]
  ],
  "note": "Pleos Connect Emulator에서 차량 신호를 조작하며 시연하는 프로젝트입니다. 실제 도로 주행이나 운전자 행동 개선 효과를 검증한 결과로 소개하지 않습니다.",
  "links": [["앱 코드와 화면", "https://github.com/molba2see/Hymate"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "차량용 앱 구현",
  "outcome": "실도로 경로, 차량 신호 판정, 정차 피드백과 주행 리포트 구현"
 },
 {
  "id": "musicrec",
  "type": "recommendation",
  "art": "musicrec",
  "label": "RECOMMENDATION / MUSIC",
  "title": "모여락 · 곡과 팀원 추천",
  "subtitle": "곡 특성과 멤버 장르·악기를 잇는 규칙·MDAE 추천",
  "date": "2026.11 · 작업 브랜치",
  "status": "규칙 기반 API · MDAE 실험",
  "role": "음악 추천 로직 · API · 추천 실험 기록",
  "tags": ["CLAP", "MDAE", "Two-Tower", "FastAPI"],
  "repo": "https://github.com/D-X-W-Service-2/moyeorock-ai",
  "summary": "곡의 특성과 멤버의 장르·악기 선호를 연결해 개인 곡·팀 곡·팀원을 추천하는 API와, masked two-tower(MDAE) 음악 추천 실험 기록입니다.",
  "sections": [
   ["작업 범위", "기본 main 외 AI 작업 브랜치의 추천 API 문서와 mdae_music 실험 README를 확인했습니다. 25,062곡 장르 후보와 25,056곡 임시 난이도 특징을 추천 입력으로 다룹니다."],
   ["추천 방식", "개인 곡·팀 곡·팀원 추천 API의 기본 순위는 규칙 방식이고, MDAE(마스킹 듀얼타워)는 실험 경로로 둡니다. 두 경로를 분리해 다뤘습니다."],
   ["평가 범위", "2,000명 프로필과 행동 기록은 합성 자료이고, v1·v2·300 epoch 결과는 서로 다른 조건의 개발 점검입니다. 실제 사용자 추천 성능으로 쓰지 않았고, 현재 문서는 여러 조건에서 규칙 방식이 더 높다고 설명합니다."]
  ],
  "note": "작업 브랜치의 최신 문서로 정리했습니다. main 병합·운영 배포로 간주하지 않았고, 드럼·건반 등 다른 팀원 파트까지 개인 구현으로 합산하지 않았습니다.",
  "links": [["음악 AI 작업 브랜치", "https://github.com/D-X-W-Service-2/moyeorock-ai/tree/codex/backend-ai-api-20261111"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "추천 API · 실험",
  "outcome": "개인·팀 곡과 팀원 추천 API 및 MDAE 음악 추천 실험 구성 · 합성 데이터 기준"
 },
 {
  "id": "crawling",
  "type": "software",
  "art": "crawl",
  "label": "DATA ENGINEERING / CRAWLING",
  "title": "라프디 다중 플랫폼 크롤링",
  "subtitle": "인스타·유튜브·네이버 블로그를 한 스키마로 수집",
  "date": "2026 · 회사 프로젝트",
  "status": "코드 비공개",
  "role": "플랫폼별 수집기 · URL 정규화 · 공통 스키마 · 재개 처리",
  "tags": ["Python", "Apify", "YouTube API", "Playwright"],
  "repo": null,
  "summary": "Instagram·YouTube·네이버 블로그의 프로필과 최근 게시물을 같은 구조로 수집하는 데이터 파이프라인입니다. Link:D 매칭 서비스의 후속 데이터 작업을 데이터 엔지니어링 관점에서 분리해 기록했습니다.",
  "sections": [
   ["구현", "crawling.py와 common.py로 공통 흐름을 두고 instagram_crawler·youtube_crawler·naver_blog_crawler를 분리했습니다. URL 정규화와 공통 결과 스키마, 중간 저장과 done·error 출력 경로를 구성했습니다."],
   ["기록 범위", "회사 저장소의 최신 README와 서비스 문서를 대조했습니다. 실제 API 키와 원본 개인 데이터는 포함하지 않았습니다."]
  ],
  "note": "비공개 회사 저장소의 구조와 문서를 근거로 요약했습니다. 고객 데이터·키·운영 성능은 포함·검증하지 않았습니다.",
  "links": [["수집·전처리 코드 · 비공개", "https://github.com/yujalabs-dev/lafd-data-processing"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "데이터 파이프라인",
  "outcome": "3개 플랫폼 수집기, URL 정규화·공통 스키마·재개 처리와 오류 출력 경로 구성"
 },
 {
  "id": "timetable",
  "type": "software",
  "art": "timetable",
  "label": "SOFTWARE / WEB APP",
  "title": "강의 시간표 빌더",
  "subtitle": "강의 엑셀을 검색해 장바구니·시간표로 배치",
  "date": "2026 · 개인 웹 앱",
  "status": "개인 프로젝트",
  "role": "강의 엑셀 처리 · 시간표·장바구니 UI",
  "tags": ["React", "Vite", "XLSX"],
  "repo": "https://github.com/molba2see/timetable",
  "summary": "강의 파일의 분반 데이터를 검색하고 여러 장바구니와 시간표에 배치하는 웹 앱입니다.",
  "sections": [
   ["구현한 기능", "다중 Excel 업로드와 분반 정규화, 복수 장바구니, 겹치는 시간 차단, 총 학점 계산, 패널 크기 조절을 코드에서 확인했습니다."]
  ],
  "note": "저장소 코드를 근거로 정리했으며 이번에 앱 실행·사용자 검증을 새로 수행하지 않았습니다.",
  "links": [["코드", "https://github.com/molba2see/timetable"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "웹 앱 구현",
  "outcome": "엑셀 다중 업로드·분반 정규화·시간 충돌 차단·총 학점 계산 구현"
 },
 {
  "id": "recreation",
  "type": "software",
  "art": "recreation",
  "label": "SOFTWARE / EVENT TOOL",
  "title": "레크레이션 퀴즈·행사 도구",
  "subtitle": "인물·음악·영상 문제와 팀 점수판",
  "date": "2026 · 행사 운영",
  "status": "HTML·React 두 버전",
  "role": "퀴즈 UI · 오디오·영상 진행 · 팀 점수 관리",
  "tags": ["React", "TypeScript", "YouTube", "CSV"],
  "repo": "https://github.com/molba2see/exaiting",
  "summary": "인물·음악·영상 문제와 팀 점수판을 연결한 행사 진행용 웹 도구입니다. 초기 HTML 버전과 React·TypeScript 버전이 있습니다.",
  "sections": [
   ["구현", "퀴즈, 음악·영상 재생, 배경음악, CSV 문제 처리와 팀 점수 저장 모듈을 두 저장소에서 확인했습니다."],
   ["버전 관리", "유사한 용도의 별도 코드를 같은 프로젝트의 관련 버전으로 묶었고, 정확한 계보·기여 분담은 추정하지 않았습니다."]
  ],
  "note": "행사 운영용 구현 기록이며 실제 이용자 수·운영 성과는 확인하지 않았습니다.",
  "links": [["확장 버전", "https://github.com/molba2see/exaiting"], ["초기 버전", "https://github.com/molba2see/Recreation"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "행사 도구 구현",
  "outcome": "퀴즈·미디어 진행과 CSV 문제·팀 점수 관리 도구 구현 · 두 버전"
 },
 {
  "id": "xai7",
  "type": "language",
  "art": "xai7",
  "label": "MODEL IMPLEMENTATION / STUDY",
  "title": "X:AI 7기 · Attention~YOLO 구현",
  "subtitle": "기초 논문 구현을 본인 경로에 정리",
  "date": "2026 · 학회 세션",
  "status": "논문 구현·학습 자료",
  "role": "TEAM D / Eunjin_Lee 경로",
  "tags": ["Attention", "Transformer", "U-Net", "YOLO"],
  "repo": "https://github.com/X-AI-eXtension-Artificial-Intelligence/7th-BASE-SESSION",
  "summary": "X:AI 학회 Base 세션의 기초 논문 구현을 Attention·Transformer·U-Net·YOLO 경로로 정리한 학습 자료입니다.",
  "sections": [
   ["개인 경로", "TEAM D/Attention·Transformer·U-net·YOLO/Eunjin_Lee 경로를 확인했습니다. 경로별 README와 모델·학습·평가 파일의 유무를 구분했고, 문서만 있는 경로까지 완성 모델로 계산하지 않았습니다."]
  ],
  "note": "학회 학습용 구현·문서 기록입니다. 검증된 성능으로 제시하지 않았습니다.",
  "links": [["학회 코드", "https://github.com/X-AI-eXtension-Artificial-Intelligence/7th-BASE-SESSION"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "논문 구현 학습",
  "outcome": "Attention·Transformer·U-Net·YOLO 구현·문서를 본인 경로로 정리"
 },
 {
  "id": "xai6",
  "type": "language",
  "art": "xai6",
  "label": "MODEL IMPLEMENTATION / STUDY",
  "title": "X:AI 6기 · Transformer·U-Net 구현",
  "subtitle": "기초 논문 구조 구현과 분할 학습",
  "date": "2025 · 학회 세션",
  "status": "논문 구현·학습",
  "role": "TEAM A / 은진 경로의 학습·평가 코드",
  "tags": ["Transformer", "U-Net", "PyTorch"],
  "repo": "https://github.com/X-AI-eXtension-Artificial-Intelligence/6th-BASE-SESSION",
  "summary": "X:AI 학회 Base 세션에서 기초 논문 구조를 구현하고 데이터 처리와 세포 이미지 분할 학습을 기록한 작업입니다.",
  "sections": [
   ["개인 경로", "TEAM A/Transformer/은진, TEAM A/UNet/은진 아래 구현을 확인했습니다. 학회 저장소 전체가 개인 작업이라는 뜻은 아니며 본인 경로만 연결했습니다."],
   ["남은 기록", "U-Net README에 60 epoch 평균 Dice 0.2416, IoU 0.1537이 남아 있습니다. 이번에 재측정한 성능은 아닙니다."]
  ],
  "note": "학회 학습용 구현 기록입니다. 재측정·완성 모델 성능으로 제시하지 않았습니다.",
  "links": [["학회 코드", "https://github.com/X-AI-eXtension-Artificial-Intelligence/6th-BASE-SESSION"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "논문 구현 학습",
  "outcome": "Transformer·U-Net 구현과 분할 학습 기록 · 본인 경로"
 },
 {
  "id": "cicd",
  "type": "software",
  "art": "cicd",
  "label": "CLOUD / CI·CD PRACTICE",
  "title": "Flask·Docker CI/CD 실습",
  "subtitle": "컨테이너와 GitHub Actions 배포 워크플로우",
  "date": "2026 · 클라우드 실습",
  "status": "코드 비공개",
  "role": "웹 앱·컨테이너·배포 워크플로우",
  "tags": ["Flask", "Docker", "GitHub Actions"],
  "repo": null,
  "summary": "Flask 예제 앱을 컨테이너로 구성하고 GitHub Actions 워크플로우를 둔 CI/CD 실습입니다.",
  "sections": [
   ["구현", "소유자·컨테이너 ID·버전을 보여 주는 루트 페이지와 /health API, Dockerfile·requirements·.github/workflows를 확인했습니다."]
  ],
  "note": "워크플로우 존재를 기준으로 수집했고 현재 배포 성공 여부는 새로 검증하지 않았습니다.",
  "links": [["실습 코드 · 비공개", "https://github.com/molba2see/myapp-cicd-40"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "CI/CD 실습",
  "outcome": "Flask 앱 컨테이너화와 GitHub Actions 워크플로우 구성"
 },
 {
  "id": "recipe",
  "type": "software",
  "art": "recipe",
  "label": "SOFTWARE / WEB",
  "title": "야끼소바 레시피 웹",
  "subtitle": "인분 조절·재료 체크가 되는 레시피 사이트",
  "date": "2026.10 · 개인 웹",
  "status": "개인 프로젝트",
  "role": "레시피 화면 · 인분 조절·재료 체크",
  "tags": ["HTML", "CSS", "JavaScript"],
  "repo": "https://github.com/molba2see/yakisoba-recipe",
  "summary": "팬 하나로 만드는 야끼소바 조리 과정을 보여 주는 레시피 사이트입니다. 인분 조절과 재료 체크 기능이 있습니다.",
  "sections": [
   ["구현", "index.html·script.js·style.css와 배포 워크플로우를 수집했습니다. 인분 조절과 재료 체크 기능을 설명한 코드입니다."]
  ],
  "note": "저장소 구성을 근거로 정리했으며 브라우저 동작 확인은 수행하지 않았습니다.",
  "links": [["코드", "https://github.com/molba2see/yakisoba-recipe"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "웹 구현",
  "outcome": "인분 조절·재료 체크 레시피 웹 구현"
 },
 {
  "id": "blackjack",
  "type": "software",
  "art": "blackjack",
  "label": "PYTHON / LEARNING",
  "title": "블랙잭·숫자 맞히기 (Python 학습)",
  "subtitle": "카드 규칙과 승패 비교를 구현한 콘솔 게임",
  "date": "2024 · 학습 프로젝트",
  "status": "학습·협업",
  "role": "eunjin.py · 은진.py 구현",
  "tags": ["Python", "CLI", "Game"],
  "repo": "https://github.com/molba2see/udemy",
  "summary": "카드 배분, 에이스 점수 조정, 딜러 규칙과 승패 비교를 구현한 콘솔 블랙잭과 숫자 맞히기 초기 프로그래밍 학습입니다.",
  "sections": [
   ["개인 코드", "협업 저장소의 eunjin.py와 udemy/blackjack·number/은진.py가 있습니다. eunjin.py에서 deal_card·calculate_score·compare·play_game을 확인했습니다."]
  ],
  "note": "독창적 알고리즘 연구가 아니라 초기 프로그래밍 학습 기록으로 보존합니다.",
  "links": [["개인 학습 코드", "https://github.com/molba2see/udemy"], ["협업 코드", "https://github.com/Taekeun-Prince-And-Siyeon-Princess/BlackJackGameProject"]],
  "competition": false,
  "kind": "project",
  "outcome_kind": "학습 구현",
  "outcome": "콘솔 블랙잭(카드·점수·딜러 규칙·승패)과 숫자 맞히기 구현"
 }
];
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const graphArt='<svg viewBox="0 0 450 150" aria-hidden="true"><g stroke="currentColor" opacity=".35" fill="none"><path d="M50 75L160 30L265 75L380 38L400 115L265 75L155 120L50 75L380 38M160 30L155 120M155 120L400 115"/></g><g fill="currentColor" opacity=".7"><circle cx="50" cy="75" r="7"/><circle cx="160" cy="30" r="6"/><circle cx="155" cy="120" r="6"/><circle cx="380" cy="38" r="8"/><circle cx="400" cy="115" r="7"/></g><circle cx="265" cy="75" r="24" fill="none" stroke="currentColor"/><circle cx="265" cy="75" r="6" fill="currentColor"/><circle cx="265" cy="75" r="40" fill="none" stroke="currentColor" stroke-dasharray="2 6" opacity=".4"/></svg>';
const arts={match:graphArt,research:graphArt,language:'<div class="art-word">SFT <span style="font-size:24px;opacity:.5">→</span> DPO<small>ALIGNING A CONVERSATION</small></div>',financial:'<svg viewBox="0 0 450 150" aria-hidden="true"><g fill="none" stroke="#b48457" opacity=".3"><path d="M45 125H405M45 90H405M45 55H405M45 20H405"/></g><path d="M45 105L100 80L155 95L215 60L275 65L335 33L405 20" fill="none" stroke="#ad5a26" stroke-width="2"/><g fill="#ad5a26"><circle cx="100" cy="80" r="4"/><circle cx="215" cy="60" r="4"/><circle cx="335" cy="33" r="4"/></g><text x="290" y="130" fill="#93623d" font-size="10" font-family="monospace">PERSONAL PORT COLOR</text></svg>',sign:'<svg viewBox="0 0 450 150" aria-hidden="true"><g fill="none" stroke="#bd7740"><path d="M225 47V86L189 120M225 86L256 120M225 58L187 75L152 37M225 58L263 78L297 44M152 37L142 21M152 37L153 16M152 37L165 20M297 44L290 26M297 44L300 22M297 44L312 29" stroke-width="2"/><circle cx="225" cy="29" r="17"/></g><g fill="#984c1a"><circle cx="225" cy="58" r="4"/><circle cx="187" cy="75" r="4"/><circle cx="263" cy="78" r="4"/><circle cx="225" cy="86" r="4"/><circle cx="152" cy="37" r="4"/><circle cx="297" cy="44" r="4"/></g><text x="28" y="84" font-size="11" fill="#92643c" font-family="monospace">LANGUAGE</text><text x="340" y="84" font-size="11" fill="#92643c" font-family="monospace">MOTION</text></svg>',customs:'<div class="art-word" style="color:#b76536">HS <span style="font-size:30px;opacity:.55">/</span> Code<small>FROM DESCRIPTION TO CLASSIFICATION</small></div>',software:'<div class="art-word" style="color:#a36527">Portfolio OS<small>ONE RECORD, MANY POSSIBILITIES</small></div>'};
arts.moa='<div class="art-word" style="color:#a36527">모아<small>LOCAL FILES · HUMAN APPROVAL</small></div>';
arts.vehicle='<div class="art-word" style="color:#9a4d25">Hy! mate<small>VEHICLE SIGNAL · DRIVE REPORT</small></div>';
arts.mdae='<div class="art-word" style="color:#a3561f">Dual-Tower AE<small>MASKED · BILATERAL COLD-START</small></div>';
arts.feduf='<div class="art-word" style="color:#9a4d25">Unlearning<small>FEDERATED · FOOTPRINT REMOVAL</small></div>';
arts.musicrec='<div class="art-word" style="color:#a85a24">♪ Rec<small>SONG × MEMBER MATCHING</small></div>';
arts.crawl='<div class="art-word" style="color:#8f5a2a">Crawl<small>MULTI-PLATFORM · ONE SCHEMA</small></div>';
arts.timetable='<div class="art-word" style="color:#a36527">Timetable<small>EXCEL → SCHEDULE</small></div>';
arts.recreation='<div class="art-word" style="color:#a9521f">Quiz Night<small>EVENT · TEAM SCORES</small></div>';
arts.xai6='<div class="art-word" style="color:#9a5a26">Transformer<small>X:AI 6TH · U-NET</small></div>';
arts.xai7='<div class="art-word" style="color:#9a5a26">Attention<small>X:AI 7TH · TRANSFORMER·YOLO</small></div>';
arts.cicd='<div class="art-word" style="color:#8f5a2a">CI / CD<small>FLASK · DOCKER · ACTIONS</small></div>';
arts.recipe='<div class="art-word" style="color:#a85a24">Yakisoba<small>ONE-PAN RECIPE WEB</small></div>';
arts.blackjack='<div class="art-word" style="color:#a36527">21<small>PYTHON LEARNING · CONSOLE GAME</small></div>';
const grid=document.querySelector('#project-grid');
const renderCards = list => list.map((p,i)=>`<article class="project-card" data-type="${p.type}" data-competition="${!!p.competition}"><div class="project-art ${p.art}"><span class="art-label">${esc(p.label)}</span>${arts[p.art]}<span class="art-id">${p.kind==='research'?'RESEARCH':'PROJECT'} ${String(i+1).padStart(2,'0')}</span></div><div class="project-content"><div class="project-topline"><span>${esc(p.date)}</span><span class="status">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p class="description">${esc(p.subtitle)}</p><p class="role-line"><b>기여</b>${esc(p.role)}</p><div class="outcome-box"><span>성과 · ${esc(p.outcome_kind)}</span><p>${esc(p.outcome)}</p></div><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-bottom"><button data-project="${p.id}" aria-label="${esc(p.title)} 상세 보기">프로젝트 읽기 <span>↗</span></button>${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:'<span style="font-size:10px;color:var(--muted)">프로젝트 기록</span>'}</div></div></article>`).join('');
grid.innerHTML=renderCards(projects.filter(p=>p.kind==='project'));
document.querySelector('#research-experience-grid').innerHTML=renderCards(projects.filter(p=>p.kind==='research'));
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});
 let count=0;grid.querySelectorAll('.project-card').forEach(card=>{card.hidden=btn.dataset.filter==='competition'?card.dataset.competition!=='true':btn.dataset.filter!=='all'&&card.dataset.type!==btn.dataset.filter;if(!card.hidden)count++});
 document.querySelector('#project-count').textContent=`${count} projects`;
}));
const dialog=document.querySelector('#project-dialog');let lastTrigger=null;
document.querySelector('main').addEventListener('click',event=>{const btn=event.target.closest('[data-project]');if(!btn)return;const p=projects.find(p=>p.id===btn.dataset.project);lastTrigger=btn;
 document.querySelector('#dialog-content').innerHTML=`<p class="dialog-meta">${esc(p.date)} / ${esc(p.status)}</p><h2 id="dialog-title">${esc(p.title)}</h2><p class="dialog-summary">${esc(p.summary)}</p><div class="outcome-box"><span>성과 · ${esc(p.outcome_kind)}</span><p>${esc(p.outcome)}</p></div><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${p.metrics?`<div class="project-metrics">${p.metrics.map(([value,label])=>`<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join('')}</div>`:''}${p.sections.map(([title,text])=>`<h3>${esc(title)}</h3><p class="detail-p">${esc(text)}</p>`).join('')}<p class="detail-note">${esc(p.note)}</p><div class="detail-links">${p.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div>`;
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastTrigger?.focus()});
const values={recall:[.2653,.2097,.2283],ndcg:[.2099,.1690,.1883],mrr:[.2149,.1786,.2017]};const names=['BPR','NeuMF','LightGCN'];
function renderChart(metric){document.querySelector('#chart').innerHTML=values[metric].map((v,i)=>`<div class="bar-row"><div class="bar-heading"><span>${names[i]}</span><b>${v.toFixed(4)}</b></div><div class="bar-track" role="img" aria-label="${names[i]} ${metric}: ${v.toFixed(4)}"><div class="bar-fill" style="width:${v/.3*100}%"></div></div></div>`).join('')}
renderChart('recall');document.querySelectorAll('[data-metric]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-metric]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});renderChart(btn.dataset.metric)}));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기')}));
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('molba2see@gmail.com');status.textContent='복사했습니다.'}catch{status.textContent='이메일 주소를 선택해 복사해 주세요.'}setTimeout(()=>{status.textContent=''},4500)});
