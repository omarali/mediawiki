if(window.mw){
  mw.loader.load(JSON.parse(document.getElementById('mw.loader.load.bottom').dataset.modules));
  if(document.getElementById('toolbar'))
    data=JSON.parse(document.getElementById('toolbar').dataset.toolbar);
    for(btn in data){mw.toolbar.addButton(data[btn][0],data[btn][1],data[btn][2],data[btn][3],data[btn][4],data[btn][5]);}
}
