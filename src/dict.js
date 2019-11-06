module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-book',
          title: 'Query Dict',
          subtitle: 'Query Word for "' + search + '"',
          value: search,
        },
      ]);
    });
  };
};
 
