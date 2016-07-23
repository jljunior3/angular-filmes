angular.module("Filmes").directive("dirFilme",function () {
    return {
        //restrigindo ao tipo elemento e atributo
        restrict: "EA",
        //isolando o escopo
        scope : {
            filme: '=item',
            fnFechar: '&' //apenas passando o & ele já entende.
        },
        templateUrl: "templates/filme.template.html",
        link: function (scope, element, attr) {
            //o angular utiliza uma versão mais leve do jquery (jqlite)
            element.addClass("filme com-cartaz");

            if(!attr.fnFechar){
                element.find('button').remove();
            }
        }
    };
})
