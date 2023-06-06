const content = [
  {
    tab: "Sction 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Sction 2",
    content: "I'm the content of Section 2",
  },
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
