/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, orientacionMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, {}, orientacionMov);
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  if (this.orientacionMov == 'v'){
    this.y += this.velocidad;

    if (this.y < 0 || this.y > Juego.altoCanvas - this.alto){
      this.velocidad *= -1
    }
  }
  else{
    this.x += this.velocidad;

    if (this.x < 0 || this.x > Juego.anchoCanvas - this.ancho){
      this.velocidad *= -1
    }
  }
}