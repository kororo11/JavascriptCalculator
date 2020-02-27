window.onload = function() {
  var inp = document.forms['cal'];
  var input = document.getElementsByTagName('input');
  var cls_btn = this.document.getElementsByClassName("cls_btn")[0];
  var result_btn = this.document.getElementsByClassName("result_btn")[0];

  this.console.log(input);

  //이벤트 핸들러
  //--------------------------------------
  //숫자 및 사칙 연산 처리

  for (var i = 0; i < input.length; i++) {
    // 숫자와 사짗 ㄱ연산자만 입력 처리
    if (input[i].value != "=" && input.value != "clear") {
      input[i].onclick = function() {
        calc(this.value);
      };
    }
  }

  // 계산기 입력 처리 함수
  function calc(value) {
    // 입력이 들어가면 0 을 지움
    if (inp["result"].value == 0) {
      inp["result"].value = "";
    }

    // 입력 값을 결과창에 출력
    inp["result"].value += value;
  }
};
