// Create prototype for "personaProto"
//Crear un prototipo "personaProto" que incluya los métodos: caminar, saludar y comer.
//Crear un prototipo "estudianteProto" que incluya los métodos: estudiar y dormir. Este prototipo debe tener como prototipo "personaProto".
//Crear un prototipo "profesorProto" que incluya los métodos: enseñar y calificar. Este prototipo debe tener como prototipo "personaProto".
//Crear un constructor "EstudianteConstructor" que acepte como parámetros nombre, edad y escuela. Este constructor debe crear objetos que tengan como prototipo "estudianteProto".
//Crear un constructor "ProfesorConstructor" que acepte como parámetros nombre, carrera y escuela. Este constructor debe crear objetos que tengan como prototipo "profesorProto".
//Todos los métodos deben hacer uso de al menos una de las propiedades del objeto. Por ejemplo, el método "saludar" puede devolver "Hola! Soy -nombre-"
//Haciendo uso de "EstudianteConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "estudianteProto" y "personaProto"
//Haciendo uso de "ProfesorConstructor", crear un par de objetos diferentes y llamar métodos de sus prototipos "profesorProto" y "personaProto"

// Create prototype for "personaProto"
let personaProto = {
    caminar: function() {
      return `${this.nombre} está caminando.`;
    },
    saludar: function() {
      return `Hola! Soy ${this.nombre}.`;
    },
    comer: function() {
      return `${this.nombre} está comiendo.`;
    }
  };
  
  // Create prototype for "estudianteProto"
  let estudianteProto = Object.create(personaProto);
  estudianteProto.estudiar = function() {
    return `${this.nombre} está estudiando en ${this.escuela}.`;
  };
  estudianteProto.dormir = function() {
    return `${this.nombre} está durmiendo.`;
  };
  
  // Create prototype for "profesorProto"
  let profesorProto = Object.create(personaProto);
  profesorProto.enseñar = function() {
    return `${this.nombre} está enseñando ${this.carrera} en ${this.escuela}.`;
  };
  profesorProto.calificar = function() {
    return `${this.nombre} está calificando.`;
  };
  
  // Create constructor for "EstudianteConstructor"
  function EstudianteConstructor(nombre, edad, escuela) {
    this.nombre = nombre;
    this.edad = edad;
    this.escuela = escuela;
  }
  EstudianteConstructor.prototype = estudianteProto;
  
  // Create constructor for "ProfesorConstructor"
  function ProfesorConstructor(nombre, carrera, escuela) {
    this.nombre = nombre;
    this.carrera = carrera;
    this.escuela = escuela;
  }
  ProfesorConstructor.prototype = profesorProto;
  
  // Create objects using "EstudianteConstructor"
  let estudiante1 = new EstudianteConstructor("Naideline", 19, "Universidad");
  let estudiante2 = new EstudianteConstructor("Jeicot", 18, "Colegio");
  
  // Call methods on "estudiante1" and "estudiante2"
  console.log(estudiante1.caminar());
  console.log(estudiante1.estudiar());
  console.log(estudiante2.saludar());
  console.log(estudiante2.dormir());
  
  // Create objects using "ProfesorConstructor"
  let profesor1 = new ProfesorConstructor("Pedro", "Historia", "Universidad");
  let profesor2 = new ProfesorConstructor("Irene", "Matemáticas", "Colegio");
  
  // Call methods on "profesor1" and "profesor2"
  console.log(profesor1.caminar());
history       

