if(window.mw){
  mw.user.options.set(JSON.parse(document.getElementById('mw.user.options.set').dataset.options));
  if(parseInt(document.getElementById('mw.user.tokens.set').dataset.enabled))
    mw.user.tokens.set(JSON.parse(document.getElementById('mw.user.options.set').dataset.options));
  mw.loader.state({"user.options":"ready","user.tokens":"ready"});
}
