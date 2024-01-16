const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $wrapper = document.createElement("section");
    $target.appendChild($wrapper);
    
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    const $randomButton = document.createElement('randomButton');
    this.$randomButton = $randomButton;
    this.$randomButton.textContent = '랜덤';

    this.$randomButton.className = 'RandomButton';
    $wrapper.appendChild($randomButton);

    $randomButton.addEventListener("click", e => {
      onSearch('아');
    });
  }
  render() {}
}
