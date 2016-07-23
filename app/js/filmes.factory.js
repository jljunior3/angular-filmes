angular.module("Filmes").factory("FilmesFactory", function ($q, $http) {
    return {
        listar: function () {
            var promessa = $q.defer();

            $http.get("https://meus-filmes-9f104.firebaseio.com/filmes.json").then(function (resultado) {
                var filmes = [];

                angular.forEach(resultado.data, function (filme, id) {
                    filme.id = id;
                    filmes.push(filme);
                });

                promessa.resolve(filmes);
            });

            return promessa.promise;
        },
        inserir: function (filme) {
            var id = filme.id;
            delete filme.id;

            return $http.put("https://meus-filmes-9f104.firebaseio.com/filmes/" + id + ".json", filme);
        },
        remover: function (id) {
            return $http.delete("https://meus-filmes-9f104.firebaseio.com/filmes/" + id + ".json");
        }
    };
});