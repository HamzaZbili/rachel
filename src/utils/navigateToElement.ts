export const navigateToElement = (page: string) => {
  const section = document.getElementById(page);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};