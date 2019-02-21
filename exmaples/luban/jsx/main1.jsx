



var mu, ki;

var extendPath = "";
var csActionObj = null;

function initEnzymes(in_extendPath,version)
{
  extendPath = in_extendPath;
  $.evalFile(extendPath + "/JSX/json3.js");
  $.evalFile(extendPath + "/JSX/Muclease_lib.jsx");
  $.evalFile(extendPath + "/JSX/Kinase_lib.jsx");
  $.evalFile(extendPath + "/JSX/http.jsx");
  $.global.Kinase = Kinase;
  $.global.Muclease = Muclease;
  mu = new Muclease();
  ki = new Kinase();
  var data = $http({
    method: 'GET',
    url: 'http://g.alicdn.com/mtb/luban-resource/'+version+'/psdAction/action.js'
  });
  var file = new File(extendPath + "/JSX/remote.js") ;
  file.encoding = "binary";
  file.open('w');
  file.write(data.payload);
  file.close();
  $.evalFile(extendPath + "/JSX/remote.js");
  csActionObj = new csActionPlugin();

}
