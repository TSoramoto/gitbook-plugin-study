module.exports = {
  hooks: {
   'page': function (page) {
     page.content = page.content.replace(/aa/g, 'bb');
     return page; 
   }
 }
}
