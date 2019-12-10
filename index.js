module.eports = {
  hooks: {
   'page': function (page) {
     page.content = page.content.replace(/a/g, 'b');
     return page; 
   }
 }
}
