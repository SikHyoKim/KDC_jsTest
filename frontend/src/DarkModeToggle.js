class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    // DOM을 사용하여 HTML문서의 구조와 내용을 표현하고 조작할수 있는 객체 생성
    const $wrapper = document.createElement("section");
    const $DarkModeToggle = document.createElement("input");

    this.$DarkModeToggle = $DarkModeToggle;
    this.$DarkModeToggle.type = "checkbox";

    // 서버와 동기적으로 데이터를 교환할 수 있는 객체
    $DarkModeToggle.className = "DarkModeToggle";
    $target.appendChild($wrapper);
    $wrapper.appendChild($DarkModeToggle);


    //Event
    $DarkModeToggle.addEventListener("change", e => {
      this.setColorMode(e.target.checked);
    });
    this.initColorMode();
  }

  initColorMode(){
    // 초기화
    // isDarkMode state , checkbox 상태 , html attr
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.$DarkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);

  }

  setColorMode(isDarkMode){
    document.documentElement.setAttribute('color-mode',
      isDarkMode ? 'dark' : 'light');

  }
}

export default DarkModeToggle;