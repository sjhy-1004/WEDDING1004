/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "천성준",
    nameEn: "GROOM",
    father: "천무웅",
    mother: "권선옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이혜인",
    nameEn: "BRIDE",
    father: "이헌동",
    mother: "윤여애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-04",
    time: "13:00",
    venue: "수성 호텔 스퀘어",
    hall: "3층 라포레홀(우천 시 2층 아이비홀)",
    address: "대구광역시 수성구 용학로 92-4",
    tel: "1899-1001",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1578307110",
      naver: "https://naver.me/5ssT9jva"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "평범한 날들이 특별해지는 순간,\n저희 결혼합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "천성준", bank: "IM뱅크", number: "508-13-899-246-2" },
      { role: "아버지", name: "천무웅", bank: "농협", number: "352-1094-0056-13" },
      { role: "어머니", name: "권선옥", bank: "농협", number: "150039-51-142667" }
    ],
    bride: [
      { role: "신부", name: "이혜인", bank: "IM뱅크", number: "059-13-129244" },
      { role: "아버지", name: "이헌동", bank: "농협", number: "737039-52-000998" },
      { role: "어머니", name: "윤여애", bank: "농협", number: "737039-56-013308" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "성준 ♥ 혜인 결혼합니다",
    description: "2026년 10월 4일 오후 1시, 소중한 분들을 초대합니다."
  }
};
