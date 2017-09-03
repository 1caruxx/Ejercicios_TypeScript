function ObtenerSigno():void {
    
    let fecha : string = (<HTMLInputElement> document.getElementById("txtFecha")).value;

    let fechaArray : string[] = fecha.split("-");

    let anio : number = parseInt(fechaArray[0], 10);

    let signo : string = "";

    if(Rata.indexOf(anio) != -1)
        signo = "Rata";
    if(Bufalo.indexOf(anio) != -1)
        signo = "Búfalo";
    if(Tigre.indexOf(anio) != -1)
        signo = "Tigre";
    if(Conejo.indexOf(anio) != -1)
        signo = "Conejo";
    if(Dragon.indexOf(anio) != -1)
        signo = "Dragón";
    if(Serpiente.indexOf(anio) != -1)
        signo = "Serpiente";
    if(Caballo.indexOf(anio) != -1)
        signo = "Caballo";
    if(Cabra.indexOf(anio) != -1)
        signo = "Cabra";
    if(Mono.indexOf(anio) != -1)
        signo = "Mono";
    if(Gallo.indexOf(anio) != -1)
        signo = "Gallo";
    if(Perro.indexOf(anio) != -1)
        signo = "Perro";
    if(Cerdo.indexOf(anio) != -1)
        signo = "Cerdo";

    (<HTMLInputElement> document.getElementById("txtSigno")).value = signo;
}

let Rata : number[] = [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008];

let Bufalo : number[] = [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009];

let Tigre : number[] = [1902, 1914, 1926, 1938, 1950, 1951, 1962, 1974, 1986, 1998, 2010];

let Conejo : number[] = [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011];

let Dragon : number[] = [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012];

let Serpiente : number[] = [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013];

let Caballo : number[] = [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014];

let Cabra: number[] = [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015];

let Mono: number[] = [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016];

let Gallo: number[] = [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017];

let Perro: number[] = [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018];

let Cerdo: number[] = [1911, 1923, 1947, 1959, 1971, 1983, 1995, 2007, 2019];