export const sleep = ms => {
    return new Promise(resolve => {
         setTimeout(resolve, ms);
    });
}

export const deepCopy = object => {
	let info = "";
	!!object && (info = JSON.parse(JSON.stringify(object)));
	return info;
};

export const escapeOutput = toOutput => {
  return toOutput.replace(/\&/g, '&amp;')
    .replace(/\</g, '&lt;')
    .replace(/\>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#x27')
    .replace(/\n/gi,"<br>").replace(/ /gi,"&nbsp;");
};

export const timestamp = () => {
	return Math.round(new Date().getTime() / 1000);
};

export const shuffleArray = (array) => {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
  return array
}

export const randomNo = (j) => {
  var random_no = "";
  for (var i = 0; i < j; i++) //j位隨機數，用以加在時間戳後面。
  {
      random_no += Math.floor(Math.random() * 8);
  }
  random_no = new Date().getTime() + random_no;
  return random_no;
}
export const list_to_tree = list => {
  //https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
  var map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent !== "root_1") {
      // if you have dangling branches check that map[node.parentId] exists
      if(list[map[node.parent]])  list[map[node.parent]].children.push(node);
     
    } else {
      roots.push(node);
    }
  }
  return roots;
}


export const timestampToData = (timestamp,type) => {
    var date = new Date(timestamp * 1000);
    var mm = date.getMonth() + 1; 
    var dd = date.getDate();
    var hh = date.getHours()
    var nn = date.getMinutes();
    var ss = date.getSeconds()
    hh = (hh>9 ? '' : '0') + hh
    nn = (nn>9 ? '' : '0') + nn
    if(ss<=9) ss = "0" + ss
    if(type){
       return [date.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd,
       ].join('/') + " " +hh+":"+nn+":"+ss ;
    }
     return [date.getFullYear(),
      (mm>9 ? '' : '0') + mm,
      (dd>9 ? '' : '0') + dd,
     ].join('/');

}