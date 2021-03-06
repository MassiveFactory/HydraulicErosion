/**
 * The geometry renderer
 * @param {WebGLRenderingContext} gl The WebGL 1 context
 * @constructor
 */
const SystemGeometry = function(gl) {
    this.gl = gl;
    this.meshes = [];
    this.shader = new Shader(
        gl,
        this.SHADER_VERTEX,
        this.SHADER_FRAGMENT,
        ["mvp"],
        ["vertex"]);
};

SystemGeometry.prototype.SHADER_VERTEX = `
#version 100

uniform mat4 mvp;

attribute mediump vec3 vertex;

void main() {
  gl_Position = mvp * vec4(vertex, 1.0);
}
`;

SystemGeometry.prototype.SHADER_FRAGMENT = `
#version 100

void main() {
  gl_FragColor = vec4(1.0, 0.5, 0.3, 1.0);
}
`;

/**
 * Make a mesh
 * @param {Array} vertices The mesh vertex data
 * @param {Array} indices The mesh indices
 * @returns {SystemGeometry.Mesh} The mesh
 */
SystemGeometry.prototype.makeMesh = function(vertices, indices) {
    return new SystemGeometry.Mesh(this.meshes, this.gl, vertices, indices);
};

/**
 * Draw all geometry
 * @param {Array} mvp An array containing the values of the MVP matrix
 */
SystemGeometry.prototype.draw = function(mvp) {
    this.shader.use();
    this.gl.uniformMatrix4fv(this.shader.uMvp, false, mvp);

    this.gl.enableVertexAttribArray(this.shader.aVertex);
    this.gl.vertexAttribPointer(this.shader.aVertex, 3, this.gl.FLOAT, false, 0, 0);

    for (const mesh of this.meshes)
        mesh.draw();
};