(function(global) {
  // https://steemit.com/utopian-io/@clayjohn/learning-3d-graphics-with-three-js-or-dynamic-geometry
  // https://stackoverflow.com/questions/48402873/three-js-texturing-on-a-cube-sphere

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf1f2f7);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize, false);

  var between = function(min, max) {
    return Math.random() * (max - min + 1) + min;
  };

  var material = new THREE.MeshLambertMaterial({ color: "#DCDDE1" });
  var mat = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: [
      "varying vec2 vUV;",
      "varying vec3 vNormal;",
      "void main() {",
      "vUV = uv;",
      "vNormal = vec3( normal );",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      "}"
    ].join("\n"),
    fragmentShader: [
      "varying vec2 vUV;",
      "varying vec3 vNormal;",
      "void main() {",
      "vec4 c = vec4( abs( vNormal ) + vec3( vUV, 0.0 ), 0.0 );",
      "gl_FragColor = c;",
      "}"
    ].join("\n")
  });

  var geometry = new THREE.SphereGeometry(1, 128, 128);

  var mesh = new THREE.Mesh(geometry, mat);

  var k = 1.2;
  for (var i = 0; i < geometry.faces.length; i++) {
    var uv = geometry.faceVertexUvs[0][i]; //faceVertexUvs is a huge arrayed stored inside of another array
    var f = geometry.faces[i];
    var p = geometry.vertices[f.a]; //take the first vertex from each face

    // p.add(p.clone().normalize().multiplyScalar(0.1 * noise.perlin3(p.x * k, p.y * k, p.z * k)));
    p.normalize().multiplyScalar(
      1 + 0.3 * noise.perlin3(p.x * k, p.y * k, p.z * k)
    );
  }

  // seamlessly wrap uv
  geometry.faceVertexUvs[0] = [];
  geometry.faces.forEach(function(face) {
    var uvs = [];
    var ids = ["a", "b", "c"];
    for (var i = 0; i < ids.length; i++) {
      var vertex = geometry.vertices[face[ids[i]]].clone();

      var n = vertex.normalize();
      var u = 0.5 - Math.atan(n.z, -n.x) / (2.0 * Math.PI);
      var v = 0.5 - Math.asin(n.y) / Math.PI;
      uvs.push(new THREE.Vector2(u, v));
    }
    geometry.faceVertexUvs[0].push(uvs);
  });

  geometry.uvsNeedUpdate = true;

  // geometry.computeVertexNormals();
  geometry.normalsNeedUpdate = true;
  geometry.verticesNeedUpdate = true;

  mesh.position.set(-0.5, 1, 0);
  scene.add(mesh);

  // scene.add(new THREE.AmbientLight("#DCDDE1", 1));
  // var light = new THREE.DirectionalLight("#fff", 0.4);
  // light.position.set(-10, 10, 10);
  // scene.add(light);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.y += 0.001;
    mesh.rotation.x += 0.0016;

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
})(this);
