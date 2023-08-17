const quotes = [
  {
    qoute: "화투. 말이 참 예뻐요. 꽃을 가지고 하는 싸움.",
    author: "정마담",
    img: "https://i.namu.wiki/i/0w1WnS2hAUNVXQmsclyA-PqIpIbCc6BJyi3EedY3n9QoCVkog5xYvJfLCxkGFOdF3o1r0_z_a9fsWNraOZsI5cySDU4962rnZI2dO8e_001s_gANDjR4KZgSgpXY5DFXiClpq80tCTdSfyMvrRAlBg.webp",
  },
  {
    quote: "모르긴 왜 몰라, 잘 알지. 갈 데까지 간 놈",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote:
      "재수없으면 송사리한테도 좆 물리는 게 이 바닥이야. 넌 그걸 알아야 돼.",
    author: "고광렬",
    img: "https://i.namu.wiki/i/J0WhEqjjFBK3imTZkYPBcQRXzwrrqW3Fstm6UeY6DzRGJq0f3UjR2tzJKRf43d_Y0sEVshaGjGtj0hmneDLVHzfT6k2FGkbcF9T2nFSxKnq69_kHCexKBdT6JfYiePdilWzrM3wHAnXRiYh35xxeCA.webp",
  },
  {
    quote: "어이 젊은 친구. 돈이라는 게 말이야 독기가 쎄거든.",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote: "어이, 젊은 친구. 신사답게 행동해.",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote:
      "그렇게 인생을 망치고 싶으면 차라리 마약을 하라!! 화투는 슬픈 드라마야...! 아예 모르는 게 약이지.",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "넌 이유가 있어서 돈 잃고 매 맞았어, 이 시끼야?",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "신고정신이 너무 투철하면 리승복이처럼 아가리가 찢어져요.",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote:
      "직싸도록 맞았으니까 너도 썩어지게 때려 줘야지. 타짜의 첫 자세가 야수성이야!",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "손은 눈보다 빠르다!",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote:
      "썅간나새끼, 세상이 아름답고 평등하면 우린 뭘 먹고 사니? 연습이나 하라!",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "두 번째 원칙! 이 세상에 안전한 도박판은 없어!",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "간나새끼, 밑장을 빼면 소리가 달라! 소리가!",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote: "장군님, 원래 등잔밑이 더 뜨거운 법이랍니다?",
    author: "정마담",
    img: "https://i.namu.wiki/i/0w1WnS2hAUNVXQmsclyA-PqIpIbCc6BJyi3EedY3n9QoCVkog5xYvJfLCxkGFOdF3o1r0_z_a9fsWNraOZsI5cySDU4962rnZI2dO8e_001s_gANDjR4KZgSgpXY5DFXiClpq80tCTdSfyMvrRAlBg.webp",
  },
  {
    quote: "다 때 되면 남들이 알아서 잘라 줄 거인디, 거 그냥 놔둬라.",
    author: "아귀",
    img: "https://i.namu.wiki/i/GfFzpJRx5ol_Hoaz2WZRA7kHtGNIfk1cNVPSFDEQurfYRDi9P4pBDvomOrJHXFXk6SkXDmzGl6UXexq16J7JAPzAAQjQppZRRG48DABFWhIrwz57BrXHY8iBjvYHHkQh-j9z733FKhJZFt_JFtJ2WQ.webp",
  },
  {
    quote: "마지막 원칙, 이 바닥엔 영원한 친구도 원수도 없어.",
    author: "평경장",
    img: "https://i.namu.wiki/i/2lAgtz94ixjFqjKm8kc94ZitcXb2BhqpKrFN71_WxBFEE-ft0zwxYtRmpfYG7oqcdT4OJry6Z8ldlHbyb-uTWEob4sJoXRRbb9CBQ3HQgSlgPiRC8lUOUVXDTBZVW8hkyWW-QzHcurT_z-sz0oDoSA.webp",
  },
  {
    quote:
      "무서우면 죽으시든가. 좆 무서우면 시집을 가지 말아야지. 안 그래? 그렇지 않아요?",
    author: "고광렬",
    img: "https://i.namu.wiki/i/J0WhEqjjFBK3imTZkYPBcQRXzwrrqW3Fstm6UeY6DzRGJq0f3UjR2tzJKRf43d_Y0sEVshaGjGtj0hmneDLVHzfT6k2FGkbcF9T2nFSxKnq69_kHCexKBdT6JfYiePdilWzrM3wHAnXRiYh35xxeCA.webp",
  },
  {
    quote: "나 이대 나온 여자야. 내가 어떻게 그런 델 들어가?",
    author: "정마담",
    img: "https://i.namu.wiki/i/0w1WnS2hAUNVXQmsclyA-PqIpIbCc6BJyi3EedY3n9QoCVkog5xYvJfLCxkGFOdF3o1r0_z_a9fsWNraOZsI5cySDU4962rnZI2dO8e_001s_gANDjR4KZgSgpXY5DFXiClpq80tCTdSfyMvrRAlBg.webp",
  },
  {
    quote:
      "화란아, 나도 순정이 있다. 네가 이런 식으로 내 순정을 짓밟으면은 마! 그때는 깡패가 되는 거야! 내가 너를 깡패처럼 납치라도 하랴? 앉아!",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote: "또 지면 너 변사체가 된다.",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote: "난 한다면 하는 사람이야~ 이거 봐~ 지금도 하고 있잖아?",
    author: "고광렬",
    img: "https://i.namu.wiki/i/J0WhEqjjFBK3imTZkYPBcQRXzwrrqW3Fstm6UeY6DzRGJq0f3UjR2tzJKRf43d_Y0sEVshaGjGtj0hmneDLVHzfT6k2FGkbcF9T2nFSxKnq69_kHCexKBdT6JfYiePdilWzrM3wHAnXRiYh35xxeCA.webp",
  },
  {
    quote: "구라칠 때 절대 상대방 눈을 보지마라.",
    author: "짝귀",
    img: "https://i.namu.wiki/i/wtFxfwrH9W1OKCFBKSUwpe1be0gl_fty-0HLwxsuUA5ymGyzxevnCYXH_lwvwP7o3gA1Ye0Y76FHmOAr2FLM2fjR6fyQnqS0qGOyVkIFA7Ld_3aTOyovYnxJfuUDSJwPwSl3DrF1DhUkw74QmxmJvA.webp",
  },
  {
    quote:
      "기술을 쓰다 걸려서 귀가 짤리고, 기술을 안쓰니까네 이기 안 짤맀나. 거 별거 아이야. 니도 곧 이렇게 될끼다.",
    author: "짝귀",
    img: "https://i.namu.wiki/i/wtFxfwrH9W1OKCFBKSUwpe1be0gl_fty-0HLwxsuUA5ymGyzxevnCYXH_lwvwP7o3gA1Ye0Y76FHmOAr2FLM2fjR6fyQnqS0qGOyVkIFA7Ld_3aTOyovYnxJfuUDSJwPwSl3DrF1DhUkw74QmxmJvA.webp",
  },
  {
    quote: "묻고 더블로 가!",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote: "아유~ 늑대새끼가 어떻게 개 밑으로 들어갑니까.",
    author: "고니",
    img: "https://i.namu.wiki/i/tLAEn8R8WC-b6HPyO1Up8bA2Ca2qXyUCRb8Mh0p6oP8PTnxB_KdtlVuCfynsyDq7wFhypcetYqbk9BaKbDq6xowW98U458j2TUW-VCJruNISC9HQwOpIixayA9ytskGIcG0LnfPkCVEszg1Z8p3_cg.webp",
  },
  {
    quote:
      "내가 달건이 생활을 열일곱에 시작했다. 그 나이 때 달건이 시작한 놈들이 백 명이다 치면 지금 나만큼 사는 놈은 나 혼자뿐이야. 나는 어떻게 여기까지 왔느냐? 잘난 놈 제끼고, 못난 놈 보내고, 안경잡이같이 배신하는 새끼들... 다 죽였다.",
    author: "곽철용",
    img: "https://images.chosun.com/resizer/mD7YPb3F0hENRn6lODxlK5DxyYg=/700x329/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FTNGNK63ALU6VSBMMYJN4LKC74.jpg",
  },
  {
    quote: "화투판에서 가장 어려운 일. 어떻게 호구를 판때기에 앉히느냐.",
    author: "정마담",
    img: "https://i.namu.wiki/i/0w1WnS2hAUNVXQmsclyA-PqIpIbCc6BJyi3EedY3n9QoCVkog5xYvJfLCxkGFOdF3o1r0_z_a9fsWNraOZsI5cySDU4962rnZI2dO8e_001s_gANDjR4KZgSgpXY5DFXiClpq80tCTdSfyMvrRAlBg.webp",
  },
  {
    quote:
      "그래, 파도! 올라갔으면 내려가고, 내려갔다가 다시 올라가는 거야! 이제 이것들은 다 죽었어.",
    author: "호구",
    img: "https://i.namu.wiki/i/s9atweYFXVl1gr2li9T_U6IIlivfoubDH_5NI95T60n4jtBHMtIbVUzHimoI-c0nnjerrC55Epg6a9CB7sYeTaVaqv7WNAmChXOfu29xoi28NoeE4qxLUazt6MvWHnCAZ5kKhZhqXlYIK4TFSRP3fw.webp",
  },
  {
    quote: "에헤이~ 상상력이 많으면 그 인생 고달퍼~",
    author: "아귀",
    img: "https://i.namu.wiki/i/GfFzpJRx5ol_Hoaz2WZRA7kHtGNIfk1cNVPSFDEQurfYRDi9P4pBDvomOrJHXFXk6SkXDmzGl6UXexq16J7JAPzAAQjQppZRRG48DABFWhIrwz57BrXHY8iBjvYHHkQh-j9z733FKhJZFt_JFtJ2WQ.webp",
  },
  {
    quote: "법? 아직도 그런 뜨뜻미지근헌걸 믿어?",
    author: "아귀",
    img: "https://i.namu.wiki/i/GfFzpJRx5ol_Hoaz2WZRA7kHtGNIfk1cNVPSFDEQurfYRDi9P4pBDvomOrJHXFXk6SkXDmzGl6UXexq16J7JAPzAAQjQppZRRG48DABFWhIrwz57BrXHY8iBjvYHHkQh-j9z733FKhJZFt_JFtJ2WQ.webp",
  },
  {
    quote:
      "손 아까우면 다른 걸 걸어. 경상도 짝귀가 처음에...귀를 걸었던가? 으허허허",
    author: "아귀",
    img: "https://i.namu.wiki/i/GfFzpJRx5ol_Hoaz2WZRA7kHtGNIfk1cNVPSFDEQurfYRDi9P4pBDvomOrJHXFXk6SkXDmzGl6UXexq16J7JAPzAAQjQppZRRG48DABFWhIrwz57BrXHY8iBjvYHHkQh-j9z733FKhJZFt_JFtJ2WQ.webp",
  },
  {
    quote:
      "사랑? 그것도 어차피 다 구라다. 내가 너한테 다시 돌아갈 수 있다면... 다시 돌아간다면... 그땐 너한테 의리 꼭 지킬게.",
    author: "고니",
    img: "https://i.namu.wiki/i/tLAEn8R8WC-b6HPyO1Up8bA2Ca2qXyUCRb8Mh0p6oP8PTnxB_KdtlVuCfynsyDq7wFhypcetYqbk9BaKbDq6xowW98U458j2TUW-VCJruNISC9HQwOpIixayA9ytskGIcG0LnfPkCVEszg1Z8p3_cg.webp",
  },
  {
    quote:
      "겁날 것도 없고, 억울할 것도 없다. 어차피, 내가 아는 사람들은 다 죽거나 다쳤다.",
    author: "고니",
    img: "https://i.namu.wiki/i/tLAEn8R8WC-b6HPyO1Up8bA2Ca2qXyUCRb8Mh0p6oP8PTnxB_KdtlVuCfynsyDq7wFhypcetYqbk9BaKbDq6xowW98U458j2TUW-VCJruNISC9HQwOpIixayA9ytskGIcG0LnfPkCVEszg1Z8p3_cg.webp",
  },
  {
    quote:
      "지금 이 마당에 착한 척 하세요? 여긴 지금 지옥이에요, 이 빙신아. 각자 알아서 살아남자고.",
    author: "정마담",
    img: "https://i.namu.wiki/i/0w1WnS2hAUNVXQmsclyA-PqIpIbCc6BJyi3EedY3n9QoCVkog5xYvJfLCxkGFOdF3o1r0_z_a9fsWNraOZsI5cySDU4962rnZI2dO8e_001s_gANDjR4KZgSgpXY5DFXiClpq80tCTdSfyMvrRAlBg.webp",
  },
  {
    quote: "난 딴 돈의 반만 가져가.",
    author: "고니",
    img: "https://i.namu.wiki/i/tLAEn8R8WC-b6HPyO1Up8bA2Ca2qXyUCRb8Mh0p6oP8PTnxB_KdtlVuCfynsyDq7wFhypcetYqbk9BaKbDq6xowW98U458j2TUW-VCJruNISC9HQwOpIixayA9ytskGIcG0LnfPkCVEszg1Z8p3_cg.webp",
  },
  {
    quote: "고니를 아냐구요? 내가 본 타짜 중에 최고였어요.",
    author: "정마담",
    img: "https://i.namu.wiki/i/tLAEn8R8WC-b6HPyO1Up8bA2Ca2qXyUCRb8Mh0p6oP8PTnxB_KdtlVuCfynsyDq7wFhypcetYqbk9BaKbDq6xowW98U458j2TUW-VCJruNISC9HQwOpIixayA9ytskGIcG0LnfPkCVEszg1Z8p3_cg.webp",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const bgImg = document.createElement("img");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
bgImg.src = todaysQuote.img;
document.body.appendChild(bgImg);
