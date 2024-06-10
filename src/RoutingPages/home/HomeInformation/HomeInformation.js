function HomeInformation({ mode }) {
  switch (mode) {
    case "competition":
      return (
        <p>
          다른 트레이더들과 경쟁할 수 있습니다.
          <br />
          최종 시드머니가 가장 높은 20명의 트레이더는 랭크에 등재됩니다.
          {/* <br />
          랭크에 등재가 되면 자신의 SNS나 채널 등을 광고할 수 있도록 비트모이가
          툴을 제공해 드립니다. */}
          <br />
          컨닝 행위를 방지하기 위해 종목 이름과 일자는 비공개 처리되며, 가격은
          비율적으로 표기됩니다.
        </p>
      );
    case "practice":
      return (
        <p>실제 진입하기 전 준비운동 삼아 자유롭게 트레이딩을 연습해 보세요.</p>
      );
    case "community":
      return (
        <p>
          다른 사람들과 트레이더님이 진입했던 프렉탈에 대해 의논하거나 트레이딩
          결과를 뽐내어 보세요.
        </p>
      );
    case "rank":
      return <p>경쟁모드 순위를 확인해 볼 수 있습니다.</p>;
    case "ad bidding":
      return (
        <p>
          홈페이지 곳곳에 배치된 광고 스팟의 일주일 임대권을 입찰 할 수
          있습니다.
        </p>
      );
    case "BITMOI":
      return (
        <p>
          비트모이는 과거 임의의 시점을 시뮬레이팅해 주는 모의투자 플랫폼입니다.
          <br />
          실제 데이터에 기반한 다양한 프렉털을 제공하여 여러 패턴들에 대응할 수
          있도록 트레이더님의 기술적 감각을 길러드립니다.
          <br />총 10번의 트레이딩으로 진입 시점으로부터 24시간 뒤의 가격을
          예측해 시드머니를 늘려나가 보세요.
        </p>
      );
  }
}

export default HomeInformation;