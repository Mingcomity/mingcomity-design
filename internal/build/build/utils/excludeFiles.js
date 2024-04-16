const excludeFiles = (files) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile']
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}
module.exports = {
  excludeFiles
}
