(function(global){
  // https://steemit.com/utopian-io/@clayjohn/learning-3d-graphics-with-three-js-or-dynamic-geometry

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);

  var between = function (min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  var material = new THREE.MeshLambertMaterial({color: '#DCDDE1'});

  var geometry = new THREE.SphereGeometry(1, 128, 128);

  var mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(0, 2, 0);
  scene.add(mesh);

  scene.add(new THREE.AmbientLight('#DCDDE1', 1));
  var light = new THREE.DirectionalLight('#fff', 0.4);
  light.position.set(-10, 10, 10);
  scene.add(light);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    var time = performance.now() * 0.01;

    var k = 1;
    for (var i = 0; i < mesh.geometry.faces.length; i++) {
      var uv = mesh.geometry.faceVertexUvs[0][i]; //faceVertexUvs is a huge arrayed stored inside of another array
      var f = mesh.geometry.faces[i];
      var p = mesh.geometry.vertices[f.a];//take the first vertex from each face

      p.add(p.clone().normalize().multiplyScalar(0.1 * noise.perlin3(p.x * k, p.y * k, p.z * k)));
    }
    mesh.geometry.computeVertexNormals();
    mesh.geometry.normalsNeedUpdate = true;
    mesh.geometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
})(this);