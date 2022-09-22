/*
EJERCICIOS VIDEO 43_1
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
            7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los géneros 
            aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
        - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
            decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3 
            instancias de la clase de forma automatizada e imprime la ficha técnica 
            de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/


class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    //ATRIBUTOS ESTATICOS (fuera del Constructor)
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography"];
    }

    //METODOS ESTATICOS
    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    //METODOS GENERALES
    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLongitudCadena(atributo, valor, longitud) {
        if (valor.length > longitud) return console.error(`${atributo} "${valor}" excede el número de caracteres permitidos (${longitud})`);
        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacio`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);
        return true;
    }

    validarArreglo(propiedad, arr) {
        if (!arr) return console.warn(`${propiedad} "${arr}" está vacio`);
        if (!(arr instanceof Array)) return console.error(`${propiedad} "${arr}" ingresado,NO es un arreglo`);
        if (arr.length === 0) return console.error(`${propiedad} "${arr}" NO tiene datos`);

        for (let cadena of arr) {
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }
        return true;
    }


    //METODOS ESPECIFICOS
    validarIMDB(id) {
        if (this.validarCadena("id", id)) {
            if (!(/^([a-zA-Z]){2}([0-9]{7})$/.test(id))) {
                return console.error(`id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los 7 restantes numero`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Título", titulo)) {
            this.validarLongitudCadena("Título", titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno)) {
            if (!(/^[0-9]{4}$/.test(estreno))) {
                return console.error(`Año de Estreno "${estreno}" NO es válido, debe ser un número de 4 dígitos`);
            }
        }
    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)) {
            for (let genero of generos) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!(Pelicula.listaGeneros.includes(genero))) {
                    console.error(`${genero} NO existe en el arreglo`);
                    Pelicula.generosAceptados();
                }
            }

        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificacion debe estar entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica() {
        console.info(`
        Ficha Técnica:\n
        Título: "${this.titulo}"\n
        Director: "${this.director}"\n
        Año: "${this.estreno}"\n
        Pais: "${this.pais.join("-")}"\n
        Generos: "${this.generos.join(", ")}"\n
        Calificación: "${this.calificacion}"\n
        IMDB Id: "${this.id}"\n
        `);
    }


}


//Pelicula.generosAceptados();

const peli = new Pelicula({
    id: "AB1234567",
    titulo: "Titulo de la Pelicula",
    director: "Nombre del Director",
    estreno: 2020,
    pais: ["España", "Marruecos", "Suiza"],
    generos: ["Comedia", "Comedy", "Animation", "Biography"],
    calificacion: 3.789
})

peli.fichaTecnica();

const misPelis = [
    {
        id: "tt0758758",
        titulo: "Into the Wild",
        director: "Sean Penn",
        estreno: 2007,
        pais: ["USA"],
        generos: ["Action", "Adult", "Biography"],
        calificacion: 8.1
    },
    {
        id: "tt1234567",
        titulo: "Into the Wild_v2",
        director: "Sean Penn_v2",
        estreno: 2015,
        pais: ["USA_v2"],
        generos: ["Action", "Adult", "Biography"],
        calificacion: 4.1
    },
    {
        id: "tt9874561",
        titulo: "Into the Wild_v3",
        director: "Sean Penn_v3",
        estreno: 2020,
        pais: ["USA_v3"],
        generos: ["Action", "Adult", "Biography"],
        calificacion: 1.18
    }
];

misPelis.forEach(e => new Pelicula(e).fichaTecnica());