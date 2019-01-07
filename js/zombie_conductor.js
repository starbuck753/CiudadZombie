/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, orientacionMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, orientacionMov);
}

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
