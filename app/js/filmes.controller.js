angular.module("Filmes").controller("FilmesController", function ($scope, FilmesFactory) {

    $scope.titulo = "Filmes que já assisti";
    $scope.filmes = [];

    var carregarFilmes = function () {
        FilmesFactory.listar().then(function (filmes) {
            $scope.filmes = filmes;
        });
    }

    $scope.novoFilme = {};

    $scope.resetForm = function () {
        $scope.formulario.$setPristine();
        $scope.formulario.$setUntouched();
    }

    $scope.adicionarFilme = function () {
        $scope.formulario.$setDirty();

        if($scope.formulario.$invalid)
            return;
        
        var filme = {
            id: Date.now() + "",
            titulo: $scope.novoFilme.titulo,
            ano: $scope.novoFilme.ano,
            produtora: $scope.novoFilme.produtora,
            sinopse: $scope.novoFilme.sinopse,
            cartaz: $scope.novoFilme.cartaz
        };

        FilmesFactory.inserir(filme).then(carregarFilmes);
        $scope.novoFilme = {};
    }

    $scope.removerFilme = function (id) {
        FilmesFactory.remover(id).then(carregarFilmes);
    }

    carregarFilmes();
});