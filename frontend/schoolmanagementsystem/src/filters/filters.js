export function getSex(value){
    switch (value) {
        case 'man':
          return '男';
        case 'woman':
          return '女';
        default:
          return value;
      }
};

export function getDate(time){
    var d = new Date(time);
      var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      return times;
};
 