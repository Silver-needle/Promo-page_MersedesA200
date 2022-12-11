const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const designTitle = document.querySelectorAll('.design__title')

tabsHandlerElems.forEach((tab, tabIdx) => {
  tab.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
    tab.classList.add('design-list__item_active')

    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === tab.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })
    designTitle.forEach((title, titleIdx) => {
      title.classList.add('hidden')

      if (tabIdx === titleIdx) {
        title.classList.remove('hidden')
      }
    })
  })
})

// Добавить: на всех табах при клике на кнопку "-Узнать больше" должно 
// открываться модальное окно