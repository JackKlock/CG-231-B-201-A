
function init() {

    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 100;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 200;
    camera.position.y = 200;
    camera.position.z = 300;
    camera.lookAt(scene.position);

    // Colores
    color=[{color:0xFF2626},{color:0x7EFF0C},{color:0x37FFC9}]

    //Lado de la base de la piramide
    lado=40; 

    //Altura de la piramide
    h=50; 

    v1=[0,0,0];
    v2=[lado,0,0];
    v3=[lado,0,lado];
    v4=[0,0,lado];
    v5=[lado/2,h,lado/2];

    vertices=[v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];

    geom=Geometria(vertices);

    //[v1,v2,v3,v4,v5]= [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado], [lado/2,h,lado/2]]
    //materiales para las piramides

    material=[];
    for(i=0;i<2;i++)
        material.push(new THREE.ParticleBasicMaterial(color[i]));


    //Figuras paras las piramides

    fig=[];
    vt=[20,20,20];
    for(i=0;i<2;i++){
    fig.push(new THREE.Line(geom,material[i]));
    fig[i].applyMatrix(Traslation(vt));
    }

    //Rotar una de las piramides sobre el eje x 

    RotacionRealenz(fig[1],vt,90);
    
    RotacionRealeny(fig[0],vt,-90);
    RotacionRealenz(fig[0],vt,-90);


    //fig[1].applyMatrix(Escalado([1,-1,1]));

    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario

    scene.add(gridHelperXZ);
    scene.add(arrowX);	
    scene.add(arrowY);	
    scene.add(arrowZ);

    for(i=0;i<2;i++)
    scene.add(fig[i]);

    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;
