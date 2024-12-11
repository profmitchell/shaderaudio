export function spCode() {
  return `
  
  
  
  
    let audio = input();
    let pointerDown = input();
    
    setMaxIterations(100);
    let s = getSpace();
    let n = noise(s + vec3(0, 0, audio * 0.1));
    color(vec3(0, n, n) + 1 - normal);
    setSDF(n);
    intersect();
    box(vec3(0.7));
    expand(0.14);


    function pattern() {
      
      let grid = sin(pos.x * 10) * sin(pos.y * 10) * sin(pos.z * 10);
      return grid;
    }
    
    
    
    
    
  `;
}