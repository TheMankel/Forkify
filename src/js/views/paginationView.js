import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );
    const curPage = this._data.page;

    const btnPrev =
      curPage === 1
        ? ''
        : `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          curPage - 1
        }">  
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;

    const btnNext =
      curPage === numPages
        ? ''
        : `
        <button class="btn--inline pagination__btn--next" data-goto="${
          curPage + 1
        }">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;

    return `
      ${btnPrev}
      ${btnNext}
    `;
  }
}

export default new PaginationView();
