const header = document.querySelector('header');
const { offsetHeight: headerHeight } = header;

document.addEventListener('scroll', () => {
    header.className = document.documentElement.scrollTop > headerHeight ? 'is-fixed' : '';
});