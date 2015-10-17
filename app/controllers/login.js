export default Ember.ObjectController.extend({
  needs: ['login'],
  username : '',
  password : '',
  loginFailed : false,
  isProcessing: false,
  finduser:false,
  findpassword:false,
  statusFailed:false,
  usernameFailed:false,
  passwordFailed:false,

  actions : {
    login : function(user){
      this.setProperties({
      loginFailed: false,
      isProcessing: true,
      statusFailed:false,
    });
   var username = this.get('username');
   var password = this.get('password');
   var u = [];
   var p = [];
   var r = [];
   var rtype = [];
   var e=[];
   var turn=false;
   var role = null;
   var adminType = null;
   var currentstatus = null;
   this.get('model').forEach(function (item){
    u.push(item.get('username'));
    p.push(item.get('password'));
    r.push(item.get('role'));
    rtype.push(item.get('adminType'));
    e.push(item.get('enable'));
});

var length=u.get('length');
for(var i = 0; i < length; i++)
{
  if(username==u[i] && password==p[i])
  {
  turn = true;
  role = r[i];
  adminType = rtype[i];
  currentstatus=e[i];
  break;
  }
}
if(turn){
  //index=0;
  if(currentstatus=="true")
  {
  this.set("isProcessing", false);
  turn = false;
  if(role == 'admin'){
    if(adminType == 'useradmin'){
      this.transitionToRoute('adminuser');
    }else{
      this.transitionToRoute('contentadmin');
    }

  }else{
    this.transitionToRoute('testpage');
  }
}

else {
    this.set("statusFailed", true);
    this.set("usernameFailed", false);
    this.set("passwordFailed", false);
}
}
else{
for(var i = 0; i < length; i++)
{
if(username==u[i] && password!=p[i])
{
  this.set("isProcessing", false);
  this.set("passwordFailed", true);
    this.set("usernameFailed", false);
  break;
}
else if (username!=u[i] && password==p[i]) {
  this.set("isProcessing", false);
  this.set("usernameFailed", true);
  this.set("passwordFailed", false);
  break;
}
}
    }
  }
  }
});
