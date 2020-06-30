var app= angular.module("myApp",[]);
app.controller("Zadatak2Ctrl",function ($scope) {
    var vm = this;

    vm.igraci =[
      {ime:"Marko",prezime:"Markovic",visina:190,tezina:87},
      {ime:"Petar",prezime:"Petrovic",visina:180,tezina:95}
    ]

    vm.ime="";
    vm.prezime="";
    vm.visina=0;
    vm.tezina=0;


    vm.prosek= 0;

    vm.izracunajProsek = function () {
      var suma = 0;
      for (var i in vm.igraci){
          suma+=vm.igraci[i].visina;
          }
          vm.prosek= suma/vm.igraci.length;
        }
    vm.izracunajProsek();

    vm.dodaj = function () {
      var igrac = {
        ime:vm.ime,
        prezime:vm.prezime,
        visina:vm.visina,
        tezina:vm.tezina
        }
    vm.igraci.push(igrac);
    vm.izracunajProsek();
    }
});
