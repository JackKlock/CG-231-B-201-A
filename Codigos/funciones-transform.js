/**
 *Geometria:crea un objeto THREE.Geometry y lo retorna
* Entradas: vertices=arreglo de vertices (arreglo de arreglos de enteros)
* Salidas:  geom= objeto THREE.Geometry generado apartir delo arreglo vertices
*/
function Geometria(vertices){
    geom = new THREE.Geometry();
    for (let i = 0; i < vertices.length; ++i) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
    }   
    
    /**
     * Traslation: Crea la matriz de Traslation a partir del vector vt
     * Entrada: vt=vector de Traslation (arreglo de tamaño 3 (x,y,z))
     * Salida: matriz: Matriz de Traslation generada apartir de vt
     */
    
    function Traslation(vt) {
        var matriz = new THREE.Matrix4();
        matriz.set(1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
        return matriz;
    }
    
    /**
     * Traslation: Crea la matriz de escalado "matrizS" a partir de "vs"
     * Entrada: vs=vector de escalado (arreglo 3 enteros (x,y,z))
     * Salida: matriz: Matriz de escalado generada apartir de vs
     */

    function Scale(vs) {
        var matriz = new THREE.Matrix4();
        matriz.set(vs[0], 0, 0, 0,
            0, vs[1], 0, 0,
            0, 0, vs[2], 0,
            0, 0, 0, 1);
        return matriz;
    }
    
    /**
     * RotateX: Crea la matriz de rotacion "matrizx" a partir de "angulo"
     * Entrada: angulo: Angulo en radianes 
     * Salida: matriz: Matriz de rotacion en x, generada por el angulo
     */
    
    function RotateX(angulo) {
        var matrizx = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizx.set(1, 0, 0, 0,
                   0, Math.cos(radianes), -Math.sin(radianes), 0,
                   0, Math.sin(radianes), Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matrizx;
    }
    
 /**
     * RotateY: Crea la matriz de rotacion "matrizy" a partir de "angulo"
     * Entrada: angulo: Angulo en radianes 
     * Salida: matriz: Matriz de rotacion en y, generada por el angulo
     */

    function RotateY(angulo) {
        var matrizy = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizy.set(Math.cos(radianes), 0, Math.sin(radianes), 0,
                   0, 1, 0, 0,
                   -Math.sin(radianes), 0, Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matrizy;
    }

   /**
     * RotateY: Crea la matriz de rotacion "matrizz" a partir de "angulo"
     * Entrada: angulo: Angulo en radianes 
     * Salida: matriz: Matriz de rotacion en z, generada por el angulo
     */
    
    function RotateZ(angulo) {
        var matrizz = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizz.set(Math.cos(radianes), -Math.sin(radianes), 0, 0,
                   Math.sin(radianes), Math.cos(radianes), 0, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        return matrizz;
      }
    
    /**
     *Escalado Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * obj = objeto de tipo THREE.Line a ser escalado
     * Salida: obj actualizado
     */

    function EscaladoReal(obj,vp,vs){
        vt=[-vp[0],-vp[1],-vp[2]];
        obj.applyMatrix(Traslation(vt));
        obj.applyMatrix(Escalado(vs));
        obj.applyMatrix(Traslation(vp));
    }

    /**
     *rotacion en x Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line a ser escalado
     * Salida: obj actualizado
     */

    function RotacionRealenx (obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslation(vt));
        obj.applyMatrix(RotateX(angulo));
        obj.applyMatrix(Traslation(vp));
    }
    
     /**
     * Rotacion real en y
     * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line a ser escalado
     * Salida: obj actualizado
     */

     function RotacionRealeny (obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslation(vt));
        obj.applyMatrix(RotateY(angulo));
        obj.applyMatrix(Traslation(vp));
    }

    /**
     *rotacion en z Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line a ser escalado
     * Salida: obj actualizado
     */

    function RotacionRealenz(obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslation(vt));
        obj.applyMatrix(RotateZ(angulo));
        obj.applyMatrix(Traslation(vp));
      }
    
   
    