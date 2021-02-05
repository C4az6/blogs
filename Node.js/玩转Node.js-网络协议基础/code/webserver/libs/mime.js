const _mime = {
  'text/plain': ['txt'],
  'text/html': ['htm', 'html'],
  'text/css': ['css'],
  'text/javascript': ['js', 'jsx'],
  'image/png': ['png'],
  'image/jpeg': ['jpg']
}

module.exports = {
  getType(ext) { // html
    console.log(ext);
    for (let key in _mime) {
      if (_mime[key].includes(ext)) {
        return key
      }
    }
  },

  getExtension(type) {
    return _mime[type];
  }
}