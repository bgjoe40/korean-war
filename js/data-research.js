// 주요 전투 현장 부대 조사 자료 (자동 생성: 조사 결과 JSON → 이 파일)
// 각 항목은 원문을 직접 열어 확인한 내용만 담고, sources에 무엇을 어디서 확인했는지 남긴다.
// 확인하지 못한 값은 null(화면에서 "자료 확인 필요")로 둔다. 7개 조사 · 109개 부대 · 출처 200건
Object.assign(ORBAT_ALIAS, {
 "un|21연대 1대대 B중대": "un|B중대 (21연대 1대대)",
 "un|21연대 1대대 C중대": "un|C중대 (21연대 1대대)",
 "un|3대대 (1해병연대)": "un|미 1해병연대 3대대",
 "un|미 7해병연대 2대대 F중대": "un|F중대 (7해병연대 2대대)",
 "un|23연대 1대대 C중대": "un|23연대 C중대",
 "un|23연대 3대대 I중대": "un|23연대 I중대",
 "un|23연대 2대대 G중대": "un|G중대 (23연대 2대대)",
 "un|영국 글로스터 대대 A중대": "un|A중대 (글로스터)",
 "un|영국 글로스터 대대 B중대": "un|B중대 (글로스터)",
 "un|영국 글로스터 대대 C중대": "un|C중대 (글로스터)",
 "un|영국 글로스터 대대 D중대": "un|D중대 (글로스터)",
 "un|영국 글로스터 대대 지원중대": "un|지원중대 (글로스터)",
 "un|벨기에 대대 룩셈부르크 소대": "un|룩셈부르크 소대"
});
const RESEARCH = [
 {
  "event": "e05",
  "battle": "죽미령",
  "units": [
   {
    "key": "un|미 21연대",
    "parent": "미 24사단",
    "level": "R",
    "full": "미 제24보병사단 제21보병연대",
    "cmd": [
     [
      "1950.07",
      "스티븐스 (Richard W. Stephens)"
     ]
    ],
    "org": [
     "21연대 1대대 (스미스 특수임무부대 모체)",
     "스미스 특수임무부대"
    ],
    "str": null,
    "role": "7월 5일 죽미령에는 예하 1대대 일부(스미스 특수임무부대)만 투입되었다. 연대장 스티븐스는 7월 7일 정오 전에야 병력을 실은 열차로 대전에 도착했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Col. Richard W. Stephens commanded the 21st Infantry",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "Stephens reached Taejon with a trainload of troops before noon on 7 July",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter7.htm"
     }
    ]
   },
   {
    "key": "un|21연대 1대대",
    "parent": "미 21연대",
    "level": "Bn",
    "full": "미 제21보병연대 제1대대",
    "cmd": [
     [
      "1950.07",
      "스미스 (Charles B. Smith)"
     ]
    ],
    "org": [
     "21연대 1대대 B중대",
     "21연대 1대대 C중대",
     "본부중대(1/2)",
     "통신소대(1/2)",
     "75mm 무반동총 소대",
     "4.2인치 박격포"
    ],
    "str": "약 440명 중 406명 공수 투입",
    "role": "7월 1일 C-54 수송기로 일본에서 부산으로 공수되어 스미스 특수임무부대의 보병 주력을 이루었다. 부대대장은 플로이드 마틴 소령(Floyd Martin)이었다. 공수되지 않은 나머지 병력은 7월 6일 천안에 있었다.",
    "casualties": null,
    "sources": [
     {
      "fact": "TF Smith built on 1/21: B·C Companies, half of HQ Co, half of comms platoon, RR and mortar elements; about 440 men, 406 air-landed; XO Maj. Floyd Martin",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "Other 1st Battalion elements not airlifted were at Ch'onan on 6 July",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter7.htm"
     }
    ]
   },
   {
    "key": "un|스미스 특수임무부대",
    "parent": "미 21연대",
    "level": "Bn",
    "full": "스미스 특수임무부대 (Task Force Smith, 제21보병연대 1대대 기간)",
    "cmd": [
     [
      "1950.07.01",
      "스미스 (Charles B. Smith)"
     ]
    ],
    "org": [
     "21연대 1대대 B중대",
     "21연대 1대대 C중대",
     "본부중대 1/2",
     "통신소대 1/2",
     "75mm 무반동총 2문 (4문 중 2문만 공수)",
     "4.2인치 박격포 2문 (4문 중 2문만 공수)",
     "2.36인치 바주카 6개 조",
     "60mm 박격포 4문",
     "52포병대대 A포대"
    ],
    "str": "보병 406명과 포병을 합쳐 약 540명",
    "role": "7월 5일 오산 북쪽 약 1마일 정면에 진지를 편성했다. 08:16 무렵부터 북한군 전차 종대와 교전했으나 전차를 막지 못했다. 11:45 무렵 북한군 보병 종대와 교전했고, 양 측방이 포위되자 14:30 무렵 철수를 결정했다.",
    "casualties": "사상·실종 약 150명 (스미스 추산 155명). 공식 기록상 실종 사병 148명·장교 5명이며 B중대 손실이 가장 컸다.",
    "sources": [
     {
      "fact": "Composition, 406 infantry air-landed, 540 Americans at Osan, timeline, ~150 casualties, 148 EM + 5 officers missing",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "406 men of 1/21 + 134 of A Btry 52 FA; bazookas, 2 RR, 2 4.2in, 4 60mm mortars",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Osan"
     }
    ]
   },
   {
    "key": "un|B중대 (21연대 1대대)",
    "parent": "스미스 특수임무부대",
    "level": "Co",
    "full": "미 제21보병연대 제1대대 B중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "도로 동쪽 능선을 맡았고, 1개 소대는 도로 서쪽 고지에 배치되었다. 예비소대장은 칼 F. 버나드 소위(Carl F. Bernard)였다. 철수 과정에서 특수임무부대 가운데 가장 큰 손실을 입었다.",
    "casualties": "특수임무부대 중 최대 손실 (구체적 수치는 출처에 없음)",
    "sources": [
     {
      "fact": "B Company positions, Lt. Carl F. Bernard reserve platoon leader, greatest loss in B Company",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     }
    ]
   },
   {
    "key": "un|C중대 (21연대 1대대)",
    "parent": "스미스 특수임무부대",
    "level": "Co",
    "full": "미 제21보병연대 제1대대 C중대",
    "cmd": [
     [
      "1950.07",
      "대시머 (Richard Dashmer)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "철도 동쪽과 지맥 능선을 맡아 우측방을 지켰다. 철수 뒤 중대장 대시머 대위가 65명을 이끌고 천안에 합류해 귀환 병력이 250명이 되었다.",
    "casualties": null,
    "sources": [
     {
      "fact": "C Company position; Capt. Richard Dashmer came in with 65 men, increasing the total to 250",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     }
    ]
   },
   {
    "key": "un|52포병대대",
    "parent": "미 24사단",
    "level": "Bn",
    "full": "미 제24보병사단 제52야전포병대대",
    "cmd": [
     [
      "1950.07",
      "페리 (Miller O. Perry)"
     ]
    ],
    "org": [
     "52포병대대 A포대",
     "B포대"
    ],
    "str": "승인 정원의 약 70%, 사격포대 2개 (A·B)",
    "role": "대대장 페리 중령은 A포대와 함께 죽미령에 나가 직접 바주카를 들고 전차와 싸우다 다리에 부상을 입었다. 이후 포대가 포위를 뚫고 나가도록 지휘했다.",
    "casualties": "페리 중령 부상",
    "sources": [
     {
      "fact": "Perry commanded the 52nd FA Bn, battalion at ~70% strength with two firing batteries",
      "url": "https://historynet.com/task-force-smith-artillery-commander/"
     },
     {
      "fact": "DSC citation: Lt Col Perry, 52d FA Bn, 5 July 1950 near Osan, accompanied one of his batteries, wounded, led breakout",
      "url": "https://homeofheroes.com/recipient/miller-o-perry/"
     }
    ]
   },
   {
    "key": "un|52포병대대 A포대",
    "parent": "52포병대대",
    "level": "Bty",
    "full": "미 제52야전포병대대 A포대",
    "cmd": [
     [
      "1950.07",
      "스콧 (Dwain L. Scott)"
     ]
    ],
    "org": [
     "105mm 곡사포 6문 (오산 진지 4문, 전방 대전차 사격 1문, 평택 잔류 1문)"
    ],
    "str": "108명 (Appleman; 위키백과는 134명)",
    "role": "보병 진지 약 2,000야드 후방에 포진해 08:16 무렵 첫 사격을 시작했다. 고폭탄 약 1,200발은 T-34 전차에 효과가 없었고, 대전차 고폭탄(HEAT) 6발은 모두 전방 1문에 배정되었다. 전투 뒤 포를 버리고 철수했다.",
    "casualties": "7월 7일 기준 장교 5명, 사병 26명 실종",
    "sources": [
     {
      "fact": "6 howitzers, 108 men; 4 at battery, 1 forward AT, 1 left at P'yongt'aek; ~1,200 HE; only 6 HEAT; artillery casualties",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "1st Lt. Dwain L. Scott as A Battery commander (Perry interview)",
      "url": "https://historynet.com/task-force-smith-artillery-commander/"
     }
    ]
   },
   {
    "key": "un|미 34연대",
    "parent": "미 24사단",
    "level": "R",
    "full": "미 제24보병사단 제34보병연대",
    "cmd": [
     [
      "1950.07",
      "러브리스 (Jay B. Lovless)"
     ],
     [
      "1950.07.07",
      "마틴 (Robert R. Martin)"
     ],
     [
      "1950.07.08",
      "웨들링턴 (Wadlington, 대리)"
     ]
    ],
    "org": [
     "34연대 1대대",
     "34연대 3대대"
    ],
    "str": "부산 도착 시 1,981명",
    "role": "7월 5일 1대대는 평택, 3대대는 안성에서 북한군 전차 돌파에 대비해 차단 진지를 점령했다. 죽미령에서는 직접 교전하지 않았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Lovless relieved 7 July 1800, Martin assumed command, Martin killed ~0800 8 July at Ch'onan, Wadlington ordered to assume command; strength 1,981; battalion positions 5 July",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter7.htm"
     }
    ]
   },
   {
    "key": "un|34연대 1대대",
    "parent": "미 34연대",
    "level": "Bn",
    "full": "미 제34보병연대 제1대대",
    "cmd": [
     [
      "1950.07.05",
      "에어즈 (Harold B. Ayres)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "7월 5일 05:00 무렵 평택에 도착해 차단 진지를 점령했다. 7월 6일 03:00에 평택 북쪽 교량을 폭파했고, 같은 날 오전 천안으로 철수했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Ayres in command at P'yongt'aek; arrived ~0500 5 July; bridge blown 0300 6 July; withdrew to Ch'onan",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter7.htm"
     }
    ]
   },
   {
    "key": "un|34연대 3대대",
    "parent": "미 34연대",
    "level": "Bn",
    "full": "미 제34보병연대 제3대대",
    "cmd": [
     [
      "1950.07",
      "스미스 (David H. Smith)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "7월 5일 딘 사단장의 요청으로 평택 동쪽 약 12마일 지점인 안성으로 가서 도로를 엄호했다. 7월 6일 천안으로 이동했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "3d Battalion under Lt. Col. David H. Smith went to Ansong 5 July; moved to Ch'onan 6 July",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter7.htm"
     }
    ]
   },
   {
    "key": "nk|4사단",
    "parent": null,
    "level": "D",
    "full": "조선인민군 제4사단",
    "cmd": [
     [
      "1950.07",
      "이권무"
     ]
    ],
    "org": [
     "5연대 (수원 잔류)",
     "16연대",
     "18연대",
     "포병연대"
    ],
    "str": "16·18연대 합계 약 5,000명 (편제 정원 10,381명)",
    "role": "예하 16·18연대가 105전차사단 전차의 지원을 받아 수원에서 남진해 죽미령의 스미스 특수임무부대를 격파했다. 5연대는 수원에 남았다.",
    "casualties": "오산에서 전사 약 42명, 부상 85명. 전차 4대 파괴 또는 기동 불능",
    "sources": [
     {
      "fact": "16th and 18th Regiments of 4th Div in column, 5th remained at Suwon; NK ~42 KIA, 85 WIA; 4 tanks destroyed/immobilized",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "almost 5,000 troops under Maj. Gen. Lee Kwon Mu (cited)",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Osan"
     }
    ]
   },
   {
    "key": "nk|북 16연대",
    "parent": "4사단",
    "level": "R",
    "full": "조선인민군 제4사단 제16연대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "18연대와 함께 트럭 종대로 수원에서 남진했다. 11:45 무렵 죽미령 앞에서 하차해 동쪽 지맥으로 올라가 스미스 부대의 양 측방을 포위했다. 출처는 두 연대의 행동을 따로 구분하지 않는다.",
    "casualties": null,
    "sources": [
     {
      "fact": "16th and 18th Regiments in the column; detrucked and enveloped both flanks",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     }
    ]
   },
   {
    "key": "nk|북 18연대",
    "parent": "4사단",
    "level": "R",
    "full": "조선인민군 제4사단 제18연대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "16연대와 함께 트럭 종대로 남진해 11:45 무렵부터 하차 공격으로 스미스 부대의 양 측방을 포위했다. 출처는 두 연대의 행동을 따로 구분하지 않는다.",
    "casualties": null,
    "sources": [
     {
      "fact": "16th and 18th Regiments in the column; detrucked and enveloped both flanks",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     }
    ]
   },
   {
    "key": "nk|107전차연대",
    "parent": "105전차사단",
    "level": "R",
    "full": "조선인민군 제105전차사단 제107전차연대",
    "cmd": null,
    "org": [
     "전차대대 3개 (대대당 T-34 13대)"
    ],
    "str": "T-34 33대 (Appleman; 위키백과는 36대)",
    "role": "4사단을 지원해 07:00 무렵부터 수원–오산 도로를 따라 남진했다. 09:00까지 보병 진지를, 10:15까지 포병 진지를 돌파했다. 전차포 사격으로 보병 진지에서 약 20명의 사상자를 냈다.",
    "casualties": "전차 4대 파괴 또는 기동 불능, 3대 손상",
    "sources": [
     {
      "fact": "107th Tank Regt supporting 4th Div; 33 tanks; 4 destroyed/immobilized, 3 damaged; ~20 casualties; times",
      "url": "https://www.koreanwaronline.com/history/Appleman/Chapter6.htm"
     },
     {
      "fact": "105th Armored: tank regiments of 3 battalions x 13 tanks (cited)",
      "url": "https://en.wikipedia.org/wiki/105th_Armored_Division_(North_Korea)"
     }
    ]
   }
  ]
 },
 {
  "event": "e10",
  "battle": "인천",
  "units": [
   {
    "key": "un|미 5해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제1해병사단 제5해병연대 (RCT-5)",
    "cmd": [
     [
      "1950.09",
      "머레이 (Raymond L. Murray, 중령)"
     ]
    ],
    "org": [
     "1대대 (뉴턴)",
     "2대대 (로이스)",
     "3대대 (태플릿, BLT-3로 분리되어 월미도 공격)",
     "배속: 한국 해병대 1개 대대, 미 1전차대대 A중대, 11해병연대 1대대 관측·연락반"
    ],
    "str": null,
    "role": "3대대가 새벽에 월미도(그린 비치)를 점령했고, 연대 주력(1·2대대)은 오후 만조 때 레드 비치에 상륙해 묘지언덕·관측소언덕을 잇는 O-A선을 확보했습니다. 연대본부는 18:30에 상륙해 월미도 둑길 끝에 자리 잡았습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "머레이 중령 RCT-5 지휘, 임무(레드 비치 상륙, O-A선 확보), 편성(ROK Marine Bn 배속 포함), 연대본부 18:30 상륙",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 5해병연대 3대대",
    "parent": "미 5해병연대",
    "level": "Bn",
    "full": "미 제5해병연대 제3대대 (BLT-3, 3/5)",
    "cmd": [
     [
      "1950.09",
      "태플릿 (Robert D. Taplett, 중령)"
     ]
    ],
    "org": [
     "G중대 (보른, Robert D. Bohn 중위)",
     "H중대 (와일드먼, Patrick E. Wildman 대위)",
     "I중대 (맥멀런, Robert A. McMullen 대위)",
     "배속: 미 1전차대대 A중대 분견대 (전차 10대: M-26 6대, 화염방사 전차 1대, 도저 2대, 구난전차 1대)"
    ],
    "str": null,
    "role": "06:33에 G중대 1개 소대와 H중대 3개 소대가 그린 비치에 상륙했고, 06:55에 라디오 언덕(Radio Hill) 정상에 성조기를 게양했습니다. 오전 중 소월미도까지 점령한 뒤, 오후에는 레드 비치 상륙을 화력으로 지원했습니다. 20:00에 둑길을 건너 연대에 복귀했습니다.",
    "casualties": "아군 부상 17명(전사 없음). 적 사살 108명, 포로 136명, 동굴·진지에 매몰된 적 약 150명 추정",
    "sources": [
     {
      "fact": "태플릿 지휘, 06:33 그린 비치 상륙, 중대장 이름, 전차 분견대, 피해(17 WIA, 108 사살, 136 포로)",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     },
     {
      "fact": "태플리트 중령의 3대대 월미도 상륙, 부상 17명, 사살 108명, 포로 136명 (국방일보 2010)",
      "url": "https://www.korea.kr/news/policyFocusView.do?newsId=148695317&pkgId=49500506"
     }
    ]
   },
   {
    "key": "un|레드 비치 상륙부대",
    "parent": "미 5해병연대",
    "level": "R",
    "full": "레드 비치 상륙부대 (미 제5해병연대 1·2대대)",
    "cmd": [
     [
      "1950.09",
      "뉴턴 (George R. Newton, 중령) - 1대대 / 로이스 (Harold S. Roise, 중령) - 2대대"
     ]
    ],
    "org": [
     "미 5해병연대 1대대",
     "미 5해병연대 2대대"
    ],
    "str": null,
    "role": "제1파는 상륙정(LCVP) 8척이었습니다. 2대대 E중대는 17:31, 1대대 A중대는 17:33에 해벽에 닿았고, 사다리로 해벽을 넘어 상륙했습니다. 그 직후 LST 8척이 해안에 접안했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "1대대장 뉴턴, 2대대장 로이스, 17:31(E중대)·17:33(A중대) 해벽 도달, 사다리 사용",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 5해병연대 1대대",
    "parent": "미 5해병연대",
    "level": "Bn",
    "full": "미 제5해병연대 제1대대 (1/5)",
    "cmd": [
     [
      "1950.09",
      "뉴턴 (George R. Newton, 중령)"
     ]
    ],
    "org": [
     "A중대 (스티븐스, John R. Stevens 대위)",
     "B중대 (펜턴, Francis I. Fenton Jr. 대위, 대대 예비)",
     "C중대"
    ],
    "str": null,
    "role": "레드 비치 북쪽(좌측)에 상륙해 묘지언덕(Cemetery Hill)과 관측소언덕(Observatory Hill) 북쪽 절반을 점령하는 임무를 맡았습니다. B중대가 20:00에 관측소언덕 목표 A를 점령했고, 22:40에 대대 구역의 O-A선 확보를 연대에 보고했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "뉴턴 지휘, 임무, A·B·C중대 행동, 22:40 O-A선 확보 보고",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 5해병연대 1대대 A중대",
    "parent": "미 5해병연대 1대대",
    "level": "Co",
    "full": "미 제5해병연대 제1대대 A중대 (Able Company)",
    "cmd": [
     [
      "1950.09",
      "스티븐스 (John R. Stevens, 대위)"
     ]
    ],
    "org": [
     "1소대 (맥멀런 기술중사, Orval F. McMullen)",
     "2소대 (뮤젤 소위, Francis W. Muetzel)",
     "3소대 (로페즈 중위, Baldomero Lopez)"
    ],
    "str": null,
    "role": "17:33에 레드 비치 북쪽 해벽을 넘어 상륙했으나 측면과 정면 벙커의 사격을 받았습니다. 3소대장 발도메로 로페즈 중위는 수류탄을 던지려다 총에 맞자 수류탄을 몸으로 덮어 전사했습니다(사후 명예훈장). 2소대가 묘지언덕을 약 10분 만에 점령했고, 17:55에 확보 신호탄을 올렸습니다.",
    "casualties": "상륙 후 약 30분 전투에서 전사 8명, 부상 28명",
    "sources": [
     {
      "fact": "스티븐스 중대장, 로페즈 3소대장 전사 경위, 17:55 묘지언덕 확보, 전사 8·부상 28",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     },
     {
      "fact": "로페즈가 A중대 소대장이었다는 명예훈장 공적문",
      "url": "https://www.usna.edu/Notables/moh/1948lopez.php"
     }
    ]
   },
   {
    "key": "un|미 5해병연대 2대대",
    "parent": "미 5해병연대",
    "level": "Bn",
    "full": "미 제5해병연대 제2대대 (2/5)",
    "cmd": [
     [
      "1950.09",
      "로이스 (Harold S. Roise, 중령)"
     ]
    ],
    "org": [
     "D중대 (스미스, H. J. Smith 중위)",
     "E중대 (재스킬카, Samuel Jaskilka 대위)",
     "F중대 (피터스, Uel D. Peters 대위)"
    ],
    "str": null,
    "role": "레드 비치 남쪽(우측)에 상륙해 해안 우측, 영국영사관 언덕, 관측소언덕 남쪽 절반, 내측 조수 갑문을 맡았습니다. E중대는 피해 없이 상륙해 영사관 언덕까지 소탕했습니다. D중대는 관측소언덕 목표 B에서 교전했고, F중대는 자정 직후 조수 갑문 부근에 방어선을 폈습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "로이스 지휘, 중대장 이름, 임무와 행동",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 1해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제1해병사단 제1해병연대 (RCT-1)",
    "cmd": [
     [
      "1950.09",
      "풀러 (Lewis B. Puller, 대령)"
     ]
    ],
    "org": [
     "1대대 (호킨스, 연대 예비)",
     "2대대 (서터)",
     "3대대 (리지)",
     "배속: 미 육군 제56수륙양용트랙터대대 A중대, 제1 4.5인치 로켓대대 C포대, 1공병대대 C중대"
    ],
    "str": null,
    "role": "H시(17:30)에 비와 연기로 시계가 가려진 블루 비치에 2개 대대를 나란히 세워 상륙했습니다. 풀러 대령은 제3파와 함께 직접 상륙했습니다. 야간에 O-1선의 핵심 지점을 확보했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "풀러 대령 지휘, 편성과 배속, 2개 대대 병진 상륙, 풀러 제3파 상륙",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|블루 비치 상륙부대",
    "parent": "미 1해병연대",
    "level": "R",
    "full": "블루 비치 상륙부대 (미 제1해병연대 2·3대대 선두, 1대대 예비)",
    "cmd": [
     [
      "1950.09",
      "풀러 (Lewis B. Puller, 대령)"
     ]
    ],
    "org": [
     "미 1해병연대 2대대 (블루 원)",
     "미 1해병연대 3대대 (블루 투)",
     "미 1해병연대 1대대 (예비)"
    ],
    "str": null,
    "role": "2대대 선두의 LVT(A)가 17:30 정시에 블루 원 해안에 도착했습니다. 3대대는 블루 투에 상륙해 일부가 사다리로 해벽을 넘었습니다. 1대대는 예비로 뒤따라 어둠 속에 상륙했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "블루 원 2/1, 블루 투 3/1, 1/1 예비, 17:30 상륙",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 1대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제1대대 (1/1)",
    "cmd": [
     [
      "1950.09",
      "호킨스 (Jack Hawkins, 중령)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대",
     "H&S중대"
    ],
    "str": null,
    "role": "연대 예비로 H시 무렵 출발 명령을 받았으나, 상륙정 일부가 길을 잃고 조수 갑문 쪽으로 우회해 상륙이 지연되었습니다. 어둠 속에 블루 투로 상륙해 해안에서 약 800m 내륙의 철로변 야간 집결지로 이동했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "호킨스 중령 1/1 지휘, 연대 예비, 상륙 경위",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 2대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제2대대 (2/1)",
    "cmd": [
     [
      "1950.09",
      "서터 (Alan Sutter, 중령)"
     ]
    ],
    "org": [
     "D중대",
     "E중대 (대대 예비)",
     "F중대"
    ],
    "str": "상륙 후 공격에 나선 병력 약 600명",
    "role": "블루 원에 상륙했습니다. D중대는 20:00에 목표 A(도로 교차점)를 점령했습니다. F중대는 22:00까지 117고지 일부를 확보해 경인가도를 사계에 넣었습니다.",
    "casualties": "전사 1명, 부상 19명. 적 포로 15명, 사살 약 50명(추정)",
    "sources": [
     {
      "fact": "서터 지휘, D·E·F중대 행동, 약 600명, 피해 1 KIA·19 WIA",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 3대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제3대대 (3/1)",
    "cmd": [
     [
      "1950.09",
      "리지 (Thomas L. Ridge, 중령)"
     ]
    ],
    "org": [
     "G중대 (웨스토버, George C. Westover 대위)",
     "H중대",
     "I중대 (피셔, Joseph R. Fisher 중위)"
    ],
    "str": null,
    "role": "블루 투에 상륙해 I중대가 19:00에 233고지 서단(목표 C)을 점령했고, G중대는 O-1선 중앙에 차단 진지를 구축했습니다. H중대 1소대가 야간 공격으로 94고지(목표 B)를 점령했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "리지 지휘, 중대장 이름, 목표 B·C 점령",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 11해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제1해병사단 제11해병연대 (포병)",
    "cmd": [
     [
      "1950.09",
      "브라워 (James H. Brower, 대령)"
     ]
    ],
    "org": [
     "1대대 (5해병연대 직접지원)",
     "2대대 (1해병연대 직접지원)",
     "4대대 (9월 16일 레드 비치 상륙)",
     "배속: 미 육군 제96야전포병대대",
     "3대대는 7해병연대에 배속되어 미상륙"
    ],
    "str": null,
    "role": "1·2대대가 저녁 만조 때 상륙했으나 함선 혼잡으로 1시간 30분이 지연되었습니다. 21:50에야 5·1해병연대 지원 사격 준비를 마쳤고, 첫날 밤에는 시계 불량과 표적 부족으로 몇 발만 쐈습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "브라워 대령, 1·2대대 상륙과 21:50 사격 준비, 4대대·96야포대대, 3대대 미상륙",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "un|미 1해병전차대대",
    "parent": "미 1해병사단",
    "level": "Bn",
    "full": "미 제1해병사단 제1전차대대",
    "cmd": [
     [
      "1950.09",
      "밀른 (Harry T. Milne, 중령)"
     ]
    ],
    "org": [
     "A중대 (부산 교두보 실전 경험)",
     "B중대 (9월 16일 월미도 상륙)",
     "C중대 (9월 18일 상륙)",
     "D중대 (7해병연대와 후속 도착)",
     "본부중대 화염방사 전차소대"
    ],
    "str": null,
    "role": "A중대 분견대(스위트, Granville G. Sweet 소위)의 전차 10대가 06:46 그린 비치에 상륙해 3/5를 지원했습니다. 저녁에는 레드 비치 상륙을 엄호한 뒤 해질녘 둑길을 건너 본토로 이동했습니다. A중대 나머지 두 소대와 화염전차 소대는 LST로 레드 비치에 상륙했습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "밀른 중령, 중대별 상륙 일정, A중대 분견대 06:46 그린 비치 상륙",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     }
    ]
   },
   {
    "key": "rok|해병대",
    "parent": "미 1해병사단 (배속)",
    "level": "R",
    "full": "대한민국 해병대 연대 (미군 문서상 ROK Marine Regiment)",
    "cmd": [
     [
      "1950.09",
      "신현준 (대령)"
     ]
    ],
    "org": [
     "3개 대대 (그중 3대대장 김윤근)",
     "1개 대대는 미 5해병연대(RCT-5)에 배속"
    ],
    "str": "약 3,000명",
    "role": "처음에는 사단 예비였다가, 명령에 따라 레드 비치로 상륙해 5해병연대와 협조하며 인천 시가지를 소탕했습니다. 소탕 첫날에만 포로 181명을 잡았습니다.",
    "casualties": null,
    "sources": [
     {
      "fact": "약 3,000명 규모 KMC 연대, 사단 예비 후 레드 비치 상륙과 인천 시가 점령 임무, 편성표(ROK Marine Regt, Col SHIN)",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     },
     {
      "fact": "국군 해병대 1개 연대(3개 대대) 규모, 연대장 신현준, 3대대장 김윤근, 첫날 포로 181명 (국방일보 2010)",
      "url": "https://www.korea.kr/news/policyFocusView.do?newsId=148695317&pkgId=49500506"
     }
    ]
   },
   {
    "key": "nk|인천 방어부대",
    "parent": "조선인민군",
    "level": "R",
    "full": "인천 지구 조선인민군 방어부대 (제226독립육전연대, 배속 제918해안포연대 2대대 일부)",
    "cmd": null,
    "org": [
     "제226독립육전연대 (월미도에 3대대 소속 약 400명, 묘지언덕에 박격포중대)",
     "제918해안포연대 2대대 예하 2개 중대 (76mm포, 226연대에 배속)",
     "인천 시가: 신편 제9사단 87연대"
    ],
    "str": "약 2,000명 (월미도 약 400명)",
    "role": "월미도 수비대는 대부분 훈련이 부족한 신병이었고, 미 해병의 공중·함포 포격 뒤 저항이 미약했습니다. 묘지언덕의 226연대 박격포중대는 미 5해병연대 1대대 A중대 2소대에 거의 싸우지 않고 항복했습니다.",
    "casualties": "월미도: 사살 108명, 포로 136명, 매몰 약 150명 추정",
    "sources": [
     {
      "fact": "2,000명 규모, 226해병연대에 918해안포연대 2대대의 2개 중대 배속, 월미도 수비대 400명, 박격포중대 항복",
      "url": "https://gutenberg.org/cache/epub/65008/pg65008-images.html"
     },
     {
      "fact": "226독립육전연대 3대대 소속 400여 명, 918해안포연대 예하부대, 87연대, 2000여 명 (국방일보 2010)",
      "url": "https://www.korea.kr/news/policyFocusView.do?newsId=148695317&pkgId=49500506"
     }
    ]
   }
  ]
 },
 {
  "event": "e17",
  "battle": "장진호",
  "units": [
   {
    "key": "un|미 5·7해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제5·7해병연대 (유담리)",
    "cmd": [
     [
      "1950.11",
      "머레이 (Raymond L. Murray, 5해병연대) · 리첸버그 (Homer L. Litzenberg Jr., 7해병연대)"
     ]
    ],
    "org": [
     "미 5해병연대",
     "미 7해병연대"
    ],
    "str": null,
    "role": "두 연대가 유담리에서 함께 포위되었다가, 두 연대장이 합동 명령을 내려 12월 1일부터 하갈우리로 철수했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Murray and Litzenberg issued a joint breakout order from Yudam-ni (cites Appleman 1990)",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir"
     },
     {
      "fact": "5·7해병연대장과 대대장 (Montross & Canzona, 공식 전사 제3권)",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|미 5해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제1해병사단 제5해병연대",
    "cmd": [
     [
      "1950.11",
      "머레이 (Raymond L. Murray, 중령)"
     ]
    ],
    "org": [
     "1대대 (스티븐스 중령, John W. Stevens II)",
     "2대대 (로이스 중령, Harold S. Roise)",
     "3대대 (태플릿 중령, Robert D. Taplett)"
    ],
    "str": null,
    "role": "11월 27일 밤 유담리에서 7해병연대와 함께 중공군 79·89사단의 대규모 공격을 받았다. 12월 1일 7해병연대와 합동으로 유담리 철수를 시작했고, 3대대가 하갈우리까지 선두를 맡았다. 하갈우리에서는 12월 6일 2대대가 동쪽고지를 되찾았고, 7일 고토리로 철수할 때 2대대가 후위를 맡았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Murray's rank and name as 5th Marines CO; the three battalion commanders with dates",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Battalion commanders of 1/5, 2/5 and 3/5",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir_order_of_battle"
     }
    ]
   },
   {
    "key": "un|미 5해병연대 3대대",
    "parent": "미 5해병연대",
    "level": "Bn",
    "full": "미 제5해병연대 제3대대 (3/5)",
    "cmd": [
     [
      "1950.11",
      "태플릿 (Robert D. Taplett, 중령)"
     ]
    ],
    "org": [
     "G중대",
     "H중대",
     "I중대 (슈라이어 대위, Harold G. Schrier)",
     "화기중대"
    ],
    "str": "12월 1일 기준 소총중대 유효병력 437명 (G 114, H 180, I 143)",
    "role": "11월 27~28일 밤 유담리 북서쪽 능선에서 중공군 79사단의 공격을 막았다. 12월 1일부터 유담리–하갈우리 철수 종대의 선두로 도로 양쪽 고지를 차례로 점령했다. 12월 3일 덕동고개 부근에서 7해병연대 1대대와 합류했다.",
    "casualties": "소총중대 기준 11.27~30에 사상자 144명. 12.1~4에 전투·비전투 사상자 243명이 더 생겨 12월 4일 유효병력은 194명",
    "sources": [
     {
      "fact": "3/5 advance guard of the Yudam-ni breakout; effective-strength table 1–4 Dec; 144 casualties 27–30 Nov; Taplett CO",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|미 7해병연대",
    "parent": "미 1해병사단",
    "level": "R",
    "full": "미 제1해병사단 제7해병연대",
    "cmd": [
     [
      "1950.11",
      "리첸버그 (Homer L. Litzenberg Jr., 대령)"
     ]
    ],
    "org": [
     "1대대 (데이비스 중령 → 12.8 소여 소령)",
     "2대대 (록우드 중령)",
     "3대대 (해리스 중령 → 12.6 모리스 소령)"
    ],
    "str": null,
    "role": "유담리에서 11월 27~28일 밤 중공군의 포위 공격을 받았다. 2대대 본부는 하갈우리에 있어, 유담리의 D·E중대는 1대대가 임시로 지휘했고 F중대는 덕동고개에 따로 배치됐다. 12월 1~4일 철수에서 1대대는 산악을 넘어 덕동고개로 갔고, 3대대는 후위를 맡아 12월 4일 14시에 하갈우리에 들어왔다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Litzenberg rank and name; battalion commanders with change dates; 2/7 HQ at Hagaru; 3/7 rear guard entered Hagaru 1400 4 Dec",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Battalion commanders of 1/7, 2/7 and 3/7 incl. Davis→Sawyer and Harris→Morris",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir_order_of_battle"
     }
    ]
   },
   {
    "key": "un|미 7해병연대 1대대",
    "parent": "미 7해병연대",
    "level": "Bn",
    "full": "미 제7해병연대 제1대대 (1/7)",
    "cmd": [
     [
      "1950.11",
      "데이비스 (Raymond G. Davis, 중령)"
     ],
     [
      "1950.12.08",
      "소여 (Webb D. Sawyer, 소령)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대 (모리스 대위, John F. Morris)",
     "화기중대"
    ],
    "str": null,
    "role": "12월 1일 밤 장비를 버리고 산 능선을 따라 야간 행군해 고립된 F중대를 구출하러 나섰다. 12월 2일 11시 25분 B중대가 F중대 진지에 도착해 덕동고개를 확보했고, 12월 3일 13시 도로로 내려온 5해병연대 3대대와 합류했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Davis's 1/7 cross-country attack night of 1 Dec; reached Fox Company 1125 on 2 Dec; joined 3/5 1300 on 3 Dec; Davis to 7 Dec, then Sawyer",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Fox Company and 1/7 jointly secured Toktong Pass on 2 Dec",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir"
     }
    ]
   },
   {
    "key": "un|미 7해병연대 2대대",
    "parent": "미 7해병연대",
    "level": "Bn",
    "full": "미 제7해병연대 제2대대 (2/7)",
    "cmd": [
     [
      "1950.11",
      "록우드 (Randolph S. D. Lockwood, 중령)"
     ]
    ],
    "org": [
     "D중대 (유담리, 1대대가 임시 지휘)",
     "E중대 (유담리, 1대대가 임시 지휘)",
     "F중대 (덕동고개)"
    ],
    "str": null,
    "role": "대대 본부는 하갈우리에 있었고, 예하 중대는 유담리(D·E중대)와 덕동고개(F중대)로 나뉘어 따로 싸웠다.",
    "casualties": null,
    "sources": [
     {
      "fact": "2/7 HQ located at Hagaru; D·E companies at Yudam-ni under 1/7; F Company at Toktong Pass; Lockwood CO",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|F중대 (7해병연대 2대대)",
    "parent": "미 7해병연대 2대대",
    "level": "Co",
    "full": "미 제7해병연대 제2대대 F중대 (폭스 중대)",
    "cmd": [
     [
      "1950.11.07",
      "바버 (William E. Barber, 대위)"
     ],
     [
      "1950.12.03",
      "던 (John M. Dunne, 중위)"
     ]
    ],
    "org": [
     "1소대 (던 중위)",
     "2소대 (피터슨 중위, Elmer G. Peterson)",
     "3소대 (매카시 중위, Robert C. McCarthy)",
     "화기중대 중기관총반·81mm 박격포반 배속"
    ],
    "str": "장교·사병 240명 (배속 병력 포함)",
    "role": "11월 27일 정오 하갈우리를 떠나 유담리–하갈우리 보급로의 덕동고개 중간 고지(폭스힐)에 진지를 구축했다. 5일 밤낮으로 중공군 59사단의 공격을 막아 고개를 지켰고, 12월 2일 7해병연대 1대대가 산을 넘어 도착하면서 구출됐다.",
    "casualties": "5일간 사상자 118명 (전사 26, 실종 3, 부상 89). 장교 7명 중 6명 부상",
    "sources": [
     {
      "fact": "240 incl. Weapons Co sections; platoon leaders; departed Hagaru noon 27 Nov; 118 casualties (26 KIA, 3 MIA, 89 WIA); Barber's command 7 Nov–3 Dec",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Held five days against PVA 59th Division; relieved by 1/7 on 2 Dec",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 3대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제3대대 (3/1)",
    "cmd": [
     [
      "1950.11",
      "리지 (Thomas L. Ridge, 중령)"
     ]
    ],
    "org": [
     "G중대 (시터 대위)",
     "H중대 (콜리 대위, Clarence E. Corley)",
     "I중대 (피셔 중위, Joseph R. Fisher)",
     "화기중대 (시먼스 소령, Edwin H. Simmons)"
    ],
    "str": null,
    "role": "차량이 모자라 G중대를 남겨 둔 채 11월 26일 해 질 무렵 하갈우리에 도착해 사단 지휘소 기지의 주 방어를 맡았다. 11월 28~29일 밤 중공군 58사단의 주공을 H·I중대가 막았고, 동쪽고지에서는 공병·근무부대와 함께 고전했다. 12월 7일 고토리로 철수했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "3/1 arrived Hagaru after dusk 26 Nov without G Co; How and Item bore the CCF assault; company commanders; moved out 7 Dec",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Ridge commanded 3/1 and predicted the attack for 28 Nov",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 3대대 G중대",
    "parent": "미 1해병연대 3대대",
    "level": "Co",
    "full": "미 제1해병연대 제3대대 G중대",
    "cmd": [
     [
      "1950.10.31",
      "시터 (Carl L. Sitter, 대위)"
     ]
    ],
    "org": null,
    "str": "약 205명 (드라이스데일 특임대 편성 시 추정)",
    "role": "11월 28일 고토리에서 41코만도 등과 함께 드라이스데일 특임대로 편성됐다. 29일 중공군 포위망을 뚫고 하갈우리에 들어갔고, 드라이스데일이 부상한 뒤에는 시터 대위가 특임대 선두를 지휘했다. 30일 하갈우리 동쪽고지를 공격했다.",
    "casualties": "드라이스데일 특임대 행군 중 전사·실종 8, 부상 40 (추정)",
    "sources": [
     {
      "fact": "Estimated strength 205; Task Force Drysdale casualty table; Sitter took command after Drysdale was wounded; attack on East Hill",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 2대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제2대대 (2/1)",
    "cmd": [
     [
      "1950.11",
      "서터 (Allan Sutter, 중령)"
     ]
    ],
    "org": [
     "D중대 (크롱크 대위, Welby W. Cronk)",
     "E중대",
     "F중대 (그로프 대위, Goodwin C. Groff)",
     "화기중대"
    ],
    "str": null,
    "role": "연대장 풀러 대령의 지휘소와 함께 고토리 방어선을 지켰다. 11월 28일 D중대가 하갈우리 방향 보급로를 뚫으려 했지만 중공군 60사단 179연대에 막혀 돌아왔다. 같은 날 저녁 풀러는 고토리에 도착한 41코만도 등으로 드라이스데일 특임대를 편성했다.",
    "casualties": "11월 28일 보급로 개통 작전: 전사·부상 후 사망 4, 부상 34",
    "sources": [
     {
      "fact": "Sutter CO 2/1; Dog Co's 28 Nov attempt north of Koto-ri; losses; prisoners from 179th Regt, 60th CCF Div; Puller organized TF Drysdale",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|미 1해병연대 1대대",
    "parent": "미 1해병연대",
    "level": "Bn",
    "full": "미 제1해병연대 제1대대 (1/1)",
    "cmd": [
     [
      "1950.11.08",
      "슈멕 (Donald M. Schmuck, 중령)"
     ]
    ],
    "org": [
     "A중대 (배로 대위, Robert H. Barrow)",
     "B중대 (노렌 대위, Wesley Noren)",
     "C중대 (레이 대위, Robert P. Wray)",
     "화기중대"
    ],
    "str": "A중대 223명 (12월 8일 출발 시)",
    "role": "진흥리에서 보급로 남단을 지켰다. 12월 8일 눈보라 속에 북쪽으로 공격해 황초령을 내려다보는 1081고지를 노렸고, 9일 15시 A중대가 정상을 점령해 사단이 고토리에서 남쪽으로 철수할 길을 열었다.",
    "casualties": "A중대 223명 중 1081고지 점령 후 전투 가능 인원 111명",
    "sources": [
     {
      "fact": "Schmuck new CO (Hawkins to 7 Nov) at Chinhung-ni; attack on Hill 1081 8 Dec; captured 1500 on 9 Dec; Barrow 111 of 223",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "un|영국 41해병코만도",
    "parent": "미 1해병사단",
    "level": "Bn",
    "full": "영국 해병대 제41독립코만도",
    "cmd": [
     [
      "1950.11",
      "드라이스데일 (Douglas B. Drysdale, 중령)"
     ]
    ],
    "org": null,
    "str": "약 235명 (추정)",
    "role": "11월 28일 고토리에서 미 해병 G/3/1, 미 육군 B/31과 함께 드라이스데일 특임대(약 922명)의 중심이 됐다. 29일 '헬파이어 밸리'에서 종대가 끊겼지만 병력의 약 3/4은 하갈우리에 들어가 수비를 보강했다. 이후 동쪽고지 방어를 거들었고 12월 7일 고토리로 철수했다. 장진호 작전으로 미국 대통령 부대 표창을 받았다.",
    "casualties": "특임대 행군 중 전사·실종 18, 부상 43 (추정)",
    "sources": [
     {
      "fact": "Estimated strength 235; TF Drysdale composition (922); casualty table; Drysdale wounded",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Part of Taskforce Drysdale from Koto-ri; US Presidential Unit Citation for Chosin",
      "url": "https://www.commandoveterans.org/41_Independent_Commando_archive"
     }
    ]
   },
   {
    "key": "un|미 31연대전투단",
    "parent": "미 7사단",
    "level": "R",
    "full": "미 제7보병사단 제31연대전투단 (매클린·페이스 특임대)",
    "cmd": [
     [
      "1950.11",
      "매클린 (Allan D. MacLean, 대령)"
     ],
     [
      "1950.11.29",
      "페이스 (Don C. Faith Jr., 중령)"
     ]
    ],
    "org": [
     "1대대 (32연대)",
     "3대대 (31연대)·57야포대대",
     "15방공포대대 D포대 1개 소대"
    ],
    "str": "미군 약 2,500명 + 카투사 약 700명",
    "role": "장진호 동안(신흥리 일대)에서 11월 27~28일 밤부터 중공군 80사단과 81사단 일부에게 포위됐다. 매클린 대령이 29일 부상·포로가 된 뒤 페이스 중령이 지휘를 맡았고, 12월 1일 하갈우리로 돌파를 시도하다 지휘관을 잃으면서 무너졌다.",
    "casualties": "최대 약 75% 사상. 하갈우리에 도착한 생존자 약 670명, 그중 전투 가능 인원 385명은 임시대대로 편성. 미군 1,777명 중 1,392명이 실종(전사·포로) 처리",
    "sources": [
     {
      "fact": "Composition; ~2,500 US + 700 KATUSA; MacLean captured; 1,392 of 1,777 missing; 385 survivors; PVA 80th Div + 242nd Regt of 81st Div",
      "url": "https://en.wikipedia.org/wiki/Task_Force_Faith"
     },
     {
      "fact": "Casualties up to 75%; about 670 survivors reached Hagaru",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "About 3,000 Americans; D Btry 15th AAA attached; MacLean wounded and disappeared",
      "url": "https://www.koreanwaronline.com/arms/31RCT.htm"
     }
    ]
   },
   {
    "key": "un|1대대 (32연대)",
    "parent": "미 31연대전투단",
    "level": "Bn",
    "full": "미 제7보병사단 제32보병연대 제1대대",
    "cmd": [
     [
      "1950.11",
      "페이스 (Don C. Faith Jr., 중령, 12.1 치명상)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대",
     "D중대 (화기)",
     "중대별 한국군 30~50명 배속"
    ],
    "str": "작전 시작 시 1,053명 (카투사 포함)",
    "role": "장진호 동안 가장 북쪽에 따로 방어선을 쳤다가 11월 27~28일 밤 공격을 받고, 남쪽으로 싸우며 내려와 신흥리의 3/31·57야포대대와 합류했다. 12월 1일 하갈우리 돌파의 선두에 섰으나 페이스 중령이 하갈우리 약 7km 앞에서 치명상을 입은 뒤 종대가 와해됐다(미 육군 기록상 사망일 12월 2일).",
    "casualties": "12월 4일 집계 생존 인원 181명 (시작 1,053명)",
    "sources": [
     {
      "fact": "Faith held separate perimeter; fought through to Sinhung-ni; mortally wounded 4.5 miles from Hagaru at dusk 1 Dec",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Began with 1,053 men; 181 counted on 4 Dec; 30–50 ROK soldiers per company",
      "url": "https://www.koreanwaronline.com/arms/31RCT.htm"
     },
     {
      "fact": "Faith commanded 1/32; killed 2 Dec 1950",
      "url": "https://www.army.mil/article/101279"
     }
    ]
   },
   {
    "key": "un|3대대 (31연대)·57야포대대",
    "parent": "미 31연대전투단",
    "level": "Bn",
    "full": "미 제31보병연대 제3대대 및 제57야전포병대대 (A·B포대)",
    "cmd": [
     [
      "1950.11",
      "라일리 (William Reilly, 3/31) · 엠브리 (57야포대대)"
     ]
    ],
    "org": [
     "3/31 I·K·L·M중대",
     "57야포대대 A·B포대 (105mm)",
     "15방공포대대 D포대 배속"
    ],
    "str": null,
    "role": "신흥리 부근에 방어선을 쳤다가 11월 27~28일 밤 기습을 받아 K중대가 무너지고 57야포대대 A포대가 유린당했으며, 라일리와 엠브리 두 지휘관이 모두 부상했다. 이후 1/32와 합류해 페이스의 지휘 아래 버티다가 12월 1일 화포를 파괴하고 돌파에 나섰다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Reilly (3/31) and Embree (57th FA) both became casualties around dawn 28 Nov; Able Battery overrun (Changjin Journal, Maj Hugh Robbins)",
      "url": "https://archive.nymas.org/text_resources/The+Changjin+Journal/Changjinjournal040228.html"
     },
     {
      "fact": "Perimeter near Sinhung-ni; howitzers destroyed before 1 Dec breakout",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Reilly as 3/31 CO; only Batteries A and B of 57th FA present",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir_order_of_battle"
     }
    ]
   },
   {
    "key": "cn|중공군 58사단",
    "parent": "20군",
    "level": "D",
    "full": "중국인민지원군 제20군 제58사단",
    "cmd": null,
    "org": [
     "172연대",
     "173연대",
     "174연대"
    ],
    "str": null,
    "role": "11월 28일 처음 하갈우리 공격에 나섰고, 28~29일과 30일 밤 1해병연대 3대대가 지키던 하갈우리 방어선과 동쪽고지를 공격하다 큰 타격을 입었다.",
    "casualties": "3/1 보고서 추정 (11.28~12.5): 172연대 3,300, 173·174연대 각 1,750",
    "sources": [
     {
      "fact": "58th Div first in action at Hagaru 28 Nov, badly cut up; regiments; 3/1 report casualty estimates",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "cn|중공군 59사단",
    "parent": "20군",
    "level": "D",
    "full": "중국인민지원군 제20군 제59사단",
    "cmd": null,
    "org": [
     "175연대",
     "176연대",
     "177연대"
    ],
    "str": null,
    "role": "유담리 남쪽으로 크게 우회해 덕동고개로 들어가 유담리–하갈우리 보급로를 끊었고, 덕동고개의 F중대를 5일간 공격했다.",
    "casualties": "176연대 추정 사상자 1,750명 (3/1 보고서)",
    "sources": [
     {
      "fact": "59th Div wide envelopment to Toktong Pass to cut the MSR; 176th Regt casualty estimate",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "Fox Company held five days against PVA 59th Division",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chosin_Reservoir"
     }
    ]
   },
   {
    "key": "cn|중공군 60사단",
    "parent": "20군",
    "level": "D",
    "full": "중국인민지원군 제20군 제60사단",
    "cmd": null,
    "org": [
     "178연대",
     "179연대",
     "180연대"
    ],
    "str": null,
    "role": "고토리를 북쪽에서 포위하고 하갈우리 방향 보급로를 막았다. 이후 고토리 남쪽 1081고지 등 황초령 일대에 진지를 구축했다가 12월 8~9일 1해병연대 1대대에게 밀려났다.",
    "casualties": null,
    "sources": [
     {
      "fact": "Prisoners from 179th Regt, 60th CCF Div at Koto-ri 28 Nov; 60th Div held positions incl. Hill 1081",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "cn|중공군 79사단",
    "parent": "27군",
    "level": "D",
    "full": "중국인민지원군 제27군 제79사단",
    "cmd": null,
    "org": [
     "235연대",
     "236연대",
     "237연대"
    ],
    "str": null,
    "role": "11월 27일 밤 89사단과 함께 유담리 방어선의 북쪽·북서쪽 능선을 정면으로 공격했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "79th Div attacked Yudam-ni 27 Nov with 89th Div; regiments",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     }
    ]
   },
   {
    "key": "cn|중공군 80사단",
    "parent": "27군",
    "level": "D",
    "full": "중국인민지원군 제27군 제80사단",
    "cmd": null,
    "org": [
     "238연대",
     "239연대",
     "240연대"
    ],
    "str": null,
    "role": "11월 27일 밤 장진호 동안에서 미 31연대전투단을 공격해 포위했다. 81사단 242연대(이후 241연대도)의 증원을 받아 남쪽 퇴로를 막았다.",
    "casualties": "중국 측 기록은 80·81사단 사상자 4,300명을 주장하나 불확실",
    "sources": [
     {
      "fact": "80th Div attacked 7th Inf Div units east of Reservoir 27 Nov; regiments",
      "url": "https://www.gutenberg.org/cache/epub/65009/pg65009.txt"
     },
     {
      "fact": "80th Div reinforced by 242nd and later 241st Regt of 81st Div",
      "url": "https://en.wikipedia.org/wiki/Task_Force_Faith"
     }
    ]
   }
  ]
 },
 {
  "event": "e20",
  "battle": "지평리",
  "units": [
   {
    "key": "un|미 23연대 + 프랑스 대대",
    "parent": null,
    "level": "R",
    "full": "미 제2보병사단 제23연대전투단 (프랑스 대대 배속)",
    "cmd": [
     [
      "1951.02",
      "프리먼 (Paul L. Freeman Jr.)"
     ],
     [
      "1951.02.15",
      "차일스 (John H. Chiles)"
     ]
    ],
    "org": [
     "23연대 1대대",
     "23연대 2대대",
     "23연대 3대대",
     "프랑스 대대",
     "제1레인저중대",
     "37야포대대",
     "503야포대대 B포대 (155mm)",
     "82대공포대대 B포대",
     "2공병대대 B중대",
     "2통신중대 일부, 2의무대대 1개 소대"
    ],
    "str": "약 4,500명 (전선 보병 약 2,500명)",
    "role": "지평리 마을을 둘러싼 지름 약 1마일의 원형 진지를 구축해 2월 13~15일 중공군 여러 사단의 야간 공격을 막아냈다. 연대장 프리먼은 박격포 파편에 다리를 다쳤으나 바로 후송을 거부했다. 군단장 알몬드가 14일 아침 차일스 대령을 보냈고, 15일 오전 프리먼이 후송되자 차일스가 지휘를 이어받았다.",
    "casualties": "전사 52, 부상 259, 실종 42명 (2월 16일 기준). 연대가 집계·추정한 중공군 피해 4,946명",
    "sources": [
     {
      "fact": "RCT 편성, 4개 방어 구역, 프리먼 부상, 차일스 투입(14일)과 지휘 인수(15일), 피해 52/259/42, 중공군 4,946명 (Mossman, Ebb and Flow)",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "총병력 4,500명, 전선 보병 2,500명 (Gugeler·Mossman 인용)",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chipyong-ni"
     },
     {
      "fact": "약 4,500명, 출발 당시 전투력 약 75%",
      "url": "https://historynet.com/chipyongni/"
     }
    ]
   },
   {
    "key": "un|23연대 1대대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bn",
    "full": "미 제23보병연대 제1대대",
    "cmd": [
     [
      "1951.02",
      "— (자료마다 다름)"
     ]
    ],
    "org": [
     "C중대",
     "A중대",
     "B중대 (연대 예비)"
    ],
    "str": null,
    "role": "방어선 북쪽 호를 맡았다. 13일 밤 23:30경 C중대가 24번 도로 일대에서 공격을 받았다. B중대는 레인저중대와 함께 1대대 방어선 뒤에서 예비로 대기했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "1대대가 북쪽 호, B중대와 레인저중대가 1대대 뒤 예비, A·C중대 북쪽",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "북쪽 1대대, C중대 24번 도로 방어",
      "url": "https://historynet.com/chipyongni/"
     }
    ]
   },
   {
    "key": "un|23연대 C중대",
    "parent": "23연대 1대대",
    "level": "Co",
    "full": "미 제23보병연대 제1대대 C중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "북쪽 24번 도로가 지나는 골짜기와 봉미산 서쪽 능선에 배치됐다. 13일 밤 기관총·박격포 사격에 이어 23:30경 중공군의 첫 공격을 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "24번 도로 골짜기·봉미산 서쪽 능선 배치, 23:30 공격",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|23연대 2대대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bn",
    "full": "미 제23보병연대 제2대대",
    "cmd": [
     [
      "1951.02",
      "에드워즈 (James W. Edwards)"
     ]
    ],
    "org": [
     "E중대",
     "F중대",
     "G중대",
     "H중대 (중화기)"
    ],
    "str": null,
    "role": "방어선 남쪽을 맡아 14~15일 밤 중공군 주공을 받아냈다. G중대 진지를 잃자 에드워즈는 F중대·레인저·포병 등으로 혼성부대를 꾸려 04:00경 역습했으나 큰 피해를 입고 다시 밀려났다. 15일에는 소화기·박격포탄이 거의 바닥났다.",
    "casualties": null,
    "sources": [
     {
      "fact": "에드워즈 중령 2대대장, 남쪽 구역, 04:00 혼성부대 역습, 탄약 부족",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "2대대장 Lt. Col. James W. Edwards, F·G·H중대 배치 (Gugeler, Combat Actions in Korea)",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     }
    ]
   },
   {
    "key": "un|G중대 (23연대 2대대)",
    "parent": "23연대 2대대",
    "level": "Co",
    "full": "미 제23보병연대 제2대대 G중대",
    "cmd": [
     [
      "1951.02",
      "히스 (Thomas Heath)"
     ]
    ],
    "org": [
     "1소대",
     "2소대",
     "3소대 (맥기 중위, Paul J. McGee)",
     "4소대 (박격포, 하버먼 중위, Carl F. Haberman)",
     "H중대 중기관총반 배속"
    ],
    "str": null,
    "role": "남쪽 397고지 방향을 바라보는 U자형 언덕을 지켰다. 14~15일 밤 강한 공격을 받아 03:00경 남은 진지를 내주고 503포대 곡사포 뒤 둔덕으로 물러났다. 역습이 실패한 뒤 날이 밝을 무렵 약 400m 뒤 능선을 확보했다.",
    "casualties": "정확한 집계 없음. 1소대 4명이 장대폭약에 전사했고, 3소대는 몇 명만 남았다 (Gugeler)",
    "sources": [
     {
      "fact": "중대장 Lt. Thomas Heath, 소대 배치·지휘자, 1소대 4명 전사",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     },
     {
      "fact": "397고지 방향 공격, 03:00 진지 포기, 503포대 뒤 철수",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|23연대 3대대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bn",
    "full": "미 제23보병연대 제3대대",
    "cmd": [
     [
      "1951.02",
      "— (출처마다 다름: 'Kane 중령'으로 적은 자료가 있으나 이름이 엇갈림)"
     ]
    ],
    "org": [
     "I중대",
     "K중대",
     "L중대"
    ],
    "str": null,
    "role": "방어선 동쪽을 맡았다. 13~14일 밤 I·K중대가 공격을 받아 I중대가 한때 진지 하나를 잃었고, 14일 06:30경 중공군의 강한 공격도 막아냈다.",
    "casualties": null,
    "sources": [
     {
      "fact": "동쪽 3대대, I·K중대 피격, I중대 진지 일시 상실, 06:30 공격 격퇴",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "동쪽 3대대에 I·K중대",
      "url": "https://historynet.com/chipyongni/"
     }
    ]
   },
   {
    "key": "un|23연대 I중대",
    "parent": "23연대 3대대",
    "level": "Co",
    "full": "미 제23보병연대 제3대대 I중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "동쪽 구역을 지켰다. 14일 새벽 02:30경 진지 일부가 돌파당해 한때 진지를 잃었으나 날이 밝기 전 공격을 막아냈다.",
    "casualties": null,
    "sources": [
     {
      "fact": "I중대가 한때 진지 상실",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "14일 02:30 I중대 방어선 돌파 (Gugeler 인용)",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chipyong-ni"
     }
    ]
   },
   {
    "key": "un|프랑스 대대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bn",
    "full": "유엔군 프랑스 대대",
    "cmd": [
     [
      "1951.02",
      "몽클라르 (Ralph Monclar)"
     ]
    ],
    "org": [
     "소총중대 3개",
     "중화기중대",
     "한국인(카투사) 중대"
    ],
    "str": "약 800~1,000명 (출처마다 다름)",
    "role": "방어선 서쪽(345고지 일대)을 맡아 13~14일 밤 두 지점에서 공격을 받았다. 14~15일 밤에는 G중대 역습을 도우려다 실패하고 측방 보호를 위해 물러났다. 프랑스 측 서술에 따르면 몽클라르가 역습을 명령해 사이렌·나팔로 적을 혼란시킨 뒤 총검 돌격으로 진지를 되찾았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "서쪽 구역, 13~14일 밤 두 지점 피격, 14~15일 역습 지원 실패 후 철수",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "몽클라르는 중장 계급을 내려놓고 중령으로 대대를 지휘",
      "url": "https://en.wikipedia.org/wiki/French_Battalion"
     },
     {
      "fact": "약 1,000명, 소총 3개 중대·중화기중대·카투사 중대, 사이렌·나팔 후 총검 역습 (프랑스 측 서술)",
      "url": "https://theatrum-belli.com/13-15-fevrier-1951-bataille-de-chipyong-ni-4-500-hommes-americains-et-francais-contre-une-armee-chinoise/"
     }
    ]
   },
   {
    "key": "un|제1레인저중대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Co",
    "full": "미 제1레인저보병중대 (배속)",
    "cmd": null,
    "org": null,
    "str": "역습에 투입된 1개 소대 36명 (Gugeler)",
    "role": "B중대와 함께 1대대 뒤에서 연대 예비로 있었다. 15일 새벽 2개 소대가 G중대 진지 탈환 역습에 참가했고, 08:00경 남은 병력도 B중대와 함께 투입됐다.",
    "casualties": "역습 중 아군 오사로 여러 명, 박격포로 최소 6명 부상 (Gugeler)",
    "sources": [
     {
      "fact": "연대 예비, 2개 소대 역습 참가, 36명, 피해",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     },
     {
      "fact": "편성에 1st Ranger Company 포함, 08:00 B중대와 함께 투입",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|37야포대대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bn",
    "full": "미 제2보병사단 제37야전포병대대 (105mm)",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "2월 5일 지평리에 도착해 연대를 직접 지원했다. 연락장교 엘리지 대위(John A. Elledge)와 전방관측자들이 G중대 등과 함께 화력을 유도했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "2월 5일 도착·배속, 연락장교 Elledge, G중대 전방관측자",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     },
     {
      "fact": "RCT 편성에 포함",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|503야포대대 B포대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bty",
    "full": "미 제503야전포병대대 B포대 (155mm 곡사포)",
    "cmd": [
     [
      "1951.02",
      "로크노프스키 (Arthur Rochnowski)"
     ]
    ],
    "org": null,
    "str": "병력 대부분이 경험 없는 보충병 (군우리에서 포대 절반 이상 손실)",
    "role": "G중대 바로 뒤에서 37야포대대의 화력을 보강했다. 14~15일 밤 G중대가 무너지자 포병들이 역습에 나섰으나 실패하고 포 뒤쪽 둔덕으로 물러났다.",
    "casualties": "전초에서 박격포탄에 2명 전사·6명 부상 등 (부분 집계)",
    "sources": [
     {
      "fact": "포대장 Lt. Arthur Rochnowski, 보충병 구성, 피해",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     },
     {
      "fact": "155mm, G중대 뒤 위치, 역습 실패",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|82대공포대대 B포대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Bty",
    "full": "미 제82대공포병(자동화기)대대 B포대",
    "cmd": null,
    "org": [
     "M16 4연장 .50 자주대공포 6대",
     "M19 40mm 쌍열 자주대공포 4대"
    ],
    "str": null,
    "role": "자주 대공포를 지상전에 투입해 진지 화력을 보탰다.",
    "casualties": null,
    "sources": [
     {
      "fact": "M16 6대·M19 4대로 합류",
      "url": "https://www.koreanwaronline.com/history/CombatActions/Chipyong-ni.htm"
     },
     {
      "fact": "RCT 편성에 포함",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|2공병대대 B중대",
    "parent": "미 23연대 + 프랑스 대대",
    "level": "Co",
    "full": "미 제2공병전투대대 B중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "13일 해질녘부터 대대·연대 본부 병력과 함께 마을 안쪽의 제2방어선을 지켰다.",
    "casualties": null,
    "sources": [
     {
      "fact": "2공병 B중대가 내곽 방어선 담당",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|미 5기병연대",
    "parent": null,
    "level": "R",
    "full": "미 제1기병사단 제5기병연대",
    "cmd": [
     [
      "1951.02",
      "크롬베즈 (Marcel G. Crombez)"
     ]
    ],
    "org": [
     "크롬베즈 특수임무부대"
    ],
    "str": null,
    "role": "연대장 크롬베즈가 직접 기갑 구출부대(크롬베즈 특수임무부대)를 이끌고 지평리 포위망을 풀었다.",
    "casualties": null,
    "sources": [
     {
      "fact": "5기병연대장 크롬베즈가 구출부대 지휘",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "un|크롬베즈 특수임무부대",
    "parent": "미 5기병연대",
    "level": "Bn",
    "full": "크롬베즈 특수임무부대 (Task Force Crombez)",
    "cmd": [
     [
      "1951.02.15",
      "크롬베즈 (Marcel G. Crombez)"
     ]
    ],
    "org": [
     "6전차대대 D중대 (M46)",
     "70전차대대 A중대 1개 소대 (M4A3)",
     "5기병연대 L중대 (전차 탑승 보병 160명)",
     "공병 4명 (지뢰 제거)"
    ],
    "str": "전차 23대, 탑승 보병 160명 + 공병 4명",
    "role": "15일 15:45 출발해 곡수리 일대 중공군 저지선을 뚫었고, 17:00~17:25경 지평리 진지에 들어가 포위망을 풀었다. 보급 트럭과 구급차는 따라붙지 못해 뒤에 남겼다.",
    "casualties": "전차부대 3명 전사·4명 부상 (D중대장 히어스 대위 전사), 전차 3대 손상",
    "sources": [
     {
      "fact": "지휘관, 전차 23대·부대 구성, 15:45 출발, 17:15경 도착, 손실",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     },
     {
      "fact": "M46/M4A3 구분, 17:00 도착, 트럭·구급차 미동행 결정",
      "url": "https://www.koreanwaronline.com/history/CombatActions/TFCrombez.htm"
     },
     {
      "fact": "'크롬베즈 특공대', 미 1기병사단 소속, 저녁 무렵 포위 해제",
      "url": "https://encykorea.aks.ac.kr/Article/E0054443"
     }
    ]
   },
   {
    "key": "un|5기병연대 L중대",
    "parent": "크롬베즈 특수임무부대",
    "level": "Co",
    "full": "미 제1기병사단 제5기병연대 제3대대 L중대",
    "cmd": [
     [
      "1951.02",
      "배럿 (John C. Barrett)"
     ]
    ],
    "org": null,
    "str": "160명 (전차 15대에 나눠 탑승)",
    "role": "전차 위에 올라탄 채 돌파에 나섰다. 곡수리에서 전차가 멈출 때마다 내려 싸우다 약 90명이 뒤에 남겨졌다. 3대대장 트레이시 중령(Edgar J. Treacy Jr.)은 막판에 합류했다가 중공군에 포로가 됐다.",
    "casualties": "전사 12, 부상 약 40, 실종 19명. 지평리에 도착한 인원은 23명 (13명 부상)",
    "sources": [
     {
      "fact": "중대장 Barrett, 160명·전차 15대, Treacy 합류·포로, 23명 도착, 피해",
      "url": "https://www.koreanwaronline.com/history/CombatActions/TFCrombez.htm"
     },
     {
      "fact": "약 90명 낙오, 12 전사·40 부상·19 실종",
      "url": "https://www.koreanwaronline.com/history/EbbAndFlow/Ch15.htm"
     }
    ]
   },
   {
    "key": "cn|중공군 119사단",
    "parent": "40군",
    "level": "D",
    "full": "중국인민지원군 제40군 제119사단",
    "cmd": [
     [
      "1951.02",
      "쉬궈푸 (徐国夫)"
     ]
    ],
    "org": [
     "356연대",
     "357연대"
    ],
    "str": null,
    "role": "사단장 쉬궈푸가 지평리 공격의 현장 지휘를 맡았다(본인 회고). 실제 공격에 들어간 것은 356·357연대와 120사단 359연대 등 3개 연대(약 3,000명)뿐이었고, 다른 연대들은 어둠 속에 길을 잃었다. 15일 40군장 원위청의 명령으로 철수했다.",
    "casualties": "쉬궈푸 주장: 3개 연대 합계 900여 명, 그중 약 1/3 전사",
    "sources": [
     {
      "fact": "쉬궈푸 회고·인민일보 인용: 현장 지휘, 투입 연대, 철수 명령, 피해 주장",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Chipyong-ni"
     }
    ]
   }
  ]
 },
 {
  "event": "e22",
  "battle": "설마리",
  "units": [
   {
    "key": "un|영국 29여단",
    "parent": null,
    "level": "B",
    "full": "영국 제29독립보병여단전투단",
    "cmd": [
     [
      "1951.04",
      "브로디 (Thomas Brodie)"
     ]
    ],
    "org": [
     "영국 글로스터 대대",
     "노섬벌랜드 퓨질리어 1대대",
     "로열 얼스터 소총 1대대",
     "벨기에 대대 (룩셈부르크 소대 배속)",
     "8왕립아일랜드후사르 (C대대, 센추리온 전차)",
     "45야포연대 (25파운더)",
     "170박격포대 (4.2인치 박격포)"
    ],
    "str": "약 4,000~4,500명",
    "role": "1951년 4월 22~25일 임진강 약 15km 정면에서 중공군 제63군 예하 3개 사단의 공격을 받았다. 서울로 향하는 중공군 춘계공세를 지연시킨 뒤 25일 철수했다.",
    "casualties": "1,091명 (여단 전력의 약 4분의 1)",
    "sources": [
     {
      "fact": "브로디 지휘, 예하 부대, 사상자 1,091명, 전력의 4분의 1",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     },
     {
      "fact": "브로디 지휘, 예하 부대 목록, 15km 정면, 3개 사단",
      "url": "https://www.gloucestershire.gov.uk/media/nfsprbjs/battle-of-imjin-river-info-sheet-2021-02-10.pdf"
     },
     {
      "fact": "여단 약 4,000명, 중공군 제63군 27,000명 이상",
      "url": "https://www.lbc.co.uk/hot-topics/royals/princess-anne-honours-fallen-british-soldiers-at-korean-war-memorial/"
     }
    ]
   },
   {
    "key": "un|영국 글로스터 대대",
    "parent": "영국 29여단",
    "level": "Bn",
    "full": "글로스터셔연대 제1대대",
    "cmd": [
     [
      "1951.04",
      "카니 (James P. Carne)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대",
     "D중대",
     "지원중대"
    ],
    "str": "약 700명 (자료에 따라 650~850명)",
    "role": "임진강 도하점을 방어하다 235고지(지금의 글로스터 고지)로 밀려나 24일 완전히 포위되었다. 여단의 나머지가 철수하는 동안 고지를 지켰고, 25일 탈출 허가를 받았으나 대부분 포로가 되었다. 카니 중령도 포로가 되었고 빅토리아 십자훈장을 받았다.",
    "casualties": "사상·실종 622명. 전사 59명, 포로 약 526명(억류 중 34명 사망). 탈출 인원은 자료에 따라 39~63명",
    "sources": [
     {
      "fact": "카니 지휘, 235고지 고수, 사상자 622명, 대부분 포로",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     },
     {
      "fact": "카니 지휘, 39명만 귀환, 622명 사상, 522명 포로",
      "url": "https://www.gloucestershire.gov.uk/media/nfsprbjs/battle-of-imjin-river-info-sheet-2021-02-10.pdf"
     },
     {
      "fact": "약 700명, 전사 59명, 포로 526명, 억류 중 34명 사망",
      "url": "https://www.lbc.co.uk/hot-topics/royals/princess-anne-honours-fallen-british-soldiers-at-korean-war-memorial/"
     },
     {
      "fact": "700명 대대, 카니 포로, 빅토리아 십자훈장",
      "url": "https://en.wikipedia.org/wiki/James_Carne"
     }
    ]
   },
   {
    "key": "un|A중대 (글로스터)",
    "parent": "영국 글로스터 대대",
    "level": "Co",
    "full": "글로스터셔연대 1대대 A중대",
    "cmd": [
     [
      "1951.04",
      "— (앤지어 소령의 전사는 확인되나 A중대장이었는지는 미확인)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "대대 좌측 전방 중대로서 임진강 주 도하점을 내려다보는 148고지(캐슬 힐)를 지켰다. 22~23일 밤 대규모 공격을 받아 고지에서 밀려났다. 탈환 역습을 이끈 커티스 중위(Philip Curtis)가 전사했고 사후 빅토리아 십자훈장을 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "A중대 148고지(캐슬 힐) 방어, 고지 상실",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     },
     {
      "fact": "A중대가 캐슬 힐에서 공격받음, 커티스 1951.4.23 전사(VC)",
      "url": "https://en.wikipedia.org/wiki/Philip_Curtis"
     },
     {
      "fact": "A중대는 좌측 전방 중대, 캐슬 힐은 임진강 주 도하점을 감제 (DCM 공적문)",
      "url": "https://en.wikipedia.org/wiki/Henry_Joseph_Gallagher"
     }
    ]
   },
   {
    "key": "un|B중대 (글로스터)",
    "parent": "영국 글로스터 대대",
    "level": "Co",
    "full": "글로스터셔연대 1대대 B중대",
    "cmd": [
     [
      "1951.04",
      "하딩 (Edgar Denis Harding)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "대대 동측에 배치되었다가, 포위가 좁혀지자 235고지의 대대 주력과 합류했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "B중대장 에드거 데니스 하딩 소령",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|C중대 (글로스터)",
    "parent": "영국 글로스터 대대",
    "level": "Co",
    "full": "글로스터셔연대 1대대 C중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "22일 템플 중위가 이끄는 소대가 강가에서 중공군 제187사단 559연대와 교전했다. 23~24일 밤 중대장이 실종되었고, 중대는 대대본부·지원중대와 함께 235고지로 물러났다.",
    "casualties": null,
    "sources": [
     {
      "fact": "템플 중위 소대 교전(559연대), 중대장 실종, 235고지 철수",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|D중대 (글로스터)",
    "parent": "영국 글로스터 대대",
    "level": "Co",
    "full": "글로스터셔연대 1대대 D중대",
    "cmd": [
     [
      "1951.04.25",
      "하비 (Mike Harvey, 탈출 시 지휘)"
     ]
    ],
    "org": null,
    "str": "탈출 시 장교 5명, 병 41명",
    "role": "25일 탈출 명령 뒤 하비 소령이 이끈 D중대 잔존 병력이 며칠 만에 유엔군 전선에 닿았다. 대대에서 조직적으로 탈출에 성공한 유일한 집단이다.",
    "casualties": null,
    "sources": [
     {
      "fact": "하비 소령 지휘 D중대 잔존 병력 귀환, 장교 5·병 41명",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|지원중대 (글로스터)",
    "parent": "영국 글로스터 대대",
    "level": "Co",
    "full": "글로스터셔연대 1대대 지원중대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "대대본부, C중대와 함께 235고지로 철수해 최후 방어 진지를 이루었다.",
    "casualties": null,
    "sources": [
     {
      "fact": "대대본부·지원중대·C중대가 235고지로 철수",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|노섬벌랜드 퓨질리어 1대대",
    "parent": "영국 29여단",
    "level": "Bn",
    "full": "로열 노섬벌랜드 퓨질리어 연대 제1대대",
    "cmd": [
     [
      "1951.04",
      "포스터 (Kingsley Foster, 철수 중 전사)"
     ]
    ],
    "org": [
     "4개 소총중대 (Y중대 등)"
    ],
    "str": null,
    "role": "임진강을 내려다보는 고지들에 4개 중대가 전초를 두었다. 중공군이 벨기에 대대와 Y중대 사이로 침투해 Y중대가 고립되었고, 24일 새벽 철수했다. 이후 역습에 성공하고 25일 새벽까지 싸우다 물러났다. 포스터 중령은 철수 중 지프가 박격포에 맞아 전사했다.",
    "casualties": "전사: 장교 3명(대대장 포함)·병 10명. 부상: 장교 7명·병 76명. 실종: 장교 3명·병 43명",
    "sources": [
     {
      "fact": "4개 중대 배치, Y중대 고립, 25일 새벽 철수, 사상자 수치, 포스터 전사",
      "url": "https://www.northumberlandfusiliers.org.uk/wp-content/uploads/2021/04/Korean-War-Anniversary-Newsletter-2021.pdf"
     },
     {
      "fact": "포스터 중령 지휘, 철수 중 지프가 박격포에 피격되어 전사",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|로열 얼스터 소총 1대대",
    "parent": "영국 29여단",
    "level": "Bn",
    "full": "로열 얼스터 소총연대 제1대대",
    "cmd": [
     [
      "1951.04",
      "리코드 (Gerald Rickord, 소령, 임시 지휘)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "여단 예비로서 교량 확보에 나섰으나 실패했다. 25일 철수 때 여단 퇴로를 지켰고, B중대가 후위를 맡았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "리코드 소령 임시 지휘, 여단 예비, 교량 확보 실패, B중대 후위",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     }
    ]
   },
   {
    "key": "un|벨기에 대대",
    "parent": "영국 29여단",
    "level": "Bn",
    "full": "벨기에 유엔군 파견대대 (룩셈부르크 분견대 배속)",
    "cmd": [
     [
      "1951.04",
      "크라하이 (Albert Crahay, 전투 중 부상)"
     ]
    ],
    "org": [
     "룩셈부르크 소대 (A중대 제1소대)"
    ],
    "str": "약 700명",
    "role": "여단에서 유일하게 임진강 북안의 194고지(NAM은 196고지로 표기)에 배치된 우익 부대다. 22일 밤 중공군이 교량 차단을 노리고 포위해 오자 23일 차량 7대를 잃고도 강을 건너 철수했다. 25일에는 여단 지휘소 서·서남쪽 차단 진지를 맡았다.",
    "casualties": "전사 12명. 미국 대통령 부대표창 수여",
    "sources": [
     {
      "fact": "크라하이 지휘, 약 700명, 194고지, 차량 7대 손실, 차단 진지, 전사 12명",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     },
     {
      "fact": "크라하이 부상, 룩셈부르크 = A중대 제1소대, 미 대통령 부대표창",
      "url": "https://en.wikipedia.org/wiki/Belgian_Volunteer_Corps_for_Korea"
     },
     {
      "fact": "임진강 북안 고지 방어 후 남쪽으로 재배치 (196고지로 표기)",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     }
    ]
   },
   {
    "key": "un|룩셈부르크 소대",
    "parent": "벨기에 대대",
    "level": "Co",
    "full": "룩셈부르크 제1분견대 (벨기에 대대 A중대 제1소대)",
    "cmd": [
     [
      "1951.04",
      "바게너 (Joseph Wagener)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "벨기에 대대 A중대 제1소대로 편성되어 194고지에서 함께 싸웠고, 23일 강을 건너 철수했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "A중대 제1소대 편성, 194고지",
      "url": "https://en.wikipedia.org/wiki/Luxembourg_in_the_Korean_War"
     },
     {
      "fact": "제1분견대 지휘관 Joseph Wagener",
      "url": "https://en.wikipedia.org/wiki/Belgian_Volunteer_Corps_for_Korea"
     }
    ]
   },
   {
    "key": "un|8왕립아일랜드후사르",
    "parent": "영국 29여단",
    "level": "Co",
    "full": "제8왕립아일랜드후사르 연대 C대대 (중대급, 센추리온 전차)",
    "cmd": [
     [
      "1951.04",
      "후스 (Henry Huth, 소령)"
     ]
    ],
    "org": null,
    "str": "글로스터 구출 시도에 센추리온 10대 투입",
    "role": "벨기에 대대 등의 철수를 엄호했고, 글로스터 구출 시도에 센추리온 10대를 투입했다. 25일 계곡을 오르내리며 보병을 지원하고 부상자를 후송했으며, 기갑 후위로서 여단 철수를 엄호했다.",
    "casualties": "전차 여러 대 고착·손상",
    "sources": [
     {
      "fact": "C대대, 후스 소령, 철수 엄호, 센추리온 10대 구출 시도",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     },
     {
      "fact": "센추리온이 부상자 후송, 기갑 후위로 철수 엄호",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     }
    ]
   },
   {
    "key": "un|45야포연대",
    "parent": "영국 29여단",
    "level": "Bn",
    "full": "영국 포병 제45야전포병연대",
    "cmd": [
     [
      "1951.04",
      "영 (M. T. Young)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "25파운더 야포로 여단을 화력 지원했다(중형·중포 지원은 없었다). 다인 대위는 부상 중에도 전방 관측소를 지켜 무공십자훈장(MC)을 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "25파운더, 영 중령 지휘, 다인 대위 MC",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     },
     {
      "fact": "45야포연대 25파운더, 중형·중포 지원 없음",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     }
    ]
   },
   {
    "key": "un|170박격포대",
    "parent": "영국 29여단",
    "level": "Bty",
    "full": "영국 포병 제170독립박격포중대",
    "cmd": null,
    "org": [
     "C소대 (C Troop)"
    ],
    "str": null,
    "role": "4.2인치 박격포로 여단을 지원했다. C소대는 글로스터 대대와 함께 미국 대통령 부대표창을 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "4.2인치 박격포, C Troop 미 대통령 부대표창",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     }
    ]
   },
   {
    "key": "cn|중공군 63군",
    "parent": "중공군 19병단",
    "level": "C",
    "full": "중국인민지원군 제63군",
    "cmd": [
     [
      "1951.04",
      "푸충비 (傅崇碧)"
     ]
    ],
    "org": [
     "187사단",
     "188사단",
     "189사단"
    ],
    "str": "27개 대대 약 27,000명",
    "role": "양더즈의 제19병단 소속으로, 3개 사단이 29여단 정면에서 임진강을 건너 공격했다. 24일까지 군 전체가 도하했다. 187사단 559연대는 22일 글로스터 C중대 소대와 교전했고, 188사단은 퓨질리어·얼스터 대대를 공격했다.",
    "casualties": "최소 1만 명 이상 (추정, 자료마다 크게 다름)",
    "sources": [
     {
      "fact": "양더즈 19병단의 3개 사단, 24일까지 제63군 전체 도하",
      "url": "https://www.nam.ac.uk/explore/battle-imjin"
     },
     {
      "fact": "187·188·189사단, 약 27,000명/27개 대대, 559연대(187사단), 188사단 공격, 사상자 추정",
      "url": "https://en.wikipedia.org/wiki/Battle_of_the_Imjin_River"
     },
     {
      "fact": "푸충비가 한국 파병 기간 군단장, 187·188·189사단",
      "url": "https://en.wikipedia.org/wiki/63rd_Group_Army"
     }
    ]
   }
  ]
 },
 {
  "event": "e22",
  "battle": "가평",
  "units": [
   {
    "key": "un|영연방 27여단",
    "parent": null,
    "level": "B",
    "full": "제27영연방보병여단",
    "cmd": [
     [
      "1951.03",
      "버크 (Brian A. Burke)"
     ],
     [
      "1951.04.25",
      "테일러 (George Taylor)"
     ]
    ],
    "org": [
     "호주 왕립연대 3대대",
     "캐나다 PPCLI 2대대",
     "미들섹스 1대대",
     "뉴질랜드 16야포연대 (배속)",
     "미 72전차대대 A중대 (배속)",
     "미 74공병전투대대 2개 중대 (배속)"
    ],
    "str": "약 2,000명",
    "role": "국군 6사단이 무너진 뒤 미 9군단 예비에서 가평천 계곡으로 투입되어 차단 진지를 쳤다. 504고지(호주군, 우측 전방)와 677고지(캐나다군, 좌측 전방)를 지키고 미들섹스 대대는 중앙 후방에 두어 중공군의 서울 방면 남진을 늦췄다.",
    "casualties": "유엔군 전체 전사 65명, 부상 114명 이상",
    "sources": [
     {
      "fact": "여단명, 지휘관 Brig. B.A. Burke, 677·504고지 및 미들섹스(중앙 후방) 배치 (캐나다 국방부)",
      "url": "https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/battle-honours-honorary-distinctions/kapyong.html"
     },
     {
      "fact": "미 9군단 예비에서 가평천으로 투입되어 차단 진지 구축",
      "url": "https://www.canada.ca/content/dam/dnd-mdn/army/lineofsight/articleimages/2021/09/Kap-Yong-en.pdf"
     },
     {
      "fact": "4월 25일 오전 Taylor로 교체; 배속 부대; 약 2,000명; 유엔군 피해 65 KIA / 114+ WIA",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|호주 왕립연대 3대대",
    "parent": "영연방 27여단",
    "level": "Bn",
    "full": "호주 왕립연대 제3대대 (3 RAR)",
    "cmd": [
     [
      "1951.04",
      "퍼거슨 (Ian Bruce Ferguson)"
     ],
     [
      "1951.04.24",
      "오다우드 (Ben O'Dowd, 현장 지휘)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대",
     "D중대",
     "본부중대"
    ],
    "str": "약 700명",
    "role": "504고지(우측 전방)를 지켰다. 4월 23~24일 밤 내내, 그리고 24일 낮 동안 파상 공격을 막아낸 뒤, 진지 유지가 불가능해지자 24일 해가 진 뒤 뉴질랜드 포병의 엄호 아래 능선을 따라 철수했다. 미국 대통령 부대표창을 받았다.",
    "casualties": "전사 32, 부상 59, 포로 3 (AWM)",
    "sources": [
     {
      "fact": "Lt Col Bruce Ferguson, 23~24일 야간 및 24일 주간 전투, 24일 늦게 철수, 대통령 부대표창",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "피해 32 KIA, 59 WIA, 3명 포로; 미 대통령 부대표창; 해가 진 뒤 철수",
      "url": "https://www.awm.gov.au/encyclopedia/kapyong/"
     },
     {
      "fact": "약 700명; 퍼거슨이 24일 새벽 전장을 떠난 뒤 O'Dowd가 현장 지휘",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|호주 왕립연대 3대대 A중대",
    "parent": "호주 왕립연대 3대대",
    "level": "Co",
    "full": "호주 왕립연대 3대대 A중대",
    "cmd": [
     [
      "1951.04",
      "오다우드 (Ben O'Dowd, 소령)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "504고지 북서쪽 지맥에서 밤새 집중 공격을 받았다. 새벽에 진지로 침투한 중공군을 역습으로 몰아냈다. 대대장이 떠난 뒤에는 오다우드 소령이 대대의 현장 지휘를 맡았다.",
    "casualties": "병력의 절반 이상 손실",
    "sources": [
     {
      "fact": "A중대장 Maj Ben O'Dowd, 새벽 침투 후 역습으로 격퇴",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "북서 지맥 위치, 중공격, 병력 절반 이상 손실",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|호주 왕립연대 3대대 B중대",
    "parent": "호주 왕립연대 3대대",
    "level": "Co",
    "full": "호주 왕립연대 3대대 B중대",
    "cmd": [
     [
      "1951.04",
      "로플린 (Darcy Laughlin, 대위)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "강가의 작은 고지에서 전차의 지원을 받아 야간 공격을 연이어 물리쳤다. 새벽에는 옛 벙커가 있는 작은 언덕의 중공군을 수류탄과 총검으로 몰아내고 언덕을 탈취했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "강가 고지, 새벽 언덕 벙커에서 수류탄·총검 백병전",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "중대장 Capt Darcy Laughlin, 전차 지원 아래 공격 격퇴",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|호주 왕립연대 3대대 C중대",
    "parent": "호주 왕립연대 3대대",
    "level": "Co",
    "full": "호주 왕립연대 3대대 C중대",
    "cmd": [
     [
      "1951.04",
      "손더스 (Reg Saunders, 대위)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "후방 지맥에서 A·B중대를 증원할 수 있는 위치에 있었고, 밤사이 공격은 한 차례만 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "중대장 Capt Reg Saunders, A·B중대 증원 위치",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "야간에 한 차례만 공격받음",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|호주 왕립연대 3대대 D중대",
    "parent": "호주 왕립연대 3대대",
    "level": "Co",
    "full": "호주 왕립연대 3대대 D중대",
    "cmd": [
     [
      "1951.04",
      "그레이브너 (Norm Gravener, 대위)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "504고지 정상을 지켰다. 밤사이에는 큰 교전이 없었으나 4월 24일 중공군의 공격을 받았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "24일 중공군과 교전",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "중대장 Capt Norm Gravener, 504고지 정상 확보",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|캐나다 PPCLI 2대대",
    "parent": "영연방 27여단",
    "level": "Bn",
    "full": "프린세스 패트리샤 캐나다 경보병연대 제2대대 (2 PPCLI)",
    "cmd": [
     [
      "1951.04",
      "스톤 (James Riley Stone)"
     ]
    ],
    "org": [
     "A중대",
     "B중대",
     "C중대",
     "D중대",
     "박격포·기관총(비커스 6정) 등 지원 화기"
    ],
    "str": "약 700명",
    "role": "677고지(좌측 전방)를 지켰다. 호주군이 철수한 뒤인 24일 밤 동쪽과 서쪽에서 집중 공격을 받아 양 측면의 전방 소대 일부가 유린당했으나 진지를 지켰다. 퇴로가 차단되자 25일 공중 보급을 받았고, 26일 미군에 진지를 인계했다. 미국 대통령 부대표창을 받은 유일한 캐나다 대대이다.",
    "casualties": "전사 10, 부상 23 (캐나다 국방부, 다른 추정치는 18·38)",
    "sources": [
     {
      "fact": "677고지 좌측 전방, 캐나다 피해 10 KIA / 23 WIA",
      "url": "https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/battle-honours-honorary-distinctions/kapyong.html"
     },
     {
      "fact": "118사단의 야간 공격, 전방 소대 일부 유린, 공중 보급, 차단, 미군에 인계, 대통령 부대표창",
      "url": "https://www.canada.ca/content/dam/dnd-mdn/army/lineofsight/articleimages/2021/09/Kap-Yong-en.pdf"
     },
     {
      "fact": "유일하게 미 대통령 부대표창을 받은 캐나다 대대",
      "url": "https://veterans.gc.ca/en/node/159398"
     }
    ]
   },
   {
    "key": "un|캐나다 PPCLI 2대대 B중대",
    "parent": "캐나다 PPCLI 2대대",
    "level": "Co",
    "full": "PPCLI 2대대 B중대",
    "cmd": [
     [
      "1951.04",
      "릴리 (Vince Lilley, 소령)"
     ]
    ],
    "org": null,
    "str": null,
    "role": "677고지 우측에서 호주 3대대의 철수를 엄호 사격으로 도왔다. 24일 22시부터 6소대가 네 차례 공격을 받았으나 격퇴했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "중대장 Maj Vince Lilley, 3 RAR 철수 엄호, 6소대가 4차례 공격 격퇴",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|캐나다 PPCLI 2대대 D중대",
    "parent": "캐나다 PPCLI 2대대",
    "level": "Co",
    "full": "PPCLI 2대대 D중대",
    "cmd": [
     [
      "1951.04",
      "밀스 (J. G. W. Mills, 대위)"
     ]
    ],
    "org": [
     "10소대 (레비 중위, Michael G. Levy)",
     "12소대"
    ],
    "str": null,
    "role": "677고지 좌측(서쪽)을 지켰다. 25일 01시 10분경 대규모 중공군에게 10·12소대 진지 상당 부분을 유린당하자 아군 진지 위로 포격을 요청했고, 뉴질랜드 포병의 사격으로 적을 몰아냈다.",
    "casualties": null,
    "sources": [
     {
      "fact": "D중대가 자기 진지에 포격·박격포 사격을 요청해 적을 격퇴",
      "url": "https://veterans.gc.ca/en/node/159398"
     },
     {
      "fact": "D중대장 Capt J.G.W. Mills가 자기 진지에 포격 요청",
      "url": "https://legionmagazine.com/?p=56056"
     },
     {
      "fact": "좌측 배치, 01:10경 10·12소대 유린, 10소대장 Lt Levy",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|미들섹스 1대대",
    "parent": "영연방 27여단",
    "level": "Bn",
    "full": "미들섹스 연대 제1대대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "여단 예비로 중앙 후방에 있었다. 24일 04시 1개 중대가 호주 3대대 본부를 지원하러 나섰다가 돌아왔고, 호주 3대대가 철수해 오자 자기 진지 안에 받아들였다.",
    "casualties": null,
    "sources": [
     {
      "fact": "중앙 후방 배치",
      "url": "https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/battle-honours-honorary-distinctions/kapyong.html"
     },
     {
      "fact": "예비, 04:00 1개 중대 전진 후 이탈, 3 RAR 수용",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "un|뉴질랜드 16야포연대",
    "parent": "영연방 27여단",
    "level": "Bn",
    "full": "뉴질랜드 왕립포병 제16야전포병연대",
    "cmd": null,
    "org": [
     "161포대",
     "162포대",
     "163포대"
    ],
    "str": "25파운더 야포 24문",
    "role": "호주·캐나다 대대를 직접 지원했다. 24일 늦게 호주 3대대의 철수를 엄호했고, 캐나다 D중대 진지 위로 포탄을 퍼부어 적을 막았다. 이 전투에서만 10,000발 이상을 쐈다. 한국 대통령 부대표창을 받았다.",
    "casualties": "전사 2, 부상 5",
    "sources": [
     {
      "fact": "가평 전투 10,000발 이상, 캐나다 진지 앞 사격, 한국 대통령 부대표창",
      "url": "https://www.nzdf.mil.nz/army/army-news/new-zealand-army-personnel-mark-significant-combat-anniversary-in-korea/"
     },
     {
      "fact": "3 RAR 철수 엄호",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "25파운더, 피해 2 KIA / 5 WIA",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     },
     {
      "fact": "161·162·163포대",
      "url": "https://en.wikipedia.org/wiki/Kayforce"
     }
    ]
   },
   {
    "key": "un|미 72전차대대 A중대",
    "parent": "영연방 27여단",
    "level": "Co",
    "full": "미 제72중전차대대 A중대",
    "cmd": [
     [
      "1951.04",
      "코크 (Kenneth W. Koch, 중위)"
     ]
    ],
    "org": [
     "전차 3개 소대 (5대 단위)"
    ],
    "str": "M4A3E8 셔먼 전차 15대",
    "role": "호주 3대대를 지원했다. 1개 소대는 도로 전방, 1개 소대는 서쪽 고지, 1개 소대는 대대본부 부근 여울을 맡았다. 23일 밤 전방 소대가 유린당했으나 B중대와 함께 공격을 물리쳤다. 미국 대통령 부대표창을 받았다.",
    "casualties": "전사 3, 부상 12, 전차 2대 파괴",
    "sources": [
     {
      "fact": "3 RAR 지원 미 전차 1개 소대가 23일 밤 유린",
      "url": "https://www.awm.gov.au/visit/exhibitions/korea/operations/kapyong"
     },
     {
      "fact": "중대장 Lt Kenneth W. Koch, M4A3E8 15대, 소대 배치, 피해, 대통령 부대표창",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "cn|중공군 118사단",
    "parent": "40군",
    "level": "D",
    "full": "중국인민지원군 제40군 제118사단",
    "cmd": null,
    "org": [
     "354연대"
    ],
    "str": null,
    "role": "40군의 일부로 22일 밤 국군 6사단을 공격한 뒤 영연방 27여단의 전방 두 대대와 싸웠고, 캐나다군의 677고지를 동쪽과 서쪽에서 공격했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "118사단이 호주군을 504고지에서 밀어내고 677고지를 야간 공격 (캐나다 국방부 교재)",
      "url": "https://www.canada.ca/content/dam/dnd-mdn/army/lineofsight/articleimages/2021/09/Kap-Yong-en.pdf"
     }
    ]
   },
   {
    "key": "cn|354연대",
    "parent": "중공군 118사단",
    "level": "R",
    "full": "중국인민지원군 제354연대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "23일 22시경 호주 3대대 진지에 도착했고, 예하 2개 대대가 60사단과 함께 호주군 전방 두 중대를 반복 공격했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "354연대가 22:00경 3 RAR 진지 도달, 2개 대대가 60사단과 함께 공격",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   },
   {
    "key": "cn|중공군 60사단 (가평)",
    "parent": null,
    "level": "D",
    "full": "중국인민지원군 제60사단 (상급 군 미확인)",
    "cmd": null,
    "org": null,
    "str": "118사단과 합계 약 20,000명",
    "role": "가평에서 호주 3대대에 대한 주공격을 맡았고, 이후 캐나다 PPCLI 2대대도 공격했다. 호주 전쟁기념관은 호주군이 이 사단의 진격을 저지했다고 기록한다.",
    "casualties": "호주 3대대 정면에서 500명 이상 사살 (AWM)",
    "sources": [
     {
      "fact": "60사단의 진격 저지, 중공군 500명 이상 전사",
      "url": "https://www.awm.gov.au/encyclopedia/kapyong/"
     },
     {
      "fact": "60사단이 3 RAR 주공격, 118사단과 함께 2 PPCLI 공격",
      "url": "https://en.wikipedia.org/wiki/Battle_of_Kapyong"
     }
    ]
   }
  ]
 },
 {
  "event": "e26",
  "battle": "백마고지",
  "units": [
   {
    "key": "rok|9사단",
    "parent": "미 9군단",
    "level": "D",
    "full": "국군 제9보병사단 (백마부대)",
    "cmd": [
     [
      "1952.05",
      "김종오"
     ]
    ],
    "org": [
     "30연대 (좌측 전방)",
     "29연대 (우측 전방)",
     "28연대 (예비)",
     "51연대 (배속, 대대 단위로 주저항선 방어)"
    ],
    "str": null,
    "role": "1952년 10월 6일부터 15일까지 철원 395고지(백마고지)에서 중공군 제38군의 공격을 막아 냈다. 사단장 김종오 소장은 28·29·30연대를 차례로 투입해 역습을 거듭했고, 고지를 끝까지 지켰다. 이 전투 이후 9사단은 '백마부대'로 불리게 되었다.",
    "casualties": "3,416명 (군사편찬연구소 남정옥 글; 미 측 Hermes는 3,500명 이상)",
    "sources": [
     {
      "fact": "김종오 소장 1952.5 부임; 미 9군단 배속; 1952.9.22 배치(30연대 좌, 29연대 우, 28연대 예비, 51연대 배속); 사상자 3,416명; 포탄 아군 219,954발·중공군 55,000발",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     },
     {
      "fact": "미 9군단이 9사단에 전차·포병·로켓포·대공화기를 증강; 사상자 3,500명 이상; 10월 6일~15일",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "1952.10.6~15; 사단장 김종오; 10여 일간 12차례의 쟁탈전",
      "url": "https://theme.archives.go.kr/next/pages/new_newsletter/2017/html/vol_102/sub02_2.html"
     },
     {
      "fact": "9사단 3,500여 명 사상; 12차례 공방 중 7차례 주인이 바뀜; 중공군 38군이 9개 연대 중 7개 투입",
      "url": "https://encykorea.aks.ac.kr/Article/E0022107"
     }
    ]
   },
   {
    "key": "rok|30연대",
    "parent": "9사단",
    "level": "R",
    "full": "국군 제9사단 제30연대",
    "cmd": [
     [
      "1952.09",
      "임익순"
     ]
    ],
    "org": [
     "30연대 1대대 (395고지)",
     "2대대 (중마산 일대)",
     "3대대 (예비 → 백마고지 증원)"
    ],
    "str": null,
    "role": "전투 시작 때 395고지를 지킨 좌측 전방 연대로, 10월 6일 밤 중공군 114사단의 공격 세 번을 물리쳤다. 7일 밤 고지에서 밀려났다가, 10월 12일 29연대를 초월해 역습했고 1대대가 고지를 되찾았다.",
    "casualties": null,
    "sources": [
     {
      "fact": "30연대장 임익순 대령; 대대별 배치; 10월 6일 3회 격퇴, 7일 철수, 12일 29연대 초월 역습",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     },
     {
      "fact": "10월 12일 ROK 30연대가 29연대를 초월해 역습",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     }
    ]
   },
   {
    "key": "rok|30연대 1대대",
    "parent": "30연대",
    "level": "Bn",
    "full": "국군 제9사단 제30연대 제1대대",
    "cmd": [
     [
      "1952.10",
      "김영선"
     ]
    ],
    "org": [
     "1중대",
     "3중대"
    ],
    "str": null,
    "role": "전투 첫날 395고지 정상을 지킨 대대다. 10월 12일 9부 능선에서 공격하다 적 기관총 진지에 막혔다. 3중대 1소대장과 하사 2명이 그 진지를 폭파하고 전사했고(소대장·하사 이름은 자료마다 표기가 다름), 1중대가 13시 20분쯤 정상을 탈환했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "1대대 395고지 배치; 대대장 김영선 소령; 10월 12일 기관총 진지 폭파, 13:20 1중대 정상 점령",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     },
     {
      "fact": "제30연대 제1대대 제3중대 제1소대장과 하사 2명이 '3군신'으로 불림",
      "url": "https://www.narasarang.kr/news/articleView.html?idxno=535"
     }
    ]
   },
   {
    "key": "rok|28연대",
    "parent": "9사단",
    "level": "R",
    "full": "국군 제9사단 제28연대",
    "cmd": null,
    "org": [
     "2대대",
     "3대대"
    ],
    "str": null,
    "role": "처음에는 사단 예비 연대였다. 10월 7일 밤 30연대가 밀려난 지 약 2시간 만에 역습해 고지를 되찾았다. 8일 주봉을 잃었지만 3대대가 23시 5분에 재탈환했다. 13일 이후에도 공격을 이어 갔고, 15일 백병전 끝에 고지를 최종 확보했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "예비 연대; 10.7 역습 탈환; 10.8 3대대 23:05 재탈환; 10.15 재탈환",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     },
     {
      "fact": "ROK 28연대 2개 대대가 야간 역습으로 옛 진지 탈환; 10월 8일 342연대를 역습으로 격퇴",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     }
    ]
   },
   {
    "key": "rok|29연대",
    "parent": "9사단",
    "level": "R",
    "full": "국군 제9사단 제29연대",
    "cmd": null,
    "org": [
     "1대대",
     "2대대"
    ],
    "str": null,
    "role": "우측 전방 연대였다. 10월 9일 김종오 사단장이 2개 대대를 28연대 지원에 투입했고, 이 부대가 역습해 고지를 되찾았다. 10일 1대대가 9부 능선으로 물러났다가 2대대의 증원을 받아 정상을 다시 확보했다. 전투 막바지에는 낙타능선의 전초진지를 탈환했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "우측 전방 배치; 10.9 역습; 10.10 1대대·2대대; 10.15 낙타능선 전진진지 탈환",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     },
     {
      "fact": "10월 9일 29연대 2개 대대 투입, 10일 이른 시각 고지 정상 확보 보고",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "29연대가 낙타능선 북쪽 전초를 탈환",
      "url": "https://encykorea.aks.ac.kr/Article/E0022107"
     }
    ]
   },
   {
    "key": "un|미 9군단",
    "parent": null,
    "level": "C",
    "full": "미 제9군단",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "9사단의 상급 군단이다. 공격 첩보를 받은 뒤 전차, 포병, 로켓포, 지상 사격용 대공화기를 9사단에 붙여 주었다. 군단 포병만 약 85,000발을 쐈고, 4연장 50구경 대공화기와 전차가 고지 양 측면을 엄호했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "9군단의 증강 지원 내용, 군단 포병 약 85,000발, 쿼드50·전차 측면 엄호",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     }
    ]
   },
   {
    "key": "un|미 5공군",
    "parent": null,
    "level": "AF",
    "full": "미 제5공군",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "백마고지 주변의 중공군 포병과 집결지를 폭격했다. 10월 9일에는 고지 북쪽에 모여 있던 112사단 335연대를 타격해 공격을 늦췄다. 전투 기간에 주간 669회, 야간 76회 출격했다.",
    "casualties": null,
    "sources": [
     {
      "fact": "주간 669·야간 76 출격, 일반폭탄 2,800발 이상, 네이팜 358발; 10.9 335연대 타격",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "유엔군 항공기 754회 출격 (한국 측 집계)",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     }
    ]
   },
   {
    "key": "un|프랑스 대대",
    "parent": "미 23연대",
    "level": "Bn",
    "full": "유엔군 프랑스 대대",
    "cmd": [
     [
      "1952",
      "보레유 (Borreil)"
     ]
    ],
    "org": [
     "개척(공병)소대"
    ],
    "str": null,
    "role": "백마고지 오른쪽의 화살머리고지(281고지)를 지켰다. 10월 6일 해질 무렵 시작된 중공군의 공격과 이후 9일·12일 공격을 모두 물리쳤다. 첫 공격에서 개척소대가 전멸했고, 24시간 동안 2만 발이 넘는 포탄을 맞았다.",
    "casualties": "전사 47명, 실종 3명, 포로 2명 (Le Chevron). 미 2사단은 대대 정면의 중공군 전사자를 약 2,000명으로 추산",
    "sources": [
     {
      "fact": "1952년 보레유 중령 지휘; Arrow Head 1952.10이 대대 최대 격전; 개척소대 전멸; 24시간 2만 발 이상; 47 전사·3 실종·2 포로",
      "url": "https://www.lechevron.fr/images/articles/promotions/propatria/341_Les_Sous-Officiers_de_Coree.pdf"
     },
     {
      "fact": "1952.10.2~13 Arrow Head(281)·White Horse 전투; 10월 6일 해질 무렵 공격; 미 2사단 23연대전투단 제4대대로 배속; 중공군 약 2,000명 사살 추정",
      "url": "https://www.defense.gouv.fr/chemins-memoire/histoire-memoires/ressources-historiques/guerre-coree/1950-1953-bataillon-francais-lonu-coree"
     },
     {
      "fact": "중공군이 281고지의 프랑스 대대를 공격; 9일·12일 공격도 격퇴",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     }
    ]
   },
   {
    "key": "cn|중공군 38군",
    "parent": null,
    "level": "C",
    "full": "중국인민지원군 제38군",
    "cmd": [
     [
      "1952",
      "장융후이 (江拥辉)"
     ]
    ],
    "org": [
     "중공군 112사단",
     "중공군 113사단",
     "중공군 114사단"
    ],
    "str": "보병 약 15,000명과 지원 병력 약 8,000명 투입 (Hermes)",
    "role": "백마고지와 화살머리고지를 공격한 군이다. 9개 연대 가운데 7개를 투입했지만 10월 15일 공격을 멈췄다.",
    "casualties": "약 10,000명 (Hermes, 한국민족문화대백과사전). 한국 측 집계는 사살 8,234·추정 살상 6,098·포로 57, 중국 측 공식 기록은 전사 1,768·부상 3,062·실종 562",
    "sources": [
     {
      "fact": "38군, 9개 연대 중 7개 투입, 약 10,000명 손실, 병력 15,000+8,000",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "38군 9개 연대 중 7개 투입, 1만여 명 손실",
      "url": "https://encykorea.aks.ac.kr/Article/E0022107"
     },
     {
      "fact": "지휘관 Jiang Yonghui와 중국 측 사상자 수치 (《抗美援朝战争史》 3권 인용)",
      "url": "https://en.wikipedia.org/wiki/Battle_of_White_Horse_Hill"
     },
     {
      "fact": "한국 측 피해 집계 8,234/6,098/57",
      "url": "https://www.narasarang.kr/news/articleView.html?idxno=535"
     }
    ]
   },
   {
    "key": "cn|중공군 114사단",
    "parent": "중공군 38군",
    "level": "D",
    "full": "중국인민지원군 제38군 제114사단",
    "cmd": null,
    "org": [
     "340연대",
     "342연대"
    ],
    "str": null,
    "role": "10월 6일 395고지를 처음 공격한 주공 사단이다. 340연대가 먼저 공격했고, 8일부터 342연대 1개 대대가 이어받아 정상까지 올라갔다.",
    "casualties": null,
    "sources": [
     {
      "fact": "10월 6일 340연대 2개 대대 공격 개시; 8일 342연대 대대 투입",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "114사단이 주공으로 30연대를 공격",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     }
    ]
   },
   {
    "key": "cn|340연대",
    "parent": "중공군 114사단",
    "level": "R",
    "full": "중국인민지원군 제38군 제114사단 제340연대",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "10월 6일 2개 대대로 고지군 북서쪽 끝을 공격했지만 세 번 모두 실패했다. 다음 날 남은 병력과 새 2개 대대로 다시 공격해 국군을 정상에서 밀어냈다. 10월 3일 이 연대의 귀순 장교가 공격 계획을 미리 알렸다.",
    "casualties": "포로 진술에 따르면 다수 중대가 20명 이하로 줄어듦",
    "sources": [
     {
      "fact": "340연대 공격 경과, 귀순자 진술, 중대 병력 감소 진술",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     }
    ]
   },
   {
    "key": "cn|중공군 112사단",
    "parent": "중공군 38군",
    "level": "D",
    "full": "중국인민지원군 제38군 제112사단",
    "cmd": null,
    "org": [
     "334연대",
     "335연대"
    ],
    "str": null,
    "role": "처음에는 38군 예비로 수정덕산 부근에 있었다. 10월 8일 334연대가 지친 114사단 부대와 교대해 공격에 들어갔다. 335연대는 9일 고지 북쪽 집결지에서 미 공군의 폭격을 받아 공격이 늦어졌다.",
    "casualties": null,
    "sources": [
     {
      "fact": "334연대 8일 투입, 335연대 9일 공습 피해",
      "url": "https://www.koreanwaronline.com/history/TruceTent/ch13.htm"
     },
     {
      "fact": "112사단은 38군 예비로 수정덕산 부근",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     }
    ]
   },
   {
    "key": "cn|중공군 113사단",
    "parent": "중공군 38군",
    "level": "D",
    "full": "중국인민지원군 제38군 제113사단",
    "cmd": null,
    "org": null,
    "str": null,
    "role": "38군의 왼쪽 사단으로, 미 2사단(화살머리고지의 프랑스 대대) 정면에 배치되어 있었다. 백마고지 공격에 이름이 나오는 부대는 112·114사단이다.",
    "casualties": null,
    "sources": [
     {
      "fact": "113사단은 좌측 인접 미 2사단 정면",
      "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148695540"
     }
    ]
   }
  ]
 }
];
applyResearch(RESEARCH);
