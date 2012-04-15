data=JSON.parse(document.getElementById('toolbar').dataset.toolbar);if(window.mw){for(btn in data){mw.toolbar.addButton(data[btn][0],data[btn][1],data[btn][2],data[btn][3],data[btn][4],data[btn][5]);}}

