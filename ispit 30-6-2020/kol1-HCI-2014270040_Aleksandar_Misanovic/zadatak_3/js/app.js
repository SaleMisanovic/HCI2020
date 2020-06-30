var app= angular.module("myApp",[]);
app.controller("Zadatak3Ctrl",function ($scope) {
    var vm = this;

    vm.korisnickoIme="";
    vm.ime="";
    vm.prezime="";
    vm.email="";
    vm.lozinka="";
    vm.ponovljenaLozinka="";

    vm.rezultat=0;

    vm.registracija = function(){
      if(vm.lozinka==vm.ponovljenaLozinka){
        vm.rezultat=1;
      }else {
        vm.rezultat=2;
      }
    }
});
